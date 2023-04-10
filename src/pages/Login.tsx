import boy1 from '@assets/icons/boy1.png';

import { Logo } from '@/components/Logo';
import boy2 from '@assets/icons/boy2.png';
import StartingLeft from '@/components/StartingLeft';

function Login() {
  return (
    <div className="flex h-screen">
      <StartingLeft path={boy2} />
      <div className="flex-1 relative flex h-screen  justify-center items-center">
        <div className="flex  gap-5 w-9/12  flex-col justify-center">
          <Logo />
          <div>
            <h1 className="text-white text-5xl font-bold text-center">Learn</h1>
            <h1 className="text-white text-5xl font-bold text-center">
              Sign Language
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center b">
            <h1 className="font-extralight text-center text-sm ">
              Learn the ABC in sign language with machine language .The game{' '}
            </h1>
            <span className="font-extralight text-center text-sm ">
              will using your camera and machine learning to analyze your
            </span>
            <p className="font-extralight text-center">handshapes </p>
          </div>
          <div className="flex flex-col gap-4">
            <button className="btn  capitalize btn-accent rounded-md">
              Get Started
            </button>
            <button className="btn  capitalize btn-accent rounded-md">
              Learn as a guest
            </button>
            <button className="btn capitalize btn-primary rounded-md">
              Login with google
            </button>
          </div>
        </div>
        <p className=" absolute bottom-10">Powered by ablaze labs </p>
      </div>
    </div>
  );
}
export default Login;

// import fidel from '@assets/logo/logo1.png';
// import vector from '@assets/logo/Vector.png';
// import boy2 from '@assets/icons/boy2.png';
// import glass from '@assets/images/glass.png';
// import eclips139 from '@assets/icons/Ellipse 139.png';
// import eclips140 from '@assets/icons/Ellipse 140.png';
// import { Link } from 'react-router-dom';
// function Login() {
//   return (
//     <div className="justify-center">
//       <div className="absolute inset-x-0.5 inset-y-3.5 w-1/3 h-1/3 ">
//         <img src={eclips140} />
//       </div>

//       <div className="absolute left-[430px] inset-y-[230px] w-1/3 h-1/3 ">
//         <img src={eclips139} />
//       </div>
//       <div className="absolute inset-x-7 inset-y-[50px] w-1/3 h-1/3 ">
//         <img src={glass} />
//       </div>
//       <div className="absolute inset-x-16 top-[247px] w-1/3 h-1/3 ">
//         <img src={boy2} />
//       </div>
//       <div className="absolute left-[1100px] top-24 w-24 h-24 ">
//         <img src={vector} />
//       </div>
//       <div className="absolute left-[955px] top-32 w-1/3 h-1/3  ">
//         <img src={fidel} />
//       </div>
//       <div className="absolute inset-x-[920px] inset-y-[650px] font-light w-[400px]">
//         Powered by ablaze laps
//       </div>
//       <h1
//         style={{ lineHeight: '66px' }}
//         className="text-center text-[50px] font-bold text-white absolute w-[400px]  left-[800px] top-[200px]"
//       >
//         Learn
//       </h1>
//       <h1
//         style={{ lineHeight: '66px' }}
//         className="text-center text-[50px] font-bold text-white absolute w-[400px]  left-[800px] top-[250px]"
//       >
//         Sign Language
//       </h1>
//       <p className="absolute w-[561px] text-center h-[119px] top-[330px] left-[742px]">
//         Learn the ABC in sign language with machine language .The game will
//         using your camera and machine learning to analyze your handshapes{' '}
//       </p>
//       <button className="btn absolute inset-x-[800px] inset-y-[420px] w-[470px] capitalize text-black bg-[#F8B936] rounded-xl ">
//         Get Started
//       </button>
//       <Link
//         to="/select-profile"
//         className="btn absolute inset-x-[800px] inset-y-[490px] w-[470px] capitalize bg-[#008867] rounded-xl "
//       >
//         Learn as a guest
//       </Link>
//       <button className="btn absolute inset-x-[800px] inset-y-[550px] w-[470px] capitalize bg-[#008867] rounded-xl ">
//         Login with Google
//       </button>
//     </div>
//   );
// }

// export default Login;
