import React from 'react';
import { AlphabetDefinationI } from '../type';

function Percentage({
  lookForLetter,
  skipPrediction
}: {
  lookForLetter: AlphabetDefinationI | null;
  skipPrediction: boolean;
}) {
  if (!lookForLetter || skipPrediction) {
    return (
      <div className="absolute top-80">
        <p className="text-white text-xl">{0}%</p>
      </div>
    );
  }
  let sum =
    lookForLetter?.thumb?.percentageCorrect +
    lookForLetter?.index?.percentageCorrect +
    lookForLetter?.middle?.percentageCorrect +
    lookForLetter?.ring?.percentageCorrect +
    lookForLetter?.little?.percentageCorrect;
  let avg = sum / 5;

  return (
    <div className="absolute top-80">
      <p className="text-white text-xl">{(avg * 100).toFixed(2)}%</p>
      {/* <p>thumb {lookForLetter.thumb.percentageCorrect.toFixed(2) * 100}%</p>
        <p>index {lookForLetter.index.percentageCorrect.toFixed(2) * 100}%</p>
        <p>middle {lookForLetter.middle.percentageCorrect.toFixed(2) * 100}%</p>
        <p>ring {lookForLetter.ring.percentageCorrect.toFixed(2) * 100}%</p>
        <p>little {lookForLetter.little.percentageCorrect.toFixed(2) * 100}%</p> */}
    </div>
  );
}

export default Percentage;
