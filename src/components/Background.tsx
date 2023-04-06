import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Background({ word }: { word: string }) {
  return (
    <div className="slide-container" style={{ width: 200 }}>
      <Fade
        duration={700}
        transitionDuration={100}
        arrows={false}
        canSwipe={false}
      >
        {word.split('').map((letter, i) => {
          return (
            <div className="each-fade" key={i}>
              <img src={`/spelling/` + letter.toUpperCase() + '.png'} alt="F" />
            </div>
          );
        })}
      </Fade>
    </div>
  );
}

export default Background;
