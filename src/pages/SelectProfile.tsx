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
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970014/person1_ho3kbr.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970014/person2_dh2g7c.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970014/person3_vzk4de.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970014/person4_aiqinm.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970014/person5_ijaiyp.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970014/person6_r3iqg5.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970015/person7_wr9lop.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970015/person8_cduptd.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970015/person9_abuymc.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970015/person10_ujer0g.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970015/person11_uziupx.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970015/person12_u0ulud.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970016/person13_lve8zw.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970016/person14_nsrder.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970016/person15_xlkjv2.png',
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970015/person16_bqz8un.png'
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
  console.log(user);
  return (
    <div className="flex">
      <div className=" h-screen flex flex-col items-end justify-around  flex-[1] px-20">
        <h2 className="text-xl self-center mt-5 text-white">{t('spa')}</h2>
        <div className="custom-glass w-11/12 flex flex-wrap gap-10 p-5 justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (i, index) => (
              <button
                onClick={async () => {
                  setSelectedAvatar(avatarUrls[i - 1]);
                  setSelectedAvatarIndex(index);
                  if (user?.user) {
                    const docRef = doc(db, 'users', user.id);
                    await setDoc(
                      docRef,
                      { photo: avatarUrls[i - 1] },
                      { merge: true }
                    ).then((res) => {
                      user.photo = avatarUrls[i - 1];
                    });
                  } else {
                    //TODO store in localstorage for guest user
                    localStorage.setItem('photo', avatarUrls[i - 1]);
                    localStorage.setItem('displayName', username);
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
                className="rounded-full px aspect-square w-20 flex items-center justify-center"
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
            )
          )}
        </div>
        <div className="self-center relative -top-5">
          <LogoWithTextSM />
        </div>
      </div>
      <div className="flex-[1] flex  justify-center items-center mr-20 flex-col h-screen">
        <div className="flex flex-col items-center gap-10 w-2/3 -mt-14">
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
                        localStorage.setItem('displayName', username);
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
            className="w-52 h-52 rounded-full flex items-center justify-center "
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
          <div className="flex flex-col w-full gap-3">
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
              className="btn flex w-full capitalize rounded-md text-lg border-[#fff] justify-center relative"
              onClick={() => navigate(-1)}
            >
              <BsArrowLeftShort className="absolute left-5" />
              {/* <img src={leftArrow} alt="" className="h-4 w-4" /> */}
              <span className=" ml-7">{t('bc')}</span>
              <div></div>
            </button>
          </div>
          <img src={ellipse} className="absolute right-0 top-1/3 w-1/12" />
        </div>

        <p className="font-extralight text-[12px] text-[#a4a4a4] absolute right-72 text-center  items-center bottom-5">
          {t('pbal')}{' '}
        </p>
      </div>
    </div>
  );
}

export default SelectProfile;
