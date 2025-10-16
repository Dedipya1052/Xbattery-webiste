import React, { useState } from 'react';
import MegaDropdown from '../MegaDropdown';

const NavigationIcon = ({ pageType = 'ess' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsHovered(true);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Increased delay to 300ms
    setHoverTimeout(timeout);
  };

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Icon */}
      <div 
        className="w-11 h-11 rounded-xl bg-[#0c0c0c] flex items-center justify-center text-white cursor-pointer transition-all duration-200 group focus:outline-none hover:outline-none focus:border-none hover:border-none"
        style={{
          backgroundColor: '#0c0c0c !important',
          outline: 'none !important',
          border: 'none !important',
          boxShadow: 'none !important'
        }}>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white transition-colors duration-200"
        >
          <path 
            d="M3 12H21M3 6H21M3 18H21" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Mega Dropdown */}
      <MegaDropdown 
        isOpen={isDropdownOpen}
        onClose={handleClose}
        pageType={pageType}
      />
    </div>
  );
};

export default NavigationIcon;
