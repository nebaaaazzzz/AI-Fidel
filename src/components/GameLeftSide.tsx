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
    <div className="border-2 flex flex-col self-center border-primary  items-center justify-center rounded-lg p-5">
      {isGameStarted ? (
        <>
          <p className="self-end">{score} ነጥብ</p>
          <div className="flex prose gap-5 items-center mx-10">
            <img
              className="w-44"
              src={`/images/${
                lang == 'am' ? 'amharic' : 'english'
              }/${selectedLetter?.toUpperCase()}.png`}
            />
            <h1 className="text-accent">{selectedLetter}</h1>
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
