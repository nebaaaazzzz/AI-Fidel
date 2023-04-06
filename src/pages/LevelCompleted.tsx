// import { useEffect, useState } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import SpellingSvg from '../components/SpellingSvg';
// import {
//   getLevelScore,
//   clearAllScore,
//   storeSessionInfo,
//   storeLevelScore
// } from '../utils/localsession';

// function LevelCompleted() {
//   const searchParams = useSearchParams()[0];
//   const mode = searchParams.get('game');
//   const hand = searchParams.get('hand');
//   const level = searchParams.get('level');
//   const [points, setPoints] = useState<number | string>();
//   const [levelesScore, setLevelsScore] = useState<Record<string, number>>();
//   useEffect(() => {
//     (async () => {
//       if (Number(level) == 4) {
//         await storeSessionInfo(
//           searchParams.get('lang'),
//           searchParams.get('hand'),
//           searchParams.get('level')
//         );
//         let levelScores = {};
//         for (let i = 1; i < 4; i++) {
//           let levelScore;
//           if (mode == 'game') {
//             // add prefix to the level
//             levelScore = await getLevelScore('game-' + String(i));
//           } else {
//             levelScore = await getLevelScore(String(i));
//           }
//           if (levelScore != undefined) {
//             levelScores[i] = levelScore;
//           }
//         }
//         levelScores[4] = (
//           (Number(searchParams.get('points')) * 10) /
//           3
//         ).toFixed(2);
//         let s = Object.values(levelScores); // array of level scores
//         setPoints(
//           Number(
//             s.reduce((prev, current) => {
//               return Number(prev) + Number(current);
//             }, 0)
//           ) / s.length
//         );
//         setPoints(0);
//         // let va = ((Number(searchParams.get('points')) * 10) / 3).toFixed(1);

//         setLevelsScore(levelScores);
//         setPoints(levelScores[4]);
//         await clearAllScore();
//       } else {
//         await storeSessionInfo(
//           searchParams.get('lang'),
//           searchParams.get('hand'),
//           Number(level) + 1
//         );
//         let va = ((Number(searchParams.get('points')) * 10) / 3).toFixed(1);
//         await storeLevelScore(level, va, mode);
//         setPoints(va);
//       }
//     })();
//   }, []);
//   return (
//     <div className="flex flex-col h-[100vh] items-center justify-center bg-[#683aff] gap-1">
//       <SpellingSvg />
//       <h1 className="text-white text-2xl my-5">Well Done!</h1>
//       {levelesScore &&
//         Object.entries(levelesScore).map((l) => {
//           return (
//             <p>
//               Level {l[0]} : {((l[1] * 10) / 3).toFixed(2)}%
//             </p>
//           );
//         })}
//       <h1 className="text-white text-8xl my-6">{points}% points</h1>
//       <h1 className="text-white w-5/12 text-center ">
//         you can try the word again - and see how many points you can get. Or
//         move on the next levle - where we will add more letters to your
//         fingerspelling vocabulary
//       </h1>
//       <div className="flex mt-10 gap-10">
//         {/* if 4 reached not to show Next level button */}
//         <Link
//           to={`/start-level?hand=${hand}&level=${Number(
//             level
//           )}&lang=${searchParams.get('lang')}`}
//           className="btn px-10 h-14 text-xl  hover:border-[#683aff] rounded-3xl hover:bg-[#ffffa0] bg-[#fff] text-[#683aff] border-none my-2"
//         >
//           Retry
//         </Link>
//         {!(level == '4') && (
//           <Link
//             to={`/start-level?hand=${hand}&level=${
//               Number(level) + 1
//             }&lang=${searchParams.get('lang')}`}
//             className="btn px-10 h-14 text-xl  hover:border-[#683aff] rounded-3xl hover:bg-[#ffffa0] bg-[#fff] text-[#683aff] border-none my-2"
//           >
//             Next Level
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LevelCompleted;
//TODO stars for score use the below code
{
  /* <div class="flex items-center">
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
</div> */
}
import stars from '@assets/images/stars.png';
import Stars from '@components/Stars';
function LevelCompleted() {
  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col items-center gap-5">
        <button className="btn btn-primary rounded-md w-full ">ደረጃ 1</button>
        <Stars />
        <p className="">እነዚህን የአማርኛ ሆሄ ይማሩ</p>
        <img src={stars} className="object-contain w-28" />
        <p>ያገኘሺው ነጥብ</p>
        <h1 className="text-white text-6xl">98%</h1>
        <button className="btn capitalize btn-outline rounded-md w-full">
          Learn Again
        </button>
        <button className="btn capitalize text-black btn-accent rounded-md w-full">
          Take Exam
        </button>
      </div>
    </div>
  );
}
export default LevelCompleted;
