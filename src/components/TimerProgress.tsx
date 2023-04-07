import React from 'react';

function TimerProgress() {
  return (
    <progress
      className="progress progress-accent w-56"
      value="10"
      max="100"
    ></progress>
  );
}

export default TimerProgress;
