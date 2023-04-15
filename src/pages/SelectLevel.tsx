import { auth, db } from '@/config/firebase';
import { AuthContext } from '@/context/AuthContext';
import profile from '@assets/images/avatar/avatar.png';
import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { MdLock, MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
const socialMediaIcons = [AiOutlineInstagram, GrFacebookOption, ImTwitter];

function SelectLevel() {
  const user = useContext(AuthContext);
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const [levelOffset, setLevelOffset] = useState<number>(0);
  useEffect(() => {
    (async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        const level = docSnap.get('level');
        if (level) {
          setLevelOffset(level);
        } else {
          setLevelOffset(0);
        }
      } else {
        //TODO for guest user check THERE local storage
      }
    })();
  }, [user]);
  return (
    <div className="flex  flex-col gap-10">
      <div className="custom-glass smrounded  flex justify-between px-3 pl-10 py-5">
        <div className="flex  prose flex-col items-start ">
          <div className="leading-none bg-transparent">
            <h1 className="md:text-4xl text-white m-1">Start learning </h1>
            <h1 className="leading-none text-4xl m-1 text-white">Your</h1>
            <h1 className="text-white text-4xl m-1 mb-6">Language</h1>
          </div>
          <div className="w-8/12">
            {!user && (
              <button className="capitalize btn btn-primary w-full rounded-lg btn-md py-0 ">
                ተመዝገብ{' '}
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`rounded-full flex items-center justify-center w-32 h-32 aspect-square ${
              user ? '' : 'p-4'
            }`}
            style={{
              background: '#2E2E2E',
              boxShadow: '0px 0px 20px 4px #FFAF52'
            }}
          >
            {user ? (
              <img
                src={user.photo}
                alt="user profile picture"
                className="object-contain w-2/3 rounded-full"
              />
            ) : (
              <img
                src={profile}
                alt="user profile picture"
                className="object-contain w-full rounded-full"
              />
            )}
          </div>
          <div className="flex mr-5 self-stretch flex-col justify-between">
            {socialMediaIcons.map((Icon, i) => {
              return <Icon key={i} size={20} color="white" />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        {buildLevelButtons(searchParams, search, levelOffset)}
      </div>
    </div>
  );
}

function buildLevelButtons(
  searchParams: URLSearchParams,
  search: string,
  levelOffset: number
) {
  const levels = [1, 2, 3, 4];
  const mode = searchParams.get('mode');
  if (mode == 'game') {
    return (
      <>
        {levels.slice(0, levelOffset + 1).map((i) => {
          return (
            <Link
              to={`/game${search}&level=${i}`}
              key={i}
              className="btn btn-accent rounded-md flex justify-center px-5"
            >
              <p className="">ደረጃ {i}</p>
            </Link>
          );
        })}
        {levels.slice(levelOffset + 1).map((i) => {
          return (
            <button
              key={i}
              className="btn btn-primary rounded-md flex justify-between px-5"
            >
              <div></div>
              <p className="text-white ">ደረጃ {i}</p>
              <MdLock fontSize={20} color="white" />
            </button>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {levels.map((i) => {
          return (
            <Link
              to={`/welcome${search}&level=${i}`}
              key={i}
              className="btn btn-accent rounded-md flex justify-center px-5"
            >
              <p className="">ደረጃ {i}</p>
            </Link>
          );
        })}
      </>
    );
  }
}
export default SelectLevel;
