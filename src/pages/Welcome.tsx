import profile from '@assets/images/avatar/avatar.png';

import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import circleDashed from '@assets/images/circle-dashed.png';
import { Link } from 'react-router-dom';
import LeftArrowIcon from '@assets/icons/left-arrow.png';
const socialMediaIcons = [AiOutlineInstagram, GrFacebookOption, ImTwitter];

function Welcome() {
  return (
    <div className="flex gap-5 mt-20 relative  h-[calc(100vh-64px)] flex-col w-full  items-center">
      <img
        src={circleDashed}
        className="absolute -top-56 -right-32 object-contain aspect-square w-6/12"
      />
      <div className="absolute w-32 aspect-square top-32 left-5 rounded-full  bg-primary"></div>
      <div
        className="flex w-5/6 pr-5 justify-between py-2"
        style={{
          background:
            'linear-gradient(150.11deg, rgba(217, 217, 217, 0.87) -8.45%, rgba(255, 255, 255, 0.2175) -8.45%, rgba(255, 255, 255, 0.0783) 113.16%)',
          boxShadow: '0px 4px 23px 10px rgba(0, 0, 0, 0.13)',
          backdropFilter: 'blur(29px)',
          borderRadius: '49px'
        }}
      >
        <div className=""></div>
        <div className="flex prose ml-8 flex-col items-center">
          <div
            className="rounded-full w-32 h-32 p-5 -mt-14 flex items-center justify-center"
            style={{
              background: '#2E2E2E',
              boxShadow: '0px 0px 46px 4px #FFAF52'
            }}
          >
            <img
              src={profile}
              className="object-contain aspect-square w-full rounded-full"
            />
          </div>
          <div className="grow text-2xl  text-white text-center flex flex-col my-10">
            <h1 className="m-1 font-semibold text-white">Welcome </h1>
            <h1 className="m-1 font-semibold text-white">to your first</h1>
            <h1 className="m-1 font-semibold text-white">lesson</h1>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div></div>
            ))}
          {socialMediaIcons.map((Icon, i) => {
            return <Icon key={i} size={25} color="white" />;
          })}
          {Array(1)
            .fill(0)
            .map((_, i) => (
              <div></div>
            ))}
        </div>
      </div>
      <Link
        to="/game?level=1&hand=right&lang=am&mode=learn"
        className="flex gap-3 items-center "
      >
        <h1 className="text-white text-xl">Get Started</h1>
        <img src={LeftArrowIcon} className="w-2/12" />
      </Link>
    </div>
  );
}

export default Welcome;
