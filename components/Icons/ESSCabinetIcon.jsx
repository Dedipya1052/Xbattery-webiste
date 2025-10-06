import React from 'react';

// Simple cabinet/controller icon matching the provided image
const ESSCabinetIcon = ({ size = 32, className = "", color = "white" }) => {
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer cabinet */}
      <rect x="10" y="8" width="44" height="48" rx="4" fill={color} />
      {/* Inner panel outline (negative by drawing with background stroke) */}
      <rect x="20" y="14" width="24" height="36" rx="2" fill="none" stroke="#111" strokeWidth="4" />
      {/* Screen rectangle */}
      <rect x="24" y="18" width="16" height="10" rx="2" fill="#111" />
      <rect x="26" y="20" width="12" height="6" rx="1.5" fill={color} />
      {/* Two circular buttons */}
      <circle cx="32" cy="36" r="6" fill="#111" />
      <circle cx="32" cy="36" r="2" fill={color} />
      <circle cx="32" cy="48" r="6" fill="#111" />
      <circle cx="32" cy="48" r="2" fill={color} />
    </svg>
  );
};

export default ESSCabinetIcon;


