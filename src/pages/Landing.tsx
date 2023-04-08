import Glass from '../components/Glass';
import fidel from '@assets/logo/logo.png';
import fidelLogo from '@assets/logo/fidel-text.png';
import vector from '@assets/logo/Vector.png';
import eclips from '@assets/icons/Ellipse1.png';
function Landing() {
  return (
    <div className="flex justify-center">
      <div className="circleTop bg-[#008867] w-[170px] h-[334px] rounded-tr-full rounded-br-full absolute inset-x-0 inset-y-10 justify-self-start"></div>
      <div className="absolute right-0 inset-y-80 h-56 w-56">
        <img src={eclips} />
      </div>
      <Glass />
      <div className="absolute inset-x-[550px] inset-y-[350px] w-40">
        <img src={fidel} />
      </div>
      <div className="absolute inset-x-[710px] inset-y-[350px] w-96  font-semibold text-6xl">
        Fidel
      </div>
      <div className="absolute inset-x-[850px] inset-y-[340px] w-3 ">
        <img src={vector} />
      </div>
      <div className="absolute inset-x-[660px] inset-y-[650px] font-light ">
        Powered by ablaze laps
      </div>
    </div>
  );
}

export default Landing;
