import React from 'react';
import handshake from '@assets/images/handshake.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const socialMediaIcons = [AiOutlineInstagram, ImTwitter, GrFacebookOption];

function SelectHand() {
  const { search } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex gap-10 relative  h-[calc(100vh-64px)] flex-col w-full  items-center">
      <button
        className="flex capitalize  justify-between absolute left-0 top-2"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeftShort size={26} />
        <span>{t('bc')}</span>
        <div></div>
      </button>
      <div className="absolute w-[14%] aspect-square top-40 left-7 rounded-full  bg-primary"></div>
      <div className="custom-glass flex w-[80%] pr-5 justify-between py-2 pt-10 ">
        <div className=""></div>
        <div className="w-10"></div>
        <div className="flex   gap-5 flex-col items-center">
          <h1 className="pan font-semibold text-5xl text-center [word-spacing:5px] w-3/4 text-white">
            {t('aylrh')}
          </h1>
          <img className="object-contain w-5/12 " src={handshake} />
          <div className="w-2/3 grow flex flex-col  font-light gap-3 text-sm text-white text-center leading-3">
            <p> {t('cthywtuf')} </p>
            <p>{t('fysur')}</p>
            <p>{t('dh')}</p>
            <p></p>
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
      <div className="flex gap-10">
        {[t('left'), t('right')].map((hand, i) => {
          return (
            <Link
              to={`/select-level${
                search.length ? search : '?'
              }&hand=${hand.toLowerCase()}`}
              key={i}
              className={` capitalize px-20 btn-sm  py-5 font-bold flex items-center justify-center rounded-xl ${
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
