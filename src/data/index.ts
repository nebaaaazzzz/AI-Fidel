import amharicWords from './amharicwords';
import englishWords from './englishwords';
function getLanguageWords(lang: string, mode: string, level: string) {
  if (lang == 'en') {
    if (mode == 'learn') {
      return englishWords[`level${level}`];
    } else {
      return englishWords['level4'];
    }
  } else {
    return amharicWords;
  }
}

export default getLanguageWords;
