import React, { useState } from 'react';
import MegaDropdown from '../MegaDropdown';

const NavigationIcon = ({ pageType = 'ess' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
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
      <div className="w-11 h-11 rounded-xl bg-[#0c0c0c] border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-[#1a1a1a] hover:border-[#00e5ff] transition-all duration-200 group">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white group-hover:text-[#00e5ff] transition-colors duration-200"
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
