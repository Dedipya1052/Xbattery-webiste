import React, { useState, useRef, useEffect } from 'react';
import ESSBMSIcon from '@/components/Icons/ESSBMSIcon';
import ESSBMSIcon48V from '@/components/Icons/ESSBMSIcon48V';
import ESSBMSIcon72V from '@/components/Icons/ESSBMSIcon72V';

const MegaDropdown = ({ isOpen, onClose, onMouseEnter, onMouseLeave, pageType = 'ess', productTextTimeout = 1000, menuTimeout = 2000 }) => {
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ess');
  const dropdownRef = useRef(null);

  console.log('MegaDropdown received isOpen:', isOpen);

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Cleanup hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Content data for different categories
  const essContent = {
    title: "BharatBMS for Energy Storage",
    sections: [
      {
        name: "Xbattery BharatBMS-ESS-48V",
        products: [
          { 
            name: "Smart BMS for UPS, telecom, and small ESS applications, supports up to 28S for compact and reliable energy storage"
          }
        ]
      },
      {
        name: "Xbattery BharatBMS-ESS-72V", 
        products: [
          { 
            name: "High-efficiency BMS for industrial and medium-scale ESS, supports up to 28S for safe and efficient power management."
          }
        ]
      },
      {
        name: "Xbattery BharatBMS-ESS-110V",
        products: [
          { 
            name: "BMS for large ESS and grid storage, supports up to 42S for high voltage, high-performance energy systems"
          }
        ]
      }
    ]
  };

  const evContent = {
    title: "BharatBMS for EVs",
    sections: [
      {
        name: "Xbattery BharatBMS-EV-110V",
        products: [
          { 
            name: "Optimized for e-rickshaws, autos, and tempos. Supports up to 60S configurations, ensuring efficient, safe, and reliable performance for 3-wheel electric vehicles"
          }
        ]
      },
      {
        name: "Xbattery BharatBMS-EV-400V", 
        products: [
          { 
            name: "Designed for passenger cars, hatchbacks, and sedans. Supports up to 125S, delivering advanced power management and enhanced safety for smooth EV operation"
          }
        ]
      },
      {
        name: "Xbattery BharatBMS-EV-600V",
        products: [
          { 
            name: "Built for SUVs and light commercial vehicles. Supports up to 186S, providing high-performance control, protection, and durability for demanding applications"
          }
        ]
      }
    ]
  };


  const getCurrentContent = () => {
    switch(activeCategory) {
      case 'ess': return essContent;
      case 'ev': return evContent;
      default: return essContent;
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className={`absolute top-full left-0 w-[700px] shadow-2xl rounded-lg overflow-hidden transition-all duration-300 ease-out focus:outline-none hover:outline-none ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      style={{ 
        marginTop: '8px',
        outline: 'none !important',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25) !important',
        zIndex: 9999,
        position: 'absolute'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex">
        {/* Left Column - Categories */}
        <div className="w-1/3 p-4" style={{ backgroundColor: '#2C2C2E ' }}>
          <div className="space-y-1">
            <div 
              className={`text-white font-medium text-base py-2 px-3 rounded cursor-pointer transition-colors ${
                activeCategory === 'ess' ? 'bg-gray-600' : 'hover:bg-gray-600'
              }`}
              style={{ 
                backgroundColor: activeCategory === 'ess' ? '#3A3A3C' : undefined
              }}
              onMouseEnter={() => setActiveCategory('ess')}
            >
              BharatBMS for Energy Storage
            </div>
            <div 
              className={`text-white font-medium text-base py-2 px-3 rounded cursor-pointer transition-colors ${
                activeCategory === 'ev' ? 'bg-gray-600' : 'hover:bg-gray-600'
              }`}
              style={{ 
                backgroundColor: activeCategory === 'ev' ? '#3A3A3C' : undefined
              }}
              onMouseEnter={() => setActiveCategory('ev')}
            >
              BharatBMS for EVs
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="w-2/3 p-4" style={{ backgroundColor: '#2C2C2E' }}>
          <div className="space-y-4">
            {getCurrentContent().sections.map((section, sectionIndex) => (
              <div 
                key={sectionIndex} 
                className="rounded-lg p-4 cursor-pointer hover:bg-gray-600/20 transition-colors duration-200" 
                style={{ backgroundColor: '#3A3A3C' }}
                onClick={() => {
                  // Check if we're already on the target page
                  const currentPath = window.location.pathname;
                  
                  // Navigate to specific section based on product
                  if (section.name === "Xbattery BharatBMS-ESS-48V") {
                    if (currentPath === "/bharatbms-ess") {
                      // Already on ESS page, just scroll to section
                      scrollToSection('ess-48v-white');
                    } else {
                      // Different page, navigate and scroll
                      sessionStorage.setItem('scrollToSection', 'ess-48v-white');
                      window.location.href = "/bharatbms-ess";
                    }
                  } else if (section.name === "Xbattery BharatBMS-ESS-72V") {
                    if (currentPath === "/bharatbms-ess") {
                      scrollToSection('ess-72v-white');
                    } else {
                      sessionStorage.setItem('scrollToSection', 'ess-72v-white');
                      window.location.href = "/bharatbms-ess";
                    }
                  } else if (section.name === "Xbattery BharatBMS-ESS-110V") {
                    if (currentPath === "/bharatbms-ess") {
                      scrollToSection('ess-110v-white');
                    } else {
                      sessionStorage.setItem('scrollToSection', 'ess-110v-white');
                      window.location.href = "/bharatbms-ess";
                    }
                  } else if (section.name === "Xbattery BharatBMS-EV-110V") {
                    if (currentPath === "/bharatbms-ev") {
                      scrollToSection('ev-110v-white');
                    } else {
                      sessionStorage.setItem('scrollToSection', 'ev-110v-white');
                      window.location.href = "/bharatbms-ev";
                    }
                  } else if (section.name === "Xbattery BharatBMS-EV-400V") {
                    if (currentPath === "/bharatbms-ev") {
                      scrollToSection('ev-400v-white');
                    } else {
                      sessionStorage.setItem('scrollToSection', 'ev-400v-white');
                      window.location.href = "/bharatbms-ev";
                    }
                  } else if (section.name === "Xbattery BharatBMS-EV-600V") {
                    if (currentPath === "/bharatbms-ev") {
                      scrollToSection('ev-600v-white');
                    } else {
                      sessionStorage.setItem('scrollToSection', 'ev-600v-white');
                      window.location.href = "/bharatbms-ev";
                    }
                  }
                }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <div className="w-6 h-6 rounded-full border border-cyan-400 flex items-center justify-center">
                      <svg className="w-3 h-3" fill="url(#lightningGradient)" viewBox="0 0 20 20">
                        <defs>
                          <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-base">{section.name}</h3>
                </div>
                <div className="ml-9">
                  <div className="space-y-3">
                    {section.products.map((product, productIndex) => (
                      <div key={productIndex} className="mb-4">
                        <p className="text-gray-300 text-sm leading-relaxed text-left tracking-normal">{product.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;