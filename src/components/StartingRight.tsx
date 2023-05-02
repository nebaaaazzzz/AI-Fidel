import { Logo } from './Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { toastError, toastSuccess } from '@/utils/toast';
import { addDocToCollection } from '@/utils/db';
import { useTranslation } from 'react-i18next';
import leftArrow from '@assets/icons/arrow-back-roundedleft-arrow.png';

function StartingRight({ header1, header2, btns }) {
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
    <div className="flex-1 relative flex h-screen  justify-center items-center">
      <div className="flex  gap-5 w-9/12  flex-col justify-center">
        <Logo />
        <div>
          <h1 className="text-white text-4xl font-bold text-center">
            {header1}
          </h1>
          <h1 className="text-white text-4xl font-bold text-center">
            {header2}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center b">
          <h1 className="font-[100] text-center text-sm ">{t('lslwml')}</h1>
          <span className="font-[100] text-center text-sm ">{t('urcml')}</span>
          <p className="font-[100] text-center">{t('hps')} </p>
        </div>
        <div className="flex w-11/12 mt-5 items-center self-center  flex-col gap-4">
          {btns.map(({ text, link, to }, i) => {
            return (
              <Link
                {...(to ? { onClick: () => loginWithGoogle(to) } : {})}
                key={i}
                to="/"
                {...(link ? { to: link } : { to: '.' + search })}
                className={`btn w-full text-lg capitalize ${
                  i == 0 ? 'btn-accent' : 'btn-primary'
                }  rounded-md`}
              >
                {text}
              </Link>
            );
          })}
          <button className="btn w-full capitalize rounded-md text-lg border-[#fff] justify-between">
            <img src={leftArrow} alt="" className="h-4 w-4" />
            <span>Back</span>
            <div></div>
          </button>
        </div>
      </div>
      <p className="font-extralight text-[12px] text-[#a4a4a4] absolute bottom-6">
        {t('pbal')}
      </p>
    </div>
  );
}

export default StartingRight;
