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
          {/* <Link
            className="md:flex hidden justify-center w-full mt-1"
            to={completedAll ? '/' : '/select-level?mode=game'}
          >
            <button className="flex justify-center button-glass  text-2xl font-extrabold uppercase  py-1 w-[43%]">
              {completedAll ? (
                <AiFillHome className={`mt-[2px]`} />
              ) : (
                <svg
                  className="relative top-[4px]"
                  width="25pt"
                  height="25pt"
                  version="1.1"
                  viewBox="0 0 700 700"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      fill="#d6cbcb"
                      d="m340.61 190.7c-64.32 0.070312-125.99 25.656-171.47 71.137-45.48 45.484-71.066 107.15-71.141 171.47 0 5.418 0.17578 10.816 0.52734 16.156 18.895-48.777 52.16-90.664 95.391-120.12 43.23-29.449 94.387-45.074 146.7-44.805l96.535 0.71875c1.6992 0.011719 3.0703 1.3945 3.0703 3.0898v68.195c0 3.3984 1.9609 6.4922 5.0352 7.9453 3.0703 1.4531 6.707 1.0039 9.332-1.1562l144.21-118.6c2.0312-1.6719 3.207-4.1602 3.207-6.7891 0-2.6289-1.1758-5.1211-3.207-6.7891l-144.21-118.6c-2.625-2.1562-6.2617-2.6055-9.332-1.1523-3.0742 1.4492-5.0352 4.543-5.0352 7.9414v68.238c0 1.707-1.3828 3.0898-3.0898 3.0898z"
                    />
                    <use x="70" y="728" xlinkHref="#l" />
                    <use x="111.097656" y="728" xlinkHref="#c" />
                    <use x="138.714844" y="728" xlinkHref="#b" />
                    <use x="176.695312" y="728" xlinkHref="#a" />
                    <use x="214.484375" y="728" xlinkHref="#h" />
                    <use x="241.253906" y="728" xlinkHref="#b" />
                    <use x="279.234375" y="728" xlinkHref="#g" />
                    <use x="338.816406" y="728" xlinkHref="#f" />
                    <use x="378.902344" y="728" xlinkHref="#e" />
                    <use x="434.902344" y="728" xlinkHref="#a" />
                    <use x="472.691406" y="728" xlinkHref="#d" />
                    <use x="512.777344" y="728" xlinkHref="#k" />
                    <use x="552.644531" y="728" xlinkHref="#j" />
                    <use x="605.472656" y="728" xlinkHref="#c" />
                    <use x="633.089844" y="728" xlinkHref="#a" />
                    <use x="670.878906" y="728" xlinkHref="#i" />
                  </g>
                </svg>
              )}
              <span className=" ml-2">{completedAll ? t('h') : t('next')}</span>
            </button>
          </Link> */}
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
            <div className="flex flex-row transition-all gap-2 sm:gap-1 cvs:gap-3 justify-between items-stretch cxs:items-center">
              {/* <button className="flex csl:hidden justify-between flex-[30%] items-center button-glass text-xl md:text-2xl font-bold md:font-extrabold  py-[1px] md:py-1 csl:w-[93%] mr-auto ml-auto md:w-full px-4 md:px-8">
                <span className=" ml-2">{completedAll ? t('h') : t('next')}</span>
                <div className="flex gap-6  justify-center">
                  {completedAll ? (
                    <AiFillHome className={`mt-[2px]`} />
                  ) : (
                    <svg
                      className="relative top-[4px]"
                      width="25pt"
                      height="25pt"
                      version="1.1"
                      viewBox="0 0 700 700"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g>
                        <path
                          fill="#d6cbcb"
                          d="m340.61 190.7c-64.32 0.070312-125.99 25.656-171.47 71.137-45.48 45.484-71.066 107.15-71.141 171.47 0 5.418 0.17578 10.816 0.52734 16.156 18.895-48.777 52.16-90.664 95.391-120.12 43.23-29.449 94.387-45.074 146.7-44.805l96.535 0.71875c1.6992 0.011719 3.0703 1.3945 3.0703 3.0898v68.195c0 3.3984 1.9609 6.4922 5.0352 7.9453 3.0703 1.4531 6.707 1.0039 9.332-1.1562l144.21-118.6c2.0312-1.6719 3.207-4.1602 3.207-6.7891 0-2.6289-1.1758-5.1211-3.207-6.7891l-144.21-118.6c-2.625-2.1562-6.2617-2.6055-9.332-1.1523-3.0742 1.4492-5.0352 4.543-5.0352 7.9414v68.238c0 1.707-1.3828 3.0898-3.0898 3.0898z"
                        />
                        <use x="70" y="728" xlinkHref="#l" />
                        <use x="111.097656" y="728" xlinkHref="#c" />
                        <use x="138.714844" y="728" xlinkHref="#b" />
                        <use x="176.695312" y="728" xlinkHref="#a" />
                        <use x="214.484375" y="728" xlinkHref="#h" />
                        <use x="241.253906" y="728" xlinkHref="#b" />
                        <use x="279.234375" y="728" xlinkHref="#g" />
                        <use x="338.816406" y="728" xlinkHref="#f" />
                        <use x="378.902344" y="728" xlinkHref="#e" />
                        <use x="434.902344" y="728" xlinkHref="#a" />
                        <use x="472.691406" y="728" xlinkHref="#d" />
                        <use x="512.777344" y="728" xlinkHref="#k" />
                        <use x="552.644531" y="728" xlinkHref="#j" />
                        <use x="605.472656" y="728" xlinkHref="#c" />
                        <use x="633.089844" y="728" xlinkHref="#a" />
                        <use x="670.878906" y="728" xlinkHref="#i" />
                      </g>
                    </svg>
                  )}
                </div>
              </button> */}


              <button className="flex csl:hidden justify-between flex-[30%] items-center button-glass text-xl md:text-2xl font-bold md:font-extrabold  py-[4px] md:py-1 csl:w-[93%] mr-auto ml-auto md:w-full px-4 pl-2 md:pl-4 md:px-8" onClick={() => navigate(-1)}>
                <div className=' '>
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
