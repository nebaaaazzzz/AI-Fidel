import React from 'react';

function Stars() {
  return (
    <ul className="steps text-2xl">
      <li data-content="★" className="step  step-accent"></li>
      <li data-content="★" className="step step-accent "></li>
      <li data-content="★" className="step step-neutral"></li>
      <li data-content="★" className="step"></li>
    </ul>
  );
}

export default Stars;
