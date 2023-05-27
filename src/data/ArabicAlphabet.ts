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
    let ث: AlphabetDefinationI = {
      letterNumber: 23,
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
    let ع = {
      letterNumber: 16,
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
    let م = {
      letterNumber: 13,
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
    let ل = {
      letterNumber: 12,
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
    let ك = {
      letterNumber: 11,
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
    let ج = {
      letterNumber: 3,
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

    let ح = [
      173.2003330937395, 152.98018241360793, 111.97824454683136, 92.07587317629145,
      73.0628422908556,
    ];

    let خ = [
      164.54136241634882, 66.19813604874199, 55.00142939598621, 44.883471151822846,
      44.62040932881721,
    ];

    let د = [
      164.98138236975473, 122.8399770753491, 12.904401918984037, 4.253217228857543,
      7.780163751329331,
    ];

    let ذ = [
      173.9864414347031, 94.03141828161658, 98.72261257183206, 9.319834411421247, 7.249525698781851,
    ];

    let ر = [
      157.21169267234288, 105.64344703529835, 11.980415856400388, 5.616486609793479,
      10.744343508582748,
    ];

    let ز = [
      142.31670441844324, 120.22892463735884, 116.89160967752595, 9.455450651647379,
      7.48136359563983,
    ];

    let ش = [
      179.098686840531, 159.32330309450214, 161.3431018496916, 154.6579301716727, 144.6363810964271,
    ];

    let ض = [
      174.8666392071489, 22.942531403992284, 11.546717227115673, 6.652436536119083,
      9.760851213084083,
    ];

    let ظ = [
      165.55239303201725, 169.29737439744804, 82.83608270711495, 11.81125605651558,
      8.664234853960059,
    ];

    let غ = [
      173.6824140370564, 156.62396271425402, 151.6368854452986, 29.929058149872372,
      28.084574359283693,
    ];

    let ف = [
      146.43770763034797, 58.326362649048896, 42.302419084717435, 36.20120450000858,
      50.92109126384249,
    ];

    let ق = [
      163.8516331663303, 153.23593443346473, 131.64897604835093, 10.765219178399553,
      6.844854507901963,
    ];

    let ن = [
      163.21789221532606, 158.74946392685456, 14.051133803318391, 4.824811658793349,
      8.276534853865776,
    ];

    let و = [
      168.34931470430158, 20.666316206294418, 9.872131652599524, 6.773056755063543,
      11.28787165178614,
    ];

    this.specialCharacterArray = { ب, ح, خ, د, ذ, ر, ز, ش, ض, ظ, غ, ف, ق, ن, و };

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
