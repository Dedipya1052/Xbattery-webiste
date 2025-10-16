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
    }, 500); // Increased delay to 500ms for better hover experience
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
      {/* Products Text - Updated to show text instead of hamburger icon */}
      <div 
        className="px-4 py-2 rounded-lg bg-[#0c0c0c] flex items-center justify-center text-white cursor-pointer transition-all duration-200 group focus:outline-none hover:outline-none focus:border-none hover:border-none hover:bg-[#1a1a1a]"
        style={{
          backgroundColor: '#0c0c0c !important',
          outline: 'none !important',
          border: 'none !important',
          boxShadow: 'none !important'
        }}>
        <span className="text-sm font-medium text-white transition-colors duration-200">
          Products
        </span>
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white transition-colors duration-200 ml-2"
        >
          <path 
            d="M6 9L12 15L18 9" 
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
