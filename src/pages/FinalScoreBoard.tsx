import LevelComplete from './ParentScoreBoard';
import stars from '@assets/icons/starts.png';
import { useTranslation } from 'react-i18next';

const FinalScoreBoard = () => {
  const { t } = useTranslation();
  return (
    <LevelComplete>
      <img src={stars} className=" mx-auto  w-2/5 mb-2" />
      <div className=" text-lg font-semibold text-[#FFF] flex justify-center">
        {t('fal')}
      </div>
      <div className="  text-5xl font-extrabold  flex justify-center">98%</div>
      <div className=" text-lg font-semibold text-[#FFF] flex justify-center">
        {t('iys')}
      </div>
      <div className="flex w-[90%] mb-4  ml-6 py-2 mt-4 bg-[#008867] font-bold justify-center border-[4px] border-[#05C294] shadow-[1px_1px_15px_rgba(0,136,103,0.5)]  rounded-xl">
        {t('ls')}
      </div>
    </LevelComplete>
  );
};

export default FinalScoreBoard;
