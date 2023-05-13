import React from 'react';
import eclips139 from '@assets/icons/Ellipse 139.png';
import eclips140 from '@assets/icons/Ellipse 140.png';
function StartingLeft({ path }) {
  return (
    <div className="relative mt-[-150px] md:mt-14 w-full h-full flex-1">
      <div className="w-full relative flex justify-center">
        <img src={eclips140} className="absolute hidden md:block left-4 w-2/12 -top-10" />
        <img src={eclips139} className="w-3/12 absolute md:block hidden right-0 top-[65%]" />
        <div className="hidden md:block custom-glass relative w-10/12 aspect-video"></div>
      </div>
      <img
        src={path}
        className="absolute mx-auto left-0 right-0 w-[250px] md:w-3/4 bottom-0 object-contain"
      />
    </div>
  );
}

export default StartingLeft;
