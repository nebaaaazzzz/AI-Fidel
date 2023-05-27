export const levels = [
  ['ث', 'ا', 'ع', 'م', 'ل', 'ك', 'ج', 'ص', 'ت', 'ي'],
  ['س', 'ب', 'ح', 'خ', 'د', 'ذ'],
  ['ر', 'ز', 'ش', 'ض'],
  ['ظ', 'غ', 'ف', 'ق'],
];
function getRandomWordFromLevelArabicWords(levelWords: string[]): string[] {
  const levelWordsLength = levelWords.length;
  let randomWordIndexArr: number[] = [];
  let randomWordArr: string[] = [];
  while (randomWordIndexArr.length < 10) {
    const randomIndex = Math.floor(Math.random() * levelWordsLength);
    if (!randomWordIndexArr.includes(randomIndex)) {
      randomWordIndexArr.push(randomIndex);
    }
  }
  // console.log(randomWordIndexArr)
  for (let i of randomWordIndexArr) {
    randomWordArr.push(levelWords[i]);
  }
  // console.log(randomWordArr)
  return randomWordArr;
}
export function getLevelArabicWords(passedWords: string[], levelIndex: number): string[] {
  const words = [...passedWords];
  let levelWords: string[] = []; //to hold all words in levelIndex
  let levelLetters = levels[levelIndex - 1];
  /*contain level word from levelIndex to 0 concatinated */

  if (levelIndex == 1) {
    return getRandomWordFromLevelArabicWords(words);
  } else {
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
  }
  

  return getRandomWordFromLevelArabicWords(levelWords);
}
