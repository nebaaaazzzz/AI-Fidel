import eclips from '@assets/icons/Ellipse1.png';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import vector from '@assets/logo/Vector.png';
import { AuthContext } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';

function Landing() {
  const { t } = useTranslation();

  return (
    <div className='flex w-screen h-screen p-4 text-center flex-col justify-center items-center bg-gray-600'>
      <p className='-mt-12'>This application is not available on mobile devices</p>
    </div>
  );
}

export default Landing;
