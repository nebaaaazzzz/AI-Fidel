import profile from '@assets/images/avatar/avatar.png';

import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { BsArrowRightCircle } from 'react-icons/bs';
import circleDashed from '@assets/images/circle-dashed.png';
import { Link } from 'react-router-dom';
const socialMediaIcons = [AiOutlineInstagram, GrFacebookOption, ImTwitter];

function Welcome() {
  return (
    <div className="flex gap-5 mt-10 relative  h-[calc(100vh-64px)] flex-col w-full  items-center">
      <img
        src={circleDashed}
        className="absolute -top-64 -right-52 object-contain aspect-square w-2/3"
      />
      <div className="absolute w-28 aspect-square top-44 left-10 rounded-full  bg-primary"></div>
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
        <div className="flex prose flex-col items-center">
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
          <div className="grow text-2xl text-white text-center flex flex-col my-10">
            <h1 className="m-1">Welcome </h1>
            <h1 className="m-1">to your first</h1>
            <h1 className="m-1">lesson</h1>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <div></div>
            ))}
          {socialMediaIcons.map((Icon, i) => {
            return <Icon key={i} size={20} color="white" />;
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
        className="flex gap-10 items-center text-3xl"
      >
        <h1 className="text-white">Getting Started</h1>
        <BsArrowRightCircle className="text-accent font-bold" />
      </Link>
    </div>
  );
}

export default Welcome;
