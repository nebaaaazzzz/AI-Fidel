import React from 'react';
import fidelLogo from '@assets/logo/fidel-text.png';
import vector from '@assets/logo/Vector.png';
import fidel from '@assets/logo/logo.png';
import fidelwhite from '@assets/logo/logo1.png';

const logos = [fidel, fidelLogo];
function LogoWithText() {
  return (
    <a className=" relative flex justify-center items-center gap-1">
      <img src={fidel} className="relative object-contain w-44" />
      <h1 className="text-7xl self-end font-semibold text-white">Fidel</h1>
      <img className="absolute -right-4 w-3 -top-0" src={vector} />
    </a>
  );
}
export function LogoWithTextSM() {
  return (
    <a className=" relative flex justify-center items-center gap-1">
      <img src={fidel} className="relative object-contain w-14" />
      <h1 className="text-2xl self-end font-semibold text-white">Fidel</h1>
      <img className="absolute -right-4 w-[6%] -top-1" src={vector} />
    </a>
  );
}
export function Logo() {
  return (
    <a className="relative flex justify-center items-center gap-1">
      <img className="absolute w-2 left-[63%] -top-3" src={vector} />
      <img src={fidelwhite} className="relative object-contain w-32" />
    </a>
  );
}

export default LogoWithText;
