// IconWithGradient.js
import React from 'react';
import styles from "./styles.module.css"; // Assuming you are using CSS modules

const IconWithGradient = ({ children, size }) => {
  return (
    <div>
      {/* Define the custom gradient */}
      {/* <svg width="0" height="0">
        <defs>
          <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#25f1fc', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#5bb2ff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#b15dfb', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg> */}
      <svg width="0" height="0">
  <defs>
    <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: '#33effc', stopOpacity: 1 }} />
      <stop offset="50%" style={{ stopColor: '#6baeff', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#c070f8', stopOpacity: 1 }} />
    </linearGradient>
  </defs>
</svg>


      <div className={styles.gradientIcon}>
        {React.cloneElement(children, { size })}
      </div>
    </div>
  );
};

export default IconWithGradient;
