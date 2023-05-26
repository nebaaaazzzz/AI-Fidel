//@ts-nocheck
import { FingerPoseEstimator } from '../FingerUtils/FingerPostEstimator';
import { HandAnalyzer } from '../HandUtils/HandAnalyzer';
import { useMemo, useRef, useEffect, useState } from 'react';
import PlaceYourHand from '@components/PlaceYourHand';
import girl from '@assets/images/girl.png';
import loading from '@assets/images/loading.gif';
import GameLeftSide from '@components/GameLeftSide';
import {} from 'react-spinners';
import { NavigateFunction, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import getLanguageWords from '@/data';
import { getLevelWords } from '@/utils';
import { getLevelAmharicWords } from '@/utils/amharicindex';
import { getLevelArabicWords } from '@/utils/arabicindex';
import reactToDOMCursor from '@/HandUtils/reactToDom';
import { storeSessionInfo } from '@/utils/localsession';
import TimerProgress from '@components/TimerProgress';
import Modal from '@/components/Modal/Modal';
import moment from 'moment';
import Percentage from '@/components/Percentage';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { HandContext } from '@/context/HandContext';
import { HAND_CONNECTIONS } from '@mediapipe/hands';
import {drawIncorrectFingers} from '@/HandUtils/colorIncorrectFingers'

const handAnalyzer = new HandAnalyzer();
let skipPrediction = false;
let score = 0;
function useGetGameConfig(searchParams: URLSearchParams, navigate: NavigateFunction) {
  const hand = searchParams.get('hand');
  let level = searchParams.get('level');
  const lang = searchParams.get('lang');
  const mode = searchParams.get('mode');
  const searchWord = searchParams.get('search');
  if (!hand || !lang || !mode || (!level && !searchWord)) {
    navigate('/');
  }
  const languageWords = getLanguageWords(lang, mode, level);
  let levelWords = [];
  if (lang == 'en') {
    levelWords = getLevelWords(languageWords, level);
  }
  if (lang == 'am') {
    levelWords = getLevelAmharicWords(languageWords, level);
  }
  if (lang == 'ar') {
    levelWords = getLevelArabicWords(languageWords, level);
  }
  if (searchWord) {
    level = searchWord.length;
    levelWords.unshift(searchWord);
    levelWords.pop();
  }
  return { mode, hand, level, lang, levelWords };
}
function Game() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = useSearchParams()[0];
  // const userAgent = navigator.userAgent
  const { hand: loadHands } = useContext(HandContext);
  const { lang, hand: handDirection, level, levelWords } = useGetGameConfig(searchParams, navigate);
  const [singleLevelWord, setSingleLevelWord] = useState(levelWords);
  const [lookForLetter, setLookForLetter] = useState<AlphabetDefinationI | null>(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isMediaPipeModelLoading, setIsMediaPipeModelLoading] = useState<boolean>(true);

  const [startTime, setStartTime] = useState<Date | undefined>();
  const [currentTime, setCurrentTime] = useState<Date | undefined>();

  /**
   * @description TO track current index from level words it is from 0 - 10
   */
  const [wordIndex, setWordIndex] = useState(0);

  /**
   * @description TO track current current letter from selected word
   */
  const [currentWordLength, setCurrentWordLength] = useState(1);
  const [selectedWord, setSelectWord] = useState<string>();
  const [selectedLetter, setSelectedLetter] = useState<string>();

  /**
   * @description TO to show modal after each word completion
   */
  const [showModal, setShowModal] = useState(false);

  /**
   * @description just to count number of frame media pipe detected
   */
  let [countPrediction, setCountPrediction] = useState(0);

  const videoElement = useRef(null);
  const canvasElement = useRef<HTMLCanvasElement>(null);

  const handleSkip = () => {
    //level compelted go to level completed page

    if (wordIndex == singleLevelWord.length - 1) {
      navigate(`/level-completed${search}&points=${score}`);
      score = 0;
      // if (userAgent.includes('Chrome') || userAgent.includes('Brave'))  reloadMediaPipeFiles();
    }
    setTimeout(() => {
      skipPrediction = false;
    }, 100);
    if (currentWordLength == selectedWord?.length && selectedWord) {
      setSelectWord(singleLevelWord[wordIndex + 1]);
      setCurrentWordLength(1);
      setWordIndex((prevWordIndex) => prevWordIndex + 1);
      setSelectedLetter(singleLevelWord[wordIndex + 1][0]);
    } else if (currentWordLength != selectedWord?.length && selectedWord) {
      setCurrentWordLength(currentWordLength + 1);
      setSelectedLetter(selectedWord[currentWordLength]);
      setCurrentWordLength(currentWordLength + 1);
    }
  };

  

  
  const onResults = async (results) => {
    let canvasCtx = canvasElement?.current?.getContext('2d');
    setCountPrediction(countPrediction++);
    if (countPrediction == 1) {
      setIsMediaPipeModelLoading(false);
    }

    // console.log(results.image)
    canvasCtx?.save();
    if (canvasCtx) {
      canvasCtx.globalAlpha = 0.9; // Adjust the alpha value (0.5) as desired
      canvasCtx.clearRect(0, 0, canvasElement.current.width, canvasElement.current.height);
      canvasCtx.globalCompositeOperation = 'source-over';
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasElement.current.width,
        canvasElement.current.height
      );
      canvasCtx.globalCompositeOperation = 'source-atop';
      canvasCtx.fillStyle = 'rgba(0, 0, 0, 1)'; // Adjust the alpha value (1) as desired
      canvasCtx.fillRect(0, 0, canvasElement.current.width, canvasElement.current.height);
    }
    if (results.multiHandLandmarks.length && results.multiHandedness.length) {
      let newLandMarks = [];
      for (const landmarks of results.multiHandLandmarks) {
        for (var i = 0; i < 21; i++) {
          let currentLandmark = landmarks[i];
          newLandMarks.push([currentLandmark.x, currentLandmark.y, currentLandmark.z]);
          // For Left hand we are reverting all the positions
          // if (results.multiHandedness[0].label === "Right") {
          //   newLandMarks[i][0] = newLandMarks[i][0] * -1;
          // }
          if (handDirection == 'right') {
            newLandMarks[i][0] = newLandMarks[i][0] * -1;
          }
        }
        let fingerPoseEstimator = new FingerPoseEstimator(null);
        let fingerPoseResults = fingerPoseEstimator.estimate(newLandMarks);
        // NOTE: We are only accepting hands of a certain size - to have less false positives
        var handSize =
          handAnalyzer.findDistanceBetweenTwoLandMarks(newLandMarks[0], newLandMarks[5]) * 10;
        if (handSize > 0.7) {
          setIsGameStarted(true);
          drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
            color: '#048565',
            lineWidth: 2,
          });
          drawLandmarks(canvasCtx, landmarks, {
            color: 'transparent',
            lineWidth: 0,
          });
          if (selectedLetter && !skipPrediction) {
            const response = reactToDOMCursor(
              fingerPoseResults,
              newLandMarks,
              selectedLetter,
              lang
            );

        

            if (response.countCorrectFingers == 5) {
              //stop detecting hand this value change after a delay
              score++;
              skipPrediction = true;
              //this time out to delay change of current letter after detecting the hand
              setTimeout(() => {
                setLookForLetter(null);
                handleSkip();
              }, 300);
            } else {
              setLookForLetter(response?.lookForLetter);
              drawIncorrectFingers(canvasCtx, landmarks, response, HAND_CONNECTIONS);
              // console.log(response.message);
            }
          } else {
            // setTimeout(()=>{
            //    setLookForLetter(null);
            // }, 600)
          }
        } else {
          setLookForLetter(null);
        }
      }
    } else {
      setLookForLetter(null);
    }
    canvasCtx?.restore();
  };
  const reloadMediaPipeFiles = () => {
    window.location.reload();
  };
  const hands = useMemo(() => {
    return loadHands;
  }, []);
  useEffect(() => {
    if (wordIndex !== 0 && wordIndex !== singleLevelWord.length - 1) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 1500);
    }
  }, [wordIndex]);
  useEffect(() => {
    if (hands) {
      setStartTime(new Date().getTime());
      hands.onResults(onResults);
    }
    if (countPrediction != 0) {
      // to fast predict the next letter decrease time
    }
    let intervalId = setInterval(() => {
      if (startTime) {
        setCurrentTime(new Date());
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [selectedLetter, currentWordLength]);
  useEffect(() => {
    (async () => {
      storeSessionInfo(lang, handDirection, level);
      if (videoElement.current) {
        const camera = new window.Camera(videoElement.current, {
          onFrame: async () => {
            await hands.send({ image: videoElement.current });
          },
        });
        camera.start();
      }

      if (isGameStarted) {
        setSelectWord(singleLevelWord[0]);
        setShowModal(true);
        setSelectedLetter(singleLevelWord[0][0]);
        setTimeout(() => {
          setShowModal(false);
        }, 1000);
      }
    })();
  }, [isGameStarted]);
  useEffect(() => {
    const twoMinutesInMilliseconds = 120000; // 2 minutes in milliseconds
    const elapsedTime = currentTime - startTime;

    if (elapsedTime >= twoMinutesInMilliseconds) {
      handleSkip();
    }
  }, [currentTime, startTime]);
  const percentage = (((currentTime - startTime) / 180000) * 100).toFixed(2);
  // if (percentage >= 100) {
  //   handleSkip();
  // }
  // console.log(window.Hands)
  return (
    <div className="flex justify-center flex-col items-center h-[75vh] md:h-[70vh] mt-[4vh]">
      <div className="flex flex-col justify-between items-center md:flex-row overflow-hidden ig:bg-blue-500 h-[80vh] gap-4 md:h-auto w-[90%] cxm:w-full md:w-10/12 relative">
        {showModal && <Modal wordIndex={wordIndex} nextWord={selectedWord} />}
        {level == '1' ? (
          <PlaceYourHand
            isMediaPipeModelLoading={isMediaPipeModelLoading}
            isGameStarted={isGameStarted}
          />
        ) : null}
        <GameLeftSide
          score={score}
          isGameStarted={isGameStarted}
          lang={lang}
          isMediaPipeModelLoading={isMediaPipeModelLoading}
          selectedLetter={selectedLetter}
          selectedWord={selectedWord}
          handDirection={handDirection}
        />
        <div
          className={`flex ig:bg-red-500 h-[45%] md:h-[250px] cml:h-[300px] w-[240px] cxs:w-[300px] md:min-w-[240px] cml:min-w-[280px] md:w-[45%] items-center rounded-3xl justify-center overflow-hidden md:rounded-lg   ${
            handDirection == 'left' ? 'order-1' : ''
          }`}
        >
          {isMediaPipeModelLoading && (
            <img src={girl} className="output_canvas rounded-lg aspect-square w-full object-fill" />
          )}
          <video ref={videoElement} className="input_video hidden w-full aspect-square"></video>
          <canvas
            className="output_canvas transition-all rounded-lg aspect-square w-full h-full object-fill transform scale-[1.7]"
            style={{
              display: isMediaPipeModelLoading ? 'none' : 'block',
            }}
            ref={canvasElement}
          ></canvas>
        </div>
      </div>
      {isGameStarted && (
        <div className=" absolute top-[40%] mt-0 md:mt-4 md:relative md:top-0 w-[80%] cxm:w-[50%] md:w-[70%] flex items-center gap-2 ml-auto mr-auto justify-between md:gap-10 ig:bg-blue-400">
          <p className="text-xs md:text-sm csl:text-md text-center w-[110px]">
            {moment(currentTime - startTime >= 0 ? currentTime - startTime : 0).format('mm : ss')}
          </p>
          <TimerProgress percentage={percentage} />
          <Percentage lookForLetter={lookForLetter} skipPrediction={skipPrediction} />
          {/* <p>{percentage}%</p> */}
        </div>
      )}
      {!isMediaPipeModelLoading ? (
        <button
          onClick={handleSkip}
          className="md:mt-10 transition-all mt-0 w-[240px] cxs:w-[300px] btn-primary h-[30px] md:h-[40px] pb-[10px] pt-[5px] md:p-0 md:relative absolute bottom-[11%] mr-auto ml-auto md:bottom-0 md:right-0 rounded-md"
        >
          {t('skip')}{' '}
        </button>
      ) : (
        <div className="fixed flex justify-center items-center h-[100vh] w-[100vw] top-0 bottom-0 left-0 right-0 z-50 object-cover overflow-hidden opacity-90">
          <img src={loading} alt="loading" className="w-full h-full min-w-[1000px]" />
        </div>
      )}
    </div>
  );
}

export default Game;