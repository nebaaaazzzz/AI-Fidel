export const levels = [
  ['ث', 'ا', 'ع', 'م', 'ل', 'ك', 'ج', 'ص', 'ت', 'ي'],
  ['س', 'ب', 'ح', 'خ', 'د', 'ذ'],
  ['ر', 'ز', 'ش', 'ض'],
  ['ظ', 'غ', 'ف', 'ق'],
];
function getRandomWordFromLevelArabicWords(levelWords: string[]): string[] {
  if (levelWords.length < 10) {
    return levelWords;
  }
  const levelWordsLength = levelWords.length;
  let randomWordArr: string[] = [];
  const set = new Set();
  let randomWordIndexArr = [];
  let numberToCompare = levelWords.length > 9 ? 10 : levelWords.length;
  while (randomWordIndexArr.length < numberToCompare) {
    set.add(Math.floor(Math.random() * levelWordsLength));
    randomWordIndexArr = Array.from(set);
  }
  for (let i of randomWordIndexArr) {
    randomWordArr.push(levelWords[i]);
  }
  return randomWordArr;
}
export function getLevelArabicWords(passedWords: string[], levelIndex: number): string[] {
  const words = [...passedWords];
  let levelWords: string[] = []; //to hold all words in levelIndex
  let levelLetters = levels[levelIndex - 1];
  /*contain level word from levelIndex to 0 concatinated */

  for (let wordIndex in words) {
    let skip = false;
    for (let letter of words[wordIndex]) {
      if (levelLetters.includes(letter)) {
        skip = true;
        break;
      }
    }
    if (skip) {
      levelWords.push(words[wordIndex]);
      words.splice(Number(wordIndex), 1);
    }
  }

  return getRandomWordFromLevelArabicWords(levelWords);
}
