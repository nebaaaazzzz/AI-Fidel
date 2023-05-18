//@ts-nocheck
import { FingerPoseEstimator } from '../FingerUtils/FingerPostEstimator';
import { HandAnalyzer } from '../HandUtils/HandAnalyzer';
import { useMemo, useRef, useEffect, useState } from 'react';
import PlaceYourHand from '@components/PlaceYourHand';
import girl from '@assets/images/girl.png';
import loading from '@assets/images/loading.gif';
import GameLeftSide from '@components/GameLeftSide';
import {} from 'react-spinners';
import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useSearchParams
} from 'react-router-dom';
import getLanguageWords from '@/data';
import { getLevelWords } from '@/utils';
import { getLevelAmharicWords } from '@/utils/amharicindex';
import reactToDOMCursor from '@/HandUtils/reactToDom';
import { storeSessionInfo } from '@/utils/localsession';
import TimerProgress from '@components/TimerProgress';
import Modal from '@/components/Modal/Modal';
import moment from 'moment';
import Percentage from '@/components/Percentage';
import { useTranslation } from 'react-i18next';
const handAnalyzer = new HandAnalyzer();
let skipPrediction = false;
let score = 0;
function useGetGameConfig(
  searchParams: URLSearchParams,
  navigate: NavigateFunction
) {
  const hand = searchParams.get('hand');
  let level = searchParams.get('level');
  const lang = searchParams.get('lang');
  const mode = searchParams.get('mode');
  const searchWord = searchParams.get('search');
  const [zoomLevel, setZoomLevel] = useState(2);
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
  if (searchWord) {
    level = searchWord.length;
    levelWords.unshift(searchWord);
    levelWords.pop();
  }
  levelWords;
  return { mode, hand, level, lang, levelWords };
}
function Game() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = useSearchParams()[0];
  const {
    lang,
    hand: handDirection,
    level,
    levelWords
  } = useGetGameConfig(searchParams, navigate);
  const [lookForLetter, setLookForLetter] =
    useState<AlphabetDefinationI | null>(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isMediaPipeModelLoading, setIsMediaPipeModelLoading] =
    useState<boolean>(true);

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

    if (wordIndex == levelWords.length - 1) {
      navigate(`/level-completed${search}&points=${score}`);
      score = 0;
    }
    setTimeout(() => {
      skipPrediction = false;
    }, 100);
    if (currentWordLength == selectedWord?.length && selectedWord) {
      setSelectWord(levelWords[wordIndex + 1]);
      setCurrentWordLength(1);
      setWordIndex((prevWordIndex) => prevWordIndex + 1);
      setSelectedLetter(levelWords[wordIndex + 1][0]);
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

    canvasCtx?.save();
    if (canvasCtx) {
      canvasCtx.globalAlpha = 0.9; // Adjust the alpha value (0.5) as desired
      canvasCtx.clearRect(
        0,
        0,
        canvasElement.current.width,
        canvasElement.current.height
      );
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
      canvasCtx.fillRect(
        0,
        0,
        canvasElement.current.width,
        canvasElement.current.height
      );
    }
    if (results.multiHandLandmarks.length && results.multiHandedness.length) {
      let newLandMarks = [];
      for (const landmarks of results.multiHandLandmarks) {
        for (var i = 0; i < 21; i++) {
          let currentLandmark = landmarks[i];
          newLandMarks.push([
            currentLandmark.x,
            currentLandmark.y,
            currentLandmark.z
          ]);
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
          handAnalyzer.findDistanceBetweenTwoLandMarks(
            newLandMarks[0],
            newLandMarks[5]
          ) * 10;
        if (handSize > 0.7) {
          setIsGameStarted(true);
          drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
            color: '#ff00ff',
            lineWidth: 2
          });
          drawLandmarks(canvasCtx, landmarks, {
            color: 'transparent',
            lineWidth: 0
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
  const hands = useMemo(() => {
    let hands = new window.Hands({
      locateFile: (file) => {
        return `/src/mediapipe/hands/${file}`;
      }
    });
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    return hands;
  }, []);
  useEffect(() => {
    if (wordIndex !== 0 && wordIndex !== levelWords.length - 1) {
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
          }
        });
        camera.start();
      }

      if (isGameStarted) {
        setSelectWord(levelWords[0]);
        setShowModal(true);
        setSelectedLetter(levelWords[0][0]);
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
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 h-[470px] md:h-auto w-[90%] cxm:w-full md:w-10/12 relative">
        {showModal && <Modal wordIndex={wordIndex} nextWord={selectedWord} />}
        <PlaceYourHand
          isMediaPipeModelLoading={isMediaPipeModelLoading}
          isGameStarted={isGameStarted}
        />
        <GameLeftSide
          score={score}
          isGameStarted={isGameStarted}
          lang={lang}
          isMediaPipeModelLoading={isMediaPipeModelLoading}
          selectedLetter={selectedLetter}
          selectedWord={selectedWord}
        />
        <div className="flex flex-[1] ig:bg-red-50 max-h-[280px] items-center rounded-3xl justify-center h-[40%] md:h-auto w-[300px] ml-auto mr-auto overflow-hidden md:w-1/2 aspect-square md:rounded-lg cxm:p-0">
          {isMediaPipeModelLoading && (
            <img
              src={girl}
              className="output_canvas rounded-lg aspect-square w-full object-fill"
            />
          )}
          <video
            ref={videoElement}
            className="input_video hidden w-full aspect-square"
          ></video>
          <canvas
            className="output_canvas rounded-lg aspect-square w-full h-full object-fill"
            style={{
              display: isMediaPipeModelLoading ? 'none' : 'block'
            }}
            ref={canvasElement}
          ></canvas>
        </div>
      </div>
      {isGameStarted && (
        <div className=" absolute top-[43%] cxs:top-[42%] mt-0 md:mt-4 md:relative md:top-0 w-[80%] cxm:w-[50%] md:w-[90%] flex items-center gap-2 ml-auto mr-auto justify-between md:gap-10 ig:bg-blue-400">
          <p className='text-xs md:text-[15px] w-[90px] md:w-auto'>
            {moment(
              currentTime - startTime >= 0 ? currentTime - startTime : 0
            ).format('mm : ss')}
          </p>
          <TimerProgress percentage={percentage} />
          <Percentage
            lookForLetter={lookForLetter}
            skipPrediction={skipPrediction}
          />
          {/* <p>{percentage}%</p> */}
        </div>
      )}
      {!isMediaPipeModelLoading ? (
        <button
          onClick={handleSkip}
          className="md:mt-10 mt-0 w-[90%] cxm:w-[300px] btn-primary h-[30px] md:h-[40px] pb-[10px] pt-[5px] md:p-0 md:relative absolute bottom-[11%] mr-auto ml-auto md:bottom-0 md:right-0 rounded-md"
        >
          {t('skip')}{' '}
        </button>
      ) : (
        <div className="fixed top-0 bottom-0 right-0 left-0 z-50  opacity-90">
          <img src={loading} alt="" />
        </div>
      )}
    </div>
  );
}

export default Game;