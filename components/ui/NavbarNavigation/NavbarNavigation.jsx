import React, { useState, useRef } from 'react';
import MegaDropdown from '../MegaDropdown';
import { useRouter } from 'next/router';

const NavbarNavigation = ({ isProductsInView = false, isBlackNav = false }) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
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
        className={`font-medium transition-colors duration-300 space-grotesk-medium cursor-pointer ${
          isHomePage && router.pathname === "/"
            ? `text-lg ${isProductsInView ? "text-white" : "text-[#cacaca] hover:text-white"}` 
            : isBlackNav
              ? "text-lg text-white hover:text-[#e6e6e6]"
              : router.pathname === "/about" || router.pathname.includes("bharat-bms") || router.pathname.includes("/bms")
                ? "text-lg text-[#cacaca] hover:text-white"
                : "text-[1rem] md:text-[1.2rem] text-black hover:text-[#45c945]"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        BMS
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
