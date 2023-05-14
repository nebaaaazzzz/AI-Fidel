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
  const [se, setSe] = useState<number>(0);

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
      setSe(se + 1)
    }
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
    canvasCtx?.clearRect(
      0,
      0,
      canvasElement.current.width,
      canvasElement.current.height
    );
    canvasCtx?.drawImage(
      results.image,
      0,
      0,
      canvasElement.current.width,
      canvasElement.current.height
    );
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
              skipPrediction = true;
              score++;
              skipPrediction = true;
              //this time out to delay change of current letter after detecting the hand
              setTimeout(() => {
                handleSkip();
              }, 400);
            } else if (response?.message) {
              // console.log(response.message);
            }
            if (response?.lookForLetter) {
              setLookForLetter(response?.lookForLetter);
            }
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
        try {
          console.log(file)
          return `/src/mediapipe/hands/${file}`;
        } catch (error) {
          console.log(error);
        }
       
      }
    });
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    return hands;
  }, [level]);
  useEffect(() => {
    if (wordIndex !== 0 && wordIndex !== levelWords.length - 1) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 1000);
    }
  }, [wordIndex]);
  useEffect(() => {
    if (hands) {
      setStartTime(new Date().getTime());
      hands.onResults(onResults);
    }
    if (countPrediction != 0) {
      setTimeout(() => {
        skipPrediction = false;
      }, 2000);
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
        setSelectedLetter(levelWords[0][0]);
        setTimeout(() => {
          setShowModal(false);
        }, 1000);
      }
    })();
  }, [isGameStarted]);
  useEffect(() => {
    console.log(se)
  },[se])
  const percentage = (((currentTime - startTime) / 180000) * 100).toFixed(2);
  // if (percentage >= 100) {
  //   handleSkip();
  // }
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-3 md:gap-10  w-10/12 relative">
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
        <div className="flex flex-[1] items-center justify-center w-[80%] ml-auto mr-auto overflow-hidden md:w-1/2 aspect-square rounded-lg p-2">
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
            className="output_canvas rounded-lg aspect-square w-full object-fill"
            style={{
              display: isMediaPipeModelLoading ? 'none' : 'block'
            }}
            ref={canvasElement}
          ></canvas>
        </div>
      </div>
      {isGameStarted && (
        <div className="flex items-center gap-10">
          <p>
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
          className="btn mt-10 md:btn-primary md:relative absolute top-[-40px] right-[-40px] bg-transparent rounded-md btn-wide "
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
