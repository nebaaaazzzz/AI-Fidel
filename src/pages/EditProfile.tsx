import profile from '@assets/icons/profile.png';
import { RxInstagramLogo } from 'react-icons/rx';
import { RiFacebookFill } from 'react-icons/ri';
import { SiTwitter } from 'react-icons/si';
import { MdModeEdit } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdLanguage } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const EditProfile = () => {
  return (
    <div className="">
      <div className="profile-glass flex items-center justify-between space px-8 pt-6 rounded-md  mb-8">
        <div></div>
        <div className="">
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(255,175,82,0.8)] py-2 px-2 rounded-full h-36 w-36 flex items-center justify-center">
            <img src={profile} className=" w-11/12" />
          </button>
          <div className="mt-6 text-center">
            <h1 className="text-center text-[#FFF] font-bold text-lg">
              Ablaze Labs
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div>
            <RxInstagramLogo />
          </div>
          <div>
            <SiTwitter />
          </div>
          <div className=" mb-4">
            <RiFacebookFill />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-5">
          <div className=" bg-[#2E2E2E] rounded-md flex  py-2 px-5 justify-between">
            <div className=" mt-[4px] ml-3">
              <MdModeEdit size="18px" />
            </div>
            <div>
              <h1 className="text-[#FFF]">Edit Profile</h1>
            </div>
            <div className=" mt-[4px] ml-3">
              <MdKeyboardArrowRight size="20px" />
            </div>
          </div>
          <div className=" bg-[#2E2E2E] rounded-md flex py-2 px-5 justify-between">
            <div className=" mt-[4px] ml-3">
              <MdLanguage size="18px" />
            </div>
            <div>
              <h1 className="text-[#FFF]">Language</h1>
            </div>
            <div className=" mt-[4px] ">
              <MdKeyboardArrowRight size="20px" />
            </div>
          </div>
          <div className=" bg-[#2E2E2E] rounded-md flex py-2 px-5 justify-between">
            <div className=" mt-[4px] ml-3">
              <IoMdNotificationsOutline size="20px" />
            </div>
            <div>
              <h1 className="text-[#FFF]">Notification</h1>
            </div>
            <div className=" mt-[4px]">
              <MdKeyboardArrowRight size="20px" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6 bg-[#008867] py-2 px-3 rounded-md">
          <div className="mt-1 ml-4">
            <FiLogOut />
          </div>
          <div>
            <h1 className="text-[#FFF]">Log out</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
