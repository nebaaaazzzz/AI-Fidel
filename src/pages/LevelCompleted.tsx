import stars from '@assets/images/stars.png';
import Stars from '@components/Stars';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  getLevelScore,
  clearAllScore,
  storeSessionInfo,
  storeLevelScore
} from '../utils/localsession';
const useGetSearchParams = (searchParams: URLSearchParams) => {
  const mode = searchParams.get('game');
  const hand = searchParams.get('hand');
  const level = searchParams.get('level');
  const lang = searchParams.get('lang');
  const points = searchParams.get('points');
  return { mode, hand, level, lang, points };
};
function LevelCompleted() {
  const { mode, hand, level, lang, points } = useGetSearchParams(
    useSearchParams()[0]
  );
  // const [points, setPoints] = useState<number | string>();
  const [levelesScore, setLevelsScore] = useState<Record<string, number>>();
  // useEffect(() => {
  //   (async () => {
  //     if (Number(level) == 4) {
  //       await storeSessionInfo(
  //        lang , hand ,level
  //       );
  //       let levelScores = {};
  //       for (let i = 1; i < 4; i++) {
  //         let levelScore;
  //         if (mode == 'game') {
  //           // add prefix to the level
  //           levelScore = await getLevelScore('game-' + String(i));
  //         } else {
  //           levelScore = await getLevelScore(String(i));
  //         }
  //         if (levelScore != undefined) {
  //           levelScores[i] = levelScore;
  //         }
  //       }
  //       levelScores[4] = (
  //         (Number(points) * 10) /
  //         3
  //       ).toFixed(2);
  //       let s = Object.values(levelScores); // array of level scores
  //       setPoints(
  //         Number(
  //           s.reduce((prev, current) => {
  //             return Number(prev) + Number(current);
  //           }, 0)
  //         ) / s.length
  //       );
  //       setPoints(0);
  //       // let va = ((Number(searchParams.get('points')) * 10) / 3).toFixed(1);

  //       setLevelsScore(levelScores);
  //       setPoints(levelScores[4]);
  //       await clearAllScore();
  //     } else {
  //       await storeSessionInfo(
  //        lang , hand,
  //         Number(level) + 1
  //       );
  //       let va = ((Number(searchParams.get('points')) * 10) / 3).toFixed(1);
  //       await storeLevelScore(level, va, mode);
  //       setPoints(va);
  //     }
  //   })();
  // }, []);
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col items-center gap-5">
        <button className="btn btn-primary  rounded-md w-full text-xl text-white">
          ተጠናቀቀ{' '}
        </button>
        <p className="text-white text-center rounded-md w-full ">ደረጃ 1</p>
        {/* <Stars /> */}
        <img src={stars} className="object-contain w-28" />
        <p>ያገኘሺው ነጥብ</p>
        <h1 className="text-white font-extrabold text-6xl">
          {(Number(points) * 100) / 40}%
        </h1>
        <button className="btn font-bold capitalize btn-outline rounded-md w-full">
          <p className="text-white font-bold text-xl"> Learn Again</p>
        </button>
        <Link
          to="/game?level=1&hand=right&lang=am&mode=learn&"
          className="btn font-bold capitalize text-xl text-black btn-accent rounded-md w-full"
        >
          ቀጥል
        </Link>
      </div>
    </div>
  );
}
export default LevelCompleted;
