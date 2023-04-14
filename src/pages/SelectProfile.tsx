import Logo, { LogoWithTextSM } from '@/components/Logo';
import EthiopiaIcon from '@assets/icons/ethiopia-icon.png';
import UKIcon from '@assets/icons/uk-icon.png';
import { RxAvatar } from 'react-icons/rx';
import avatar from '@assets/images/avatar/avatar.png';
import { Link, useLocation } from 'react-router-dom';
import ellipse from '@assets/icons/Ellipse 99.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/config/firebase';
import { useContext, useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { addDocToCollection } from '@/utils/db';
import { AuthContext } from '@/context/AuthContext';
function autoGenerateUsername() {
  const random = Math.floor(Math.random() * 10000) + 10000;
  return `Guest${random}`;
}
function SelectProfile() {
  const user = useContext(AuthContext);
  const [username, setUsername] = useState<string>();
  useEffect(() => {
    (async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        const displayName = docSnap.get('displayName');
        setUsername(displayName ? displayName : autoGenerateUsername());
      } else {
        setUsername(autoGenerateUsername());
      }
    })();
  }, [user]);
  const [avatar, setAvatar] = useState(user?.photoURL || '');
  const [userNameUpdated, setUsernameUpdated] = useState(false);
  const { search } = useLocation();
  return (
    <div className="flex">
      <div className=" h-screen flex flex-col items-end justify-around  flex-[1] px-20">
        <h2 className="text-xl self-center mt-5 text-white">
          Select profile avatar
        </h2>
        <div className="custom-glass w-11/12 flex flex-wrap gap-10 p-5 justify-center">
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
            <div
              onClick={() => alert('hello world')}
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
                <input
                  className="text-center w-full focus:border-0 focus:outline-dashed"
                  value={username}
                  onBlur={async () => {
                    if (userNameUpdated) {
                      if (user) {
                        const docRef = doc(db, 'users', user.uid);
                        setDoc(
                          docRef,
                          { displayName: username },
                          { merge: true }
                        );
                      } else {
                        //TODO store in localstorage for guest user
                      }
                    }
                    setUsernameUpdated(false);
                  }}
                  onChange={(e) => {
                    setUsernameUpdated(true);
                    setUsername(e.target.value);
                  }}
                />
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
