import React from 'react';

const ESSBMSIcon72V = ({ size = 32, className = "", color = "white" }) => {
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
      
      {/* Battery modules (6 horizontal rectangles for 72V) */}
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <g key={index}>
          {/* Module container */}
          <rect
            x="7"
            y={5.5 + index * 1.8}
            width="10"
            height="1.2"
            stroke={color}
            strokeWidth="0.4"
            fill="none"
          />
          
          {/* Lightning bolt section */}
          <rect
            x="7"
            y={5.5 + index * 1.8}
            width="1.2"
            height="1.2"
            fill={color}
          />
          
          {/* Lightning bolt - white */}
          <path
            d={`M7.2 ${5.7 + index * 1.8} L7.6 ${6.1 + index * 1.8} L7.0 ${6.1 + index * 1.8} L7.4 ${6.5 + index * 1.8} L6.8 ${6.5 + index * 1.8} L7.2 ${6.9 + index * 1.8} L7.6 ${6.5 + index * 1.8} L7.0 ${6.5 + index * 1.8} L7.4 ${6.1 + index * 1.8} L6.8 ${6.1 + index * 1.8} Z`}
            fill="white"
            stroke="none"
          />
          
          {/* Battery indicator (4 bars for 72V) - white */}
          <g>
            <rect
              x="8.5"
              y={5.6 + index * 1.8}
              width="0.2"
              height="1.0"
              fill="white"
            />
            <rect
              x="8.8"
              y={5.6 + index * 1.8}
              width="0.2"
              height="1.0"
              fill="white"
            />
            <rect
              x="9.1"
              y={5.6 + index * 1.8}
              width="0.2"
              height="1.0"
              fill="white"
            />
            <rect
              x="9.4"
              y={5.6 + index * 1.8}
              width="0.2"
              height="1.0"
              fill="white"
            />
          </g>
          
          {/* Connection lines */}
          <line
            x1="17.5"
            y1={6.1 + index * 1.8}
            x2="19"
            y2={6.1 + index * 1.8}
            stroke={color}
            strokeWidth="0.3"
            strokeOpacity="0.9"
          />
          <line
            x1="19"
            y1={5.9 + index * 1.8}
            x2="19"
            y2={6.3 + index * 1.8}
            stroke={color}
            strokeWidth="0.3"
            strokeOpacity="0.9"
          />
        </g>
      ))}
    </svg>
  );
};

export default ESSBMSIcon72V;
