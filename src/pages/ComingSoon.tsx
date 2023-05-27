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
import Header from '@/components/Header';
import LeftSideBar from '@/components/LeftSideBar';
import RightSideBar from '@/components/RightSideBar';

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
    <div className="ig:bg-[#0d0d0d] change-bg h-[100vh]">
    <Header />
    <div className="flex gap-10 p-0 md:p-14 md:pt-0 px-0 md:px-6">
      <LeftSideBar />
      <div className="flex-[3] transition-all flex-shrink overflow-hidden md:mt-12 csl:mt-0">
      <div className="flex gap-5 mt-20 relative h-[calc(100vh-64px)] flex-col w-full items-center">
      <div className='h-[70vh] flex flex-col justify-between items-center md:-mt-12 transition-all md:ml-12 text-[25px] sm:text-[50px] cxs:text-[30px] md:text-[60px] csl:text-[70px] cml:text-[90px] font-bold text-yellow-500 drop-shadow-lg'>
        <div className="flex flex-col justify-center items-center h-[70vh] w-[100vw] md:w-[70vw] rounded-lg p-6">
            <h3 className='animate-pulse'>Coming Soon!</h3>
        </div>
      </div>
    </div>
      </div>
      <RightSideBar />
    </div>
  </div>
  );
};

export default ComingSoon;
