import Header from '@/components/Header';
import { AiFillHome } from 'react-icons/ai';
import { RxInstagramLogo } from 'react-icons/rx';
import { FaTiktok } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import complete from '@/assets/icons/complete.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ParentScoreBoard = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className=" bg-[#0D0D0D]">
      <Header />
      <div className="flex gap-2   h-[75vh] ml-10  mr-20">
        <div className="w-[34%]">
          <img src={complete} className=" max-h-[87%]  mx-auto" />
          <Link className="flex justify-center w-full mt-1" to="/">
            <button className="flex justify-center button-glass  text-2xl font-extrabold uppercase  py-1 w-[43%]">
              <AiFillHome className=" mt-[2px]" />
              <span className=" ml-2">{t('h')}</span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col  w-[68%]">
          <div className=" flex flex-col w-[90%] mx-auto h-full">
            <button className="bg-[#F8B936] uppercase w-full rounded-md text-[#FFF] text-2xl font-bold border-[4px] border-[#FAFF00] py-1 shadow-[0px_2px_10px_rgba(254,198,0,.8)]">
              {t('sb')}
            </button>
            <div className="mb-7 bg-[#2E2E2E]  border-[#FAFF00] border-[3px]  mt-7 rounded-md pt-7 px-4">
              {children}
            </div>
            <button className="flex  justify-between  items-center button-glass  text-2xl font-extrabold  py-1 w-full   px-8">
              <span>{t('swf')}</span>
              <div className="flex gap-6  justify-center">
                <RxInstagramLogo />
                <BsFacebook />
                <FaTiktok />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentScoreBoard;
