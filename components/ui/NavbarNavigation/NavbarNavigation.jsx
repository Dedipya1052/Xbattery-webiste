import React, { useState, useRef } from 'react';
import MegaDropdown from '../MegaDropdown';

const NavbarNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const isHovering = useRef(false);
  const isMenuHovering = useRef(false);

  const handleMouseEnter = () => {
    console.log('Mouse entered Products div');
    isHovering.current = true;
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    console.log('Setting dropdown open to true');
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse left Products div');
    isHovering.current = false;
    const timeout = setTimeout(() => {
      if (!isHovering.current && !isMenuHovering.current) {
        console.log('Closing dropdown due to timeout');
        setIsDropdownOpen(false);
      }
    }, 150); // Reduced timeout for faster response
    setHoverTimeout(timeout);
  };

  const handleMenuMouseEnter = () => {
    console.log('Mouse entered mega menu');
    isMenuHovering.current = true;
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleMenuMouseLeave = () => {
    console.log('Mouse left mega menu');
    isMenuHovering.current = false;
    const timeout = setTimeout(() => {
      if (!isHovering.current && !isMenuHovering.current) {
        console.log('Closing dropdown - no hover');
        setIsDropdownOpen(false);
      }
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  console.log('Current dropdown state:', isDropdownOpen);

  return (
    <div className="relative block">
      {/* Products Text */}
      <div 
        className="flex items-center justify-center text-white cursor-pointer transition-all duration-200 group focus:outline-none hover:outline-none focus:border-none hover:border-none bg-black px-6 py-4 h-[60px] relative -my-4 w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
          position: 'relative',
          zIndex: 50,
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '60px',
          boxSizing: 'border-box'
        }}
      >
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
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
        pageType="navbar"
        productTextTimeout={500}
        menuTimeout={100}
      />
    </div>
  );
};

export default NavbarNavigation;
