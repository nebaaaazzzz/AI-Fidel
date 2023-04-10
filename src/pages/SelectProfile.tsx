import Logo from '@/components/Logo';
import EthiopiaIcon from '@assets/icons/ethiopia-icon.png';
import UKIcon from '@assets/icons/uk-icon.png';
import { RxAvatar } from 'react-icons/rx';
import avatar from '@assets/images/avatar/avatar.png';
import { Link } from 'react-router-dom';
function SelectProfile() {
  return (
    <div className="flex">
      <div className=" h-screen flex flex-col items-center justify-around flex-[1] px-20">
        <h2 className="text-xl text-white">Select profile avatar</h2>
        <div
          style={{
            background:
              'linear-gradient(150.11deg, rgba(127, 127, 127, 0.93) -8.45%, rgba(255, 255, 255, 0.1395) -8.45%, rgba(183, 183, 183, 0.0837) 113.16%)',
            boxShadow: '0px 4px 23px 10px rgba(0, 0, 0, 0.13)',
            backdropFilter: 'blur(29px)',
            borderRadius: '49px'
          }}
          className="flex flex-wrap gap-10 p-10 justify-center"
        >
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((i) => (
            <div
              style={{
                background: '#2E2E2E',
                boxShadow: '0px 0px 12px 4px #00A28D'
              }}
              className="rounded-full px aspect-square w-20 flex items-center justify-center"
            >
              {' '}
              <img
                className="w-1/2 aspect-square object contain"
                src={`/images/avatar/avatar${i}.png`}
                alt=""
              />
            </div>
          ))}
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <div className="flex-[1] flex justify-center items-center flex-col h-screen">
        <div className="flex flex-col items-center gap-10 w-2/3 ">
          <div className="flex items-center gap-10 w-full ">
            <div
              style={{
                background: '#008867',
                boxShadow: '0px 2px 26px rgba(0, 0, 0, 0.08)'
              }}
              className="rounded-md p-2"
            >
              <RxAvatar size={25} />
            </div>
            <div
              style={{
                background: '#2E2E2E',
                boxShadow: '0px 2px 26px rgba(0, 0, 0, 0.08)'
              }}
              className="p-2 rounded-md flex-1"
            >
              <div className="border-dashed rounded-md border-2 p-1 px-10">
                <h1 className="text-center">Guest2112</h1>
              </div>
            </div>
            <div></div>
          </div>
          <div
            style={{
              background: '#2E2E2E',
              boxShadow: '0px 0px 46px 4px #FFAF52'
            }}
            className="w-40 aspect-square rounded-full flex items-center justify-center "
          >
            <img src={avatar} />
          </div>
          <div className="flex flex-col w-full gap-5">
            <Link
              to="/select-hand"
              className="flex items-center btn bg-[#2E2E2E] rounded-md justify-between"
            >
              <img src={EthiopiaIcon} />
              <p>Amharic</p>
              <div></div>
            </Link>
            <Link
              to="/select-hand"
              className="flex items-center btn bg-[#2E2E2E] rounded-md justify-between"
            >
              <img src={UKIcon} />
              <p>English</p>
              <div></div>
            </Link>
            <button className="btn btn-accent rounded-md">continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectProfile;
