import standingGirl from '@assets/images/standing-girl.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImTwitter } from 'react-icons/im';
import { GrFacebookOption } from 'react-icons/gr';
const socialMediaIcons = [AiOutlineInstagram, ImTwitter, GrFacebookOption];

function LearnNew() {
  return (
    <div className="flex justify-between h-screen w-full">
      <div></div>
      <div className="flex flex-col gap-5 items-center relative">
        <div className="absolute -right-72 flex flex-col gap-14">
          {socialMediaIcons.map((Icon) => {
            return <Icon size={20} />;
          })}
        </div>
        <h2 className="text-white text-2xl">Learn a new sign</h2>
        <div
          style={{
            background: '#2E2E2E',
            boxShadow: '0px 4px 23px 10px rgba(0, 0, 0, 0.13)',
            backdropFilter: 'blur(29px)',
            borderRadius: '20px',
            border: '3px solid rgba(255, 255, 255, 0.09)',
          }}
          className="px-14"
        >
          <img src={standingGirl} className="object-contain w-44" />
        </div>
        <button className="btn self-stretch rounded-md bg-[#2E2E2E]">Hello</button>
        <button className="btn self-stretch rounded-md btn-accent">continue</button>
      </div>
      <div></div>
    </div>
  );
}

export default LearnNew;
