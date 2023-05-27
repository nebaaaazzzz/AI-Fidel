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

const ComingSoon = () => {
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
        className="flex absolute md:left-0 md:-top-8 left-7 pl-8 top-0 z-10 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeftShort size={28} />
        <span className=" mt-0.5">{t('bc')}</span>
      </div>
      <div className='h-[70vh] flex flex-col justify-between items-center mt-12 text-5xl font-bold text-yellow-500 drop-shadow-lg'>
        <div className="bg-white flex flex-col justify-center items-center h-[70vh] w-[70vw] bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-md rounded-lg p-6">
            <h3 className='animate-pulse'>Coming Soon!</h3>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
