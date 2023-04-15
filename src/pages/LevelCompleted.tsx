import stars from '@assets/images/stars.png';
import Stars from '@components/Stars';
import { useContext, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  getLevelScore,
  clearAllScore,
  storeSessionInfo,
  storeLevelScore
} from '../utils/localsession';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { AuthContext } from '../context/AuthContext';
const useGetSearchParams = (searchParams: URLSearchParams) => {
  const mode = searchParams.get('mode');
  const hand = searchParams.get('hand');
  const level = searchParams.get('level');
  searchParams.delete('level');
  const lang = searchParams.get('lang');
  const points = searchParams.get('points');
  searchParams.delete('points');

  return { mode, hand, level, lang, points };
};
async function updateUserFirebaseLevel(userId, level) {
  const docRef = doc(db, 'users', userId);
  await setDoc(docRef, { level: level }, { merge: true });
}
const socialMediaIcons = [AiOutlineInstagram, ImTwitter, GrFacebookOption];
function LevelCompleted() {
  const user = useContext(AuthContext);
  const searchParams = useSearchParams()[0];
  const {
    mode,
    hand,
    level,
    lang,
    points: score
  } = useGetSearchParams(searchParams);
  // searchParams.delete('level');
  const [points, setPoints] = useState<number | string>(0);
  const [levelesScore, setLevelsScore] = useState<Record<string, number>>();
  useEffect(() => {
    (async () => {
      if (Number(level) == 4) {
        await storeSessionInfo(lang, hand, level);
        let levelScores = {};
        for (let i = 1; i < 4; i++) {
          let levelScore;
          if (mode == 'game') {
            // add prefix to the level
            levelScore = await getLevelScore('game-' + String(i));
          } else {
            levelScore = await getLevelScore(String(i));
          }
          if (levelScore != undefined) {
            levelScores[i] = levelScore;
          }
        }
        levelScores[4] = ((Number(points) * 10) / 3).toFixed(2);
        let s = Object.values(levelScores); // array of level scores
        setPoints(
          Number(
            s.reduce((prev, current) => {
              return Number(prev) + Number(current);
            }, 0)
          ) / s.length
        );
        setPoints(0);
        // let va = ((Number(searchParams.get('points')) * 10) / 3).toFixed(1);

        setLevelsScore(levelScores);
        setPoints(levelScores[4]);
        await clearAllScore();
      } else {
        await storeSessionInfo(lang, hand, Number(level) + 1);
        let va = ((Number(score) * 10) / 3).toFixed(1);
        await storeLevelScore(level, va, mode);
        setPoints(va);
        if (user && mode == 'game') {
          await updateUserFirebaseLevel(user.id, level);
        }
      }
      if (user && mode == 'game') {
        await updateUserFirebaseLevel(user.id, level);
      }
    })();
  }, []);
  return (
    <div className="flex justify-center relative">
      <div className="w-1/2 flex  flex-col items-center gap-5">
        <div className="absolute right-0 flex flex-col gap-14">
          {socialMediaIcons.map((Icon) => {
            return <Icon size={20} />;
          })}
        </div>
        <button className="btn btn-primary capitalize mb-5  rounded-md w-full text-xl text-white">
          {mode == 'game' ? `Level ${level}` : 'Completed'}
        </button>
        {mode == 'learn' && (
          <p className="text-white font-bold text-center rounded-md w-full ">
            Level {level}
          </p>
        )}
        {/* {mode == 'game' ? (
          
        ) : (
        )} */}
        {mode === 'game' && (
          <ul className="steps text-2xl self-stretch">
            {Array(level)
              .fill('0')
              .map((_, i) => {
                return <li data-content="★" className="step  step-accent"></li>;
              })}
            {Array(4 - Number(level))
              .fill('0')
              .map((_, i) => {
                return (
                  <li data-content="★" className="step  step-neutral"></li>
                );
              })}
          </ul>
        )}
        <img src={stars} className="object-contain w-52" />

        <p className="font-bold">
          {mode == 'game' ? 'you scored' : 'you have learned'}
        </p>
        <h1 className="text-white font-extrabold text-6xl">
          {(Number(points) * 100) / 40}%
        </h1>
        {mode != 'game' && <p className="font-bold">of the lesson</p>}
        <Link
          to={`/game?${searchParams.toString()}&level=${Number(level)}`}
          className="btn mt-5 font-bold capitalize bg-[#2E2E2E] hover:bg-[#3f3f3f] rounded-md w-full"
        >
          <p className="text-white font-bold text-xl"> Learn Again</p>
        </Link>
        <Link
          to={`/game?${searchParams.toString()}&level=${Number(level) + 1}`}
          className="btn font-bold capitalize text-xl text-black btn-accent rounded-md w-full"
        >
          Next{' '}
        </Link>
      </div>
    </div>
  );
}
export default LevelCompleted;
