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
        btns={[
          { text: 'Learn as a guest', link: '/select-profile' },
          { text: 'Login with google', link: '' }
        ]}
      />
    </div>
  );
}
export default Login;
