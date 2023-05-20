import ParentScoreBoard from './ParentScoreBoard';
import { LevelScore } from '@/components/LevelScore';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const useGetSearchParams = (searchParams: URLSearchParams) => {
    const mode = searchParams.get('mode');
    const hand = searchParams.get('hand');
    const level = searchParams.get('level');
    const lang = searchParams.get('lang');
    const points = searchParams.get('points');
    // searchParams.delete('points');
  
    return { mode, hand, level, lang, points };
  };


const LevelScoreBoard = () => {
    let levelOne = localStorage.getItem('levelOneScore') ? localStorage.getItem('levelOneScore') : "0"
    let levelTwo = localStorage.getItem('levelTwoScore') ? localStorage.getItem('levelTwoScore') : "0"
    let levelThree = localStorage.getItem('levelThreeScore') ? localStorage.getItem('levelThreeScore') : "0"
    let levelFour = localStorage.getItem('levelFourScore') ? localStorage.getItem('levelFourScore') : "0"

    let completedAll = parseInt(levelOne) > 0 && parseInt(levelTwo) > 0 && parseInt(levelThree) > 0 && parseInt(levelFour) > 0

    const navigate = useNavigate();
    const searchParams = useSearchParams()[0];
    const {
      mode,
      hand,
      level,
      lang,
      points: score
    } = useGetSearchParams(searchParams);
    const factor =
    lang == 'en' ? (mode == 'learn' ? Number(level) * 10 : 40) : 40;
  const [results, setResult] = useState([
    {
      level: '1',
      score: levelOne
    },
    {
      level: '2',
      score: levelTwo
    },
    {
      level: '3',
      score: levelThree
    },
    {
      level: '4',
      score: levelFour
    }
  ]);
  return (
    <div className="">
        <button  onClick={() => navigate(-1)} >Back</button>
      <ParentScoreBoard completedAll>
        {results.map((result, index) => {
          return (
            <LevelScore 
              key={index}
              level={result.level}
              score={result.score}
            />
          );
        })}
      </ParentScoreBoard>
    </div>
  );
};

export default LevelScoreBoard;
