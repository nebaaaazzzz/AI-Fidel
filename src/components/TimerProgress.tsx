import React from 'react';

function TimerProgress({ percentage }) {
  return (
    <progress
    className="progress w-full progress-accent bg-gray-700"
      value={percentage}
      max="100"
    ></progress>
  );
}

export default TimerProgress;
