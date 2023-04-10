import boy1 from '@assets/icons/boy1.png';

import { Logo } from '@/components/Logo';
import boy2 from '@assets/icons/boy2.png';
import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';

function Login() {
  return (
    <div className="flex h-screen">
      <StartingLeft path={boy2} />
      <StartingRight
        header1={'Learn'}
        header2={'Sign Language'}
        btns={['Get Started', 'Learn as a guest', 'Login with google']}
      />
    </div>
  );
}
export default Login;
