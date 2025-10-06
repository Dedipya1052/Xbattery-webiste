import React from 'react';

const ESSBMSIcon = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main circular outline */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Server rack/cabinet frame */}
      <rect
        x="8"
        y="6"
        width="8"
        height="10"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      
      {/* Server rack interior */}
      <rect
        x="8.5"
        y="6.5"
        width="7"
        height="9"
        fill="currentColor"
        fillOpacity="0.3"
      />
      
      {/* Battery modules (6 horizontal rectangles) */}
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <g key={index}>
          {/* Module container */}
          <rect
            x="8.8"
            y={7.2 + index * 1.3}
            width="6.4"
            height="0.8"
            stroke="currentColor"
            strokeWidth="0.3"
            fill="currentColor"
            fillOpacity="0.4"
          />
          
          {/* Lightning bolt section */}
          <rect
            x="8.8"
            y={7.2 + index * 1.3}
            width="0.8"
            height="0.8"
            fill="currentColor"
            fillOpacity="0.8"
          />
          
          {/* Lightning bolt */}
          <path
            d={`M9.2 ${7.4 + index * 1.3} L9.4 ${7.6 + index * 1.3} L9.1 ${7.6 + index * 1.3} L9.3 ${7.8 + index * 1.3} L9.0 ${7.8 + index * 1.3} L9.2 ${8.0 + index * 1.3} L9.5 ${7.8 + index * 1.3} L9.2 ${7.8 + index * 1.3} L9.4 ${7.6 + index * 1.3} L9.1 ${7.6 + index * 1.3} Z`}
            fill="white"
            stroke="none"
          />
          
          {/* Battery indicator (4 bars) */}
          <g>
            <rect
              x="9.6"
              y={7.3 + index * 1.3}
              width="0.15"
              height="0.6"
              fill="white"
            />
            <rect
              x="9.8"
              y={7.3 + index * 1.3}
              width="0.15"
              height="0.6"
              fill="white"
            />
            <rect
              x="10.0"
              y={7.3 + index * 1.3}
              width="0.15"
              height="0.6"
              fill="white"
            />
            <rect
              x="10.2"
              y={7.3 + index * 1.3}
              width="0.15"
              height="0.6"
              fill="white"
            />
          </g>
          
          {/* Connection lines */}
          <line
            x1="15.2"
            y1={7.6 + index * 1.3}
            x2="16.5"
            y2={7.6 + index * 1.3}
            stroke="currentColor"
            strokeWidth="0.2"
            strokeOpacity="0.6"
          />
          <line
            x1="16.5"
            y1={7.4 + index * 1.3}
            x2="16.5"
            y2={7.8 + index * 1.3}
            stroke="currentColor"
            strokeWidth="0.2"
            strokeOpacity="0.6"
          />
        </g>
      ))}
    </svg>
  );
};

export default ESSBMSIcon;
