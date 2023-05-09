import LevelComplete from './LevelComplete';
import { LevelScore } from '@/components/LevelScore';
import { useState } from 'react';

const Complete1 = () => {
  const [results, setResult] = useState([
    {
      level: 'Level 1',
      score: 98
    },
    {
      level: 'Level 2',
      score: 96
    },
    {
      level: 'Level 3',
      score: 90
    },
    {
      level: 'Level 4',
      score: 100
    }
  ]);
  return (
    <div className="">
      <LevelComplete>
        {results.map((result) => {
          return (
            <LevelScore
              key={result.score}
              level={result.level}
              score={result.score}
            />
          );
        })}
      </LevelComplete>
    </div>
  );
};

export default Complete1;
