import amharicWords from './amharicwords';
import arabicWords from './arabicwords';
import englishWords from './englishwords';

function getLanguageWords(lang: string, mode: string, level: string) {
  if (lang == 'en') {
    if (mode == 'learn') {
      return englishWords[`level${level}`];
    } else {
      return englishWords['level4'];
    }
  } else if (lang == 'ar') {
    return arabicWords
  } else {
    return amharicWords;
  }
}

export default getLanguageWords;
