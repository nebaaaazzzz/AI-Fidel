import React from 'react';
import eclips139 from '@assets/icons/Ellipse 139.png';
import eclips140 from '@assets/icons/Ellipse 140.png';
function StartingLeft({ path }) {
  return (
    <div className="relative transition-all mt-[3vh] md:mt-[10vh] h-6/12 block w-full md:h-full md:flex-1">
      <div className="w-full transition-all overflow-visible relative flex justify-center md:hidden csl:flex">
        <img src={eclips140} className="absolute transition-all  hidden md:block left-4 w-2/12 -top-10" />
        <img src={eclips139} className="w-3/12  transition-all absolute md:block hidden right-0 top-[65%]" />
        <div className="hidden transition-all md:block custom-glass relative w-10/12 aspect-video"></div>
      </div>
      <img
        src={path}
        className="md:absolute transition-all mx-auto left-0 right-0 w-[250px] md:w-[500px] csl:w-[590px] bottom-0 object-contain"
      />
    </div>
  );
}

export default StartingLeft;
