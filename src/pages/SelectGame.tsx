import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import boy3 from '@assets/icons/boy3.png';
import { getSessionInfo } from '../utils/localsession';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebase';
function SelectGame() {
  const [configuration, setConfiguration] = useState<any>();
  const [user] = useAuthState(auth);
  useEffect(() => {
    (async () => {
      setConfiguration(await getSessionInfo());
    })();
  }, []);
  return (
    <div className="flex h-screen">
      <StartingLeft path={boy3} />
      <StartingRight
        header1={'Welcome'}
        header2={'back'}
        btns={[
          ...(configuration?.level ? [{ text: 'Resume', link: '' }] : []),
          ...(user
            ? [{ text: 'New Game', link: '/select-profile?mode=game' }]
            : [{ text: 'New Game', link: '/login?mode=game' }])
        ]}
      />
    </div>
  );
}
export default SelectGame;
