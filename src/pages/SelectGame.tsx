import Glass from '../components/Glass';
import fidel from '@assets/logo/logo1.png';
import fidelLogo from '@assets/logo/fidel-text.png';
import vector from '@assets/logo/Vector.png';
import eclips from '@assets/images/Ellipse1.png';
import boy3 from '@assets/icons/boy3.png';
import glass from '@assets/images/glass.png';
import eclips139 from '@assets/icons/Ellipse 139.png';
import eclips140 from '@assets/icons/Ellipse 140.png';
import rectangle783 from '@assets/icons/Rectangle 783.png';
import rectangle784 from '@assets/icons/Rectangle 784.png';
function SelectGame() {
  return (
    <div className="justify-center">
      <div className="absolute inset-x-0.5 inset-y-3.5 w-1/3 h-1/3 ">
        <img src={eclips140} />
      </div>

      <div className="absolute left-[430px] inset-y-[230px] w-1/3 h-1/3 ">
        <img src={eclips139} />
      </div>
      <div className="absolute inset-x-7 inset-y-[50px] w-1/3 h-1/3 ">
        <img src={glass} />
      </div>
      <div className="absolute inset-x-16 top-44 w-1/4 h-1/4 ">
        <img src={boy3} />
      </div>
      <div className="absolute left-[1100px] top-24 w-24 h-24 ">
        <img src={vector} />
      </div>
      <div className="absolute left-[955px] top-32 w-1/3 h-1/3  ">
        <img src={fidel} />
      </div>
      <div className="absolute inset-x-[920px] inset-y-[650px] font-light w-[400px]">
        Powered by ablaze laps
      </div>
      <div className="absolute inset-x-[945px] inset-y-60 text-4xl text-justify  font-semibold w-64 center">
        <p>What do </p>
      </div>
      <div className="absolute inset-x-[910px] inset-y-[270px] text-4xl text-justify  font-semibold w-72">
        <p>you Like to do</p>
      </div>
      <div className="absolute inset-x-[800px] inset-y-[350px]  text-justify font-light w-[470px]">
        Learn the ABC in sign language with machine language. The game
      </div>
      <div className="absolute inset-x-[815px] inset-y-[370px]  text-justify font-light indent-1 w-[400px]">
        will using your camera and machine learning to analyze
      </div>
      <div className="absolute inset-x-[950px] inset-y-[390px]  text-justify font-light indent-1 w-[400px]">
        handshapes
      </div>

      <button className="btn absolute inset-x-[800px] inset-y-[420px] w-[470px] capitalize text-black bg-[#F8B936] rounded-xl ">
        Resume
      </button>
      <button className="btn absolute inset-x-[800px] inset-y-[490px] w-[470px] capitalize bg-[#008867] rounded-xl ">
        New game
      </button>
    </div>
  );
}

export default SelectGame;
