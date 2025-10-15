import React, { useState } from 'react';
import Image from 'next/image';
import MegaDropdown from '../MegaDropdown';

const NavbarNavigation = () => {
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
      <div className="w-11 h-11 rounded-xl bg-[#0c0c0c] border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-[#1a1a1a] hover:border-[#00e5ff] transition-all duration-200 group overflow-visible">
        <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
          <Image 
            src="/images/icons/download (29)-Photoroom.png" 
            alt="Navigation icon" 
            width={42} 
            height={42} 
            className="object-cover scale-[1.3]" 
          />
        </div>
      </div>

      {/* Mega Dropdown */}
      <MegaDropdown 
        isOpen={isDropdownOpen}
        onClose={handleClose}
        pageType="navbar"
      />
    </div>
  );
};

export default NavbarNavigation;
