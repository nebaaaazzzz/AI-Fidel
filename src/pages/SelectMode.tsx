import boy1 from '@assets/icons/boy1.png';
import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import { getSessionInfo } from '@/utils/localsession';
function SelectMode() {
  const user = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <div className="flex h-screen bg-green-500 transition-all flex-col md:flex-row p-8 sm:pt-12 ">
      <StartingLeft path={boy1} />
      <StartingRight
        header1={t('wd')}
        header2={t('yld')}
        firstPage=""
        btns={[
          {
            text: t('education'),
            link: user?.user
              ? '/select-profile?mode=learn'
              : '/login?mode=learn'
          },
          { text: t('game'), link: '/select-game' }
        ]}
      />
    </div>
  );
}
export default SelectMode;
