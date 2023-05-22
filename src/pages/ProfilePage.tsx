import { RxInstagramLogo } from 'react-icons/rx';
import { RiFacebookFill } from 'react-icons/ri';
import { SiSteelseries, SiTwitter } from 'react-icons/si';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdArrowBack } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { useEffect, useState, useRef } from 'react';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import profile1 from '@assets/EditProfile/profile1.png';
import profile2 from '@assets/EditProfile/profile2.png';
import profile3 from '@assets/EditProfile/profile3.png';
import profile4 from '@assets/EditProfile/profile4.png';
import profile5 from '@assets/EditProfile/profile5.png';
import profile6 from '@assets/EditProfile/profile6.png';
import profile7 from '@assets/EditProfile/profile7.png';
import profile8 from '@assets/EditProfile/profile8.png';
import profile9 from '@assets/EditProfile/profile9.png';
import { db } from '@/config/firebase';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { use } from 'i18next';

const ProfilePage = () => {
  const user = useContext(AuthContext);

  const [currentProfile, setCurrentProfile] = useState(profile1);
  const [currentProfileLink, setCurrentProfileLink] = useState('');
  const [s, setS] = useState(true);

  const handleChangeProfile = async (profileImage) => {
    setS(false);
    setCurrentProfile(profileImage.profile);
    setCurrentProfileLink(profileImage.imgLink);
  };

  useEffect(() => {}, [user]);

  const save = async () => {
    console.log(currentProfileLink);
    const docRef = await doc(db, 'users', user.id);
    setDoc(docRef, { photo: currentProfileLink }, { merge: true });
  };
  const profileImages = [
    {
      profile: profile1,
      imgLink:
        'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683966847/profile1_xzkxw5.png'
    },
    {
      profile: profile2,
      imgLink:
        'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683964107/person2_kn31qp.png'
    },
    {
      profile: profile3,
      imgLink:
        'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683966847/profile3_allbtw.png'
    },
    {
      profile: profile4,
      imgLink:
        'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683966847/profile4_wbkqdo.png'
    },
    {
      profile: profile5,
      imgLink:
        'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683966847/profile5_ogjenu.png'
    },
    {
      profile: profile6,
      imgLink:
        'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683966847/profile6_e0am5a.png'
    },
    {
      profile: profile7,
      imgLink:
        'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683966847/profile7_diq0j6.png'
    },
    {
      profile: profile8,
      imgLink:
        'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683966848/profile8_bap7kj.png'
    },
    {
      profile: profile9,
      imgLink:
        'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683966848/profile9_d2mxbd.png'
    }
  ];
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="h-[80vh] flex flex-col justify-around">
      <div className="flex items-center justify-between space px-8 pt-[50px] md:pt-6 rounded-md  mb-8">
        <div className='block md:hidden'></div>
        <div className='block md:hidden'></div>
        <div className="flex flex-col gap-20 absolute top-5 md:top-0 md:relative">
          <div className="flex cursor-pointer" onClick={() => navigate(-1)}>
            <MdArrowBack className=" mt-1" size="18px" />
            <h1 className=" ml-1">{t('bc')}</h1>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="flex">
          <button className="bg-[#2E2E2E] shadow-[0px_2px_20px_rgba(255,175,82,1)] py-2 px-2 rounded-full h-36 w-36 flex items-center justify-center">
            <img
              src={user?.user && s ? user.photo : localStorage.getItem('photo')}
              className=" w-11/12"
            />
          </button>
          <div className="mt-[4rem] ml-3"></div>
        </div>
        <div className='block md:hidden'></div>
        <div className="flex flex-col gap-8">
          <div>
            <RxInstagramLogo size="18px" />
          </div>
          <div className="">
            <SiTwitter size="18px" />
          </div>
          <div>
            <RiFacebookFill size="18px" />
          </div>
        </div>
      </div>
      <div className="flex gap-1 justify-between items-center rounded-md  ig:bg-[#2E2E2E] bg-transparent  mb-9  py-2  px-2 mx-auto md:ml-6 md:mr-4 w-[90%] md:w-[95%]">
        <div>
          <MdKeyboardArrowLeft size="24px" className="mr-2" />
        </div>
        <div className="flex gap-6 w-auto  overflow-x-scroll overflow-y-visible flex-row">
            {
              profileImages.map((img, i) => {
                return <div className='block w-[50px] h-[50px] min-w-[45px] min-h-[45px] overflow-hidden bg-[#2E2E2E] shadow-[0px_0px_12px_rgba(0,162,141,0.8)] rounded-full m-2'><img src={img.imgLink} key={i} className="w-full h-full" /></div>
              })
            }
        </div>

        <div>
          <MdKeyboardArrowRight size="24px" className="ml-2" />
        </div>
      </div>
      <div>
        <h1
          className="text-center  font-semibold mb-1 text-[#9D9D9D]"
          style={{ marginLeft: '-14px' }}
        >
          Username
        </h1>
      </div>
      <div className="flex flex-col gap-2 ml-6 mr-6">
        <div className=" rounded-md  bg-[#2E2E2E] flex  py-2 px-5 justify-between">
          <div></div>
          <div>
            <h1 className="text-[#FFF] text-lg   font-bold">
              {user?.user
                ? user.displayName
                : localStorage.getItem('displayName')}
            </h1>
          </div>
          <div className=" mt-[4px]">
            <MdModeEdit />
          </div>
        </div>
        <div
          className="flex justify-between mt-5 bg-[#008867] py-2 px-3 rounded-md  cursor-pointer"
          onClick={save}
        >
          <div className=" mt-[4px]"></div>
          <div className="px-7" style={{ marginLeft: '-17px' }}>
            <h1 className="text-[#FFF]  text-base font-semibold">{t('sv')}</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
