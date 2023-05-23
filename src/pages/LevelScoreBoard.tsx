import LevelComplete from './ParentScoreBoard';
import { LevelScore } from '@/components/LevelScore';
import { useState } from 'react';

const LevelScoreBoard = () => {
  const [results, setResult] = useState([
    {
      level: '1',
      score: 98,
    },
    {
      level: '2',
      score: 96,
    },
    {
      level: '3',
      score: 90,
    },
    {
      level: '4',
      score: 100,
    },
  ]);

  let completedAll = results.reduce((s, e) => s && e);

  return (
    <div className="">
      <LevelComplete>
        {results.map((result) => {
          return <LevelScore key={result.score} level={result.level} score={result.score} />;
        })}
      </LevelComplete>
    </div>
  );
};

export default LevelScoreBoard;
