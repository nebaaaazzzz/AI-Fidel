import React from 'react';

function ImageAndWordContainer({ selectedLetter }: { selectedLetter: string }) {
  return (
    <div className="flex items-center gap-10">
      <img
        draggable="false"
        src={`/spelling/${selectedLetter}.png`}
        className="w-11/12 h-96 object-contain "
      />
      <h1 className="text-[20rem] text-primary font-light leading-10 ">
        {selectedLetter}
      </h1>
    </div>
  );
}

export default ImageAndWordContainer;
