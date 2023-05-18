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
      <div className="flex gap-82 flex-col md:flex-row h-[75vh] md:ml-10 ml-0  md:mr-20 mr-0">
        <div className="w-[34%]">
          <img src={complete} className="hidden md:block max-h-[87%]  mx-auto" />
          <div className="flex md:hidden items-center flex-row md:flex-col gap-2 p-4 py-8 mr-auto md:ml-auto mt-8 md:mt-0 md:p-0">
          <div
            className={`rounded-full flex items-center justify-center w-[80px] h-[80px] aspect-square ${
              ''
            }`}
            style={{
              background: '#2E2E2E',
              boxShadow: '0px 0px 20px 4px #FFAF52'
            }}
          >
            {(
              <img
                src={'user.photo'}
                alt="user profile picture"
                className="object-contain w-1/3 rounded-full"
              />
            )}
          </div>
          <div className='pl-4'>
            <p className='opacity-50 text-sm text-left'>Hello</p>
            <h2 className='text-left text-white text-md md:text-2xl font-[500] w-[200px]'>Ablaze Labs</h2>
          </div>
        </div>
          <Link className="md:flex hidden justify-center w-full mt-1" to="/">
            <button className="flex justify-center button-glass  text-2xl font-extrabold uppercase  py-1 w-[43%]">
              <AiFillHome className=" mt-[2px]" />
              <span className=" ml-2">{t('h')}</span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-full md:w-[68%]">
          <div className=" flex flex-col w-[90%] mx-auto h-full">
            <button className="bg-[#F8B936] hidden md:block uppercase w-full rounded-md text-[#FFF] text-2xl font-bold border-[4px] border-[#FAFF00] py-1 shadow-[0px_2px_10px_rgba(254,198,0,.8)]">
              {t('sb')}
            </button>
            <div className="md:hidden flex w-[full] py-[7px] text-lg text-white mt-[5px] bg-[#008867] font-semibold justify-center rounded-xl">
              Completed
            </div>
            <p className='flex md:hidden text- text-white mt-4 font-semibold text-center ml-auto mr-auto'>Level 1</p>
            <div className="mb-7 bg-transparent md:bg-[#2E2E2E] border-transparent md:border-[#FAFF00] border-[3px]  md:mt-7 rounded-md pt-7 px-4">
              {children}
            </div>
            <div className='md:hidden flex flex-col gap-3'>
              <button className="bg-[#4b4a4a] md:hidden block w-full rounded-lg text-[#FFF] text-md font-[600] h-[40px] py-1">
                Learn Again
              </button>
              <button className="bg-[#F8B936] md:hidden block w-full rounded-lg text-[#000] text-md font-[600] h-[40px] py-1">
                Take Exam
              </button>
            </div>
            <button className="md:lex hidden justify-between  items-center button-glass  text-2xl font-extrabold  py-1 w-full   px-8">
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
