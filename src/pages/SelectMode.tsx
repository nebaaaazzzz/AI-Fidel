import boy1 from '@assets/icons/boy1.png';
import { Logo } from '@/components/Logo';
import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/config/firebase';
import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
function SelectMode() {
  const [user] = useAuthState(auth);
  useEffect(() => {}, []);
  return (
    <div className="flex h-screen">
      <StartingLeft path={boy1} />
      <StartingRight
        header1={'What do'}
        header2={'you Like to do'}
        btns={[
          {
            text: 'Education',
            link: user ? '/select-profile?mode=learn' : '/login'
          },
          { text: 'Game', link: '/select-game' }
        ]}
      />
    </div>
  );
}
export default SelectMode;
