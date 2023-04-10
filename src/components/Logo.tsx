import React from 'react';
import fidelLogo from '@assets/logo/fidel-text.png';
import vector from '@assets/logo/Vector.png';
import fidel from '@assets/logo/logo.png';

const logos = [fidel, fidelLogo];
function Logo() {
  return (
    <a className=" relative flex justify-center items-center gap-1">
      <img src={fidel} className="relative object-contain w-44" />
      <h1 className="text-7xl self-end font-semibold text-white">Fidel</h1>
      <img className="absolute -right-7 -top-3" src={vector} />
    </a>
  );
}

export default Logo;
