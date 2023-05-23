import hand from '@assets/images/hand.png';
import { useTranslation } from 'react-i18next';
function GameLeftSide({
  isGameStarted,
  selectedWord,
  selectedLetter,
  lang,
  score,
  handDirection
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
  if (isGameStarted) {
    return (
      <div className={`border-2 ig:bg-green-500 h-[45%] md:h-[250px] cml:h-[300px] w-[240px] cxs:w-[300px] md:min-w-[240px] cml:min-w-[280px] md:w-[45%] transition-all rounded-3xl relative gap-5 overflow-hidden flex flex-col border-primary  items-center justify-center md:rounded-lg  ${handDirection == "left" ? 'order-4' :''}`}>
        <p className="self-end top-2 absolute font-extrabold text-md md:text-lg mr-4">
          {score}
          {'  '} {t('pt')}
        </p>
        <div className="flex items-center text-white">
          <img
            className="w-[50%]"
            src={`/images/${
              lang == 'am' ? 'amharic' : 'english'
            }/${selectedLetter?.toUpperCase()}.png`}
          />
          <h1 className="text-[5rem] w-[50%] text-accent">{selectedLetter}</h1>
        </div>
        <div className="flex items-center justify-center px-16 py-2  bg-[#2E2E2E] rounded-lg">
          <p className="text-white">{selectedWord}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={`border-2 ig:bg-green-500 h-[45%] md:h-[250px] cml:h-[300px] w-[240px] cxs:w-[300px] md:min-w-[240px] cml:min-w-[280px] md:w-[45%] transition-all rounded-3xl relative gap-5 overflow-hidden flex flex-col border-primary  items-center justify-center md:rounded-lg  ${handDirection == "left" ? 'order-4' :''}`}>
      <img src={hand} className="object-contain w-[50%] aspect-square" />
    </div>
  );
}

export default GameLeftSide;
