import Header from '@/components/Header';
import { AiFillHome } from 'react-icons/ai';
import { RxInstagramLogo } from 'react-icons/rx';
import { FaTiktok } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
// import complete from '@/assets/icons/complete.svg';
import allcomplete from '@/assets/icons/allcomplete.png';
import keepup from '@/assets/icons/keepup.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ParentScoreBoard = ({ children, completedAll }) => {
  console.log(completedAll)
  const { t } = useTranslation();
  return (
    <div className=" bg-[#0D0D0D]">
      <Header />
      <div className="flex gap-82 mt-8 md:mt-16 transition-all csl:mt-[-20px] justify-center csl:justify-start w-[300px] md:w-auto ml-auto mr-auto csl:w-auto flex-col md:flex-row h-[75vh] csl:ml-10  md:mr-20">
        <div className="w-[34%] block md:hidden csl:block">
          <div  className="hidden md:block h-full w-auto mx-auto" >
            <img src={completedAll ? allcomplete : keepup} className='max-h-[97%]' />
          </div>
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
            <button className="bg-[#F8B936] block uppercase w-[93%] md:w-full ml-auto mr-auto rounded-md text-[#FFF] text-xl md:text-2xl font-bold border-[4px] border-[#FAFF00] py-1 shadow-[0px_2px_10px_rgba(254,198,0,.8)]">
              {t('sb')}
            </button>
            <div className="mb-7 bg-transparent md:bg-[#2E2E2E] border-transparent md:border-[#FAFF00] border-[3px]  md:mt-7 rounded-md pt-7 px-4">
              {children}
            </div>
            <button className="flex justify-between  items-center button-glass text-lg md:text-2xl font-bold md:font-extrabold  py-1 w-[93%] mr-auto ml-auto md:w-full px-4 md:px-8">
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
