import React from "react";

export default function FactoryIcon({ size = 20, className = "" }) {
  const dimension = typeof size === "number" ? `${size}` : size;
  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      {/* Base factory building with chimneys and windows - uses currentColor to allow gradient wrapper */}
      <path d="M3 20V9.5c0-.55.45-1 1-1h1.5c.55 0 1 .45 1 1V12l3.8-2.85c.66-.49 1.7-.02 1.7.82V12l3.8-2.85c.66-.49 1.7-.02 1.7.82V20H3z"/>
      <rect x="5" y="14" width="2" height="2" rx="0.3"/>
      <rect x="8.5" y="14" width="2" height="2" rx="0.3"/>
      <rect x="12" y="14" width="2" height="2" rx="0.3"/>
      <rect x="5" y="17" width="2" height="2" rx="0.3"/>
      <rect x="8.5" y="17" width="2" height="2" rx="0.3"/>
      <rect x="12" y="17" width="2" height="2" rx="0.3"/>
      {/* Roof line */}
      <path d="M2 20h20v2H2z"/>
      {/* Chimney with smoke */}
      <path d="M18 4h2c.55 0 1 .45 1 1v9h-3V5c0-.55.45-1 1-1z"/>
      <path d="M17.2 2.6c.5-.6 1.5-.7 2.1-.1.4.4.5 1 .3 1.4-.2.4-.6.7-1 .8-.5.1-1 .4-1.2.9-.2.5-.8.7-1.3.5-.5-.2-.7-.8-.5-1.3.3-.9 1-1.7 1.6-2.2z"/>
    </svg>
  );
}


