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
  'https://res.cloudinary.com/dkwc18qwr/image/upload/v1683970015/person16_bqz8un.png',
];
function SelectProfile() {
  const user = useContext(AuthContext);
  const [username, setUsername] = useState<string>('');
  const [selectedAvatar, setSelectedAvatar] = useState<string>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    // localStorage.removeItem("level")
    
    const language = localStorage?.getItem("language")
    localStorage.clear()
    if (language) localStorage.setItem("language", language)
  }, [])
  useEffect(() => {
    (async () => {
      if (user?.user) {
        setUsername(user.displayName ? user.displayName : autoGenerateUsername());
      } else {
        setUsername(autoGenerateUsername());
        localStorage.setItem('displayName', autoGenerateUsername());
        localStorage.setItem('photo', avatarUrls[6]);
      }
    })();
  }, [user]);
  const [avatar, setAvatar] = useState(user?.photoURL || avatarUrls[6]);
  const [userNameUpdated, setUsernameUpdated] = useState(false);
  const { search } = useLocation();
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number>();
  // localStorage.setItem('displayName', username);
  return (
    <div className="overflow-auto transition-all flex md:flex-row flex-col change-bg h-screen">
      <div className=" overflow-auto flex flex-col items-end justify-around md:justify-center  flex-[1.5] md:flex-[1] md:px-20 px-4 ml-0 md:ml-4">
        <h2 className="md:text-xl text-lg self-center mt-20 p-2 md:mt-5 text-white">{t('spa')}</h2>
        <div className="overflow-auto transition-all scrollbar relative custom-glass h-2/3 md:w-11/12 md:max-w-max md:max-h-[400px] md:h-auto max-w-[300px] mr-auto ml-auto flex flex-wrap gap-10 p-5 justify-center mx-2 my-0 md:my-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i, index) => (
            <button
              onClick={async () => {
                setSelectedAvatar(avatarUrls[i - 1]);
                setSelectedAvatarIndex(index);
                if (user?.user) {
                  const docRef = doc(db, 'users', user.id);
                  await setDoc(docRef, { photo: avatarUrls[i - 1] }, { merge: true }).then(
                    (res) => {
                      user.photo = avatarUrls[i - 1];
                    }
                  );
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
                    : '0px 0px 12px 4px #00A28D',
              }}
              className="rounded-full transition-all px aspect-square md:w-20 w-12 flex items-center justify-center"
            >
              {' '}
              <img
                className="w-2/3 aspect-1/1 transition-all object contain"
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
      <div className="flex-[1]  flex ml-auto mr-auto justify-start md:justify-center items-center md:mr-[30px] flex-col md:h-screen">
        <div className="flex flex-col items-center gap-10 w-2/3 -mt-14">
          <div className="flex items-center gap-5 justify-between w-[360px] md:w-full fixed md:relative top-0 m-8">
            <div
              style={{
                background: '#008867',
                boxShadow: '0px 2px 16px rgba(0, 0, 0, 0.08)',
              }}
              className="rounded-md flex justify-center p-[2px] md:p-2 ml-[1.5rem] md:ml-0 w-[48px] h-[48px] overflow-hidden"
            >
              <img
                className="object-contain h-full bg-transparent rounded-full md:hidden block"
                src={selectedAvatar ? selectedAvatar : avatar}
              />
              <span className="hidden md:block">
                <RxAvatar size={32} />
              </span>
            </div>
            <div
              style={{
                background: '#2E2E2E',
                boxShadow: '0px 2px 26px rgba(0, 0, 0, 0.08)',
              }}
              className="p-2 rounded-md flex-1 mr-[0.35rem]"
            >
              <div className="border-dashed bg-transparent rounded-md border-2 py-1 px-0 cml:px-10">
                <input
                  className="text-center text-[14px] cml:text-[15px] bg-transparent w-full focus:border-0 focus:outline-dashed"
                  value={username}
                  onBlur={async () => {
                    if (userNameUpdated) {
                      if (user?.user) {
                        const docRef = doc(db, 'users', user.id);
                        await setDoc(docRef, { displayName: username }, { merge: true });
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
              boxShadow: '0px 0px 26px 4px #FFAF52',
            }}
            className="hidden w-52 h-52 rounded-full md:flex items-center justify-center "
          >
            {user?.user && !Boolean(selectedAvatar) ? (
              <img
                src={user.photo}
                className="object-contain w-2/3 rounded-full"
                alt="user profile picture"
              />
            ) : (
              <img
                className="object-contain w-2/3 rounded-full"
                src={selectedAvatar ? selectedAvatar : avatar}
              />
            )}
          </div>
          <div className="flex flex-col text-center w-[300px] md:w-full gap-3 mt-[-15px] md:mt-0">
            <h2 className="md:hidden block text-lg self-center mt-20 w-[200px] text-white">
              {t('syl')}
            </h2>
            {[
              { text: 'Amharic', icon: EthiopiaIcon, langCode: 'am' },
              { text: 'English', icon: UKIcon, langCode: 'en' },
            ].map(({ text, icon, langCode }, i) => {
              return (
                <Link
                  key={i}
                  to={`/select-hand${search.length ? search + '&' : '?'}lang=${langCode}`}
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
          <img src={ellipse} className="absolute hidden md:block right-0 top-1/3 w-1/12" />
        </div>

        <p className="font-extralight text-[12px] text-[#a4a4a4] fixed ml-auto mr-auto md:left-[70%] cml:left-[73%] text-center  items-center bottom-3 md:bottom-0">
          {t('pbal')}{' '}
        </p>
      </div>
    </div>
  );
}

export default SelectProfile;
