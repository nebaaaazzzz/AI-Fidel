import hand from '@assets/images/hand.png';

function GameLeftSide({
  isGameStarted,
  wordIndex,
  currentWordLength,
  lang
}: {
  isGameStarted: boolean;
  currentWordLength: number;
  wordIndex: number;
  lang: string;
}) {
  console.log(lang);
  console.log(wordIndex);
  console.log(currentWordLength);
  return (
    <div className="border-2 self-center border-primary flex items-center justify-center rounded-lg p-10">
      {isGameStarted ? (
        <img src="/" />
      ) : (
        <img src={hand} className="object-contain w-72 aspect-square" />
      )}
    </div>
  );
}

export default GameLeftSide;
