// import { createRef, useEffect, useState } from 'react';
// import {
//   Link,
//   useLocation,
//   useNavigation,
//   useSearchParams
// } from 'react-router-dom';
// import BackButton from '../components/BackButton';
// import LinkwithQuery from '../components/LinkwithQuery';

// function SelectHand(props) {
//   const [isLeftMouseOver, setIsLeftMouseOver] = useState(false);
//   const [iseRightMouseOver, setIsRightMouseOver] = useState(false);
//   const leftAnchorRef = createRef<HTMLAnchorElement>();
//   const rightAnchorRef = createRef<HTMLAnchorElement>();
//   const mouseEnterHandler = (e: MouseEvent, handDir: 'LEFT' | 'RIGHT') => {
//     if (handDir == 'LEFT') {
//       setIsRightMouseOver(false);
//       setIsLeftMouseOver(true);
//     } else {
//       setIsRightMouseOver(true);
//       setIsLeftMouseOver(false);
//     }
//   };
//   useEffect(() => {
//     const leftHandler = (e: MouseEvent) => {
//       mouseEnterHandler(e, 'LEFT');
//     };
//     const rightHandler = (e: MouseEvent) => {
//       mouseEnterHandler(e, 'RIGHT');
//     };
//     leftAnchorRef.current?.addEventListener('mouseover', leftHandler);
//     rightAnchorRef.current?.addEventListener('mouseover', rightHandler);
//     leftAnchorRef.current?.addEventListener('mouseleave', leftHandler);
//     rightAnchorRef.current?.addEventListener('mouseleave', rightHandler);
//     return () => {
//       [
//         { anchorElement: leftAnchorRef, hanler: leftHandler },
//         { anchorElement: rightAnchorRef, handler: rightHandler }
//       ].map(({ anchorElement, handler }) => {
//         anchorElement.current?.removeEventListener('mouseover', handler);
//         anchorElement.current?.removeEventListener('mouseleave', handler);
//       });
//     };
//   });
//   return (
//     <div className="flex flex-col relative h-[100vh] bg-[#ffe090]  bg-top   bg-no-repeat bg-center items-center justify-center gap-10">
//       {!isLeftMouseOver && !iseRightMouseOver && (
//         <img
//           src="Screenshot_2023-02-08_at_07-07-59_Fingerspelling_with_Machine_Learning-removebg-preview(1).png"
//           width={450}
//           height={450}
//           className="absolute top-0"
//         />
//       )}
//       {isLeftMouseOver && (
//         <video
//           width={320}
//           height={320}
//           className="absolute top-14"
//           src="/left.webm"
//           autoPlay
//         ></video>
//       )}
//       {iseRightMouseOver && (
//         <video
//           width={500}
//           height={500}
//           className="absolute top-10"
//           src="/right.webm"
//           autoPlay
//         ></video>
//       )}
//       <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div>
//       <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div>
//       <BackButton url="/" />

//       <h1 className="text-[#683aff] z-30 text-4xl text-bold text-center leading-8 mb-3.5">
//         Are left or right handed?
//       </h1>
//       <h1 className="text-lg w-96 text-center z-30 text-[#683aff] inset-11">
//         Choose the hand you want to use for fingerspelling You Should use your
//         dominant hand
//       </h1>
//       <div className="flex gap-10 z-30">
//         <LinkwithQuery
//           path={'/select-language'}
//           query="hand=left"
//           text="Left"
//           ref={leftAnchorRef}
//         />
//         <LinkwithQuery
//           path={'/select-language'}
//           query="hand=right"
//           text="Right"
//           ref={rightAnchorRef}
//         />
//       </div>
//     </div>
//   );
// }

// export default SelectHand;
import React from 'react';
import handshake from '@assets/images/handshake.png';
import facebookIcon from '@assets/icons/facebook-icon.png';
import twitterIcon from '@assets/icons/twitter-icon.png';
import instaIcon from '@assets/icons/insta-icon.png';
const icons = [instaIcon, twitterIcon, facebookIcon];
function SelectHand() {
  return (
    <div className="flex gap-10 relative  h-[calc(100vh-64px)] flex-col w-full justify-center items-center">
      <div
        className="flex w-5/6 pr-5 justify-between py-3"
        style={{
          background:
            'linear-gradient(150.11deg, rgba(217, 217, 217, 0.87) -8.45%, rgba(255, 255, 255, 0.2175) -8.45%, rgba(255, 255, 255, 0.0783) 113.16%)',
          boxShadow: '0px 4px 23px 10px rgba(0, 0, 0, 0.13)',
          backdropFilter: 'blur(29px)',
          borderRadius: '49px'
        }}
      >
        <div className="absolute w-20 aspect-square top-44 -left-10 -z-10 rounded-full  bg-primary"></div>
        <div className=""></div>
        <div className="flex   prose flex-col items-center">
          <h1 className="pan  text-center w-3/4 text-white">
            Are you left or right handed?
          </h1>
          <img className="object-contain w-1/2 " src={handshake} />
          <div className="w-2/3 grow text-white text-center leading-3">
            <p> Choose the hand you want to use for </p>
            <p>fingerspelling you should use your</p>
            <p>dominant hand</p>
            <p></p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div></div>
            ))}
          {icons.map((icon) => {
            return (
              <img className="object-contain w-5 aspect-square" src={icon} />
            );
          })}
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div></div>
            ))}
        </div>
      </div>
      <div className="flex gap-10">
        {['Right', 'Left'].map((hand, i) => {
          return (
            <button
              key={i}
              className={`btn capitalize px-20 rounded-xl ${
                i == 0 ? 'bg-accent' : 'bg-primary'
              }`}
            >
              {hand}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectHand;
