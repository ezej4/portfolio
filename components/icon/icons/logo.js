const Logo = ({ width = "100", height = "100", className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="none" viewBox="0 0 54 71">
    <g filter="url(#filter0_d_4_87)">
      <path
        fill="#272932"
        d="M6.206 14.638l5.04.354 2.128-8.147h19.907l-.32 22.105H18.058l-1.739-6.093-2.945.354v16.684l1.987.744 1.065.32.993.176 1.065.142.816-6.27h13.661l-.461 20.83H14.58l-2.022-8.22-2.803.178-2.342.319-.745 4.676-.462 5.916L6.49 62H48.54L49 58.6l-7.736-2.339-.71-50.23 4.365-.957 2.981-1.17L47.545 1H5.142L5 7.27l.39 3.295.816 4.073z"
      ></path>
      <path
        stroke="#272932"
        d="M6.206 14.638l5.04.354 2.128-8.147h19.907l-.32 22.105H18.058l-1.739-6.093-2.945.354v16.684l1.987.744 1.065.32.993.176 1.065.142.816-6.27h13.661l-.461 20.83H14.58l-2.022-8.22-2.803.178-2.342.319-.745 4.676-.462 5.916L6.49 62H48.54L49 58.6l-7.736-2.339-.71-50.23 4.365-.957 2.981-1.17L47.545 1H5.142L5 7.27l.39 3.295.816 4.073z"
      ></path>
    </g>
    <defs>
      <filter id="filter0_d_4_87" width="53.053" height="70" x="0.5" y="0.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_87"></feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_87" result="shape"></feBlend>
      </filter>
    </defs>
  </svg>
);

export default Logo;
