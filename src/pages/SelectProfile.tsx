import { LogoWithTextSM } from '@/components/Logo';
import EthiopiaIcon from '@assets/icons/ethiopia-icon.png';
import UKIcon from '@assets/icons/uk-icon.png';
import { RxAvatar } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import ellipse from '@assets/icons/Ellipse 99.png';
import { db } from '@/config/firebase';
import { useContext, useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { AuthContext } from '@/context/AuthContext';
import ReactModal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { useAtom } from 'jotai';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import localforage from 'localforage';


function autoGenerateUsername() {
  const random = Math.floor(Math.random() * 10000) + 10000;
  return `Guest${random}`;
}
const avatarUrls = [
  'https://res.cloudinary.com/etmedia/image/upload/v1681508368/avatar3_gkgc7n.png',
  'https://res.cloudinary.com/etmedia/image/upload/v1681508368/avatar2_qpyenc.png',
  'https://res.cloudinary.com/etmedia/image/upload/v1681508368/avatar4_kvml4s.png',
  'https://res.cloudinary.com/etmedia/image/upload/v1681508368/avatar1_xvx2pg.png'
];
function SelectProfile() {
  const user = useContext(AuthContext);
  const [username, setUsername] = useState<string>();
  const [selectedAvatar, setSelectedAvatar] = useState<string>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (user && user.user) {
        setUsername(
          user.displayName ? user.displayName : autoGenerateUsername()
        );
      } else {
        setUsername(autoGenerateUsername());
      }
    })();
  }, [user]);
  const [avatar, setAvatar] = useState(user?.photoURL || avatarUrls[0]);
  const [userNameUpdated, setUsernameUpdated] = useState(false);
  const { search } = useLocation();
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number>();
  return (
    <div className="overflow-auto flex md:flex-row flex-col">
      <div className="overflow-auto h-screen flex flex-col items-end justify-around  flex-[1] md:px-20 px-4 ml-4">
        <h2 className="md:text-xl text-lg self-center mt-20 p-2 md:mt-5 text-white">{t('spa')}</h2>
        <div className="overflow-auto scrollbar relative custom-glass md:w-11/12 md:h-auto w-full h-[200px] flex flex-wrap gap-10 p-5 justify-center mx-2">
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((i, index) => (
            <button
              onClick={() => {
                setSelectedAvatar(avatarUrls[i - 1]);
                setSelectedAvatarIndex(index);
                if (user?.user) {
                  const docRef = doc(db, 'users', user.id);
                  setDoc(docRef, { photo: avatarUrls[i - 1] }, { merge: true });
                } else {
                  //TODO store in localstorage for guest user
                }
              }}
              key={index}
              style={{
                background: '#2E2E2E',
                boxShadow:
                  index == selectedAvatarIndex
                    ? '0px 0px 26px 4px #FFAF52'
                    : '0px 0px 12px 4px #00A28D'
              }}
              className="rounded-full px aspect-square md:w-20 w-12 flex items-center justify-center"
            >
              {' '}
              <img
                className="w-2/3 aspect-1/1 object contain"
                src={avatarUrls[i - 1]}
                alt=""
              />
              {/* <img
                className="w-2/3 aspect-1/1 object contain"
                src={`/images/avatar/avatar${i}.png`}
                alt=""
              /> */}
            </button>
          ))}
        </div>
          {/* <div className='absolute right-0 top-0 scrollbar'></div> */}
        <div className="self-center relative -top-5 py-4 hidden md:block">
          <LogoWithTextSM />
        </div>
      </div>
      <div className="flex-[1] flex ml-auto mr-auto justify-center items-center  flex-col h-screen">
        <div className="flex flex-col items-center gap-10 w-2/3 -mt-14">
          <div className="flex items-center gap-5 w-[350px] md:w-full fixed md:relative top-0 m-8">
            <div
              style={{
                background: '#008867',
                boxShadow: '0px 2px 16px rgba(0, 0, 0, 0.08)'
              }}
              className="rounded-md p-2 ml-8 md:ml-0"
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
              <div className="md:border-dashed bg-transparent rounded-md md:border-2 p-1 px-0 cml:px-10">
                <input
                  className="text-center bg-transparent w-full focus:border-0 focus:outline-dashed"
                  value={username}
                  onBlur={async () => {
                    if (userNameUpdated) {
                      if (user?.user) {
                        const docRef = doc(db, 'users', user.id);
                        await setDoc(
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
            className="hidden w-52 h-52 rounded-full md:flex items-center justify-center "
          >
            {user?.user && !Boolean(selectedAvatar) ? (
              <img
                src={user.photo}
                className="w-2/3 object-contain"
                alt="user profile picture"
              />
            ) : (
              <img
                className="w-2/3 object-contain"
                src={selectedAvatar ? selectedAvatar : avatar}
              />
            )}
          </div>
          <div className="flex flex-col w-[300px] md:w-full gap-3 mt-[-15px] md:mt-0">
          <h2 className="md:hidden block text-lg self-center mt-20 w-[200px] text-white">{t('syl')}</h2>
            {[
              { text: 'Amharic', icon: EthiopiaIcon, langCode: 'am' },
              { text: 'English', icon: UKIcon, langCode: 'en' }
            ].map(({ text, icon, langCode }, i) => {
              return (
                <Link
                  key={i}
                  to={`/select-hand${
                    search.length ? search + '&' : '?'
                  }lang=${langCode}`}
                  className="flex capitalize items-center btn bg-[#2E2E2E] hover:bg-[#3f3f3f] rounded-md justify-between"
                >
                  <img src={icon} className="w-1/12 " />
                  <p>{text}</p>
                  <div></div>
                </Link>
              );
            })}
            <button
              className="btn w-full capitalize rounded-md text-lg border-[#fff] justify-between"  onClick={() => navigate(-1)}
            >
              <BsArrowLeftShort />
              {/* <img src={leftArrow} alt="" className="h-4 w-4" /> */}
              <span>{t('bc')}</span>
              <div></div>
            </button>
          </div>
          <img src={ellipse} className="absolute hidden md:block right-0 top-1/3 w-1/12" />
        </div>

        <p className="font-extralight text-[12px] text-[#a4a4a4] fixed ml-auto mr-auto md:left-[75%] text-center  items-center bottom-3 md:bottom-0">
          {t('pbal')}{' '}
        </p>
      </div>
    </div>
  );
}

export default SelectProfile;
