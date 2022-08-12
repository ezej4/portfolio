const ChevronDown = ({ width = "100", height = "100", className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="none" viewBox="0 0 66 66">
     <path
        fill="#272932"
        fillRule="evenodd"
        d="M33 2.75C16.294 2.75 2.75 16.294 2.75 33S16.294 63.25 33 63.25 63.25 49.706 63.25 33 49.706 2.75 33 2.75zm-9.056 24.18a2.75 2.75 0 00-3.888 3.89l11 11a2.75 2.75 0 003.888 0l11-11a2.75 2.75 0 00-3.888-3.89L33 35.987l-9.056-9.055z"
        clipRule="evenodd"
      ></path>
  </svg>
);

export default ChevronDown;
