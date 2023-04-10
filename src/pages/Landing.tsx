import eclips from '@assets/icons/Ellipse1.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('select-mode');
    }, 3000);
  }, []);
  return (
    <div>
      <div className="absolute right-2 inset-y-56 h-56 w-60">
        <img src={eclips} />
      </div>
      <div className="relative h-screen flex items-center justify-center">
        <div className="circleTop bg-[#008867] w-[12rem] h-[22rem] rounded-tr-full rounded-br-full absolute inset-x-0 inset-y-5 justify-self-start"></div>
        <div className="glass flex items-center justify-center bg-red-600 w-10/12 aspect-[16/7]">
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
