import ParentScoreBoard from './ParentScoreBoard';
import stars from '@assets/icons/starts.png';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const useGetSearchParams = (searchParams: URLSearchParams) => {
  const mode = searchParams.get('mode');
  const score = searchParams.get('score');
  // searchParams.delete('points');

  return { mode, score };
};

const FinalScoreBoard = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams()[0];
  const { mode, score } = useGetSearchParams(searchParams);

  let totalScore = score

  return (
    <ParentScoreBoard>
      <div className='flex flex-col gap-[6px] h-full justify-evenly'>
        <img src={stars} className="mx-auto bg-whie m-[-15px] w-[150px] md:w-[225px] mb-2" />
        <div className="text-xs mt-[15px] md:mt-0 md:text-lg font-semibold text-[#D6CBCB] flex justify-center">
          {t('fal')}
        </div>
        <div className=" text-4xl my-[2px] md:text-5xl font-extrabold  flex justify-center">
          {totalScore}%
        </div>
        <div className="text-xs md:text-lg font-semibold text-[#D6CBCB] flex justify-center">
          {t('iys')}
        </div>
        <div className="flex ml-auto mr-auto w-full md:w-[90%] mb-4  md:ml-6 py-2 mt-4 bg-[#008867] font-bold justify-center border-[4px] border-[#05C294] shadow-[1px_1px_15px_rgba(0,136,103,0.5)]  rounded-xl">
          {t('ls')}
        </div>
      </div>
    </ParentScoreBoard>
  );
};

export default FinalScoreBoard;
