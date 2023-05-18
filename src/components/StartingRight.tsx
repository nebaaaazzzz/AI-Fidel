import { Logo } from './Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { toastError, toastSuccess } from '@/utils/toast';
import { addDocToCollection } from '@/utils/db';
import { useTranslation } from 'react-i18next';
import { BsArrowLeftShort } from 'react-icons/bs';


function StartingRight({ header1, header2, btns, firstPage }) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { t } = useTranslation();
  function loginWithGoogle(to: string) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        //TODO if user already exist in db DONT ADD TO COLLECTION
        const user = {
          displayName: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
          phoneNumber: result.user.phoneNumber,
          id: result.user.uid
        };
        await addDocToCollection('users', user);
        toastSuccess(t('success'));
        navigate(to);

        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toastError(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div className="md:flex-1 md:top-0 top-[-15px] relative m-[-30px] overflow-hidden flex md:h-screen justify-center items-center">
      <div className="flex gap-2 md:gap-5 w-9/12  flex-col justify-center">
        <div className='hidden md:block'>
          <Logo />
        </div>
        <div className='mt-12 md:mt-4'>
          <h1 className="text-white text-2xl cxs:text-3xl md:text-4xl font-bold text-center">
            {header1}
          </h1>
          <h1 className="text-white text-2xl cxs:text-3xl md:text-4xl font-bold text-center">
            {header2}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center b text-sm md:text-md">
          <p className="font-[100] block text-center text-xs md:text-sm ">{t('lslwml')}{' '}<br className='hidden cvs:block md:hidden'/>{t('urcml')}{' '}<br className='hidden cvs:block md:hidden'/>{t('hps')} </p>
          {/* <p className="font-[100] text-center text-sm block md:hidden ">The platforms that you are going to use for adobe premier pro. </p> */}
        </div>
        <div className="flex w-11/12 mt-2 md:mt-2 items-center self-center flex-col md:gap-4 gap-2">
        {/* className={'btn w-full py-0 h-[10px] text-md md:text-lg capitalize bg-yellow-200 rounded-2xl md:rounded-md`'}> */}
        {/* <div
          className={'bg-yellow-200'}>
            Test
        </div> */}
          {btns.map(({ text, link, to }, i) => {
            return (
              <Link
                {...(to ? { onClick: () => loginWithGoogle(to) } : {})}
                key={i}
                to="/"
                {...(link ? { to: link } : { to: '.' + search })}
                className={`w-full py-[10px] md:py-[10px] font-semibold text-center text-sm md:text-lg capitalize ${
                  i == 0 ? 'btn-accent' : 'btn-primary'
                } rounded-xl md:rounded-md`}
              >
                {text}
              </Link>
            );
          })}
          {firstPage ? (
            <button
              className="p-2 px-4 md:px-8 items-center flex md:py-[10px] font-semibold text-center border-[1px] w-full capitalize rounded-md text-sm md:text-lg border-[#fff] justify-between"
              onClick={() => navigate(-1)}
            >
              <BsArrowLeftShort className="absolute left-5" />
              {/* <img src={leftArrow} alt="" className="h-4 w-4" /> */}
              <span>{t('bc')}</span>
            </button>
          ) : null}
        </div>
      </div>
      <p className="font-extralight text-[12px] text-[#a4a4a4] fixed bottom-3">
        {t('pbal')}
      </p>
    </div>
  );
}

export default StartingRight;
