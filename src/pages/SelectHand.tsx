import React from 'react';
import handshake from '@assets/images/handshake.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import circleDashed from '@assets/images/circle-dashed.png';
const socialMediaIcons = [AiOutlineInstagram, ImTwitter, GrFacebookOption];

function SelectHand() {
  const { search } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex gap-10 relative overflow-x-clip h-[calc(100vh-64px)] flex-col w-full  items-center">
      <button
        className=" md:first-letter:flex capitalize  justify-between absolute left-0 top-4"
        onClick={() => navigate(-1)}
      >
        <div className='flex'>
        <BsArrowLeftShort size={26} />
        <span className=' mt-[2px]'>{t('bc')}</span>
        </div>
        <div></div>
      </button>
      <div className="absolute transition-all md:hidden border-8 border-white cxs:w-[240px] w-[200px] cxs:h-[240px] h-[200px] rounded-full cxs:top-[-60px] top-[-70px] right-[-70px]"></div>
      <img
        src={circleDashed}
        className="absolute transition-all block md:hidden object-contain aspect-square cxs:w-[350px] w-[300px] cxs:left-[-120px] left-[-120px] cxs:top-[-50px] top-[-60px]"
      />
      <div className="absolute hidden md:block w-[14%] aspect-square top-40 left-7 rounded-full  bg-primary"></div>

      {/* Mobile Part */}
      <div className="bg-gray- h-screen flex flex-col gap-8 z-10 mt-[13vh] md:hidden justify-center items-center">
        <h1 className="flex transition-all justify-center cxl:text-5xl font-semibold text-4xl text-center w-3/4 text-white">
          {t('aylrh')}
        </h1>
        <img className="transition-all w-2/3 max-w-[200px]" src={handshake} />
        <div className="w-2/3 transition-all flex-col font-light text-xs text-white text-center">
          <p>
            {' '}
            {t('cthywtuf')} <br />
            {t('fysur')} <br className="hidden cxm:block md:hidden" /> {t('dh')}
          </p>
        </div>
      </div>

      {/* <h1 className="flex transition-all justify-center cxs:mt-[190px] cxl:mt-[180px] mt-[150px] cxl:text-5xl md:hidden pan font-semibold text-4xl text-center w-3/4 text-white">
              {t('aylrh')}
        </h1>
        <img className="block transition-all md:hidden object-contain w-[12rem] mt-[5%] " src={handshake} />
        <div className="w-2/3 transition-all cxl:w-1/3 mt-36 cxl:mt-40 top-[50%] absolute grow opacity-50 flex md:hidden flex-col font-light text-xs text-white text-center">
          <p> {t('cthywtuf')}{' '}{t('fysur')}{' '}{t('dh')}</p>
        </div> */}

      <div className="custom-glass hidden md:flex w-[80%] pr-5 justify-between py-[5vh] md:mt-[5vh] csl:mt-0 pt-10 ">
        <div className=""></div>
        <div className="w-10"></div>
        <div className="flex gap-5 flex-col items-center h-[50vh]">
          <h1 className="pan font-semibold csl:text-4xl text-4xl text-center [word-spacing:5px] w-3/4 text-white">
            {t('aylrh')}
          </h1>
          <img className="object-contain w-5/12 " src={handshake} />
          <div className="w-2/3 grow flex flex-col justify-center items-center font-light gap-3 text-sm text-white text-center leading-loose">
            <p>
              {' '}
              {t('cthywtuf')} {t('fysur')} {t('dh')}
            </p>
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
      <div className="flex gap-10 absolute md:relative top-[90%] md:top-[0] z-10">
        {[t('left'), t('right')].map((hand, i) => {
          return (
            <Link
              to={`/select-level${search.length ? search : '?'}&hand=${hand.toLowerCase()}`}
              key={i}
              className={` capitalize px-12 md:px-20 btn-sm  py-5 font-bold flex items-center justify-center rounded-xl ${
                i == 0 ? 'btn-accent' : 'btn-primary'
              }`}
            >
              {hand}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SelectHand;
