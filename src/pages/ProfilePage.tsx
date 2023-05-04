import instagram from '@assets/icons/instagram.png';
import twitter from '@assets/icons/twitter-icon.png';
import facebook from '@assets/icons/facebook-icon.png';
import leftArrow from '@assets/icons/arrow-back-rounded.png';
import downArrow from '@assets/icons/downArrow.png';
import edit from '@assets/icons/edit.png';
import left from '@assets/icons/left.png';
import right from '@assets/icons/right.png';
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
            <img src={leftArrow} className="w-6" />
            <h1>Back</h1>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="flex">
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(255,175,82,0.8)] py-2 px-2 rounded-full h-36 w-36 flex items-center justify-center">
            <img src={profile} className=" w-11/12" />
          </button>
          <img src={downArrow} className="h-3 w-5  mt-[4.4rem] ml-6" />
        </div>
        <div className="flex flex-col gap-12">
          <div>
            <img src={instagram} className="w-5 h-5" />
          </div>
          <div>
            <img src={twitter} className="w-5 h-5" />
          </div>
          <div className=" mb-4">
            <img src={facebook} className="w-5" />
          </div>
        </div>
      </div>
      <div className="flex justify-between button-glass  rounded-md  w-full mb-7    py-1  px-6">
        <div>
          <img src={left} className="w-2 mt-3" />
        </div>
        <div className="flex gap-6">
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-10 w-10 flex items-center justify-center">
            <img src={profile} className=" w-12  h-8" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-10 w-10 flex items-center justify-center">
            <img src={profile1} className=" w-12  h-8" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-10 w-10 flex items-center justify-center">
            <img src={profile2} className=" w-12  h-8" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-10 w-10 flex items-center justify-center">
            <img src={profile3} className=" w-12  h-8" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-10 w-10 flex items-center justify-center">
            <img src={profile2} className=" w-12  h-8" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-10 w-10 flex items-center justify-center">
            <img src={profile1} className=" w-12  h-8" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-10 w-10 flex items-center justify-center">
            <img src={profile3} className=" w-12  h-8" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-10 w-10 flex items-center justify-center">
            <img src={profile} className=" w-12  h-8" />
          </button>
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(0,162,141,0.8)] py-2 px-2 rounded-full   h-10 w-10 flex items-center justify-center">
            <img src={profile2} className=" w-12  h-8" />
          </button>
        </div>

        <div>
          <img src={right} className="w-2 mt-3" />
        </div>
      </div>
      <div>
        <h1 className="text-center">Username</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="button-glass flex  py-2 px-5 justify-between">
          <div></div>
          <div>
            <h1 className="text-[#FFF] text-lg   font-bold">Ablaze</h1>
          </div>
          <div className=" mt-[4px]">
            <img src={edit} className=" w-4" />
          </div>
        </div>
        <div className="flex justify-between mt-4 bg-[#008867] py-1 px-3 rounded-md">
          <div className=" mt-[4px]">
            {/* <img src={logout} className=" w-4" /> */}
          </div>
          <div>
            <h1 className="text-[#FFF] text-lg">Save</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
