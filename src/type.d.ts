export interface FingerDefinationI {
  curlMin: number;
  curlMax: number;
  special: string;
  percentageCorrect: number;
  currentAngle: number | null;
  helpText?: string;
}
export interface AlphabetDefinationI {
  letterNumber: number;
  letter: string;
  rotation: string;
  special?: string;
  thumb: FingerDefinationI;
  index: FingerDefinationI;
  middle: FingerDefinationI;
  ring: FingerDefinationI;
  little: FingerDefinationI;
}
