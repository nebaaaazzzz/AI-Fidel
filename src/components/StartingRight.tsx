import React from 'react';
import { Logo } from './Logo';

function StartingRight({ header1, header2, btns }) {
  return (
    <div className="flex-1 relative flex h-screen  justify-center items-center">
      <div className="flex  gap-5 w-9/12  flex-col justify-center">
        <Logo />
        <div>
          <h1 className="text-white text-5xl font-bold text-center">
            {header1}
          </h1>
          <h1 className="text-white text-5xl font-bold text-center">
            {header2}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center b">
          <h1 className="font-extralight text-center text-sm ">
            Learn the ABC in sign language with machine language .The game{' '}
          </h1>
          <span className="font-extralight text-center text-sm ">
            will using your camera and machine learning to analyze your
          </span>
          <p className="font-extralight text-center">handshapes </p>
        </div>
        <div className="flex flex-col gap-4">
          {btns.map((btn, i) => {
            return (
              <button
                className={`btn  capitalize ${
                  i == 0 ? 'btn-accent' : 'btn-primary'
                }  rounded-md`}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
      <p className=" absolute bottom-10">Powered by ablaze labs </p>
    </div>
  );
}

export default StartingRight;
