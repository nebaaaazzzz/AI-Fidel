import React from 'react';

function StartingVideoOverLay() {
  return (
    <div
      style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
      className="absolute w-full h-full flex items-center justify-center"
    >
      <div className="bg-[#683aff] h-1/2 w-9/12 flex items-center justify-center gap-10 flex-col px-14">
        <h6 className="text-[22px] text-white"> To get started</h6>
        <p className="text-[40px] text-white text-center">
          Place your hand, so it's visible on the screen
        </p>
      </div>
    </div>
  );
}

export default StartingVideoOverLay;
