import { AlphabetDefinationI } from '../type';

export class AmharicAlphabet {
  private alphabetArray: AlphabetDefinationI[] = [];
  specialCharacterArray: Record<string, Array<number>>;
  private _helpTexts = { straight: 'Straigthen it', bend: 'Bend it' };

  constructor() {
    let halfhalfCurlMin = 160;
    let noCurl = 180;
    let halfCurlMin = 130;
    let fullCurlMinMoreForgiving = 90;
    let fullCurlMin = 60;
    let fullCurlMax = 0;
    let ሀ: AlphabetDefinationI = {
      letterNumber: 1,
      letter: 'ሀ',
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

    let ለ: AlphabetDefinationI = {
      letterNumber: 2,
      letter: 'ለ',
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
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
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
    let ሐ: AlphabetDefinationI = {
      letterNumber: 3,
      letter: 'ሐ',
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
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
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
    // let መ: AlphabetDefinationI = {
    //   letterNumber: 4,
    //   letter: 'መ',
    //   rotation: 'up',
    //   thumb: {
    //     curlMin: noCurl,
    //     curlMax: halfCurlMin,
    //     special: 'thumbBendOverOtherFingers',
    //     percentageCorrect: 0,
    //     currentAngle: null
    //   },
    //   index: {
    //     curlMin: halfCurlMin + 35,
    //     curlMax: 130,
    //     special: 'none',
    //     percentageCorrect: 0,
    //     currentAngle: null,
    //     helpText: this._helpTexts.bend
    //   },
    //   middle: {
    //     curlMin: halfCurlMin + 35,
    //     curlMax: 130,
    //     special: 'none',
    //     percentageCorrect: 0,
    //     currentAngle: null,
    //     helpText: this._helpTexts.bend
    //   },
    //   ring: {
    //     curlMin: halfCurlMin + 35,
    //     curlMax: 130,
    //     special: 'none',
    //     percentageCorrect: 0,
    //     currentAngle: null,
    //     helpText: this._helpTexts.bend
    //   },
    //   little: {
    //     curlMin: halfCurlMin + 35,
    //     curlMax: 130,
    //     special: 'none',
    //     percentageCorrect: 0,
    //     currentAngle: null,
    //     helpText: this._helpTexts.bend
    //   }
    // };
    let ሠ: AlphabetDefinationI = {
      letterNumber: 5,
      letter: 'ሠ',
      rotation: 'up',
      thumb: {
        curlMin: 180,
        curlMax: 70,
        special: 'pinchThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Pinch the thumb and pointer finger together'
      },
      index: {
        curlMin: halfCurlMin,
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
    let ረ: AlphabetDefinationI = {
      letterNumber: 6,
      letter: 'ረ',
      rotation: 'up',
      thumb: {
        curlMin: halfCurlMin,
        curlMax: fullCurlMinMoreForgiving,
        special: 'none',
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
    let ሰ: AlphabetDefinationI = {
      letterNumber: 7,
      letter: 'ሰ',
      rotation: 'up',
      thumb: {
        curlMin: halfCurlMin,
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
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend
      }
    };
    let ሸ: AlphabetDefinationI = {
      letterNumber: 8,
      letter: 'ሸ',
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
    let ቀ: AlphabetDefinationI = {
      letterNumber: 9,
      letter: 'ቀ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: noCurl - 30,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: noCurl - 30,
        curlMax: halfCurlMin - 30,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
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
    let በ: AlphabetDefinationI = {
      letterNumber: 1,
      letter: 'በ',
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
    let ተ: AlphabetDefinationI = {
      letterNumber: 11,
      letter: 'ተ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMin,
        special: 'betweenIndexAndMiddleLetterT',
        percentageCorrect: 0,
        currentAngle: null
      },
      index: {
        curlMin: halfCurlMin,
        curlMax: fullCurlMinMoreForgiving,
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
    let ቸ: AlphabetDefinationI = {
      letterNumber: 12,
      letter: 'ቸ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null
      },

      index: {
        curlMin: halfCurlMin,
        curlMax: fullCurlMinMoreForgiving,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfhalfCurlMin,
        curlMax: halfCurlMin,
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
    let ኀ: AlphabetDefinationI = {
      letterNumber: 13,
      letter: 'ኀ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: noCurl - 30,
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
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
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
    let ነ: AlphabetDefinationI = {
      letterNumber: 14,
      letter: 'ነ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: 175,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
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
    let ኘ: AlphabetDefinationI = {
      letterNumber: 15,
      letter: 'ኘ',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: 175,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
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
    let አ: AlphabetDefinationI = {
      letterNumber: 16,
      letter: 'አ',
      rotation: 'side',
      thumb: {
        curlMin: noCurl,
        curlMax: 175,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight
      },

      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
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
    }; //need tumb fix
    let ከ: AlphabetDefinationI = {
      letterNumber: 17,
      letter: 'ከ',
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
        curlMax: halfCurlMin - 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: halfCurlMin + 30,
        curlMax: fullCurlMin + 30,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    }; //need some fix
    let ኸ: AlphabetDefinationI = {
      letterNumber: 18,
      letter: 'ኸ',
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
        curlMax: noCurl,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: fullCurlMax,
        curlMax: fullCurlMinMoreForgiving,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      ring: {
        curlMin: fullCurlMax,
        curlMax: fullCurlMinMoreForgiving,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      little: {
        curlMin: noCurl,
        curlMax: noCurl,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ወ: AlphabetDefinationI = {
      letterNumber: 19,
      letter: 'ወ',
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
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      },
      middle: {
        curlMin: halfCurlMin + 20,
        curlMax: fullCurlMin + 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
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
    }; // not confertable wit letter "wee"
    let ዐ: AlphabetDefinationI = {
      letterNumber: 20,
      letter: 'ዐ',
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
    let ዘ: AlphabetDefinationI = {
      letterNumber: 21,
      letter: 'ዘ',
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
        currentAngle: null,
        helpText: this._helpTexts.straight
      }
    };
    let ዠ: AlphabetDefinationI = {
      letterNumber: 22,
      letter: 'ዠ ',
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
    let የ: AlphabetDefinationI = {
      letterNumber: 23,
      letter: 'የ',
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
        curlMax: halfCurlMin,
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
    let ደ: AlphabetDefinationI = {
      letterNumber: 24,
      letter: 'ደ',
      rotation: 'down',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
      },
      index: {
        curlMin: halfCurlMin + 40,
        curlMax: fullCurlMin + 40,
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
    let ጀ: AlphabetDefinationI = {
      letterNumber: 25,
      letter: 'ጀ',
      rotation: 'down',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger'
      },
      index: {
        curlMin: halfCurlMin + 40,
        curlMax: fullCurlMin + 40,
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
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null
      }
    };
    let ገ: AlphabetDefinationI = {
      letterNumber: 26,
      letter: 'ገ',
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

    // let  = [144, 132, 142, 144, 130];
    let ጠ = [
      136.43863867291532, 112.8296581997838, 121.34471772490016,
      111.74618467364762, 77.39124118185943
    ];
    // let ጨ = [
    //   147.96269774432142, 133.13289491885138, 140.6874382534127,
    //   140.61500633791286, 129.5329696078979
    // ];
    // let ጨ = [
    //   95.43310396779214, 105.58689604139842, 113.24502860717466,
    //   97.10791907714743, 49.207297041070454
    // ];
    // let ጨ = [
    //   160.5386797135335, 121.9098790219572, 132.7552131437273, 128.385587349218,
    //   106.92028289113992
    // ];
    let ጨ = [
      139.83275591345233, 108.25939738094354, 109.4264223494229,
      99.14595071553254, 74.7086793661234
    ];

    let ፐ = [
      102.75979872486583, 133.4226316739686, 116.22980698771643,
      22.70568401341046, 16.795905531561047
    ];
    let ፈ = [
      149.11690680905934, 168.76870107528964, 43.36575634382727,
      40.84501974255949, 62.20122552936269
    ];
    let ጰ = [
      146.22580465945668, 60.17367588566625, 49.07085101924445,
      49.11311026589037, 163.61625326832404
    ];
    let ጸ = [
      135.5633700842473, 153.42394192501627, 168.61671007580182,
      15.774900747594426, 18.509153626720114
    ];
    let መ = [
      145.6628240924694, 148.87699696319558, 146.17509462184796,
      133.56968857408378, 145.3295550500663
    ];
    this.specialCharacterArray = { ጰ, ፈ, ፐ, ጠ, ጨ, መ };
    // Missing z,p,q,j,h
    this.alphabetArray = [ሀ, ለ, ሐ, ረ, ሰ, ቀ, ዘ, ገ, ነ, ዠ, አ, ኘ, የ, በ, ተ, ሠ, ሸ];
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
