import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
function BackButton({ url, black = false }: { url: string; black?: boolean }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`font-bold z-50 text-5xl top-8 absolute left-16  ${
        black ? 'text-black' : 'text-white'
      }`}
    >
      <div className="backArrow">
        <svg
          width="34"
          height="28"
          viewBox="0 0 34 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M14.1889 28L16.4525 25.8092L5.53712 15.5313L34 15.5313L34 12.4687L5.57684 12.4687L16.4525 2.22994L14.1889 2.08275e-06L-2.59273e-06 14.0224L14.1889 28Z"
              fill="#683AFF"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="34"
                height="28"
                fill="white"
                transform="translate(34 28) rotate(-180)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </button>
  );
}

export default BackButton;
