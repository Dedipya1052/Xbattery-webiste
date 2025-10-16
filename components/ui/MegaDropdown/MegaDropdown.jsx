import React, { useState, useRef, useEffect } from 'react';
import ESSBMSIcon from '@/components/Icons/ESSBMSIcon';
import ESSBMSIcon48V from '@/components/Icons/ESSBMSIcon48V';
import ESSBMSIcon72V from '@/components/Icons/ESSBMSIcon72V';

const MegaDropdown = ({ isOpen, onClose, onMouseEnter, onMouseLeave, pageType = 'ess', productTextTimeout = 1000, menuTimeout = 2000 }) => {
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ess');
  const dropdownRef = useRef(null);

  console.log('MegaDropdown received isOpen:', isOpen);

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
    title: "BharatBMS-ESS",
    sections: [
      {
        name: "Energy Storage Systems",
        products: [
          { name: "FS-LT", description: "For standalone & stackable ESS architectures" },
          { name: "CT-Safe", description: "For grid-scale energy storage safety" },
          { name: "CT-Lite", description: "For residential energy storage systems" },
          { name: "CT-Lite+ 50A", description: "For commercial energy storage applications" },
          { name: "CT-Lite + 80A", description: "For industrial energy storage solutions" }
        ]
      },
      {
        name: "Grid Integration", 
        products: [
          { name: "FS-XT", description: "For high voltage grid-tied applications" },
          { name: "HP Safe", description: "For utility-scale energy storage systems" }
        ]
      }
    ]
  };

  const evContent = {
    title: "BharatBMS-EV",
    sections: [
      {
        name: "Electric Vehicle Systems",
        products: [
          { name: "FSB-PR-I", description: "Interface board for EV charging contractors" },
          { name: "EV-BMS", description: "Battery management for electric vehicles" },
          { name: "Charging Control", description: "Smart charging management systems" }
        ]
      },
      {
        name: "Vehicle Telematics",
        products: [
          { name: "TCU", description: "Telematics control unit for EV monitoring" },
          { name: "Fleet Management", description: "Electric vehicle fleet tracking" }
        ]
      }
    ]
  };

  const batteryCapacityContent = {
    title: "Battery Management",
    sections: [
      {
        name: "Battery Monitoring",
        products: [
          { name: "Cell Monitoring", description: "Individual cell voltage and temperature tracking" },
          { name: "State of Charge", description: "Accurate SOC estimation algorithms" },
          { name: "Health Monitoring", description: "Battery degradation and lifespan analysis" }
        ]
      },
      {
        name: "Safety Systems",
        products: [
          { name: "Thermal Management", description: "Advanced thermal protection systems" },
          { name: "Fault Detection", description: "Real-time fault detection and isolation" },
          { name: "Emergency Shutdown", description: "Safe emergency shutdown procedures" }
        ]
      }
    ]
  };

  const getCurrentContent = () => {
    switch(activeCategory) {
      case 'ess': return essContent;
      case 'ev': return evContent;
      case 'capacity': return batteryCapacityContent;
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
              BharatBMS-ESS
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
              BharatBMS-EV
            </div>
            <div 
              className={`text-white font-medium text-base py-2 px-3 rounded cursor-pointer transition-colors ${
                activeCategory === 'capacity' ? 'bg-gray-600' : 'hover:bg-gray-600'
              }`}
              style={{ 
                backgroundColor: activeCategory === 'capacity' ? '#3A3A3C' : undefined
              }}
              onMouseEnter={() => setActiveCategory('capacity')}
            >
              Battery Management
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="w-2/3 p-4" style={{ backgroundColor: '#2C2C2E' }}>
          <div className="rounded-lg p-4" style={{ backgroundColor: '#3A3A3C' }}>
            {getCurrentContent().sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    {section.name === 'Energy Storage Systems' || section.name === 'Grid Integration' ? (
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
                    ) : section.name === 'Electric Vehicle Systems' ? (
                      <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center relative">
                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z"/>
                        </svg>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    ) : section.name === 'Vehicle Telematics' ? (
                      <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <div className="relative w-4 h-4">
                          <svg className="absolute top-0 left-0 w-2 h-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                          <svg className="absolute bottom-0 right-0 w-2 h-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                        </div>
                      </div>
                    ) : section.name === 'Battery Monitoring' || section.name === 'Safety Systems' ? (
                      <div className="w-6 h-6 rounded-full border border-orange-400 flex items-center justify-center">
                        <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
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
                    )}
                  </div>
                  <h3 className="text-white font-bold text-base">{section.name}</h3>
                </div>
                <div className="ml-9">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {section.products.map((product, productIndex) => (
                      <div key={productIndex} className="mb-3">
                        <div className="text-white font-medium text-sm mb-1">{product.name}</div>
                        {product.description && (
                          <div className="text-gray-300 text-xs">{product.description}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {sectionIndex < getCurrentContent().sections.length - 1 && (
                  <div className="mt-4 mb-4" style={{ borderTop: '1px solid #4A4A4C' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;