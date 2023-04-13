import Logo, { LogoWithTextSM } from '@/components/Logo';
import EthiopiaIcon from '@assets/icons/ethiopia-icon.png';
import UKIcon from '@assets/icons/uk-icon.png';
import { RxAvatar } from 'react-icons/rx';
import avatar from '@assets/images/avatar/avatar.png';
import { Link, useLocation } from 'react-router-dom';
import ellipse from '@assets/icons/Ellipse 99.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/config/firebase';
import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
function SelectProfile() {
  const [user] = useAuthState(auth);
  const { search } = useLocation();
  useEffect(() => {
    (async () => {
      try {
        const docRef = await addDoc(collection(db, 'users'), {
          first: 'Ada',
          last: 'Lovelace',
          born: 1815
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    })();
  }, []);
  return (
    <div className="flex">
      <div className=" h-screen flex flex-col items-end justify-around  flex-[1] px-20">
        <h2 className="text-xl self-center mt-5 text-white">
          Select profile avatar
        </h2>
        <div className="custom-glass w-11/12 flex flex-wrap gap-10 p-5 justify-center">
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
            <div
              key={index}
              style={{
                background: '#2E2E2E',
                boxShadow: '0px 0px 12px 4px #00A28D'
              }}
              className="rounded-full px aspect-square w-20 flex items-center justify-center"
            >
              {' '}
              <img
                className="w-2/3 aspect-1/1 object contain"
                src={`/images/avatar/avatar${i}.png`}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="self-center relative -top-5">
          <LogoWithTextSM />
        </div>
      </div>
      <div className="flex-[1] flex  justify-center items-center mr-20 flex-col h-screen">
        <div className="flex flex-col items-center gap-14 w-2/3 ">
          <div className="flex items-center gap-5 w-full ">
            <div
              style={{
                background: '#008867',
                boxShadow: '0px 2px 16px rgba(0, 0, 0, 0.08)'
              }}
              className="rounded-md p-2"
            >
              <RxAvatar size={32} />
            </div>
            <div
              style={{
                background: '#2E2E2E',
                boxShadow: '0px 2px 26px rgba(0, 0, 0, 0.08)'
              }}
              className="p-2 rounded-md flex-1"
            >
              <div className="border-dashed bg-transparent rounded-md border-2 p-1 px-10">
                <h1 className="text-center">
                  {user ? user.displayName : 'Guest2112'}
                </h1>
              </div>
            </div>
            <div></div>
          </div>
          <div
            style={{
              background: '#2E2E2E',
              boxShadow: '0px 0px 26px 4px #FFAF52'
            }}
            className="w-7/12 aspect-square rounded-full flex items-center justify-center "
          >
            {user ? (
              <img
                src={user.photoURL}
                alt="user profile picture"
                className="w-full rounded-full"
              />
            ) : (
              <img src={avatar} />
            )}
          </div>
          <div className="flex flex-col w-full gap-3">
            {[
              { text: 'Amharic', icon: EthiopiaIcon, langCode: 'am' },
              { text: 'English', icon: UKIcon, langCode: 'en' }
            ].map(({ text, icon, langCode }, i) => {
              return (
                <Link
                  key={i}
                  to={`/select-hand${search}&lang=${langCode}`}
                  className="flex capitalize items-center btn bg-[#2E2E2E] hover:bg-[#3f3f3f] rounded-md justify-between"
                >
                  <img src={icon} className="w-1/12" />
                  <p>{text}</p>
                  <div></div>
                </Link>
              );
            })}
          </div>
          <img src={ellipse} className="absolute right-0 top-1/3 w-1/12" />
        </div>

        <p className="font-extralight text-[12px] text-[#a4a4a4] absolute right-72 text-center  items-center bottom-5">
          Powered by ablaze labs{' '}
        </p>
      </div>
    </div>
  );
}

export default SelectProfile;
