import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from '../config/firebase';
import { useSearchParams } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
function Login() {
  return (
    <div className="flex flex-col relative h-[100vh] bg-[#ffe090] bg-no-repeat bg-center items-center justify-center gap-10">
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tr-full rounded-br-full absolute inset-x-0"></div>
      <div className="circleTop bg-[#ffebb8] w-[230px] h-[432px] rounded-tl-full rounded-bl-full absolute right-0 "></div>

      <h1 className="text-lg w-96 text-center z-30 text-[#683aff] inset-11">
        Login to continue
      </h1>
      <div className="flex gap-10 z-30">
        <button onClick={loginWithGoogle}>Login With Google</button>
        {/* <StyledFirebaseAuth
          uiConfig={{
            signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
          }}
          firebaseAuth={auth}
        /> */}
      </div>
    </div>
  );
}

export default Login;
