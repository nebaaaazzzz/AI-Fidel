export const levels = [
  ['a', 'b', 'c', 'e', 'l', 'o', 'v', 'w', 'u', 'y'],
  ['d', 'f', 'k', 'r', 's', 'i', 't'],

  ['g', 'h', 'm', 'n', 'x'],

  ['p', 'q', 'j', 'z']
];
function getRandomWordFromLevelWords(levelWords: string[]): string[] {
  const levelWordsLength = levelWords.length;
  let randomWordIndexArr: number[] = [];
  let randomWordArr: string[] = [];
  while(randomWordIndexArr.length < 10) {
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
export function getLevelWords(
  passedWords: string[],
  levelIndex: number
): string[] {
  const words = [...passedWords];
  let levelWords: string[] = []; //to hold all words in levelIndex
  let levelLetters: string[] = []; /*contain level word from levelIndex to 0 concatinated */

  for (let i = 0; i < levelIndex; i++) {
    levelLetters = levelLetters.concat(levels[i]);
  }

  if (levelIndex == 1) {
    return getRandomWordFromLevelWords(words)
  } else {
    for (let wordIndex in words) {
      let skip = false;
      for (let letter of words[wordIndex]) {
        if (!levelLetters.includes(letter)) {
          skip = true;
        }
      }
      if (!skip) {
        levelWords.push(words[wordIndex]);
        words.splice(Number(wordIndex), 1);
      }
    }
  
    return getRandomWordFromLevelWords(levelWords);
  }

  
}
// if (!words[wordIndex].includes(letter)) {
//   levelWords.push(words[wordIndex]);
//   words.splice(wordIndex, 1);
// }
// export function getAllWordsLeveled() {
//   let allLevelWords = [];
//   for (let level of levels) {
//     let currentLevelWords = [];
//     for (let letter of level) {
//       for (let word in fourLetterWords) {
//         console.log(fourLetterWords[word]);
//         if (fourLetterWords[word].includes(letter)) {
//           currentLevelWords.push(fourLetterWords[word]);
//           fourLetterWords.splice(word, 1);
//         }
//       }
//     }
//     allLevelWords.push(currentLevelWords);
//   }
// }
