import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import boy3 from '@assets/icons/boy3.png';

function Login() {
  return (
    <div className="flex h-screen">
      <StartingLeft path={boy3} />
      <StartingRight
        header1={'Welcome'}
        header2={'back'}
        btns={['Resume', 'New Game']}
      />
    </div>
  );
}
export default Login;
