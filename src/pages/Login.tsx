import boy2 from '@assets/icons/boy2.png';
import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';

function Login() {
  const mode = useSearchParams()[0].get('mode');
  const { search } = useLocation();
  const user = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <div className="flex gap-10 md:gap-0 h-screen flex-col md:flex-row overflow-hidden p-8 sm:pt-12 change-bg">
      <StartingLeft path={boy2} />
      <StartingRight
        {...(mode == 'game'
          ? { header1: t('sgnl'), header2: t('game') }
          : { header1: t('learn'), header2: t('sgnl') })}
        firstPage="true"
        btns={[
          {
            text: mode == 'game' ? t('paag') : t('laag'),
            link: `/select-profile${search}`,
          },
          ...(!user?.user ? [{ text: t('lwg'), to: `/select-profile${search}` }] : []),
        ]}
      />
    </div>
  );
}
export default Login;
