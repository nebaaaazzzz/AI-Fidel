import { db } from '@/config/firebase';
import { AuthContext } from '@/context/AuthContext';
import profile from '@assets/images/avatar/avatar.png';
import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillUnlock, AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';
import { MdLock } from 'react-icons/md';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { langAtom } from '../store/store'
import { handAtom } from '../store/store'
import { useAtom } from 'jotai';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const socialMediaIcons = [AiOutlineInstagram, GrFacebookOption, ImTwitter];

function SelectLevel() {
  const user = useContext(AuthContext);
  const { search } = useLocation();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [levelOffset, setLevelOffset] = useState<number>(0);
  const [hand, setHand] = useAtom(handAtom)
  const [lang, setLang] = useAtom(langAtom)
  const navigate = useNavigate();
  setLang(searchParams.get('lang'))
  setHand(searchParams.get('hand'))
  useEffect(() => {
    (async () => {
      if (user?.user) {
        const docRef = doc(db, 'users', user.id);
        const docSnap = await getDoc(docRef);
        const level = docSnap.get('level' + '-' + searchParams.get('lang'));
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
    <div className="flex flex-col gap-6 items-center md:items-stretch">
      <div className="flex bg-whit w-full justify-center md:justify-between items-center md:items-stretch px-0 pl-10 py-2 md:py-4">
        <div className="absolute md:flex md:relative md:top-0 md:left-0 top-[20px] left-[40px] prose flex-col items-start md:mr-0">
          <button
            className="flex capitalize justify-between -ml-6"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeftShort size={26} />
            <span>{t('bc')}</span>
            <div></div>
          </button>
          <div className="w-8/12">
            {!user && (
              <button className="capitalize btn btn-primary w-full rounded-lg btn-md py-0 ">
                {t('rgstr')}{' '}
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center flex-row md:flex-col gap-2 md:mr-auto md:ml-auto mt-12 md:mt-0 md:p-0">
          <div
            className={`rounded-full flex items-center justify-center w-20 h-20 md:w-32 md:h-32 aspect-square ${
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
          <div className='pl-4 text-sm'>
            <p className='block md:hidden'>Hello</p>
            <h2 className='text-left md:text-center text-white text-md md:text-2xl font-[500] pt-0 md:pt-2'>Ablaze Labs</h2>
            <p className='opacity-50 text-sm text-center hidden md:block'>ablazelabs@gmail.com</p>
          </div>
        </div>
        <div className="hidden md:flex mr-5 self-stretch flex-col justify-between">
            {socialMediaIcons.map((Icon, i) => {
              return <Icon key={i} size={20} color="white" />;
            })}
        </div>
      </div>
      <div className="flex flex-col mt-12 md:mt-0 gap-5 w-10/12 md:w-full mr-auto ml-auto">
        {buildLevelButtons(searchParams, search, levelOffset, t)}
      </div>
    </div>
  );
}

function buildLevelButtons(
  searchParams: URLSearchParams,
  search: string,
  levelOffset: number,
  t
) {
  console.log(levelOffset + 1);
  const levels = [1, 2, 3, 4];
  const mode = searchParams.get('mode');
  if (mode == 'game') {
    return (
      <>
        {levels.slice(0, Number(levelOffset) + 1).map((i) => {
          return (
            <Link
              to={`/game${search}&level=${i}`}
              key={i}
              className="btn btn-accent capitalize rounded-md flex justify-between px-5"
            >
              <div></div>
              <p className=" capitalize">
                {t('level')} {i}
              </p>
              <AiFillUnlock fontSize={20} color="white" />
            </Link>
          );
        })}
        {levels.slice(Number(levelOffset) + 1).map((i) => {
          return (
            <button
              key={i}
              className="btn btn-primary rounded-md flex justify-between px-5"
            >
              <div></div>
              <p className="text-white capitalize">
                {t('level')} {i}
              </p>
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
              className="btn btn-accent rounded-md flex justify-start md:justify-center px-5 mr-4 md:mr-0"
            >
              <p className="">
                {t('level')} {i}
              </p>
            </Link>
          );
        })}
      </>
    );
  }
}
export default SelectLevel;
