import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaBatteryFull, 
  FaWifi, 
  FaShieldAlt, 
  FaThermometerHalf, 
  FaServer, 
  FaChartLine,
  FaBook,
  FaFileAlt,
  FaBullseye,
  FaUsers,
  FaPlug
} from 'react-icons/fa';

const MegaDropdown = ({ isOpen, onClose, pageType = 'ess' }) => {
  const [activeTab, setActiveTab] = useState(null);
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

  // Product data with actual images from your product sections
  const products = [
        {
          title: 'BharatBMS-ESS-48V',
      description: 'Advanced battery management for industrial applications',
      image: '/images/telecom_good_looking-Photoroom.png',
          link: '/bms/BharatBMS-ESS'
        },
        {
          title: 'BharatBMS-ESS-72V',
      description: 'Space-efficient solution for commercial use',
          image: '/images/bms_offerings/ess-72v.png',
          link: '/bms/BharatBMS-ESS-72V'
        },
        {
          title: 'BharatBMS-ESS-110V',
      description: 'Intelligent monitoring and control system',
          image: '/images/bms_offerings/ess-110v.png',
          link: '/bms/BharatBMS-ESS-110V'
        }
  ];

  // Features data
  const features = [
    {
      title: 'Battery Modules',
      description: 'Explore our modular battery solutions',
      icon: FaBatteryFull
    },
    {
      title: 'Integration Guide',
      description: 'Step-by-step integration process',
      icon: FaBook
    },
    {
      title: 'Specifications',
      description: 'Detailed technical documentation',
      icon: FaFileAlt
    },
    {
      title: 'Performance',
      description: 'Real-time monitoring and analytics',
      icon: FaBullseye
    },
    {
      title: 'Support',
      description: 'Expert assistance and guidance',
      icon: FaUsers
    },
    {
      title: 'API Access',
      description: 'Developer tools and resources',
      icon: FaPlug
    }
  ];

  // Specifications data
  const specifications = [
    {
      title: 'Cell Monitoring',
      description: 'Real-time voltage and current monitoring',
          icon: FaBatteryFull
        },
        {
      title: 'Communication',
      description: 'CAN FD, UART, SPI, and Ethernet support',
          icon: FaWifi
        },
        {
          title: 'Safety Features',
      description: 'ISO 26262 compliant protection systems',
          icon: FaShieldAlt
        },
        {
          title: 'Thermal Management',
      description: 'Advanced temperature sensing and control',
          icon: FaThermometerHalf
        },
        {
          title: 'Scalability',
      description: 'Modular architecture for various configurations',
          icon: FaServer
        },
        {
      title: 'Analytics',
      description: 'Real-time data visualization and monitoring',
          icon: FaChartLine
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="fixed top-16 left-0 w-full bg-[#1A202C] border border-[#2D3748] shadow-2xl rounded-2xl z-50 overflow-hidden"
      style={{ marginTop: '8px' }}
      onMouseEnter={() => {/* Keep menu open when hovering over it */}}
      onMouseLeave={() => {/* Let parent handle closing */}}
    >
      <div className="p-6">
         {/* Navigation Tabs */}
         <div className="flex justify-center space-x-8 mb-6 border-b border-[#2D3748]">
           <button
             onMouseEnter={() => setActiveTab('products')}
             className={`pb-3 text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
               activeTab === 'products'
                 ? 'text-[#4FD1C5] border-b-2 border-[#4FD1C5]'
                 : 'text-gray-400 hover:text-white'
             }`}
           >
             <span>Products</span>
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
           </button>
           <button
             onMouseEnter={() => setActiveTab('features')}
             className={`pb-3 text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
               activeTab === 'features'
                 ? 'text-[#4FD1C5] border-b-2 border-[#4FD1C5]'
                 : 'text-gray-400 hover:text-white'
             }`}
           >
             <span>Features</span>
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
           </button>
           <button
             onMouseEnter={() => setActiveTab('specifications')}
             className={`pb-3 text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
               activeTab === 'specifications'
                 ? 'text-[#4FD1C5] border-b-2 border-[#4FD1C5]'
                 : 'text-gray-400 hover:text-white'
             }`}
           >
             <span>Specifications</span>
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
           </button>
         </div>

        {/* Content Area */}
        {activeTab === 'products' && (
          <div className="flex justify-center">
             <div className="grid grid-cols-3 gap-12">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="group focus:outline-none"
                onClick={onClose}
              >
                <div className="bg-[#2D3748] rounded-lg p-4 h-80 w-64 flex flex-col transition-transform duration-200 group-hover:scale-105">
                  {/* White image container */}
                  <div className="bg-white rounded-lg p-4 mb-4 flex-1 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={120}
                        className="object-contain scale-150"
                      />
                    </div>
                  </div>
                  {/* Product info */}
                  <div className="text-center">
                    <h3 className="font-bold text-[#4FD1C5] text-sm mb-1">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center text-[#4FD1C5]">
                  <feature.icon size={20} />
                    </div>
                    <div className="flex-1">
                  <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                    </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'specifications' && (
          <div className="grid grid-cols-2 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center text-[#4FD1C5]">
                  <spec.icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-sm mb-1">{spec.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{spec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default MegaDropdown;