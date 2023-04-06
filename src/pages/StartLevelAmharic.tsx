import React, { createRef, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import SpellingSvg from '../components/SpellingSvg';
import { levels } from '../utils/amharicindex';

function StartLevel() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const buttonRef = createRef<HTMLAnchorElement>();
  useEffect(() => {
    const mouseEnterHandler = async (e: MouseEvent) => {
      setIsMouseOver(true);
    };
    const mouseLeaveHandler = async (e: MouseEvent) => {
      setIsMouseOver(false);
    };
    buttonRef.current?.addEventListener('mouseenter', mouseEnterHandler);
    buttonRef.current?.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      buttonRef.current?.removeEventListener('mouseenter', mouseEnterHandler);
      buttonRef.current?.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  const searchParams = useSearchParams();
  const level = Number(searchParams[0].get('level'));
  return (
    <div
      className={`flex flex-col h-[100vh] bg-[#ffe090] 
    ${
      isMouseOver
        ? "bg-[url('/turn.png')]"
        : "bg-[url('/selectlevel1.png')] hover:bg-[url('/turnon.png')]"
    } 
    bg-top   bg-no-repeat bg-center items-center justify-center gap-10`}
    >
      <BackButton url={`/select-level?hand=${searchParams[0].get('hand')}`} />
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div>
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div>

      <h1 className="text-8xl text-[#683aff]">Level {level}</h1>
      <h1 className="text-xl  text-[rgb(104,58,255)]">
        እነዢን የአማርኛ ሆሄ ይማሩ{' '}
        <span className="text-[#683aff] ml-5">
          {levels[level - 1].join(' , ').toUpperCase()}
        </span>
      </h1>
      <h1 className="text-xl text-[#683aff] text-center ">
        ጨዋታዉ ሲጀምር ምስሉን ተመክተዉ <h2>እጆትን እንደ ምስሉ ያርጉ</h2>
      </h1>
      <div className="card">
        <Link
          style={{
            textTransform: 'none'
          }}
          ref={buttonRef}
          to={`/game?level=${level}&hand=${searchParams[0].get(
            'hand'
          )}&lang=${searchParams[0].get('lang')}`}
          className="btn my-2 h-14 hover:bg-white hover:text-[#683aff] rounded-3xl text-xl border-none text-white px-20 bg-[#683aff]"
        >
          Turn On Webcam
        </Link>
      </div>
    </div>
  );
}

export default StartLevel;
