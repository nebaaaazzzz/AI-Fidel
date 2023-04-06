import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Left({ word }: { word: string }) {
  return (
    <div className="slide-container absolute" style={{ width: 700 }}>
      <Fade
        duration={700}
        transitionDuration={100}
        arrows={false}
        infinite
        canSwipe={false}
      >
        {word.split('').map((letter) => {
          return (
            <div className="each-fade">
              <img
                src={`/spelling/lefthand/` + letter.toUpperCase() + '.png'}
                alt="F"
              />
            </div>
          );
        })}
      </Fade>
    </div>
  );
}

export default Left;
