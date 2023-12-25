import { drawConnectors } from '@mediapipe/drawing_utils';

export const drawIncorrectFingers = (canvasCtx, landmarks, lookForLetter, HAND_CONNECTIONS) => {
  const color = '#666666';
  const lineWidth = 2;

  const incorrectFingers = lookForLetter.incorrectFingers
    ? lookForLetter.incorrectFingers.join('')
    : '';

  if (incorrectFingers.includes('thumb')) {
    // thumb
    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS.slice(0, 4), {
      color,
      lineWidth,
    });
  }
  // Index
  if (incorrectFingers.includes('index')) {
    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS.slice(4, 8), {
      color,
      lineWidth,
    });
  }

  // Middle
  if (incorrectFingers.includes('middle')) {
    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS.slice(8, 12), {
      color,
      lineWidth,
    });
  }

  // Ring
  if (incorrectFingers.includes('ring')) {
    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS.slice(12, 16), {
      color,
      lineWidth,
    });
  }

  // Pinky
  if (incorrectFingers.includes('little')) {
    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS.slice(16, 21), {
      color,
      lineWidth,
    });
  }
};
