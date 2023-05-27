import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import boy3 from '@assets/icons/boy3.png';
import { getSessionInfo } from '../utils/localsession';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import { useAtom } from 'jotai';
import { handAtom } from '../store/store';
import { langAtom } from '../store/store'

function SelectGame() {
  const { t } = useTranslation();
  const user = useContext(AuthContext);
  const [level, setLevel] = useState<any>();
  useEffect(() => {
    (async () => {
      setLevel(localStorage.getItem('level'));
    })();
  }, []);
  return (
    <div className="flex gap-10 md:gap-0 h-screen flex-col overflow-hidden md:flex-row p-8 sm:pt-12 change-bg">
      <StartingLeft path={boy3} />
      <StartingRight
        header1={t('welcome')}
        header2={t('bc')}
        firstPage="true"
        btns={[
          ...(level
            ? [
                {
                  text: t('resume'),
                  link: `/select-level?level=${level}&lang=${langAtom}&hand=${handAtom}&mode=game`,
                },
              ]
            : []),
          ...(user?.user
            ? [{ text: t('ng'), link: '/select-profile?mode=game' }]
            : [{ text: t('ng'), link: '/login?mode=game' }]),
        ]}
      />
    </div>
  );
}
export default SelectGame;
