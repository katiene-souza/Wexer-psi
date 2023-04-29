import React from "react";

function Bin() {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="40"
    fill="none"
    viewBox="-2 2 36 30"
  >
    <g filter="url(#filter0_d_5939_5102)">
      <rect width="32" height="24" x="2" fill="#fff" rx="8"></rect>
      <path
        fill="#EB5757"
        fillRule="evenodd"
        d="M20.666 14.667c0 .366-.3.666-.666.666a.669.669 0 01-.667-.666V12c0-.367.3-.667.667-.667.366 0 .666.3.666.667v2.667zm-4-7.782c0-.103.143-.218.334-.218h2c.19 0 .333.115.333.218V8h-2.667V6.885zm0 7.782c0 .366-.3.666-.666.666a.669.669 0 01-.667-.666V12c0-.367.3-.667.667-.667.366 0 .666.3.666.667v2.667zM24 8H20.666V6.885c0-.856-.747-1.552-1.666-1.552h-2c-.92 0-1.667.696-1.667 1.552V8H12c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h.666v7.334c0 1.102.898 2 2 2h6.667c1.103 0 2-.898 2-2V9.333H24c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667z"
        clipRule="evenodd"
      ></path>
      <rect
        width="31"
        height="23"
        x="2.5"
        y="0.5"
        stroke="#EB5757"
        rx="7.5"
      ></rect>
    </g>
    <defs>
      <filter
        id="filter0_d_5939_5102"
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
          result="effect1_dropShadow_5939_5102"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5939_5102"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);
}

export default Bin;