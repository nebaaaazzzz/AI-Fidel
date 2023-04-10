import stars from '@assets/images/stars.png';
import Stars from '@components/Stars';
import { Link } from 'react-router-dom';
function LevelCompleted() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col items-center gap-5">
        <button className="btn btn-primary  rounded-md w-full text-xl text-white">
          ተጠናቀቀ{' '}
        </button>
        <p className="text-white text-center rounded-md w-full ">ደረጃ 1</p>
        {/* <Stars /> */}
        <img src={stars} className="object-contain w-28" />
        <p>ያገኘሺው ነጥብ</p>
        <h1 className="text-white font-extrabold text-6xl">98%</h1>
        <button className="btn font-bold capitalize btn-outline rounded-md w-full">
          <p className="text-white font-bold text-xl"> Learn Again</p>
        </button>
        <Link
          to="/game?level=1&hand=right&lang=am&mode=learn&"
          className="btn font-bold capitalize text-xl text-black btn-accent rounded-md w-full"
        >
          ቀጥል
        </Link>
      </div>
    </div>
  );
}
export default LevelCompleted;
