import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

// A small, theme-aware tooltip with smooth delayed fade-in/out
// Props:
// - text: tooltip label
// - delay: ms before showing on hover
// - placement: currently supports 'left' (default) and 'right'
// - className: optional extra classes for the wrapper
const CustomTooltip = ({ children, text = "Energy storage", delay = 200, placement = 'left', className = '' }) => {
  const [isActive, setIsActive] = useState(false); // visible state for CSS transitions
  const [isMounted, setIsMounted] = useState(false); // keep mounted during fade-out
  const showTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  useEffect(() => () => {
    if (showTimerRef.current) clearTimeout(showTimerRef.current);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  }, []);

  const handleEnter = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    showTimerRef.current = setTimeout(() => {
      setIsMounted(true);
      // Next frame to ensure transition runs
      requestAnimationFrame(() => setIsActive(true));
    }, Math.max(0, delay));
  };

  const handleLeave = () => {
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }
    setIsActive(false);
    // Unmount after transition ends (200ms matches CSS)
    hideTimerRef.current = setTimeout(() => setIsMounted(false), 220);
  };

  return (
    <div
      className={`relative block w-full h-full ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
      {isMounted && (
        <div
          className={`${styles.tooltip} ${placement === 'right' ? styles.right : styles.left} ${isActive ? styles.visible : ''}`}
          role="tooltip"
          aria-hidden={!isActive}
          style={{
            // Slide direction: if tooltip appears on left of icon, start slightly to the right; vice versa
            ['--slideX']: placement === 'right' ? '-8px' : '8px'
          }}
        >
          <div className={styles.tooltipContent}>
            <div className={styles.tooltipText}>{text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;
