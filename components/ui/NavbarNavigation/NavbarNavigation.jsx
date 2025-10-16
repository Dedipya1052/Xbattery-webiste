import React, { useState } from 'react';
import MegaDropdown from '../MegaDropdown';

const NavbarNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 400); // Shorter delay when leaving product text
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
      {/* Products Text */}
      <div className="flex items-center text-white cursor-pointer transition-all duration-200 group focus:outline-none hover:outline-none focus:border-none hover:border-none bg-black">
        <span className="text-lg font-medium text-white transition-colors duration-200 space-grotesk-medium">
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
        pageType="navbar"
        productTextTimeout={500}
        menuTimeout={100}
      />
    </div>
  );
};

export default NavbarNavigation;
