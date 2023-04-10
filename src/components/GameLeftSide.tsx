import hand from '@assets/images/hand.png';

function GameLeftSide({
  isGameStarted,
  selectedWord,
  selectedLetter,
  lang,
  score,
  levelWords
}: {
  isGameStarted: boolean;
  selectedWord: string;
  selectedLetter: string;
  score: number;
  lang: string;
  levelWords: string[];
}) {
  return (
    <div className="border-2 w-full flex flex-col self-center border-primary  items-center justify-center rounded-lg p-5">
      {isGameStarted ? (
        <>
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
        </>
      ) : (
        <img src={hand} className="object-contain w-72 aspect-square" />
      )}
    </div>
  );
}

export default GameLeftSide;
