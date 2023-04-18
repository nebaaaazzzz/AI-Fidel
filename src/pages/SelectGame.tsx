import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import boy3 from '@assets/icons/boy3.png';
import { getSessionInfo } from '../utils/localsession';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
function SelectGame() {
  const { t } = useTranslation();
  const user = useContext(AuthContext);
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
          ...(configuration?.level
            ? [
                {
                  text: t('resume'),
                  link: `/select-level?level=${configuration?.level}&lang=${configuration?.lang}&hand=${configuration?.hand}&mode=game`
                }
              ]
            : []),
          ...(user?.user
            ? [{ text: t('ng'), link: '/select-profile?mode=game' }]
            : [{ text: t('ng'), link: '/login?mode=game' }])
        ]}
      />
    </div>
  );
}
export default SelectGame;
