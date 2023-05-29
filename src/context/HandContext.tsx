import React, { createContext, useEffect, useState } from 'react';
import { Hands } from '@mediapipe/hands';

export const HandContext = createContext(null);

// const hands = new Hands({
//   locateFile: (file) => {
//     return `/src/mediapipe/hands/${file}`;
//   },
// });

// hands.setOptions({
//   maxNumHands: 1,
//   modelComplexity: 1,
//   minDetectionConfidence: 0.5,
//   minTrackingConfidence: 0.5,
// });

const HandContextProvider = ({ children }) => {
  const [hand, setHand] = useState('');

  return (
    <HandContext.Provider value={{ hand, setHand }}>
      {children}
    </HandContext.Provider>
  );
};

export default HandContextProvider;