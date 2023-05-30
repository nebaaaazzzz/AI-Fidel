import hand from '@assets/images/hand.png';
import { useTranslation } from 'react-i18next';
function GameLeftSide({
  isGameStarted,
  selectedWord,
  selectedLetter,
  lang,
  score,
  handDirection,
}: {
  isGameStarted: boolean;
  selectedWord: string;
  selectedLetter: string;
  isMediaPipeModelLoading: boolean;
  score: number;
  lang: string;
  levelWords: string[];
  handDirection: string;
}) {
  const { t } = useTranslation();
  let words = {
    ث: 'Thā',
    ا: 'Alif',
    ع: 'Ayn',
    م: 'Mīm',
    ل: 'Lām',
    ك: 'Kāf',
    ج: 'Jīm',
    ص: 'Sād',
    ت: 'Tā',
    ي: 'Yā',
    ح: 'Ḥā',
    ر: 'Rā',
    ه: 'Hā',
    ط: 'Ṭā',
    ض: 'Ḍād',
    ذ: 'Dhāl',
    ز: 'Zāy',
    س: 'Sīn',
    ش: 'Shīn',
    ف: 'Fā',
    ق: 'Qāf',
    غ: 'Ghayn',
    خ: 'Khā',
    ب: 'Bā',
    ن: 'Nūn',
    و: 'Wāw',
    ظ: 'Ẓā',
    ء: 'Hamza',
    د: 'Dāl',
    ة: 'Tāʾ marbūṭah',
  };
  if (isGameStarted) {
    return (
      <div
        className={`border-2 ig:bg-green-500 h-[45%] md:h-[250px] cml:h-[100%] w-[240px] cxs:w-[300px] md:min-w-[240px] cml:min-w-[280px] md:w-[45%] transition-all rounded-3xl relative gap-5 overflow-hidden flex flex-col border-primary  items-center justify-center md:rounded-lg  ${
          handDirection == 'left' ? 'order-4' : ''
        }`}
      >
        <p className="self-end top-2 absolute font-extrabold text-md md:text-lg mr-4">
          {score}
          {'  '} {t('pt')}
        </p>
        <div className="flex items-center text-white">
          <img
            className="w-[50%]"
            src={`/images/${lang == 'am' ? 'amharic' : lang == 'ar' ? 'arabic' : 'english'}/${
              lang == 'ar' ? words[selectedLetter] : selectedLetter?.toUpperCase()
            }.png`}
          />
          <h1 className="text-[5rem] w-[50%] text-accent">{selectedLetter}</h1>
        </div>
        <div className="flex items-center justify-center px-auto py-2 w-[70%]  bg-[#2E2E2E] rounded-lg">
          <p className="text-white">{lang == 'ar' ? words[selectedWord] : selectedWord}</p>
          {/* <p className="text-white">{lang == 'ar' ? `${words[selectedLetter]}: ${selectedWord}` : selectedWord}</p> */}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`border-2 ig:bg-green-500 h-[45%] md:h-[250px] cml:h-[100%] w-[240px] cxs:w-[300px] md:min-w-[240px] cml:min-w-[280px] md:w-[45%] transition-all rounded-3xl relative gap-5 overflow-hidden flex flex-col border-primary  items-center justify-center md:rounded-lg  ${
        handDirection == 'left' ? 'order-4' : ''
      }`}
    >
      <img src={hand} className="object-contain w-[50%] aspect-square" />
    </div>
  );
}

export default GameLeftSide;
