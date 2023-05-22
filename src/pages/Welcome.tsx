import profile from '@assets/images/avatar/avatar.png';
import { BsArrowLeftShort } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import circleDashed from '@assets/images/circle-dashed.png';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import LeftArrowIcon from '@assets/icons/left-arrow.png';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '@/context/AuthContext';
import { useContext, useEffect, useState } from 'react';
const socialMediaIcons = [AiOutlineInstagram, GrFacebookOption, ImTwitter];
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { search } = useLocation();
  const [isLevelOne, setIsLevelOne] = useState(false);
  const user = useContext(AuthContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const level = useSearchParams()[0].get('level');
  useEffect(() => {
    if (level == '1') {
      setIsLevelOne(true);
    }
  }, [isLevelOne]);
  return (
    <div className="flex gap-5 mt-20 relative h-[calc(100vh-64px)] flex-col w-full items-center">
      <div
        className="hidden md:flex absolute left-0 -top-16 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeftShort size={28} />
        <span className=" mt-0.5">{t('bc')}</span>
      </div>
      <div className=''>
        <img
          src={circleDashed}
          className="absolute md:top-[-10rem] md:right-[-7rem] csl:top-[-9rem] csl:right-[-6rem] cml:top-[-13rem] cml:right-[-7rem] object-contain aspect-square md:w-6/12 w-[400px] right-[-55vw] top-[6rem]"
        />
      </div>
      <div className='absolute md:hidden border-8 z-10 border-white w-[220px] h-[220px] rounded-full top-[-120px] right-[-50px]'></div>
      <div className="absolute md:w-32 w-[340px] aspect-square md:top-32 top-[-100px] md:left-0 csl:left-2 cml:left-5 cml:top-[100px] left-[-90px] rounded-full  bg-primary"></div>
      <div className="grow text-5xl transition-all cxm:text-5xl cvs:text-[55px] cvs:top-[20%] cxl:top-[17%] cxl:text-6xl md:top-[25%] md:text-5xl absolute md:hidden text-white text-center flex flex-col top-[25%]">
        <h1 className="m-1 font-semibold text-white">{t('welcome')} </h1>
        <h1 className="m-1 font-semibold text-white">
          {t('tyr')} {' '} <p className='block md:hidden pt-6'> {isLevelOne ? "first" : " "} </p>
          {/* {isLevelOne ? t('tyrf') : t('tyr')} */}
        </h1>
        <h1 className="m-1 font-semibold text-white">{t('lesson')}</h1>
      </div>
      <div
        className="hidden md:flex h-[50vh] w-5/6 pr-5 justify-between py-2"
        style={{
          background:
            'linear-gradient(150.11deg, rgba(217, 217, 217, 0.87) -8.45%, rgba(255, 255, 255, 0.2175) -8.45%, rgba(255, 255, 255, 0.0783) 113.16%)',
          boxShadow: '0px 4px 23px 10px rgba(0, 0, 0, 0.13)',
          backdropFilter: 'blur(29px)',
          borderRadius: '49px'
        }}
      >
        <div className=""></div>
        <div className="flex prose ml-8 flex-col items-center">
          <div
            className="rounded-full w-32 h-32 p-5 -mt-14 flex items-center justify-center"
            style={{
              background: '#2E2E2E',
              boxShadow: '0px 0px 46px 4px #FFAF52'
            }}
          >
            <img
              src={user?.user ? user?.photo : localStorage.getItem('photo')}
              className="object-contain aspect-square w-full rounded-full"
            />
          </div>
          <div className="grow text-2xl text-white text-center flex flex-col justify-evenly my-10 md:my-0">
            <h1 className="m-1 font-semibold text-white">{t('welcome')} </h1>
            <h1 className="m-1 font-semibold text-white">
              {isLevelOne ? t('tyrf') : t('tyr')}
            </h1>
            <h1 className="m-1 font-semibold text-white">{t('lesson')}</h1>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div key={i}></div>
            ))}
          {socialMediaIcons.map((Icon, i) => {
            return <Icon key={i} size={25} color="white" />;
          })}
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div key={i}></div>
            ))}
        </div>
      </div>
      <Link to={`/game${search}`} className="flex absolute md:relative cxl:bottom-[25%] bottom-[20%] md:bottom-[0%] gap-3 items-center ">
        <h1 className="text-white ml-10 text-sm md:text-xl">{t('gs')}</h1>
        <img src={LeftArrowIcon} className="w-2/12" />
      </Link>
    </div>
  );
};

export default Welcome;
