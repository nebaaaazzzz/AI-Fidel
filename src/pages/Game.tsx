//@ts-nocheck
import { FingerPoseEstimator } from '../FingerUtils/FingerPostEstimator';
import { HandAnalyzer } from '../HandUtils/HandAnalyzer';
import { useMemo, useRef, useEffect, useState } from 'react';
import PlaceYourHand from '@/components/PlaceYourHand';
import GameLeftSide from '@/components/GameLeftSide';
import {
  NavigateFunction,
  useNavigate,
  useSearchParams
} from 'react-router-dom';
import getLanguageWords from '@/data';
import { getLevelWords } from '@/utils';
import { getLevelAmharicWords } from '@/utils/amharicindex';
const handAnalyzer = new HandAnalyzer();
function useGetGameConfig(
  searchParams: URLSearchParams,
  navigate: NavigateFunction
) {
  const hand = searchParams.get('hand');
  const level = searchParams.get('level');
  const lang = searchParams.get('lang');
  const mode = searchParams.get('mode');
  if (!hand || !level || !lang || !mode) {
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
  return { mode, hand, level, lang, levelWords };
}
function Game() {
  const { hand, levelWords, lang } = useGetGameConfig(
    useSearchParams()[0],
    useNavigate()
  );
  const videoElement = useRef<HTMLVideoElement>(null);
  const canvasElement = useRef<HTMLCanvasElement>(null);
  const [isMediaPipeModelLoading, setIsMediaPipeModelLoading] = useState(true);
  //if the user show his hand
  const [isGameStarted, setIsGameStarted] = useState(false);
  /**
   * @description TO track current index from level words it is from 0 - 9
   */
  const [wordIndex, setWordIndex] = useState(0);

  /**
   * @description TO track current current letter from current word
   */
  const [currentWordLength, setCurrentWordLength] = useState<number>(0);

  const handleNext = () => {
    //level compelted go to level completed page
    if (wordIndex == 9) {
      navigate(
        `/level-completed?hand=${hand}&level=${level}&points=${score}&lang=${searchParams[0].get(
          'lang'
        )}`
      );
      score = 0;
    }
    if (currentWordLength == selectedWord.length && selectedWord) {
      setSelectWord(levelWords[wordIndex + 1]);
      setCurrentWordLength(1);
      setWordIndex((prevWordIndex) => prevWordIndex + 1);
      setSelectedLetter(levelWords[wordIndex + 1][0]);
    } else if (currentWordLength != selectedWord.length && selectedWord) {
      setCurrentWordLength(currentWordLength + 1);
      setSelectedLetter(selectedWord[currentWordLength]);
      setCurrentWordLength(currentWordLength + 1);
    }
  };
  const onResults = async (results) => {
    setIsMediaPipeModelLoading(false);
    let canvasCtx = canvasElement?.current?.getContext('2d');
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
          if (hand == 'right') {
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
        }
        canvasCtx?.restore();
      }
    }
  };
  const hands = useMemo(() => {
    let hands = new window.Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      }
    });
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    hands.onResults(onResults);
    return hands;
  }, []);
  useEffect(() => {
    (async () => {
      if (videoElement.current) {
        const camera = new window.Camera(videoElement.current, {
          onFrame: async () => {
            await hands.send({ image: videoElement.current });
          }
        });
        camera.start();
      }
    })();
    if (isGameStarted) {
    }
  }, [isGameStarted]);
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-10">
        <PlaceYourHand
          isMediaPipeModelLoading={isMediaPipeModelLoading}
          isGameStarted={isGameStarted}
        />
        <GameLeftSide
          levelWords={levelWords}
          isGameStarted={isGameStarted}
          wordIndex={wordIndex}
          lang={lang}
          currentWordLength={currentWordLength}
        />
        <div className="flex items-center justify-center w-96 aspect-square rounded-lg p-10">
          <video
            ref={videoElement}
            className="hidden w-full aspect-square"
          ></video>
          <canvas
            className={`W-full apect-square object-fill ${
              isMediaPipeModelLoading ? 'none' : 'bloack'
            } `}
            ref={canvasElement}
          ></canvas>
        </div>
      </div>
      <button className="btn mt-10 btn-primary rounded-md btn-wide ">
        ፊደሉን ዝለል{' '}
      </button>
    </div>
  );
}

export default Game;
