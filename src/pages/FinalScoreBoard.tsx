import LevelComplete from './ParentScoreBoard';
import stars from '@assets/icons/starts.png';
import { useTranslation } from 'react-i18next';


const FinalScoreBoard = () => {
  const { t } = useTranslation();
  return (
        <LevelComplete compStatus='all'>
          <img src={stars} className="mx-auto mt-[-15px] md:mt-0  md:w-2/5 w-[150px] mb-2" />
          <div className="text-xs mt-[15px] md:mt-0 md:text-lg font-semibold text-[#FFF] flex justify-center">
            {t('fal')}
          </div>
          <div className=" text-4xl my-[2px] md:text-5xl font-extrabold  flex justify-center">{localStorage.getItem('avg')}%</div>
          <div className="text-xs md:text-lg font-semibold text-[#FFF] flex justify-center">
            {t('iys')}
          </div>
          <div className="flex ml-auto mr-auto w-full md:w-[90%] mb-4  md:ml-6 py-2 mt-4 bg-[#008867] font-bold justify-center border-[4px] border-[#05C294] shadow-[1px_1px_15px_rgba(0,136,103,0.5)]  rounded-xl">
            {t('ls')}
          </div>
        </LevelComplete>
  );
};

export default FinalScoreBoard;
