import React, { useState } from 'react';
import styles from './styles.module.css';

const CustomTooltip = ({ children, text = "Energy storage" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={styles.tooltip}>
          <div className={styles.tooltipContent}>
            <div className={styles.tooltipText}>{text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;
