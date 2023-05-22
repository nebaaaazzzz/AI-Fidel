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

const ParentScoreBoard = ({ children }) => {
  let levelOne = localStorage.getItem(`levelOneScore_${localStorage.getItem('displayName')}`)
  let levelTwo = localStorage.getItem(`levelTwoScore_${localStorage.getItem('displayName')}`) 
  let levelThree = localStorage.getItem(`levelThreeScore_${localStorage.getItem('displayName')}`)
  let levelFour = localStorage.getItem(`levelFourScore_${localStorage.getItem('displayName')}`)
  let completedAll = parseInt(levelOne) > 0 && parseInt(levelTwo) > 0 && parseInt(levelThree) > 0 && parseInt(levelFour) > 0
  const { t } = useTranslation();
  return (
    <div className="change-bg flex flex-col justify-around h-[100vh]">
      <Header />
      <div className="flex gap-82 mt-8 md:mt-16 transition-all csl:mt-[-20px] justify-center csl:justify-start w-auto ml-auto mr-auto csl:w-auto flex-col md:flex-row h-[75vh] csl:ml-10  md:mr-20">
        <div className="w-[34%] flex flex-col justify-center items-center md:hidden csl:block min-w-[300px]">
          <div  className="hidden md:block h-[425px] w-auto mx-auto" >
            <img src={completedAll ? allcomplete : keepup} className='h-full ml-auto mr-auto' />
        </div>
          <Link className="md:flex hidden justify-center w-full mt-1" to="/">
            <button className="flex justify-center button-glass  text-2xl font-extrabold uppercase  py-1 w-[43%]">
              <AiFillHome className=" mt-[2px]" />
              <span className=" ml-2">{t('h')}</span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col md:ml-[5vw] md:mr-[5vw] w-[90vw] csl:w-[68%]">
          <div className=" flex flex-col w-[90%] mx-auto h-full">
          <button className="bg-[#F8B936] block uppercase w-[93%] md:w-full ml-auto mr-auto rounded-md text-[#FFF] text-lg md:text-2xl font-bold border-[4px] border-[#FAFF00] py-1 shadow-[0px_2px_10px_rgba(254,198,0,.8)]">
              {t('sb')}
            </button>
            <div className="mb-7 bg-transparent md:bg-[#2E2E2E] border-transparent md:border-[#FAFF00] border-[3px]  md:mt-7 rounded-md pt-7 px-4">
              {children}
            </div>
            <button className="flex justify-between  items-center button-glass text-xs md:text-2xl font-bold md:font-extrabold  py-1 w-[93%] mr-auto ml-auto md:w-full px-4 md:px-8">
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
