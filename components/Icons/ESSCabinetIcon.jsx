import React from 'react';

// ESS cabinet/controller icon styled to match the solid device in reference image
const ESSCabinetIcon = ({ size = 32, className = "", color = "#ffffff" }) => {
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ESS controller icon"
    >
      {/** White inner square background to match the reference */}
      <rect x="10" y="10" width="44" height="50" rx="6" fill={color} />

      {/** Dark device shape */}
      {/** Side vertical bars */}
      <rect x="15" y="13" width="3.5" height="38" rx="1.5" fill="#2a2e32" />
      <rect x="46" y="13" width="3" height="38" rx="1.5" fill="#2a2e32" />

      {/** Main body */}
      <rect x="22" y="16" width="20" height="32" rx="2.5" fill="#2a2e32" />

      {/** Inner panel (white) */}
      <rect x="24.5" y="19" width="15" height="26" rx="2" fill={color} />

      {/** Small screen on top with white border */}
      <rect x="26.5" y="20.5" width="11" height="8" rx="2" fill="#2a2e32" />
      <rect x="27.8" y="22" width="8.4" height="5" rx="1.4" fill={color} />

      {/** Two buttons smaller to match reference */}
      <circle cx="32" cy="35" r="3.6" fill="#2a2e32" />
      <circle cx="32" cy="35" r="1.2" fill={color} />

      <circle cx="32" cy="41.6" r="3.6" fill="#2a2e32" />
      <circle cx="32" cy="41.6" r="1.2" fill={color} />

      {/** Bold horizontal line below both rounds, touching inner panel sides */}
      <rect x="15.0" y="49.2" width="34" height="8" rx="1.5" fill="#2a2e32" />
    </svg>
  );
};

export default ESSCabinetIcon;

