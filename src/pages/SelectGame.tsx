import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import boy3 from '@assets/icons/boy3.png';
import { getSessionInfo } from '../utils/localsession';
import { useEffect, useState } from 'react';
function SelectGame() {
  const [configuration, setConfiguration] = useState<any>();
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
          { text: 'New Game', link: '/login?mode=game' }
        ]}
      />
    </div>
  );
}
export default SelectGame;
