import eclips from '@assets/icons/Ellipse1.png';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import vector from '@assets/logo/Vector.png';
import { AuthContext } from '@/context/AuthContext';

function Landing() {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.loading) {
      navigate('select-mode');
    }
  }, [user]);
  return (
    <div>
      <div className="relative h-screen flex items-center justify-center">
        <img src={eclips} className="w-2/12 absolute right-0 bottom-[15%]" />

        <div className="circleTop bg-[#008867] w-[12rem] h-[22rem] rounded-tr-full rounded-br-full absolute inset-x-0 inset-y-5 justify-self-start"></div>
        <div className="custom-glass flex items-center justify-center bg-red-600 w-10/12 aspect-[16/7]">
          <Logo />
        </div>
      </div>
      <h1 className="absolute text-center bottom-5  left-0 right-0 mx-auto">
        Powered by ablaze labs{' '}
      </h1>
    </div>
  );
}

export default Landing;
