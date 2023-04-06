import React from 'react';

function ImageAndWordContainer({ selectedLetter }: { selectedLetter: string }) {
  return (
    <div className="flex items-center gap-0">
      <img
        draggable="false"
        src={`/spellingamharic/${selectedLetter}.png`}
        className="w-7/12 object-contain"
      />
      <h1 className="text-[12rem] text-primary font-light leading-10 ">
        {selectedLetter}
      </h1>
    </div>
  );
}

export default ImageAndWordContainer;
