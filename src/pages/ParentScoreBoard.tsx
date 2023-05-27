import Header from '@/components/Header';
import { AiFillHome } from 'react-icons/ai';
import { RxInstagramLogo } from 'react-icons/rx';
import { FaTiktok } from 'react-icons/fa';
import { BsArrowLeftShort, BsFacebook } from 'react-icons/bs';
// import complete from '@/assets/icons/complete.svg';
import allcomplete from '@/assets/icons/allcomplete.png';
import keepup from '@/assets/icons/keepup.png';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ParentScoreBoard = ({ children }) => {
  let levelOne = localStorage.getItem(`levelOneScore_learn_${localStorage.getItem('displayName')}`);
  let levelTwo = localStorage.getItem(`levelTwoScore_learn_${localStorage.getItem('displayName')}`);
  let levelThree = localStorage.getItem(`levelThreeScore_learn_${localStorage.getItem('displayName')}`);
  let levelFour = localStorage.getItem(`levelFourScore_learn_${localStorage.getItem('displayName')}`);
  let completedAll =
    parseInt(levelOne) > 0 &&
    parseInt(levelTwo) > 0 &&
    parseInt(levelThree) > 0 &&
    parseInt(levelFour) > 0;
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <div className="change-bg flex flex-col justify-around h-[100vh]">
      <Header />
      <div className="flex gap-82 mt-8 db- ig:bg-white md:mt-16 transition-all csl:mt-[-5vh] justify-center csl:justify-start w-auto ml-auto mr-auto csl:w-auto flex-col md:flex-row h-[75vh] csl:ml-10  md:mr-20">
        <div className="w-[34%] db- ig:bg-red-500 my-auto flex flex-col justify-center items-center md:hidden csl:block min-w-[300px]">
          <div className="hidden md:block h-[425px] w-auto mx-auto">
            <img src={completedAll ? allcomplete : keepup} className="h-full ml-auto mr-auto" />
          </div>
          {/* <button className="flex capitalize justify-between -ml-6" onClick={() => navigate(-1)}>
            <BsArrowLeftShort size={26} />
            <span>{t('bc')}</span>
            <div></div>
          </button> */}
          <div className='w-full flex justify-center'>
            <button className="md:flex hidden justify-between pl-2 md:pl-4 px-4 md:px-8 w-[55%] mt-0 button-glass text-2xl font-extrabold uppercase py-1 " onClick={() => navigate(-1)}>
              <div className='mt-[2px]'>
                <BsArrowLeftShort size={26} />
              </div>
              <span>{t('bc')}</span>
            </button>
          </div>
        </div>
        <div className="flex db- ig:bg-orange-500 my-auto flex-col md:ml-[5vw] md:mr-[5vw] w-[90vw] csl:w-[68%]">
          <div className=" flex flex-col w-[90%] mx-auto h-full">
            <div className='h-[425px] flex flex-col justify-between'>
              <button className="bg-[#F8B936] mb-4 md:mb-0 block uppercase w-full ml-auto mr-auto rounded-md text-[#FFF] text-lg md:text-2xl font-bold border-[4px] border-[#FAFF00] py-1 shadow-[0px_2px_10px_rgba(254,198,0,.8)] cursor-default">
                {t('sb')}
              </button>
              <div className="mb-7 h-[90%] bg-[#2E2E2E] border-[#FAFF00] border-[3px]  md:mt-7 rounded-md pt-7 px-2 md:px-4">
                {children}
              </div>
            </div>

            {/* Mobile responsive version */}
            <div className="flex bg-transparent flex-row transition-all gap-2 sm:gap-1 cvs:gap-3 -mt-12  justify-between items-stretch cxs:items-center">
             


            <button className="flex csl:hidden flex-[20%] justify-between pl-2 md:pl-4 px-4 md:px-8 w-[55%] mt-12 button-glass text-[20px] font-bold uppercase py-[6px] " onClick={() => navigate(-1)}>
              <div className='mt-[2px]'>
                <BsArrowLeftShort size={26} />
              </div>
              <span>{t('bc')}</span>
            </button>

              <div className="w-2/6 block sm:hidden"></div>

              <button className="flex justify-between flex-[30%] sm:flex-[70%] items-center button-glass text-xl md:text-2xl font-bold md:font-extrabold py-2 sm:py-1 w-full cvs:w-auto csl:w-[93%] mr-auto ml-auto md:w-full px-4 md:px-8 mt-12">
                <span className="sm:flex hidden">{t('swf')}</span>
                <div className="flex gap-6 justify-center w-full sm:w-auto">
                  <RxInstagramLogo />
                  <BsFacebook />
                  <FaTiktok />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentScoreBoard;
