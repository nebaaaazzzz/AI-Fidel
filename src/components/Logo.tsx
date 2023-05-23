import fidelLogo from '@assets/logo/fidel-text.png';
import vector from '@assets/logo/Vector.png';
import fidel from '@assets/logo/logo.png';
import fidelwhite from '@assets/logo/logo1.png';
import { Link } from 'react-router-dom';

const logos = [fidel, fidelLogo];
function LogoWithText() {
  return (
    <Link to="/" className=" relative flex justify-center items-center gap-1">
      <img src={fidel} className="relative object-contain w-20 md:w-44" />
      <h1 className="text-4xl md:text-7xl self-end font-semibold text-white">Fidel</h1>
      <img className="absolute -right-4 w-3 -top-0" src={vector} />
    </Link>
  );
}
export function LogoWithTextSM() {
  return (
    <Link to="/" className="relative mt-5 flex justify-center items-center gap-1">
      <img src={fidel} className="relative object-contain w-14" />
      <h1 className="text-2xl self-end font-semibold text-white">Fidel</h1>
      <img className="absolute -right-4 w-[6%] -top-1" src={vector} />
    </Link>
  );
}
export function Logo() {
  return (
    <Link to="/" className="relative flex justify-center items-center gap-1">
      <img className="absolute w-2 left-[63%] -top-3" src={vector} />
      <img src={fidelwhite} className="relative object-contain w-32" />
    </Link>
  );
}

export default LogoWithText;
