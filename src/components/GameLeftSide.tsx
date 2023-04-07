import hand from '@assets/images/hand.png';

function GameLeftSide({
  isGameStarted,
  wordIndex,
  currentWordLength,
  lang,
  score,
  levelWords
}: {
  isGameStarted: boolean;
  currentWordLength: number;
  wordIndex: number;
  score: number;
  lang: string;
  levelWords: string[];
}) {
  const word = levelWords[wordIndex];
  const letter = word[currentWordLength].toUpperCase();
  return (
    <div className="border-2 flex flex-col self-center border-primary  items-center justify-center rounded-lg p-5">
      {isGameStarted ? (
        <>
          <p className="self-end">{score} ነጥብ</p>
          <div className="flex prose gap-5 items-center mx-10">
            <img className="w-44" src={`/images/english/${letter}.png`} />
            <h1 className="text-accent">{letter}</h1>
          </div>
          <div className="flex items-center justify-center px-16 py-2  bg-[#2E2E2E] rounded-lg">
            <p className="text-white">{word}</p>
          </div>
        </>
      ) : (
        <img src={hand} className="object-contain w-72 aspect-square" />
      )}
    </div>
  );
}

export default GameLeftSide;
