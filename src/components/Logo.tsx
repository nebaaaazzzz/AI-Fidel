import React from 'react';
import fidel from '@assets/logo/fidel.png';
import fidelLogo from '@assets/logo/fidel-text.png';
const logos = [fidel, fidelLogo];
function Logo() {
  return (
    <a className="flex gap-5">
      {logos.map((logo, index) => {
        return (
          <img src={logo} className="w-14 object-contain mx-auto" key={index} />
        );
      })}
    </a>
  );
}

export default Logo;
