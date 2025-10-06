import React from 'react';

const ESSBMSIcon48V = ({ size = 32, className = "", color = "white" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer cabinet frame */}
      <rect
        x="6"
        y="4"
        width="12"
        height="14"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
      />
      
      {/* Inner panel */}
      <rect
        x="6.5"
        y="4.5"
        width="11"
        height="13"
        fill="none"
      />
      
      {/* Battery modules (4 horizontal rectangles for 48V) */}
      {[0, 1, 2, 3].map((index) => (
        <g key={index}>
          {/* Module container */}
          <rect
            x="7"
            y={6 + index * 2.5}
            width="10"
            height="1.8"
            stroke={color}
            strokeWidth="0.4"
            fill="none"
          />
          
          {/* Lightning bolt section */}
          <rect
            x="7"
            y={6 + index * 2.5}
            width="1.5"
            height="1.8"
            fill={color}
          />
          
          {/* Lightning bolt - white */}
          <path
            d={`M7.3 ${6.3 + index * 2.5} L7.8 ${6.8 + index * 2.5} L7.1 ${6.8 + index * 2.5} L7.6 ${7.3 + index * 2.5} L6.9 ${7.3 + index * 2.5} L7.4 ${7.8 + index * 2.5} L7.9 ${7.3 + index * 2.5} L7.2 ${7.3 + index * 2.5} L7.7 ${6.8 + index * 2.5} L7.0 ${6.8 + index * 2.5} Z`}
            fill="white"
            stroke="none"
          />
          
          {/* Battery indicator (3 bars for 48V) - white */}
          <g>
            <rect
              x="9"
              y={6.2 + index * 2.5}
              width="0.3"
              height="1.4"
              fill="white"
            />
            <rect
              x="9.5"
              y={6.2 + index * 2.5}
              width="0.3"
              height="1.4"
              fill="white"
            />
            <rect
              x="10"
              y={6.2 + index * 2.5}
              width="0.3"
              height="1.4"
              fill="white"
            />
          </g>
          
          {/* Connection lines */}
          <line
            x1="17.5"
            y1={6.9 + index * 2.5}
            x2="19"
            y2={6.9 + index * 2.5}
            stroke={color}
            strokeWidth="0.3"
            strokeOpacity="0.9"
          />
          <line
            x1="19"
            y1={6.5 + index * 2.5}
            x2="19"
            y2={7.3 + index * 2.5}
            stroke={color}
            strokeWidth="0.3"
            strokeOpacity="0.9"
          />
        </g>
      ))}
    </svg>
  );
};

export default ESSBMSIcon48V;
