import moment from 'moment';
import React from 'react';
import Percentage from './Percentage';
function GameMetaInfo({
  skipPrediction,
  lookForLetter,
  score,
  currentTime,
  startTime
}) {
  return (
    <>
      <span className="absolute text-white text-lg m-10">
        {currentTime && startTime
          ? moment(currentTime - startTime).format('mm : ss')
          : ''}
      </span>
      <div className="flex absolute left-1/2 mt-5">
        <p className="font-medium text-white m-2 text-2xl">{score} Points</p>
      </div>
      <Percentage
        skipPrediction={skipPrediction}
        lookForLetter={lookForLetter}
      />
    </>
  );
}

export default GameMetaInfo;
