import LevelComplete from './LevelComplete';
import stars from '@assets/icons/starts.png';

const Complete2 = () => {
  return (
    <LevelComplete>
      <img src={stars} className=" mx-auto  w-1/2 mb-2" />
      <div className=" text-lg font-semibold text-[#FFF] flex justify-center">
        You have scored
      </div>
      <div className="  text-5xl font-extrabold  flex justify-center">98%</div>
      <div className=" text-lg font-semibold text-[#FFF] flex justify-center">
        of all the stages
      </div>
      <div className="flex w-[90%] mb-4  ml-6 py-2 mt-4 bg-[#008867] font-bold justify-center border-[4px] border-[#05C294] shadow-[1px_1px_15px_rgba(0,136,103,0.5)]  rounded-xl">
        Level Scores
      </div>
    </LevelComplete>
  );
};

export default Complete2;
