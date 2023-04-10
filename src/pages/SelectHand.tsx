import React from 'react';
import handshake from '@assets/images/handshake.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { Link } from 'react-router-dom';
const socialMediaIcons = [AiOutlineInstagram, GrFacebookOption, ImTwitter];

function SelectHand() {
  return (
    <div className="flex gap-5 relative  h-[calc(100vh-64px)] flex-col w-full  items-center">
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
        <div className="flex   prose flex-col items-center">
          <h1 className="pan  text-center w-3/4 text-white">
            Are you left or right handed?
          </h1>
          <img className="object-contain w-5/12 " src={handshake} />
          <div className="w-2/3 grow text-white text-center leading-3">
            <p> Choose the hand you want to use for </p>
            <p>fingerspelling you should use your</p>
            <p>dominant hand</p>
            <p></p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {Array(3)
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
      <div className="flex gap-10">
        {['Right', 'Left'].map((hand, i) => {
          return (
            <Link
              to="/select-level"
              key={i}
              className={`btn capitalize px-20 rounded-xl ${
                i == 0 ? 'bg-accent' : 'bg-primary'
              }`}
            >
              {hand}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SelectHand;
