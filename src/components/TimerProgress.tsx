import React from 'react';

function TimerProgress({ percentage }) {
  return (
    <progress
      className="progress progress-accent w-56"
      value={percentage}
      max="100"
    ></progress>
  );
}

export default TimerProgress;
