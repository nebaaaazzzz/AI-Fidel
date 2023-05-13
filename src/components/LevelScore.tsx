import coin from '@assets/icons/coin.svg';
import { useTranslation } from 'react-i18next';
export const LevelScore = ({ level, score }) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 mb-[30px]">
      <img src={coin} className=" max-w-[40px]" />
      <div className="flex w-full bg-[#008867]  py-1 pl-6 border-[4px] border-[#05C294] shadow-[1px_1px_15px_rgba(0,136,103,0.5)]  rounded-xl ">
        <span className='font-bold mr-2 mt-[2px]'>{t('l')}</span>
        <span className="text-lg font-bold">{level}</span>
        <div className=" ml-32 text-[#F8B936]  py-0 text-lg font-bold w-1/3 rounded-md text-center bg-[#0D0D0D] bg-opacity-70">
          {score}%
        </div>
      </div>
    </div>
  );
};
