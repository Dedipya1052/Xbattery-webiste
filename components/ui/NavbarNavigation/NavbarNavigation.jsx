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
        className="text-lg font-medium transition-colors duration-300 space-grotesk-medium cursor-pointer text-[#cacaca] hover:text-white"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Products
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
