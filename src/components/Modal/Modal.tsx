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
    <div className="absolute z-40 bg-black min-w-[320px] rounded-md w-[95%] max-w-[500px] md:max-w-full ml-auto mr-auto md:w-[100%] flex items-center justify-center h-[50%] md:h-[100%] mt-[20vh] mb-[20vh] top-[0%] md:mt-0 bg-transparent bg-opacity-70">
      <div className="text-white shadow-2xl ig:bg-[#000] w-[100%] h-[100%] opacity-100 flex items-center justify-center flex-col z-50 text-bold text-2xl  bg-opacity-50 border-[#F8B936] border-[3px] rounded-md">
        <div className="flex items-center justify-center  bg-[#F8B936] rounded-md w-[45%] h-[25%]  mt-[26%] mb-[25%] md:mb-0 md:mt-24 cml:mt-28">
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
