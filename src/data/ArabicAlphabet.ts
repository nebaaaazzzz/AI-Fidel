import { AlphabetDefinationI } from '../type';

export class ArabicAlphabet {
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
    // Alif
    let ا: AlphabetDefinationI = {
      letterNumber: 1,
      letter: 'ا',
      rotation: 'side',
      thumb: {
        curlMin: noCurl,
        curlMax: 175,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight,
      },

      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight,
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
    };
     // Ta
     let ت = {
      letterNumber: 3,
      letter: 'ت',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null,
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleMustBeClose',
        percentageCorrect: 0,
        currentAngle: null,
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'indexAndMiddleMustBeClose',
        percentageCorrect: 0,
        currentAngle: null,
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
    };
    // Tha
    let ث: AlphabetDefinationI = {
      letterNumber: 4,
      letter: 'ث',
      rotation: 'up',
      thumb: {
        curlMin: halfCurlMin,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Bend it so its inside your palm',
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight,
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight,
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight,
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
    };
    let ج = {
      letterNumber: 5,
      letter: 'ج',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'distanceBetweenThumbAndPointer',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: "Bend it - but make sure it doesn't touch your pointer finger",
      },
      index: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
      middle: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
      ring: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
      little: {
        curlMin: halfCurlMin + 15,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
    };

    // Ayn
    let ع = {
      letterNumber: 18,
      letter: 'ع',
      rotation: 'side',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      index: {
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      middle: {
        curlMin: noCurl,
        curlMax: 100,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
    };

    // Mim
    let م = {
      letterNumber: 24,
      letter: 'م',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null,
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
    };

    // Lam
    let ل = {
      letterNumber: 23,
      letter: 'ل',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin - 20,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
    };

    // Kaf
    let ك = {
      letterNumber: 22,
      letter: 'ك',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: fullCurlMax,
        special: 'thumbBendOverOtherFingers',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Bend it so its inside your palm',
      },
      index: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight,
      },
      middle: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight,
      },
      ring: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight,
      },
      little: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.straight,
      },
    };

    // Sad
    let ص = {
      letterNumber: 18,
      letter: 'ص',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: halfCurlMin,
        special: 'thumbToTheLeft',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: 'Straigten it - and make sure it is close to index finger',
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
      little: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
        helpText: this._helpTexts.bend,
      },
    };
    let ي = {
      letterNumber: 28,
      letter: 'ي',
      rotation: 'up',
      thumb: {
        curlMin: noCurl,
        curlMax: noCurl - 30,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      index: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      middle: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      ring: {
        curlMin: fullCurlMinMoreForgiving,
        curlMax: fullCurlMax,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
      little: {
        curlMin: noCurl,
        curlMax: fullCurlMin,
        special: 'none',
        percentageCorrect: 0,
        currentAngle: null,
      },
    };

    let ب = [
      136.93956947584607, 171.38939378371086, 22.430758548518394, 13.266469063289746,
      13.609808333784036,
    ];

    // Ha
    let ح = [
      174.35080150319965, 105.76691408383732, 97.30817858166388, 97.2050405983206, 110.24567123851564
    ];

    // Kha
    let خ = [
      175.6398363520364, 95.5361325263377, 100.51080782609576, 104.80999243519017, 106.31904424527498
    ];

    // Dal
    let د = [
      164.98138236975473, 122.8399770753491, 12.904401918984037, 4.253217228857543,
      7.780163751329331,
    ];

    
    // Dhal
    let ذ = [
      145.52262900833296, 150.5673863730637, 111.71107583667397, 23.093399184507067, 21.920860210387662
    ];

    // Ra

    let ر = [
      157.21169267234288, 105.64344703529835, 11.980415856400388, 5.616486609793479,
      10.744343508582748,
    ];

    // Zay
    let ز = [
      142.31670441844324, 120.22892463735884, 116.89160967752595, 9.455450651647379,
      7.48136359563983,
    ];

    // Shin
    let ش = [
      165.86424296157443, 162.81993153342083, 170.02268466257914, 170.56240979880107, 174.63667241409215
    ];

    // Dad
    let ض = [
      174.8666392071489, 22.942531403992284, 11.546717227115673, 6.652436536119083,
      9.760851213084083,
    ];

    // Za
    let ظ = [
      165.55239303201725, 169.29737439744804, 82.83608270711495, 11.81125605651558,
      8.664234853960059,
    ];

    // Ghayn
    let غ = [
      173.6824140370564, 156.62396271425402, 151.6368854452986, 29.929058149872372,
      28.084574359283693,
    ];

    // Fa
    let ف = [
      126.95617249606367, 52.37904887912643, 8.342440252043831, 11.223310728532502, 12.475869923308505
    ];

    // Qaf
    let ق = [
      132.45075987014835, 93.00166019963919, 77.94377552832013, 14.67183446630772, 7.318604960320101
    ];

    // Nun
    let ن = [
      163.21789221532606, 158.74946392685456, 14.051133803318391, 4.824811658793349,
      8.276534853865776,
    ];

    // Waw
    let و = [
      168.34931470430158, 20.666316206294418, 9.872131652599524, 6.773056755063543,
      11.28787165178614,
    ];

    this.specialCharacterArray = { ب, ح, خ, د, ذ, ر, ز, ش, ض, ظ, غ, ف, ق, ن};

    this.alphabetArray = [ث, ا, ع, م, ل, ك, ج, ص, ت, ي];
  }

  public getRandomLetter = () => {
    var getRandom = Math.floor(Math.random() * this.alphabetArray.length);
    return this.alphabetArray[getRandom];
  };

  public getSpecificLetter = (findLetter) => {
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
