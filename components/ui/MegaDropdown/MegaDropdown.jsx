import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBolt, FaCogs, FaCode, FaChartLine, FaShieldAlt, FaThermometerHalf, FaServer, FaBatteryFull, FaWifi, FaIndustry, FaCubes, FaCar, FaTruck, FaBatteryEmpty, FaChartPie } from 'react-icons/fa';

const MegaDropdown = ({ isOpen, onClose, pageType = 'ess' }) => {
  const [activeSection, setActiveSection] = useState('products');
  const dropdownRef = useRef(null);

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

  // Data for different sections
  const sectionsData = {
    products: {
      title: 'Products',
      items: pageType === 'ess' ? [
        {
          title: 'BharatBMS-ESS-48V',
          description: '48V Energy Storage System',
          image: '/images/bms_offerings/ess-48v-front-view.png',
          link: '/bms/BharatBMS-ESS'
        },
        {
          title: 'BharatBMS-ESS-72V',
          description: '72V Energy Storage System',
          image: '/images/bms_offerings/ess-72v.png',
          link: '/bms/BharatBMS-ESS-72V'
        },
        {
          title: 'BharatBMS-ESS-110V',
          description: '110V Energy Storage System',
          image: '/images/bms_offerings/ess-110v.png',
          link: '/bms/BharatBMS-ESS-110V'
        }
      ] : pageType === 'ev' ? [
        {
          title: 'BharatBMS-EV-110V',
          description: '110V Electric Vehicle BMS',
          image: '/images/bms_offerings/ev-110v.png',
          link: '/bms/BharatBMS-EV-110V'
        },
        {
          title: 'BharatBMS-EV-400V',
          description: '400V Electric Vehicle BMS',
          image: '/images/bms_offerings/ev-400v.png',
          link: '/bms/BharatBMS-EV-400V'
        },
        {
          title: 'BharatBMS-EV-600V',
          description: '600V Electric Vehicle BMS',
          image: '/images/bms_offerings/ev-500v.png',
          link: '/bms/BharatBMS-EV-600V'
        }
      ] : [
        // Navbar - show both ESS and EV products
        {
          title: 'BharatBMS-ESS-48V',
          description: '48V Energy Storage System',
          image: '/images/bms_offerings/ess-48v-front-view.png',
          link: '/bms/BharatBMS-ESS',
          category: 'ESS'
        },
        {
          title: 'BharatBMS-ESS-72V',
          description: '72V Energy Storage System',
          image: '/images/bms_offerings/ess-72v.png',
          link: '/bms/BharatBMS-ESS-72V',
          category: 'ESS'
        },
        {
          title: 'BharatBMS-ESS-110V',
          description: '110V Energy Storage System',
          image: '/images/bms_offerings/ess-110v.png',
          link: '/bms/BharatBMS-ESS-110V',
          category: 'ESS'
        },
        {
          title: 'BharatBMS-EV-110V',
          description: '110V Electric Vehicle BMS',
          image: '/images/bms_offerings/ev-110v.png',
          link: '/bms/BharatBMS-EV-110V',
          category: 'EV'
        },
        {
          title: 'BharatBMS-EV-400V',
          description: '400V Electric Vehicle BMS',
          image: '/images/bms_offerings/ev-400v.png',
          link: '/bms/BharatBMS-EV-400V',
          category: 'EV'
        },
        {
          title: 'BharatBMS-EV-600V',
          description: '600V Electric Vehicle BMS',
          image: '/images/bms_offerings/ev-500v.png',
          link: '/bms/BharatBMS-EV-600V',
          category: 'EV'
        }
      ]
    },
    features: {
      title: 'Features',
      items: [
        {
          title: 'Cell Monitoring & Balancing',
          description: 'Supports up to 18 series cells with passive balancing for equalization. Voltage accuracy: ±2mV.',
          icon: FaBatteryFull
        },
        {
          title: 'Communication & Control',
          description: 'CAN FD, UART, SPI, and Ethernet for real-time processing and remote monitoring.',
          icon: FaWifi
        },
        {
          title: 'Safety Features',
          description: 'ISO 26262 compliant protection for voltage, current, and temperature with fault diagnostics.',
          icon: FaShieldAlt
        },
        {
          title: 'Thermal Management',
          description: 'Real-time temperature sensing and thermal runaway detection for high-temperature control.',
          icon: FaThermometerHalf
        },
        {
          title: 'Scalability',
          description: 'Modular architecture supports series and parallel setups for larger energy storage needs.',
          icon: FaServer
        },
        {
          title: 'Diagnostics and Monitoring',
          description: 'Real-time data visualization and lifecycle analytics for better battery management.',
          icon: FaChartLine
        }
      ]
    },
    software: {
      title: 'Software',
      items: [
        {
          title: 'SOC/SOH Estimation',
          description: 'Accurate algorithms for State-of-Charge and State-of-Health calculation, ensuring reliable battery status reporting.',
          icon: FaChartLine
        },
        {
          title: 'Software Framework',
          description: 'Optimized in C for high efficiency and real-time performance, suitable for demanding applications.',
          icon: FaCode
        },
        {
          title: 'Customizable API',
          description: 'Open API for seamless integration and tailoring system behavior to specific applications.',
          icon: FaCogs
        }
      ]
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="fixed top-16 left-0 w-screen bg-[#1c1c1c] border border-[#333] shadow-2xl rounded-2xl z-50 overflow-hidden"
      style={{ marginTop: '8px' }}
    >
      <div className="flex h-[400px]">
        {/* Left Navigation */}
        <div className="w-1/4 bg-[#0c0c0c] border-r border-[#333] p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <nav className="space-y-2">
            {Object.keys(sectionsData).map((sectionKey) => (
              <button
                key={sectionKey}
                onClick={() => setActiveSection(sectionKey)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === sectionKey
                    ? 'bg-[#00e5ff] text-black shadow-md font-semibold'
                    : 'text-gray-300 hover:bg-[#1a1a1a] hover:text-[#00e5ff]'
                }`}
              >
                {sectionsData[sectionKey].title}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Content */}
        <div className="w-3/4 p-4 overflow-y-auto bg-[#1c1c1c]">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white mb-2">
              {sectionsData[activeSection].title}
            </h2>
            <p className="text-gray-300 text-sm">
              {activeSection === 'products' 
                ? 'Explore our range of battery management systems'
                : activeSection === 'features'
                ? 'Advanced features for optimal battery performance'
                : 'Software solutions for comprehensive battery management'
              }
            </p>
          </div>

          {activeSection === 'products' ? (
            <div className="grid grid-cols-2 gap-4">
              {sectionsData[activeSection].items.map((item, index) => (
                <div key={index} className="border border-[#333] rounded-lg p-3 hover:border-[#00e5ff] hover:shadow-lg transition-all duration-200 bg-[#0c0c0c]">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#1c1c1c] rounded-lg flex items-center justify-center overflow-hidden border border-[#333]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                        {item.category && (
                          <span className="px-1 py-0.5 text-xs font-medium bg-[#00e5ff] bg-opacity-20 text-[#00e5ff] rounded border border-[#00e5ff] border-opacity-30">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-300 mb-2">{item.description}</p>
                      <Link 
                        href={item.link}
                        className="text-[#00e5ff] hover:text-[#00b8cc] text-xs font-medium transition-colors"
                        onClick={onClose}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {sectionsData[activeSection].items.map((item, index) => (
                <div key={index} className="border border-[#333] rounded-lg p-3 hover:border-[#00e5ff] hover:shadow-lg transition-all duration-200 bg-[#0c0c0c]">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-[#00e5ff] bg-opacity-20 rounded-lg flex items-center justify-center text-[#00e5ff] border border-[#00e5ff] border-opacity-30">
                      <item.icon size={16} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
