import React, { MouseEventHandler } from 'react';

function LeftBottomContainer({
  selectedWord,
  currentWordLength,
  handleSkip
}: {
  selectedWord: string;
  currentWordLength: number;
  handleSkip: MouseEventHandler;
}) {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex">
        <h1 className="text-6xl text-[#683aff]  capitalize ">
          {selectedWord?.slice(0, currentWordLength - 1)}
        </h1>
        <h1 className="text-6xl text-[#683aff] opacity-70 ">
          {selectedWord?.slice(currentWordLength - 1)}
        </h1>
      </div>

      <button
        onClick={handleSkip}
        className="btn w-52 rounded-3xl hover:text-white hover:bg-[#683aff] hover:border-none bg-white mt-5 text-[#683aff] border-[1px] border-[#683aff]"
      >
        Skip Letter
      </button>
    </div>
  );
}

export default LeftBottomContainer;
