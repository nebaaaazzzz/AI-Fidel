import React, { useEffect, createRef } from 'react';
import './index.css';
function Modal({
  nextWord,
  wordIndex
}: {
  nextWord: string;
  wordIndex: number;
}) {
  const loadingRef = createRef<HTMLParagraphElement>();
  useEffect(() => {
    loadingRef.current?.classList.add('changing-width');
    return () => {
      loadingRef.current?.classList.remove('changing-width');
    };
  }, []);
  return (
    <div className="absolute z-40   flex items-center justify-center px-[3%] cxm:px-[10%] md:px-0 w-[100%] h-[100%] bg-black bg-opacity-70">
      <div className="text-white shadow-2xl bg-[#000] w-[100%] h-[100%] opacity-100 flex items-center justify-center flex-col z-50 text-bold text-2xl  bg-opacity-50 border-[#F8B936] border-[3px] rounded-md">
        <div className="flex items-center justify-center  bg-[#F8B936] rounded-md w-[45%] h-[25%]   mt-28">
          <p className=" text-5xl font-extrabold capitalize text-[#000]">
            {nextWord}
          </p>
        </div>
        <p ref={loadingRef} className="bg-[#fff] h-2  mt-auto"></p>
      </div>
    </div>
  );
}

export default Modal;
