import boy1 from '@assets/icons/boy1.png';
import eclips139 from '@assets/icons/Ellipse 139.png';
import eclips140 from '@assets/icons/Ellipse 140.png';
import { Logo } from '@/components/Logo';
function SelectMode() {
  return (
    <div className="flex h-screen">
      <div className="relative mt-14 w-full  flex-1">
        <div className="w-full relative flex justify-center">
          <img src={eclips140} className="absolute left-0 -top-10" />
          <img src={eclips139} className="w-3/12 absolute right-0 top-[55%]" />
          <div className="glass relative w-10/12 aspect-video"></div>
        </div>
        <img
          src={boy1}
          className="absolute mx-auto left-0 right-0 w-2/3 bottom-0 object-contain"
        />
      </div>
      <div className="flex-1 relative flex h-screen  justify-center items-center">
        <div className="flex  gap-5 w-9/12  flex-col justify-center">
          <Logo />
          <div>
            <h1 className="text-white text-5xl font-bold text-center">
              What do
            </h1>
            <h1 className="text-white text-5xl font-bold text-center">
              you Like to do
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
              Education
            </button>
            <button className="btn capitalize btn-primary rounded-md">
              Game
            </button>
          </div>
        </div>
        <p className=" absolute bottom-10">Powered by ablaze labs </p>
      </div>
    </div>
  );
}
export default SelectMode;
