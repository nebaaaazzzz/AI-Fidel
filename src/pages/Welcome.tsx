import profile from '@assets/images/avatar/avatar.png';
import { BsArrowLeftShort } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import circleDashed from '@assets/images/circle-dashed.png';
import { Link, useLocation } from 'react-router-dom';
import LeftArrowIcon from '@assets/icons/left-arrow.png';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
const socialMediaIcons = [AiOutlineInstagram, GrFacebookOption, ImTwitter];
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const { search } = useLocation();
  const user = useContext(AuthContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex gap-5 mt-20 relative h-[calc(100vh-64px)] flex-col w-full  items-center">
      <div
        className="hidden md:flex absolute left-0 -top-16 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeftShort size={28} />
        <span className=" mt-0.5">{t('bc')}</span>
      </div>
      <div className='bg'>
        <img
          src={circleDashed}
          className="absolute md:block md:-top-56 md:-right-32 object-contain aspect-square md:w-6/12 w-[400px] top-[100px] right-[-170px]"
        />
      </div>
      <div className='absolute md:hidden border-8 z-10 border-white w-[220px] h-[220px] rounded-full top-[-120px] right-[-50px]'></div>
      <div className="absolute md:w-32 w-[300px] aspect-square md:top-32 top-[-100px] md:left-5 left-[-90px] rounded-full  bg-primary"></div>
      <div className="grow text-4xl md:text-5xl absolute md:hidden text-white text-center flex flex-col top-[25%]">
        <h1 className="m-1 font-semibold text-white">{t('welcome')} </h1>
        <h1 className="m-1 font-semibold text-white">{t('to your')} </h1>
        <h1 className="m-1 font-semibold text-white">{t('lesson')}</h1>
      </div>
      <div
        className="hidden md:flex w-5/6 pr-5 justify-between py-2"
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
              src={user?.dbUser ? user?.dbUser.photoURL : profile}
              className="object-contain aspect-square w-full rounded-full"
            />
          </div>
          <div className="grow text-2xl text-white text-center flex flex-col my-10 md:my-0">
            <h1 className="m-1 font-semibold text-white">{t('welcome')} </h1>
            <h1 className="m-1 font-semibold text-white">{t('to your')} </h1>
            <h1 className="m-1 font-semibold text-white">{t('lesson')}</h1>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div></div>
            ))}
          {socialMediaIcons.map((Icon, i) => {
            return <Icon key={i} size={25} color="white" />;
          })}
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div></div>
            ))}
        </div>
      </div>
      <Link to={`/game${search}`} className="flex absolute md:relative bottom-[15%] md:bottom-[0%] gap-3 items-center ">
        <h1 className="text-white ml-10 text-sm md:text-xl">{t('gs')}</h1>
        <img src={LeftArrowIcon} className="w-2/12" />
      </Link>
    </div>
  );
}

export default Welcome;
