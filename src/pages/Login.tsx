import boy2 from '@assets/icons/boy2.png';
import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import { useSearchParams } from 'react-router-dom';

function Login() {
  const mode = useSearchParams()[0].get('mode');

  return (
    <div className="flex h-screen">
      <StartingLeft path={boy2} />
      <StartingRight
        {...(mode == 'game'
          ? { header1: 'Sign Language', header2: 'Game' }
          : { header1: 'Learn', header2: 'Sign Language' })}
        btns={[
          {
            text: mode == 'game' ? 'Play a guest' : 'Learn as a guest',
            link: '/select-profile'
          },
          { text: 'Login with google', to: '/select-profile' }
        ]}
      />
    </div>
  );
}
export default Login;
