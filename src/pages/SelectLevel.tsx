import profile from '@assets/images/avatar/avatar.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { MdLock } from 'react-icons/md';
const socialMediaIcons = [AiOutlineInstagram, GrFacebookOption, ImTwitter];

function SelectLevel() {
  return (
    <div className="flex  flex-col gap-10">
      <div
        className="flex justify-between px-3 pl-10 py-5"
        style={{
          background:
            'linear-gradient(104.13deg, rgba(78, 78, 78, 0.4) 17.81%, rgba(52, 52, 52, 0.45) 90.16%)',
          border: '4px solid rgba(255, 255, 255, 0.09)',
          backdropFilter: 'blur(19.5px)',
          borderRadius: '17px'
        }}
      >
        <div className="flex prose flex-col items-start ">
          <div className="leading-none">
            <h1 className="md:text-4xl text-white m-1">Start learning </h1>
            <h1 className="leading-none text-4xl m-1 text-white">Your</h1>
            <h1 className="text-white text-4xl m-1 mb-6">Language</h1>
          </div>
          <button className="capitalize btn btn-primary  rounded-lg btn-md md:btn-wide py-0 ">
            Register
          </button>
        </div>
        <div className="flex items-center gap-10">
          <div
            className="rounded-full w-24 aspect-square p-4"
            style={{
              background: '#2E2E2E',
              boxShadow: '0px 0px 46px 4px #FFAF52'
            }}
          >
            <img src={profile} className="object-contain rounded-full" />
          </div>
          <div className="flex self-stretch flex-col justify-between">
            {socialMediaIcons.map((Icon, i) => {
              return <Icon key={i} size={20} color="white" />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        {[1, 2, 3, 4].map((i) => {
          return (
            <button
              key={i}
              className="btn btn-primary rounded-md flex justify-between px-5"
            >
              <div></div>
              <p className="text-white ">ደረጃ {i}</p>
              <MdLock fontSize={20} color="white" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default SelectLevel;
