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
    title: "BharatBMS for Energy Storage",
    sections: [
      {
        name: "BharatBMS-ESS-48V",
        products: [
          { 
            name: "Smart BMS for UPS, telecom, and small ESS applications"
          }
        ]
      },
      {
        name: "BharatBMS-ESS-72V", 
        products: [
          { 
            name: "High-efficiency BMS for industrial and medium-scale ESS"
          }
        ]
      },
      {
        name: "BharatBMS-ESS-110V",
        products: [
          { 
            name: "BMS for large ESS and grid storage applications"
          }
        ]
      }
    ]
  };

   const evContent = {
     title: "BharatBMS for Electric Vehicles",
     sections: [
       {
         name: "BharatBMS-EV-110V",
         products: [
           { 
             name: "Optimized for e-rickshaws, autos, and tempos"
           }
         ]
       },
       {
         name: "BharatBMS-EV-400V", 
         products: [
           { 
             name: "Designed for passenger cars, hatchbacks, and sedans"
           }
         ]
       },
       {
         name: "BharatBMS-EV-600V",
         products: [
           { 
             name: "Built for SUVs and light commercial vehicles"
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
                  backgroundColor: activeCategory === 'ev' ? '#3A3A3C' : undefined,
                  lineHeight: '1.2'
                }}
                onMouseEnter={() => setActiveCategory('ev')}
              >
                <div>BharatBMS for</div>
                <div>Electric Vehicles</div>
              </div>
           </div>
         </div>

         {/* Right Column - Product Details */}
         <div className="w-2/3 p-4 pl-0 -ml-2" style={{ backgroundColor: '#3A3A3C' }}>
          <div className="space-y-4">
            {activeCategory === 'ess' ? (
              <>
                {/* 48V and 72V side by side */}
                <div className="flex space-x-4">
                  {getCurrentContent().sections.slice(0, 2).map((essSection, essIndex) => (
                    <div 
                      key={essIndex}
                      className="flex-1 rounded-lg p-4 cursor-pointer hover:bg-gray-600/20 transition-colors duration-200"
                      onClick={() => {
                        if (essSection.name === "BharatBMS-ESS-48V") {
                          window.location.href = "/bharatbms-ess#ess-48v-white";
                        } else if (essSection.name === "BharatBMS-ESS-72V") {
                          window.location.href = "/bharatbms-ess#ess-72v-white";
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
                        <h3 className="text-white font-bold text-base whitespace-nowrap">{essSection.name}</h3>
                      </div>
                      <div className="ml-9">
                        <div className="space-y-3">
                          {essSection.products.map((product, productIndex) => (
                            <div key={productIndex} className="mb-4">
                              <p className="text-gray-300 text-sm leading-relaxed text-left tracking-normal">{product.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 110V centered below */}
                <div className="flex justify-center">
                  <div 
                    className="w-1/2 rounded-lg p-4 cursor-pointer hover:bg-gray-600/20 transition-colors duration-200"
                    onClick={() => {
                      window.location.href = "/bharatbms-ess#ess-110v-white";
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
                      <h3 className="text-white font-bold text-base whitespace-nowrap">{getCurrentContent().sections[2].name}</h3>
                    </div>
                    <div className="ml-9">
                      <div className="space-y-3">
                        {getCurrentContent().sections[2].products.map((product, productIndex) => (
                          <div key={productIndex} className="mb-4">
                            <p className="text-gray-300 text-sm leading-relaxed text-left tracking-normal">{product.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
             ) : (
               // For EV content, use same layout as ESS
               <>
                 {/* 110V and 400V side by side */}
                 <div className="flex space-x-4">
                   {getCurrentContent().sections.slice(0, 2).map((evSection, evIndex) => (
                     <div 
                       key={evIndex}
                       className="flex-1 rounded-lg p-4 cursor-pointer hover:bg-gray-600/20 transition-colors duration-200"
                       onClick={() => {
                         if (evSection.name === "BharatBMS-EV-110V") {
                           window.location.href = "/bharatbms-ev#ev-110v-white";
                         } else if (evSection.name === "BharatBMS-EV-400V") {
                           window.location.href = "/bharatbms-ev#ev-400v-white";
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
                         <h3 className="text-white font-bold text-base whitespace-nowrap">{evSection.name}</h3>
                       </div>
                       <div className="ml-9">
                         <div className="space-y-3">
                           {evSection.products.map((product, productIndex) => (
                             <div key={productIndex} className="mb-4">
                               <p className="text-gray-300 text-sm leading-relaxed text-left tracking-normal">{product.name}</p>
                             </div>
                           ))}
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
                 
                 {/* 600V centered below */}
                 <div className="flex justify-center">
                   <div 
                     className="w-1/2 rounded-lg p-4 cursor-pointer hover:bg-gray-600/20 transition-colors duration-200"
                     onClick={() => {
                       window.location.href = "/bharatbms-ev#ev-600v-white";
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
                       <h3 className="text-white font-bold text-base whitespace-nowrap">{getCurrentContent().sections[2].name}</h3>
                     </div>
                     <div className="ml-9">
                       <div className="space-y-3">
                         {getCurrentContent().sections[2].products.map((product, productIndex) => (
                           <div key={productIndex} className="mb-4">
                             <p className="text-gray-300 text-sm leading-relaxed text-left tracking-normal">{product.name}</p>
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               </>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;