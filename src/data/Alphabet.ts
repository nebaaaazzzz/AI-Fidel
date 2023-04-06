import { AlphabetDefinationI } from '../type';

export class Alphabet {
  private alphabetArray: AlphabetDefinationI[] = [];

  private _helpTexts = { straight: 'Straigthen it', bend: 'Bend it' };

  constructor() {
    let noCurl = 180;
    let halfCurlMin = 130;
    let fullCurlMinMoreForgiving = 90;
    let fullCurlMin = 60;
    let fullCurlMax = 0;

    let a: AlphabetDefinationI = {
      letterNumber: 1,
      letter: 'a',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      }
    };
    let b: AlphabetDefinationI = {
      letterNumber: 2,
      letter: 'b',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Bend it so its inside your palm'
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };
    let c: AlphabetDefinationI = {
      letterNumber: 3,
      letter: 'c',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'distanceBetweenThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: "Bend it - but make sure it doesn't touch your pointer finger"
      },
      index: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      little: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      }
    };
    let d: AlphabetDefinationI = {
      letterNumber: 4,
      letter: 'd',
      rotation: 'up',
      thumb: {
        curlMin: 160,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      }
    };
    /*
          changed this 'thumbBendOverOtherFingersAndUnderOtherFingers' to something else
           */
    let e: AlphabetDefinationI = {
      letterNumber: 5,
      letter: 'e',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Bend it so its placed below the other fingers'
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      }
    };
    let f: AlphabetDefinationI = {
      letterNumber: 6,
      letter: 'f',
      rotation: 'up',
      thumb: {
        curlMin: 180,
        curlMax: 110,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Pinch the thumb and pointer finger together'
      },
      index: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };

    // FIXME - Need to look for rotation
    /*
          Removed from thumb:
                  special: 'thumbPointerAlignOnYAxis',
           */
    let g: AlphabetDefinationI = {
      letterNumber: 7,
      letter: 'g',
      rotation: 'side',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        percentageCorrect: 0,
        special: 'none',
        currentAngle: null,
        helpText: 'Make sure its straight and aligns with the pointer finger'
      },
      index: {
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      }
    };
    let h: AlphabetDefinationI = {
      letterNumber: 8,
      letter: 'h',
      rotation: 'side',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let i: AlphabetDefinationI = {
      letterNumber: 9,
      letter: 'i',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    // FIXME - add motion detection on the J
    let j: AlphabetDefinationI = {
      letterNumber: 10,
      letter: 'j',
      rotation: 'up',
      special: 'motion_j',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let k: AlphabetDefinationI = {
      letterNumber: 11,
      letter: 'k',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin + 20,
        curlMax: halfCurlMin - 70,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let l: AlphabetDefinationI = {
      letterNumber: 12,
      letter: 'l',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin - 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let m: AlphabetDefinationI = {
      letterNumber: 13,
      letter: 'm',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'betweenRingAndLittleBase',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let n: AlphabetDefinationI = {
      letterNumber: 14,
      letter: 'n',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'betweenMiddleAndRing',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let o: AlphabetDefinationI = {
      letterNumber: 15,
      letter: 'o',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin - 30,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: halfCurlMin,
        curlMax: 10,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin,
        curlMax: 10,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: halfCurlMin,
        curlMax: 10,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: halfCurlMin,
        curlMax: 10,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let p: AlphabetDefinationI = {
      letterNumber: 16,
      letter: 'p',
      rotation: 'down',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin - 20,
        special: 'betweenIndexAndMiddle',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin - 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin - 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let q: AlphabetDefinationI = {
      letterNumber: 17,
      letter: 'q',
      rotation: 'down',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbPointerAlignOnYAxis',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let r: AlphabetDefinationI = {
      letterNumber: 17,
      letter: 'r',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'crossIndexAndMiddle',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'crossIndexAndMiddle',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let s: AlphabetDefinationI = {
      letterNumber: 18,
      letter: 's',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'betweenIndexAndMiddleLetterS',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let t: AlphabetDefinationI = {
      letterNumber: 18,
      letter: 't',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'betweenIndexAndMiddleLetterT',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: halfCurlMin,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let u: AlphabetDefinationI = {
      letterNumber: 19,
      letter: 'u',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleMustBeClose',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleMustBeClose',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let v: AlphabetDefinationI = {
      letterNumber: 20,
      letter: 'v',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleMustBeApart',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleMustBeApart',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: halfCurlMin,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let w: AlphabetDefinationI = {
      letterNumber: 21,
      letter: 'w',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleAndRingMustBeApart',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleAndRingMustBeApart',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleAndRingMustBeApart',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: halfCurlMin,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let x: AlphabetDefinationI = {
      letterNumber: 22,
      letter: 'x',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    let y: AlphabetDefinationI = {
      letterNumber: 23,
      letter: 'y',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: noCurl - 30,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: noCurl,
        curlMax: fullCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    // FIXME : Needs a movement in a Z shape
    let z: AlphabetDefinationI = {
      letterNumber: 24,
      letter: 'z',
      rotation: 'up',
      thumb: {
        curlMin: 160,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };

    // Missing z,p,q,j,h

    this.alphabetArray = [
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z
    ];
  }

  public getRandomLetter = () => {
    var getRandom = Math.floor(Math.random() * this.alphabetArray.length);
    return this.alphabetArray[getRandom];
  };

  public getSpecificLetter = (findLetter: string) => {
    var length = this.alphabetArray.length;
    for (var i = 0; i < length; i++) {
      var currentLetter = this.alphabetArray[i];
      var getLetterName = currentLetter.letter;
      if (getLetterName.toLowerCase() === findLetter.toLowerCase()) {
        return currentLetter;
      }
    }
  };
}
