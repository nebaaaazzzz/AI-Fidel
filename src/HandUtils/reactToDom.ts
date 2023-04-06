import { Coords3D } from '@tensorflow-models/handpose/dist/pipeline';
import { Alphabet } from '../data/Alphabet';
import { AmharicAlphabet } from '../data/AmharicAlphabet';
import { AlphabetDefinationI, FingerDefinationI } from '../type';
import { HandAnalyzer } from './HandAnalyzer';

const handAnalyzer = new HandAnalyzer();
const alphabet = new Alphabet();
const amharicAlphabet = new AmharicAlphabet();
const fingers = ['thumb', 'index', 'middle', 'ring', 'little'];

const reactToDOMCursor = (
  fingerPoseResults: any,
  result: Coords3D,
  letter: any,
  lang: 'am' | 'en'
): {
  countCorrectFingers: number;
  message: string;
  lookForLetter?: AlphabetDefinationI | any;
} => {
  let lookForLetter;
  if (lang === 'am') {
    if (amharicAlphabet.specialCharacterArray[letter]) {
      return specialCharacterDetection(
        amharicAlphabet.specialCharacterArray[letter],
        fingerPoseResults
      );
    }
    // let lookForLetter = alphabet.getSpecificLetter(letter);
    lookForLetter = amharicAlphabet.getSpecificLetter(letter);
  } else {
    lookForLetter = alphabet.getSpecificLetter(letter);
  }
  return predict(lookForLetter, fingerPoseResults, result);
};
function predict(lookForLetter, fingerPoseResults, result: Coords3D) {
  if (!lookForLetter) {
    return {
      countCorrectFingers: 0,
      lookForLetter,
      message: 'Letter not founnd'
    };
  }
  let fingerData = {
    handSize: 0,
    handRotation: 0
  };

  fingerData.handSize =
    handAnalyzer.findDistanceBetweenTwoLandMarks(result[0], result[5]) * 10;

  fingerData.handRotation = handAnalyzer.getHandRotationFromIndex(result);
  if (fingerData.handSize < 0.7) {
    return {
      lookForLetter,
      countCorrectFingers: 0,
      message: 'put your hand close to the camera'
    };
  }

  let thumbAngle = fingerPoseResults.curls[0].angle;
  let indexFingerAngle = fingerPoseResults.curls[1].angle;
  let middleFingerAngle = fingerPoseResults.curls[2].angle;
  let ringFingerAngle = fingerPoseResults.curls[3].angle;
  let littleFingerAngle = fingerPoseResults.curls[4].angle;

  lookForLetter.thumb.currentAngle = thumbAngle;
  lookForLetter.index.currentAngle = indexFingerAngle;
  lookForLetter.middle.currentAngle = middleFingerAngle;
  lookForLetter.ring.currentAngle = ringFingerAngle;
  lookForLetter.little.currentAngle = littleFingerAngle;

  let countCorrectFingers = 0;

  let isHandAngleCorrect = false;
  if (lookForLetter.rotation === 'up') {
    if (fingerData.handRotation < 30 && fingerData.handRotation > -30) {
      isHandAngleCorrect = true;
    } else {
      return {
        lookForLetter,
        countCorrectFingers: 0,
        message: 'your hand rotation must be up'
      };
    }
  }

  if (lookForLetter.rotation === 'down') {
    if (fingerData.handRotation > 80 && fingerData.handRotation < 220) {
      isHandAngleCorrect = true;
    } else {
      return {
        lookForLetter,
        countCorrectFingers: 0,
        message: 'your hand rotation must be down'
      };
    }
  }

  if (lookForLetter.rotation === 'side') {
    if (fingerData.handRotation > 40 && fingerData.handRotation < 140) {
      isHandAngleCorrect = true;
    } else {
      return {
        lookForLetter,
        countCorrectFingers: 0,
        message: 'your hand rotation must be side'
      };
    }
  }
  if (isHandAngleCorrect === true) {
    for (let i = 0; i < 5; i++) {
      const finger = fingers[i];
      let lookFor = lookForLetter[finger];

      let angle = lookFor.currentAngle;

      if (angle && angle < lookFor.curlMin && angle > lookFor.curlMax) {
        lookFor.percentageCorrect = 1;

        if (lookFor.special !== 'none') {
          lookFor.percentageCorrect = 0;

          if (lookFor.special === 'betweenRingAndPointerBase') {
            // We are in this take not looking at tips _ but instead at the base of the finger

            if (
              result[4][0] > result[9][0] - 0.002 &&
              result[4][0] < result[17][0] + 0.002
            ) {
              lookFor.percentageCorrect = 1;
            }
          } else if (lookFor.special === 'betweenRingAndLittleBase') {
            // Used for M
            // We are in this take not looking at tips _ but instead at the base of the finger
            if (result[4][0] > result[7][0] && result[4][0] < result[17][0]) {
              // Lets also make sure that the thumbs 'tip' is higher on the Y axis than the Tips of the fingers
              if (
                result[4][1] < result[16][1] &&
                result[4][1] < result[20][1]
              ) {
                lookFor.percentageCorrect = 1;
              }
            }
          } else if (lookFor.special === 'betweenMiddleAndRing') {
            // Used for N
            if (
              result[4][0] > result[10][0] - 0.001 &&
              result[4][0] < result[14][0] + 0.001
            ) {
              // Lets also make sure that the thumbs 'tip' is higher on the Y axis than the Tips of the fingers
              //if (result[4][1] < result[16][1] && result[4][1] < result[12][1]) {
              lookFor.percentageCorrect = 1;
              //	}
            }
          } else if (lookFor.special === 'betweenIndexAndMiddle') {
            if (
              result[4][0] > result[6][0] - 0.004 &&
              result[4][0] < result[10][0] + 0.004
            ) {
              lookFor.percentageCorrect = 1;
            }
          } else if (lookFor.special === 'thumbBendOverOtherFingers') {
            if (result[4][0] > result[8][0] - 0.03 * fingerData.handSize) {
              lookFor.percentageCorrect = 1;
            }
          } else if (
            lookFor.special === 'thumbBendOverOtherFingersAndUnderOtherFingers'
          ) {
            // Used for the letter E - to make sure it doesnt look too much like a T -
            if (result[4][0] > result[5][0] && result[4][0] < result[17][0]) {
              //if (result[4][1] > result[8][1] && result[4][1] > result[12][1] && result[4][1] > result[16][1]) {
              lookFor.percentageCorrect = 1;
              //}
            }
          } else if (
            lookFor.special === 'thumbBendOverOtherFingersAndOverOtherFingers'
          ) {
            // FIXME: NOT USED
            // Used for the letter T - to make sure it doesnt look too much like a E -
            if (
              result[4][0] > result[5][0] - 0.02 * fingerData.handSize &&
              result[4][0] < result[17][0] + 0.001 * fingerData.handSize
            ) {
              if (
                result[4][1] < result[8][1] &&
                result[4][1] < result[12][1] &&
                result[4][1] < result[16][1]
              ) {
                lookFor.percentageCorrect = 1;
              }
            }
          } else if (lookFor.special === 'betweenIndexAndMiddleLetterT') {
            let distanceWithHandSize = 0.004 * fingerData.handSize;

            if (
              result[4][0] > result[7][0] - distanceWithHandSize &&
              result[4][0] < result[10][0] + distanceWithHandSize
            ) {
              if (
                result[4][1] < result[8][1] &&
                result[4][1] < result[12][1] &&
                result[4][1] < result[16][1]
              ) {
                lookFor.percentageCorrect = 1;
              }
            }
          } else if (lookFor.special === 'betweenIndexAndMiddleLetterS') {
            let distanceWithHandSize = 0.004 * fingerData.handSize;

            if (result[4][0] > result[7][0] && result[4][0] < result[15][0]) {
              // Check its pos on the Y axis too
              if (
                result[4][1] < result[8][1] &&
                result[4][1] < result[12][1] &&
                result[4][1] < result[16][1]
              ) {
                lookFor.percentageCorrect = 1;
              }
            }
          } else if (lookFor.special === 'thumbToTheLeft') {
            // Used for the letter A - make sure the thumb is all the way to the left - but also not to far from the hand
            let distanceWithHandSize = 0.03 * fingerData.handSize;
            if (result[4][0] < result[5][0]) {
              // && result[4][0] + distanceWithHandSize > result[8][0]
              lookFor.percentageCorrect = 1;
            }
          } else if (lookFor.special === 'distanceBetweenThumbAndPointer') {
            let distancePinch = handAnalyzer.findDistanceBetweenTwoLandMarks(
              result[4],
              result[8]
            );
            let distanceWithHandSize = 0.02 * fingerData.handSize;

            if (distancePinch > distanceWithHandSize) {
              lookFor.percentageCorrect = 1;
            } else {
              lookFor.percentageCorrect = distancePinch / distanceWithHandSize;
            }
          } else if (lookFor.special === 'pinchThumbAndPointer') {
            let distancePinch = handAnalyzer.findDistanceBetweenTwoLandMarks(
              result[4],
              result[8]
            );
            let distanceWithHandSize = 0.045 * fingerData.handSize;

            if (distancePinch < distanceWithHandSize) {
              lookFor.percentageCorrect = 1;
            } else {
              lookFor.percentageCorrect = distanceWithHandSize / distancePinch;
            }
          } else if (lookFor.special === 'thumbPointerAlignOnYAxis') {
            let distancePointerAndThumbOnY = result[4][1] - result[8][1];
            if (distancePointerAndThumbOnY < 0) {
              distancePointerAndThumbOnY = distancePointerAndThumbOnY * -1;
            }

            if (distancePointerAndThumbOnY < 0.07) {
              lookFor.percentageCorrect = 1;
            }
          } else if (lookFor.special === 'crossIndexAndMiddle') {
            // Used on R
            let distanceIndexAndMiddle = result[12][0] - result[8][0];
            if (distanceIndexAndMiddle < 0.0 + 0.01 * fingerData.handSize) {
              lookFor.percentageCorrect = 1;
            }
          } else if (lookFor.special === 'indexAndMiddleMustBeClose') {
            // Used on U
            let distanceIndexAndMiddle =
              handAnalyzer.findDistanceBetweenTwoLandMarks(
                result[12],
                result[8]
              );
            let distanceWithHandSize = 0.045 * fingerData.handSize;
            if (distanceIndexAndMiddle < distanceWithHandSize) {
              lookFor.percentageCorrect = 1;
            }
          } else if (lookFor.special === 'indexAndMiddleMustBeApart') {
            // Used on V
            let distanceIndexAndMiddle =
              handAnalyzer.findDistanceBetweenTwoLandMarks(
                result[12],
                result[8]
              );
            let distanceWithHandSize = 0.02 * fingerData.handSize;
            if (distanceIndexAndMiddle > distanceWithHandSize) {
              lookFor.percentageCorrect = 1;
            }
          } else if (lookFor.special === 'indexAndMiddleAndRingMustBeApart') {
            // Used on W
            let distanceIndexAndMiddle =
              handAnalyzer.findDistanceBetweenTwoLandMarks(
                result[16],
                result[12]
              );
            let distanceWithHandSize = 0.015 * fingerData.handSize;

            if (distanceIndexAndMiddle > distanceWithHandSize) {
              lookFor.percentageCorrect = 1;
            } else {
              lookFor.percentageCorrect =
                (distanceIndexAndMiddle - 0.01) / distanceWithHandSize;
            }
          }
        }
      } else {
        if (angle && angle > lookFor.curlMin) {
          // Needs more bend
          // 60 / 180
          let maxDistance = 180 - lookFor.curlMin; // 120 (is also the max distance
          let calculateExactDistance = angle - lookFor.curlMin; // 60 - 180
          lookFor.percentageCorrect =
            (maxDistance - calculateExactDistance) / maxDistance;
        } else if (angle && angle < lookFor.curlMax) {
          // Needs to be bend less
          //indexPercentageCorrect = indexFingerAngle / lookForLetter.index.curlMax;
          lookFor.percentageCorrect = angle / lookFor.curlMax;
        }
      }

      if (lookFor.percentageCorrect === 1) {
        countCorrectFingers += 1;
      }
    }
  } else {
    //If the hand rotaion is wrong - on fingers are correct
    lookForLetter.thumb.percentageCorrect = 0;
    lookForLetter.index.percentageCorrect = 0;
    lookForLetter.middle.percentageCorrect = 0;
    lookForLetter.ring.percentageCorrect = 0;
    lookForLetter.thumb.percentageCorrect = 0;
  }

  return { countCorrectFingers, lookForLetter, message: '' };
}
function specialCharacterDetection(
  letter: number[],
  fingerPoseResults
): {
  countCorrectFingers: number;
  lookForLetter: any;
  message: string;
} {
  let thumbAngle = fingerPoseResults.curls[0].angle;
  let indexFingerAngle = fingerPoseResults.curls[1].angle;
  let middleFingerAngle = fingerPoseResults.curls[2].angle;
  let ringFingerAngle = fingerPoseResults.curls[3].angle;
  let littleFingerAngle = fingerPoseResults.curls[4].angle;
  let fingerAngles = [
    thumbAngle,
    indexFingerAngle,
    middleFingerAngle,
    ringFingerAngle,
    littleFingerAngle
  ];

  let count = 0;
  //FIXME improve the percentage
  let lookForLetter = {
    thumb: {
      percentageCorrect: 0
    },
    index: {
      percentageCorrect: 0
    },
    middle: {
      percentageCorrect: 0
    },
    ring: {
      percentageCorrect: 0
    },
    little: {
      percentageCorrect: 0
    }
  };
  let fingers = ['thumb', 'index', 'middle', 'ring', 'little'];
  for (let i = 0; i < 5; i++) {
    if (fingerAngles[i] > letter[i] - 14 && fingerAngles[i] < letter[i] + 14) {
      lookForLetter[fingers[i]].percentageCorrect = 1;
      count++;
    }
  }
  // console.log(
  //   thumbAngle,
  //   indexFingerAngle,
  //   middleFingerAngle,
  //   ringFingerAngle,
  //   littleFingerAngle
  // );
  return { countCorrectFingers: count, lookForLetter, message: '' };
}
export default reactToDOMCursor;
