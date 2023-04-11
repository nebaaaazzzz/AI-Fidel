import boy1 from '@assets/icons/boy1.png';
import { Logo } from '@/components/Logo';
import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
function SelectMode() {
  return (
    <div className="flex h-screen">
      <StartingLeft path={boy1} />
      <StartingRight
        header1={'What do'}
        header2={'you Like to do'}
        btns={[
          { text: 'Education', link: '/login' },
          { text: 'Game', link: '/select-game' }
        ]}
      />
    </div>
  );
}
export default SelectMode;
