import React from "react";

function SessionElipse() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="24" fill="#00995D"></circle>
      <g clipPath="url(#clip0_0_1)">
        <path
          fill="#fff"
          d="M22.667 10.667c5.424 0 9.901 4.048 10.578 9.286l3 4.72c.198.31.158.772-.3.97l-2.612 1.117v3.907a2.666 2.666 0 01-2.666 2.666H28l-.001 4H16v-4.925c0-1.573-.581-3.063-1.659-4.407A10.62 10.62 0 0112 21.333c0-5.89 4.776-10.666 10.667-10.666zm0 2.666a8 8 0 00-8 8c0 1.847.624 3.591 1.754 5 1.459 1.82 2.246 3.89 2.246 6.075v2.259h6.666l.003-4h5.33v-5.664l2.067-.886-2.057-3.233-.076-.59a8.002 8.002 0 00-7.933-6.96zm-.707 5.018l.707.706.706-.706a2.332 2.332 0 013.3 0 2.33 2.33 0 010 3.298l-4.006 4.008-4.007-4.008a2.33 2.33 0 010-3.298 2.332 2.332 0 013.3 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <path fill="#fff" d="M0 0H32V32H0z" transform="translate(8 8)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SessionElipse;