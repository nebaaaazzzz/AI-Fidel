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
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.6)'
      }}
      className="absolute z-40   flex items-center justify-center"
    >
      <div className="text-white shadow-2xl bg-[#683aff] w-8/12 h-5/6 opacity-100 flex items-center justify-around flex-col z-50 text-bold text-2xl">
        <div></div>
        <div className="flex flex-col gap-5">
          <h6 className="text-4xl">Spell The word</h6>
          <p className="text-9xl capitalize">{nextWord}</p>
        </div>
        <div></div>
        <p>Word {wordIndex + 1} of 10 </p>
        <p ref={loadingRef} className="bg-[#fff] h-2 "></p>
      </div>
    </div>
  );
}

export default Modal;
