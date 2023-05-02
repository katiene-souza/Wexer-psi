

function EyeIcon() {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="34.6"
    fill="none"
  >
    <g filter="url(#filter0_d_7631_9820)">
      <rect width="32" height="24" x="2" fill="#fff" rx="8"></rect>
      <g clipPath="url(#clip0_7631_9820)">
        <path
          fill="#017849"
          d="M18 6a7.336 7.336 0 017.212 6 7.336 7.336 0 01-14.425 0A7.336 7.336 0 0118 6zm0 10.667A6.004 6.004 0 0023.85 12a6.003 6.003 0 00-11.703 0A6.004 6.004 0 0018 16.667zM18 15a3 3 0 110-6 3 3 0 010 6zm0-1.333a1.667 1.667 0 100-3.334 1.667 1.667 0 000 3.334z"
        ></path>
      </g>
      <rect
        width="31"
        height="23"
        x="2.5"
        y="0.5"
        stroke="#017849"
        rx="7.5"
      ></rect>
    </g>
    <defs>
      <filter
        id="filter0_d_7631_9820"
        width="36"
        height="30"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_7631_9820"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_7631_9820"
          result="shape"
        ></feBlend>
      </filter>
      <clipPath id="clip0_7631_9820">
        <path
          fill="#fff"
          d="M0 0H16V16H0z"
          transform="translate(10 4)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);
}

export default EyeIcon;