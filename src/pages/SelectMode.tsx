import boy1 from '@assets/icons/boy1.png';
import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
function SelectMode() {
  const user = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <div className="flex h-screen">
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
