import { createRef, useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigation,
  useSearchParams
} from 'react-router-dom';
import BackButton from '../components/BackButton';
import LinkwithQuery from '../components/LinkwithQuery';

function SelectHand(props) {
  const [isLeftMouseOver, setIsLeftMouseOver] = useState(false);
  const [iseRightMouseOver, setIsRightMouseOver] = useState(false);
  const leftAnchorRef = createRef<HTMLAnchorElement>();
  const rightAnchorRef = createRef<HTMLAnchorElement>();
  const mouseEnterHandler = (e: MouseEvent, handDir: 'LEFT' | 'RIGHT') => {
    if (handDir == 'LEFT') {
      setIsRightMouseOver(false);
      setIsLeftMouseOver(true);
    } else {
      setIsRightMouseOver(true);
      setIsLeftMouseOver(false);
    }
  };
  useEffect(() => {
    const leftHandler = (e: MouseEvent) => {
      mouseEnterHandler(e, 'LEFT');
    };
    const rightHandler = (e: MouseEvent) => {
      mouseEnterHandler(e, 'RIGHT');
    };
    leftAnchorRef.current?.addEventListener('mouseover', leftHandler);
    rightAnchorRef.current?.addEventListener('mouseover', rightHandler);
    leftAnchorRef.current?.addEventListener('mouseleave', leftHandler);
    rightAnchorRef.current?.addEventListener('mouseleave', rightHandler);
    return () => {
      [
        { anchorElement: leftAnchorRef, hanler: leftHandler },
        { anchorElement: rightAnchorRef, handler: rightHandler }
      ].map(({ anchorElement, handler }) => {
        anchorElement.current?.removeEventListener('mouseover', handler);
        anchorElement.current?.removeEventListener('mouseleave', handler);
      });
    };
  });
  return (
    <div className="flex flex-col relative h-[100vh] bg-[#ffe090]  bg-top   bg-no-repeat bg-center items-center justify-center gap-10">
      {!isLeftMouseOver && !iseRightMouseOver && (
        <img
          src="Screenshot_2023-02-08_at_07-07-59_Fingerspelling_with_Machine_Learning-removebg-preview(1).png"
          width={450}
          height={450}
          className="absolute top-0"
        />
      )}
      {isLeftMouseOver && (
        <video
          width={320}
          height={320}
          className="absolute top-14"
          src="/left.webm"
          autoPlay
        ></video>
      )}
      {iseRightMouseOver && (
        <video
          width={500}
          height={500}
          className="absolute top-10"
          src="/right.webm"
          autoPlay
        ></video>
      )}
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div>
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div>
      <BackButton url="/" />

      <h1 className="text-[#683aff] z-30 text-4xl text-bold text-center leading-8 mb-3.5">
        Are left or right handed?
      </h1>
      <h1 className="text-lg w-96 text-center z-30 text-[#683aff] inset-11">
        Choose the hand you want to use for fingerspelling You Should use your
        dominant hand
      </h1>
      <div className="flex gap-10 z-30">
        <LinkwithQuery
          path={'/select-language'}
          query="hand=left"
          text="Left"
          ref={leftAnchorRef}
        />
        <LinkwithQuery
          path={'/select-language'}
          query="hand=right"
          text="Right"
          ref={rightAnchorRef}
        />
      </div>
    </div>
  );
}

export default SelectHand;
