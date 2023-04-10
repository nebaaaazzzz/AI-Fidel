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
import { Link } from 'react-router-dom';
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
      <h1
        style={{ lineHeight: '66px' }}
        className="text-center text-[50px] font-bold text-white absolute w-[400px]  left-[800px] top-[200px]"
      >
        Welcome
      </h1>
      <h1
        style={{ lineHeight: '66px' }}
        className="text-center text-[50px] font-bold text-white absolute w-[400px]  left-[800px] top-[250px]"
      >
        back
      </h1>
      <p className="absolute w-[561px] text-center h-[119px] top-[330px] left-[742px]">
        Learn the ABC in sign language with machine language .The game will
        using your camera and machine learning to analyze your handshapes{' '}
      </p>

      <Link
        to="/select-level"
        className="btn absolute inset-x-[800px] inset-y-[420px] w-[470px] hover:text-white capitalize text-black bg-[#F8B936] rounded-xl "
      >
        Resume
      </Link>
      {/* TODO delete existing session */}
      <Link
        to="/select-level"
        className="btn absolute inset-x-[800px] inset-y-[490px] w-[470px] capitalize bg-[#008867] rounded-xl "
      >
        New game
      </Link>
    </div>
  );
}

export default SelectGame;
