import fidel from '@assets/logo/logo1.png';
import vector from '@assets/logo/Vector.png';
import boy1 from '@assets/icons/boy1.png';
import glass from '@assets/images/glass.png';
import eclips139 from '@assets/icons/Ellipse 139.png';
import eclips140 from '@assets/icons/Ellipse 140.png';
import { Link, useLocation } from 'react-router-dom';
function SelectMode() {
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
      <div className="absolute inset-x-16 top-[207px] w-1/3 h-1/3 ">
        <img src={boy1} />
      </div>
      <div className="absolute left-[1100px] top-20 w-24 h-24 ">
        <img src={vector} />
      </div>
      <div className="absolute left-[950px] top-24 w-1/3 h-1/3  ">
        <img src={fidel} />
      </div>
      <div className="absolute inset-x-[960px] inset-y-[600px] font-light w-[400px]">
        Powered by ablaze labs
      </div>
      <h1
        style={{ lineHeight: '66px' }}
        className="text-center text-[50px] font-bold text-white absolute w-[400px]  left-[800px] top-[200px]"
      >
        What do
      </h1>
      <h1
        style={{ lineHeight: '66px' }}
        className="text-center text-[50px] font-bold text-white absolute w-[400px]  left-[800px] top-[250px]"
      >
        you Like to do
      </h1>
      <p className="absolute w-[561px] text-center h-[119px] top-[330px] left-[742px]">
        Learn the ABC in sign language with machine language .The game will
        using your camera and machine learning to analyze your handshapes{' '}
      </p>

      <Link
        to={`/login?mode=learn`}
        className="btn absolute inset-x-[800px] inset-y-[420px] w-[470px] capitalize text-black hover:text-white bg-[#F8B936] rounded-xl "
      >
        Education
      </Link>
      <Link
        to={`/select-game?mode=game`}
        className="btn absolute inset-x-[800px] inset-y-[490px] w-[470px] capitalize bg-[#008867] rounded-xl "
      >
        Game
      </Link>
    </div>
  );
}

export default SelectMode;
