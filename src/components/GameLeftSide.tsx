import hand from '@assets/images/hand.png';
function GameLeftSide({
  isGameStarted,
  selectedWord,
  selectedLetter,
  lang,
  score,
  isMediaPipeModelLoading,
  levelWords
}: {
  isGameStarted: boolean;
  selectedWord: string;
  selectedLetter: string;
  isMediaPipeModelLoading: boolean;
  score: number;
  lang: string;
  levelWords: string[];
}) {
  if (isGameStarted) {
    return (
      <div className="border-2 w-:full flex flex-col self-center border-primary  items-center justify-center rounded-lg p-5">
        <p className="self-end font-extrabold text-xl">
          {score}
          {'  '} ነጥብ
        </p>
        <div className="flex  gap-1 items-center text-white mx-5">
          <img
            className="w-3/4"
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
  } else if (isMediaPipeModelLoading) {
    return (
      <div className="border-2 w-:full flex flex-col self-center border-primary  items-center justify-center rounded-lg p-5">
        <img src={hand} className="object-contain w-72 aspect-square" />
      </div>
    );
  }
  return null;
}

export default GameLeftSide;
