import profile from '@assets/icons/profile.png';
import instagram from '@assets/icons/instagram.png';
import twitter from '@assets/icons/twitter-icon.png';
import facebook from '@assets/icons/facebook-icon.png';
import edit from '@assets/icons/edit.png';
import language from '@assets/icons/language.png';
import notification from '@assets/icons/notifications.png';
import rightArrow from '@assets/icons/rightArrow.png';
import logout from '@assets/icons/logout.png';

const EditProfile = () => {
  return (
    <div className="">
      <div className="profile-glass flex items-center justify-between space px-8 pt-6 rounded-md  mb-8">
        <div></div>
        <div className="">
          <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(255,175,82,0.8)] py-2 px-2 rounded-full h-36 w-36 flex items-center justify-center">
            <img src={profile} className=" w-11/12" />
          </button>
          <div className="mt-8 text-center">
            <h1 className="text-center text-[#FFF] font-bold text-lg">
              Ablaze Labs
            </h1>
          </div>
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
      <div className="">
        <div className="flex flex-col gap-3">
          <div className="profile-glass flex  py-2 px-5 justify-between">
            <div className=" mt-[4px]">
              <img src={edit} className=" w-4" />
            </div>
            <div>
              <h1 className="text-[#FFF] text-lg">Edit Profile</h1>
            </div>
            <div className=" mt-[6px]">
              <img src={rightArrow} className="w-2" />
            </div>
          </div>
          <div className="profile-glass flex py-2 px-5 justify-between">
            <div className=" mt-[4px]">
              <img src={language} className=" w-4" />
            </div>
            <div>
              <h1 className="text-[#FFF] text-lg">Language</h1>
            </div>
            <div className=" mt-[6px]">
              <img src={rightArrow} className="w-2" />
            </div>
          </div>
          <div className="profile-glass flex py-2 px-5 justify-between">
            <div className=" mt-[4px]">
              <img src={notification} className=" w-4" />
            </div>
            <div>
              <h1 className="text-[#FFF] text-lg">Notification</h1>
            </div>
            <div className=" mt-[6px]">
              <img src={rightArrow} className="w-2" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4 bg-[#008867] py-1 px-3 rounded-md">
          <div className=" mt-[4px]">
            <img src={logout} className=" w-4" />
          </div>
          <div>
            <h1 className="text-[#FFF] text-lg">Log out</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
