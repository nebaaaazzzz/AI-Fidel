import { RxInstagramLogo } from 'react-icons/rx';
import { RiFacebookFill } from 'react-icons/ri';
import { SiTwitter } from 'react-icons/si';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdArrowBack } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import profile from '@assets/icons/profile.png';
import profile1 from '@assets/icons/profile1.png';
import profile2 from '@assets/icons/profile2.png';
import profile3 from '@assets/icons/profile3.png';

const ProfilePage = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between space px-8 pt-6 rounded-md  mb-8">
        <div className="flex flex-col gap-20">
          <div className="flex">
            <MdArrowBack className=" mt-1" size="18px" />
            <h1 className=" ml-1">Back</h1>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="flex">
          <button className="bg-[#2E2E2E] shadow-[0px_2px_20px_rgba(255,175,82,1)] py-2 px-2 rounded-full h-36 w-36 flex items-center justify-center">
            <img src={profile} className=" w-11/12" />
          </button>
          <MdKeyboardArrowDown size="23px" className="mt-[4rem] ml-3" />
        </div>
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
      <div className="flex   gap-1  rounded-md  bg-[#2E2E2E]  mb-9  py-2  px-2  ml-6 mr-4 w-[95%]">
        <div>
          <MdKeyboardArrowLeft size="24px" className=" mt-4 mr-2" />
        </div>
        <div className="flex gap-6">
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.9)] py-2 px-2 rounded-full   h-14 w-14 flex items-center justify-center">
            <img src={profile1} className="h-11 " />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.9)] py-2 px-2 rounded-full   h-14 w-14 flex items-center justify-center">
            <img src={profile3} className="h-11 " />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.9)] py-2 px-2 rounded-full   h-14 w-14 flex items-center justify-center">
            <img src={profile2} className="h-11 " />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.9)] py-2 px-2 rounded-full   h-14 w-14 flex items-center justify-center">
            <img src={profile} className="h-11 " />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-14 w-14 flex items-center justify-center">
            <img src={profile1} className=" w-11" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-14 w-14 flex items-center justify-center">
            <img src={profile2} className=" w-11" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-14 w-14 flex items-center justify-center">
            <img src={profile3} className=" w-11" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full  h-14 w-14 flex items-center justify-center">
            <img src={profile2} className=" w-11" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-14 w-14 flex items-center justify-center">
            <img src={profile1} className=" w-11" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-14 w-14 flex items-center justify-center">
            <img src={profile3} className=" w-11" />
          </button>
        </div>

        <div>
          <MdKeyboardArrowRight size="24px" className=" mt-4 ml-2" />
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
            <h1 className="text-[#FFF] text-lg   font-bold">Ablaze</h1>
          </div>
          <div className=" mt-[4px]">
            <MdModeEdit />
          </div>
        </div>
        <div className="flex justify-between mt-5 bg-[#008867] py-2 px-3 rounded-md ">
          <div className=" mt-[4px]"></div>
          <div className="px-7" style={{ marginLeft: '-17px' }}>
            <h1 className="text-[#FFF]  text-base font-semibold">Save</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
