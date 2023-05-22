import eclips from '@assets/icons/Ellipse1.png';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import vector from '@assets/logo/Vector.png';
import { AuthContext } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';

function Landing() {
  const { t } = useTranslation();
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.loading) {
      navigate('select-mode');
    }
  }, [user]);
  return (
    <div>
      <div className="relative h-screen flex items-center justify-center overflow-hidden change-bg">
        <img src={eclips} className="w-[200px] md:w-2/12 absolute right-[-100px] md:right-0 bottom-[80px] md:bottom-[15%] opacity-25 md:opacity-100" />

        <div className="circleTop bg-[#008867] w-[10rem] h-[20rem] md:w-[12rem] md:h-[22rem] rounded-tr-full rounded-br-full absolute inset-x-0 inset-y-5 justify-self-start opacity-25 md:opacity-100 left-[-40px] md:left-0"></div>
        <div className="custom-glass items-center justify-center w-10/12 aspect-[16/7] hidden md:flex">
          <Logo />
        </div>
        <div className='md:hidden flex'><Logo /></div>
      </div>
      <h1 className="fixed text-[12px] md:text-[16px] text-center bottom-5  left-0 right-0 mx-auto">
        {t('pbal')}{' '}
      </h1>
    </div>
  );
}

export default Landing;
