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

const GameKeepUpScoreBoard = () => {
  const navigate = useNavigate();
  const searchParams = useSearchParams()[0];
  const { mode, hand, level, lang, points: score } = useGetSearchParams(searchParams);
  const factor = lang == 'en' ? (mode == 'learn' ? Number(level) * 10 : 40) : 40;
  

  let levelOne = localStorage.getItem(`levelOneScore_game_${localStorage.getItem('displayName')}`)
  ? localStorage.getItem(`levelOneScore_game_${localStorage.getItem('displayName')}`)
  : '0';
let levelTwo = localStorage.getItem(`levelTwoScore_game_${localStorage.getItem('displayName')}`)
  ? localStorage.getItem(`levelTwoScore_game_${localStorage.getItem('displayName')}`)
  : '0';
let levelThree = localStorage.getItem(`levelThreeScore_game_${localStorage.getItem('displayName')}`)
  ? localStorage.getItem(`levelThreeScore_game_${localStorage.getItem('displayName')}`)
  : '0';
let levelFour = localStorage.getItem(`levelFourScore_game_${localStorage.getItem('displayName')}`)
  ? localStorage.getItem(`levelFourScore_game_${localStorage.getItem('displayName')}`)
  : '0';

    const [results, setResult] = useState([
      {
        level: '1',
        score: levelOne,
      },
      {
        level: '2',
        score: levelTwo,
      },
      {
        level: '3',
        score: levelThree,
      },
      {
        level: '4',
        score: levelFour,
      },
    ]);

  let completedAll =
    parseInt(levelOne) > 0 &&
    parseInt(levelTwo) > 0 &&
    parseInt(levelThree) > 0 &&
    parseInt(levelFour) > 0;

 
  return (
    <div className="">
      {/* <button  onClick={() => navigate(-1)} >Back</button> */}
      <ParentScoreBoard>
        {results.map((result, index) => {
          return <LevelScore key={index} level={result.level} score={result.score} />;
        })}
      </ParentScoreBoard>
    </div>
  );
};

export default GameKeepUpScoreBoard;
