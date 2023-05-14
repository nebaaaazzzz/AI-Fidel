import hand from '@assets/images/hand.png';
import { useTranslation } from 'react-i18next';
function GameLeftSide({
  isGameStarted,
  selectedWord,
  selectedLetter,
  lang,
  score
}: {
  isGameStarted: boolean;
  selectedWord: string;
  selectedLetter: string;
  isMediaPipeModelLoading: boolean;
  score: number;
  lang: string;
  levelWords: string[];
}) {
  const { t } = useTranslation();
  if (isGameStarted) {
    return (
      <div className="border-2 relative w-full gap-5 md:pt-12 mt-12 md:mt-0 overflow-hidden  flex flex-[1] flex-row md:flex-col self-center border-primary  items-center justify-center rounded-lg p-4">
        <p className="self-end top-2 absolute font-extrabold text-xl">
          {score}
          {'  '} {t('pt')}
        </p>
        <div className="flex items-center text-white">
          <img
            className="w-[63%]"
            src={`/images/${
              lang == 'am' ? 'amharic' : 'english'
            }/${selectedLetter?.toUpperCase()}.png`}
          />
          <h1 className="text-[120px] text-accent">{selectedLetter}</h1>
        </div>
        <div className="flex items-center justify-center px-16 py-2  bg-[#2E2E2E] rounded-lg">
          <p className="text-white">{selectedWord}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="border-2 flex flex-col self-center border-primary  items-center justify-center rounded-lg p-5">
      <img src={hand} className="object-contain w-80 aspect-square" />
    </div>
  );
}

export default GameLeftSide;
