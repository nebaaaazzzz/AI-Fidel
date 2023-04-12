import { Logo } from './Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { toastError, toastSuccess } from '@/utils/toast';
function StartingRight({ header1, header2, btns }) {
  const navigate = useNavigate();
  const { search } = useLocation();
  function loginWithGoogle(to: string) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess('Successfully loggedin');
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        navigate(to);
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
          <h1 className="font-[100] text-center text-sm ">
            Learn the ABC in sign language with machine language .The game{' '}
          </h1>
          <span className="font-[100] text-center text-sm ">
            will using your camera and machine learning to analyze your
          </span>
          <p className="font-[100] text-center">handshapes </p>
        </div>
        <div className="flex w-11/12 mt-5 items-center self-center  flex-col gap-4">
          {btns.map(({ text, link, to }, i) => {
            return (
              <Link
                {...(to ? { onClick: () => loginWithGoogle(to) } : {})}
                key={i}
                to={link}
                className={`btn w-full text-lg capitalize ${
                  i == 0 ? 'btn-accent' : 'btn-primary'
                }  rounded-md`}
              >
                {text}
              </Link>
            );
          })}
        </div>
      </div>
      <p className="font-extralight text-[12px] text-[#a4a4a4] absolute bottom-6">
        Powered by ablaze labs{' '}
      </p>
    </div>
  );
}

export default StartingRight;
