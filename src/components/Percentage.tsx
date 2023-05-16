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
    return <p className="text-white text-md md:text-[15px] w-[50px] md:w-auto">{0}%</p>;
  }
  let sum =
    lookForLetter?.thumb?.percentageCorrect +
    lookForLetter?.index?.percentageCorrect +
    lookForLetter?.middle?.percentageCorrect +
    lookForLetter?.ring?.percentageCorrect +
    lookForLetter?.little?.percentageCorrect;
  let avg = sum / 5;

  return <p className="text-white text-md md:text-[15px] w-[50px] md:w-auto">{(avg * 100).toFixed(2)}%</p>;
}

export default Percentage;
