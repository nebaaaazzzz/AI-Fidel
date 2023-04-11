import StartingLeft from '@/components/StartingLeft';
import StartingRight from '@/components/StartingRight';
import boy3 from '@assets/icons/boy3.png';

function SelectGame() {
  return (
    <div className="flex h-screen">
      <StartingLeft path={boy3} />
      <StartingRight
        header1={'Welcome'}
        header2={'back'}
        btns={[
          { text: 'Resume', link: '' },
          { text: 'New Game', link: '' }
        ]}
      />
    </div>
  );
}
export default SelectGame;
