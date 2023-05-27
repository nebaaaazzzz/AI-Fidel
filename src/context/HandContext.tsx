import { createContext, useEffect, useState, useMemo } from 'react';

import { Hands } from '@mediapipe/hands';

export const HandContext = createContext(null);

const HandContextProvider = ({ children }) => {
  const hands = useMemo(() => {
    let hands = new Hands({
      locateFile: (file) => {
        return `/src/mediapipe/hands/${file}`;
      },
    });
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    return hands;
  }, []);
  const [hand, setHand] = useState(hands);
  return <HandContext.Provider value={{ hand, setHand }}>{children}</HandContext.Provider>;
};

export default HandContextProvider;
