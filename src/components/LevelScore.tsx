import coin from '@assets/icons/coin.svg';
import grayCoin from '@assets/icons/grayCoin.svg';
import { useTranslation } from 'react-i18next';
export const LevelScore = ({ level, score }) => {
  const { t } = useTranslation();
  return (
    <>
    {
      score != '0' ? (  <div className="flex gap-2 md:gap-4 mb-[30px]">
      <img src={coin} className=" max-w-[40px]" />
      <div className="flex justify-between w-full bg-[#008867]  py-1 pl-0 md:pl-6 border-[4px] border-[#05C294] shadow-[1px_1px_15px_rgba(0,136,103,0.5)]  rounded-xl ">
        <div>
          <span className='font-bold mx-2 mt-[2px]'>{t('l')}</span>
          <span className="text-lg font-bold">{level}</span>
        </div>
        <div className=" text-[#F8B936] mx-2 text-md md:text-lg font-bold w-1/3 rounded-md text-center bg-[#0D0D0D] bg-opacity-70">
          {score}%
        </div>
      </div>
    </div>) : (
      <div className="flex gap-2 md:gap-4 mb-[30px]">
      <img src={grayCoin} className=" max-w-[40px]" />
      <div className="flex justify-between w-full bg-[#5B5B5B]  py-1 pl-0 md:pl-6 border-[4px] border-[#A7A7A7] rounded-xl ">
        <div>
          <span className='font-bold mx-2 mt-[2px]'>{t('l')}</span>
          <span className="text-lg font-bold">{level}</span>
        </div>
        <div className=" text-[#F8B936] mx-2 text-md md:text-lg font-bold w-1/3 rounded-md text-center bg-[#0D0D0D] bg-opacity-70">
          {score}%
        </div>
      </div>
    </div> 
    )
    }
    </>
  );
};
