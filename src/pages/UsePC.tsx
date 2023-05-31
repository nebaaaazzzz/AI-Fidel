import eclips from '@assets/icons/Ellipse1.png';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import vector from '@assets/logo/Vector.png';
import { AuthContext } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';

import img from '@assets/logo/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import circleDashed from '@assets/images/circle-dashed.png';


const UsePC = ({message}) => {
  const { search } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex gap-10 relative overflow-x-clip h-screen flex-col w-full  items-center">

      <div className="absolute transition-all md:hidden border-8 border-white cxs:w-[240px] w-[200px] cxs:h-[240px] h-[200px] rounded-full cxs:top-[-60px] top-[-70px] right-[-70px]"></div>
      <img
        src={circleDashed}
        className="absolute transition-all block md:hidden object-contain aspect-square cxs:w-[350px] w-[300px] cxs:left-[-120px] left-[-120px] cxs:top-[-50px] top-[-60px]"
      />
      <div className="absolute hidden md:block w-[14%] aspect-square top-40 left-7 rounded-full  bg-primary"></div>

      <img src={img} alt="" className='absolute top-[20vh] opacity-50 h-12' />

      {/* Mobile Part */}
      <div className="custom-glass mx-8 h-[50%] flex flex-col gap-8 z-10 mt-[30vh] md:hidden justify-center items-center">
        <p className='-mt-12 text-center w-11/12'>This experience is not available on {message}</p>
      </div>  

      <p className="font-extralight text-[12px] text-[#a4a4a4] fixed bottom-3">{t('pbal')}</p>

    </div>
  );
}

export default UsePC
