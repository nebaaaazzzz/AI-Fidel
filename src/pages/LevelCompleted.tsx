import stars from '@assets/images/stars.png';
import Stars from '@components/Stars';
function LevelCompleted() {
  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col items-center gap-5">
        <button className="btn btn-primary rounded-md w-full ">ደረጃ 1</button>
        {/* <Stars /> */}
        <p className="">እነዚህን የአማርኛ ሆሄ ይማሩ</p>
        <img src={stars} className="object-contain w-28" />
        <p>ያገኘሺው ነጥብ</p>
        <h1 className="text-white text-6xl">98%</h1>
        <button className="btn capitalize btn-outline rounded-md w-full">
          Learn Again
        </button>
        <button className="btn capitalize text-black btn-accent rounded-md w-full">
          Take Exam
        </button>
      </div>
    </div>
  );
}
export default LevelCompleted;
