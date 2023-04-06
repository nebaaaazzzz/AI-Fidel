import React from 'react';
import Bgloading from './Background';
import { ScaleLoader } from 'react-spinners';
function Loading({ word }: { word: string }) {
  return (
    <div
      className="h-[100vh]  w-full gap-20 flex flex-col justify-center items-center bg-[#683aff]  
    bg-auto bg-no-repeat bg-center "
    >
      <Bgloading word={word} />
      <p className="text-center">
        Please Sleep While Setting Up It May Take a While
      </p>
    </div>
  );
}

export default Loading;
