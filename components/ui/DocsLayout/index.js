import React, { useState, useEffect, useRef, use } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";


const docsMenuItems = [
  {
    title: "API",
    href: "/docs/api",
    key: "apis",
    subsections: [
      {
        title: "Device API",
        key: "device-data-api",
        href: "/docs/api/device/base-url",
        subsections: [
          {
            title: "Base URL",
            key: "base-url",
            href: "/docs/api/device/base-url",
            href1: "/docs/api/device",
            id:"base-url"
          },
          {
            title: "Authentication",
            key: "authentication",
            href: "/docs/api/device/authentication",
            href1: "/docs/api/device",
            id:"authentication"
          },
          {
            title: "Query Parameters",
            key: "parameters",
            href: "/docs/api/device/parameters",
            href1: "/docs/api/device",
             id:"parameters"
          },
          {
            title: "Response Format",
            key: "response",
            href: "/docs/api/device/response",
            href1: "/docs/api/device",
             id:"response"
          },
          {
            title: "Error Responses",
            key: "response",
            href: "/docs/api/device/error-response",
            href1: "/docs/api/device",
             id:"error-response"
          }
        ]
      },
      {
        title: "User API",
        key: "user-api",
        href: "/docs/api/user/base-url",
        subsections: [
            {
              title: "Base URL",
              key: "base-url",
              href: "/docs/api/user/base-url",
              href1: "/docs/api/user",
              id:"base-url"
            },
            {
              title: "Authentication",
              key: "authentication",
              href: "/docs/api/user/authentication",
              href1: "/docs/api/user",
              id:"authentication"
            },
            {
              title: "Available Endpoints",
              key: "parameters",
              href: "/docs/api/user/endpoints",
              href1: "/docs/api/user",
              id:"endpoints"
            },
            {
              title: "Response Format",
              key: "response",
              href: "/docs/api/user/response",
              href1: "/docs/api/user",
              id:"response"
            }
          ]
           
      }
    ]
  },
  // {
  //   title: "Getting Started",
  //   key: "getting-started",
  //   href: "/docs/getting-started",
  //   subsections: [
  //     {
  //       title: "Quick Start",
  //       key: "quick-start",
  //       href: "/docs/getting-started/quick-start"
  //     },
  //     {
  //       title: "Installation",
  //       key: "installation",
  //       href: "/docs/getting-started/installation"
  //     }
  //   ]
  // }
];


const DocsLayout = ({ children }) => {
  const router = useRouter();
  const [openSections, setOpenSections] = useState({
    apis: true,
    "device-data-api": true,
    "user-api": false
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [startX, setStartX] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsDrawerOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    
    // Close all sections first
    const newOpenSections = {
      apis: true, // Keep APIs section always open
    };

    // Open the relevant section based on path
    if (currentPath.includes('/device')) {
      newOpenSections['device-data-api'] = true;
      newOpenSections['user-api'] = false;
    } else if (currentPath.includes('/user')) {
      newOpenSections['user-api'] = true;
      newOpenSections['device-data-api'] = false;
    }

    setOpenSections(newOpenSections);
  }, []);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX === null) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    // Left to right swipe (open)
    if (diff < -50 && !isDrawerOpen) {
      setIsDrawerOpen(true);
      setStartX(null);
    }
    // Right to left swipe (close)
    else if (diff > 50 && isDrawerOpen) {
      setIsDrawerOpen(false);
      setStartX(null);
    }
  };

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <div 
      className="min-h-screen bg-[#0A0A0A] text-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartX(null)}
    >
      {/* Drawer Pull Indicator */}
      {isMobileView && !isDrawerOpen && (
        <div 
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-gray-800 rounded-r-lg p-1 cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        >
          <div className="w-1 h-16 bg-gray-600 rounded-full" />
        </div>
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside
          ref={drawerRef}
          className={`
            fixed md:sticky top-0 h-screen
            ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            w-64 border-r border-gray-800 
            bg-[#0A0A0A] z-40
            transition-transform duration-300 ease-in-out
            overflow-hidden
          `}
        >
          <nav className="h-full overflow-y-auto">
            <div className="sticky top-0 bg-[#0A0A0A] p-4 border-b border-gray-800">
              <h2 className="text-lg font-bold text-white">
                <Link href="/docs">Docs</Link>
              </h2>
            </div>
            <div className="p-4 space-y-4">
              {docsMenuItems.map((section) => (
                <MenuSection
                  key={section.key}
                  section={section}
                  openSections={openSections}
                  toggleSection={(key) => {
                    setOpenSections(prev => {
                      // If clicking on a main section that has subsections
                      if (key === 'device-data-api' || key === 'user-api') {
                        // Close other sections when opening one
                        return {
                          ...prev,
                          'device-data-api': key === 'device-data-api' ? !prev[key] : false,
                          'user-api': key === 'user-api' ? !prev[key] : false,
                        };
                      }
                      // For other sections, just toggle
                      return {
                        ...prev,
                        [key]: !prev[key],
                      };
                    });
                  }}
                  onLinkClick={() => isMobileView && setIsDrawerOpen(false)}
                />
              ))}
            </div>
          </nav>
        </aside>

        {/* Overlay */}
        {isDrawerOpen && isMobileView && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

const MenuSection = ({ section, openSections, toggleSection, level = 0, onLinkClick }) => {
  const router = useRouter();
  const getPaddingClass = (level) => {
    const paddingLevels = {
      0: 'pl-0',
      1: 'pl-4',
      2: 'pl-8',
      3: 'pl-12',
      4: 'pl-16'
    };
    return paddingLevels[level] || 'pl-16';
  };

  const [isCurrentPath, setIsCurrentPath] = useState(false);
  
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    const isMatch = section.href === currentPath || 
                   section.href === currentPath + currentHash;
    
    setIsCurrentPath(isMatch);
  }, [section.href,router.asPath,router.pathname]);


  const handleSectionClick = (sectionId,href) => {
    if (!sectionId) { router.push(`${href}`)}
    else{
    router.push(`${href}/${sectionId}`, undefined, { shallow: true });
    }
  };

  
  
  

  return (
    <div className="space-y-1">
      <div
        className={`flex items-center justify-between cursor-pointer rounded px-2 py-1 ${getPaddingClass(
          level
        )} 
        ${
          isCurrentPath
            ? "bg-blue-500/10 text-blue-400"
            : "hover:bg-gray-800 text-gray-300"
        }`}
        onClick={() => toggleSection(section.key)}
      >
        {section.href ? (
          <Link
            href={section.href}
            className={`text-sm flex-grow ${
              isCurrentPath ? "text-blue-400" : "text-gray-300 hover:text-white"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSectionClick(section.id, section.href);
              e.stopPropagation();
              onLinkClick?.();
            }}
          >
            {section.title}
          </Link>
        ) : (
          <span className="text-sm">{section.title}</span>
        )}
        {section.subsections && (
          <div className={isCurrentPath ? "text-blue-400" : "text-gray-400"}>
            {openSections[section.key] ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </div>
        )}
      </div>

      {openSections[section.key] && section.subsections && (
        <div className="space-y-1">
          {section.subsections.map((subsection) => (
            <div key={subsection.key}>
              {subsection.subsections ? (
                <MenuSection
                  section={subsection}
                  openSections={openSections}
                  toggleSection={toggleSection}
                  level={level + 1}
                  onLinkClick={onLinkClick}
                />
              ) : (
                <Link
                  href={subsection.href}
                  className={`block text-sm rounded px-2 py-1 ${getPaddingClass(
                    level + 1
                  )}
                  ${
                    subsection.href ===
                    window.location.pathname + window.location.hash
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onLinkClick();
                    handleSectionClick(subsection.id, subsection.href1);
                  }}
                >
                  {subsection.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocsLayout;









//22

// import React, { useState, useEffect, useRef } from "react";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/router";


// const docsMenuItems = [
//   {
//     title: "API",
//     href: "/docs/api",
//     key: "apis",
//     subsections: [
//       {
//         title: "Device API",
//         key: "device-data-api",
//         href: "/docs/api/device/base-url",
//         subsections: [
//           {
//             title: "Base URL",
//             key: "base-url",
//             href: "/docs/api/device/base-url",
//             href1: "/docs/api/device",
//             id:"base-url"
//           },
//           {
//             title: "Authentication",
//             key: "authentication",
//             href: "/docs/api/device/authentication",
//             href1: "/docs/api/device",
//             id:"authentication"
//           },
//           {
//             title: "Query Parameters",
//             key: "parameters",
//             href: "/docs/api/device/parameters",
//             href1: "/docs/api/device",
//              id:"parameters"
//           },
//           {
//             title: "Response Format",
//             key: "response",
//             href: "/docs/api/device/response",
//             href1: "/docs/api/device",
//              id:"response"
//           },
//           {
//             title: "Error Responses",
//             key: "error-response",
//             href: "/docs/api/device/error-response",
//             href1: "/docs/api/device",
//              id:"error-response"
//           }
//         ]
//       },
//       {
//         title: "User API",
//         key: "user-api",
//         href: "/docs/api/user/base-url",
//         subsections: [
//             {
//               title: "Base URL",
//               key: "base-url",
//               href: "/docs/api/user/base-url",
//               href1: "/docs/api/user",
//               id:"base-url"
//             },
//             {
//               title: "Authentication",
//               key: "authentication",
//               href: "/docs/api/user/authentication",
//               href1: "/docs/api/user",
//               id:"authentication"
//             },
//             {
//               title: "Available Endpoints",
//               key: "endpoints",
//               href: "/docs/api/user/endpoints",
//               href1: "/docs/api/user",
//               id:"endpoints"
//             },
//             {
//               title: "Response Format",
//               key: "response",
//               href: "/docs/api/user/response",
//               href1: "/docs/api/user",
//               id:"response"
//             }
//           ]
           
//       }
//     ]
//   },
//   // {
//   //   title: "Getting Started",
//   //   key: "getting-started",
//   //   href: "/docs/getting-started",
//   //   subsections: [
//   //     {
//   //       title: "Quick Start",
//   //       key: "quick-start",
//   //       href: "/docs/getting-started/quick-start"
//   //     },
//   //     {
//   //       title: "Installation",
//   //       key: "installation",
//   //       href: "/docs/getting-started/installation"
//   //     }
//   //   ]
//   // }
// ];


// const DocsLayout = ({ children }) => {
//   const router = useRouter();
//   const [openSections, setOpenSections] = useState({
//     apis: true,
//     "device-data-api": true,
//     "user-api": false
//   });
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [startX, setStartX] = useState(null);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [activeId, setActiveId] = useState("");
//   const drawerRef = useRef(null);

//   // Listen for URL changes to update the active section
//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash.substring(1); // Remove the # character
//       if (hash) {
//         setActiveId(hash);
//         updateOpenSectionsForId(hash);
//       } else {
//         // If no hash, find first section in the current path
//         findInitialSectionFromPath();
//       }
//     };

//     // Find initial section when path changes but there's no hash
//     const findInitialSectionFromPath = () => {
//       const currentPath = window.location.pathname;
      
//       // Find the section that matches this path
//       let foundId = null;
      
//       // Search through menu structure
//       docsMenuItems.forEach(mainSection => {
//         mainSection.subsections?.forEach(subSection => {
//           if (subSection.subsections) {
//             subSection.subsections.forEach(item => {
//               if (item.href === currentPath || item.href1 === currentPath) {
//                 foundId = item.id;
//               }
//             });
//           }
//         });
//       });
      
//       if (foundId) {
//         setActiveId(foundId);
//       }
//     };

//     // Initial check
//     handleHashChange();
    
//     // Listen for hash changes
//     window.addEventListener('hashchange', handleHashChange);
//     return () => window.removeEventListener('hashchange', handleHashChange);
//   }, [router.asPath]);

//   // Setup scroll observer to update URL hash (but not activeId directly)
//   useEffect(() => {
//     const observeElements = () => {
//       // Get all section elements with IDs that match our sidebar structure
//       const sections = document.querySelectorAll('[id]');
      
//       if (sections.length === 0) return;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           // Find the first visible section that's at least 40% visible
//           const visibleEntry = entries.find(
//             entry => entry.isIntersecting && entry.intersectionRatio > 0.4
//           );

//           if (visibleEntry && visibleEntry.target.id) {
//             // Update URL hash without scrolling
//             const newUrl = `${window.location.pathname}#${visibleEntry.target.id}`;
//             if (window.location.href !== newUrl) {
//               window.history.replaceState(null, null, newUrl);
//               // The hash change event doesn't fire with replaceState
//               // So we need to manually update the active ID
//               setActiveId(visibleEntry.target.id);
//               updateOpenSectionsForId(visibleEntry.target.id);
//             }
//           }
//         },
//         { threshold: [0.1, 0.4, 0.8], rootMargin: "-10% 0px -70% 0px" }
//       );

//       // Observe all sections
//       sections.forEach(section => observer.observe(section));
      
//       return () => {
//         sections.forEach(section => observer.unobserve(section));
//       };
//     };

//     // Wait for content to be fully rendered
//     const timer = setTimeout(observeElements, 500);
    
//     return () => clearTimeout(timer);
//   }, [router.asPath]);

//   // Helper function to update open sections based on the active ID
//   const updateOpenSectionsForId = (id) => {
//     // Identify which main section this ID belongs to
//     let targetMainSection = null;
    
//     // Scan through menu structure to find which section contains this ID
//     docsMenuItems.forEach(mainSection => {
//       mainSection.subsections?.forEach(subSection => {
//         if (subSection.subsections) {
//           const found = subSection.subsections.find(item => item.id === id);
//           if (found) {
//             targetMainSection = subSection.key;
//           }
//         }
//       });
//     });

//     if (targetMainSection) {
//       setOpenSections(prev => ({
//         ...prev,
//         [targetMainSection]: true
//       }));
//     }
//   };

//   // Initialize sidebar based on URL path
//   useEffect(() => {
//     const currentPath = window.location.pathname;
    
//     // Open the relevant section based on path
//     const newOpenSections = {
//       apis: true, // Keep APIs section always open
//     };

//     if (currentPath.includes('/device')) {
//       newOpenSections['device-data-api'] = true;
//     } else if (currentPath.includes('/user')) {
//       newOpenSections['user-api'] = true;
//     }

//     setOpenSections(newOpenSections);
//   }, []);

//   // Rest of your component code (resize handlers, touch events, etc.)
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 768);
//       if (window.innerWidth >= 768) {
//         setIsDrawerOpen(false);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleTouchStart = (e) => {
//     setStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     if (startX === null) return;

//     const currentX = e.touches[0].clientX;
//     const diff = startX - currentX;

//     // Left to right swipe (open)
//     if (diff < -50 && !isDrawerOpen) {
//       setIsDrawerOpen(true);
//       setStartX(null);
//     }
//     // Right to left swipe (close)
//     else if (diff > 50 && isDrawerOpen) {
//       setIsDrawerOpen(false);
//       setStartX(null);
//     }
//   };

//   const toggleSection = (sectionKey) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [sectionKey]: !prev[sectionKey],
//     }));
//   };

//   return (
//     <div 
//       className="min-h-screen bg-[#0A0A0A] text-white"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={() => setStartX(null)}
//     >
//       {/* Drawer Pull Indicator */}
//       {isMobileView && !isDrawerOpen && (
//         <div 
//           className="fixed left-0 top-1/2 -translate-y-1/2 bg-gray-800 rounded-r-lg p-1 cursor-pointer"
//           onClick={() => setIsDrawerOpen(true)}
//         >
//           <div className="w-1 h-16 bg-gray-600 rounded-full" />
//         </div>
//       )}

//       <div className="flex">
//         {/* Sidebar */}
//         <aside
//           ref={drawerRef}
//           className={`
//             fixed md:sticky top-0 h-screen
//             ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
//             w-64 border-r border-gray-800 
//             bg-[#0A0A0A] z-40
//             transition-transform duration-300 ease-in-out
//             overflow-hidden
//           `}
//         >
//           <nav className="h-full overflow-y-auto">
//             <div className="sticky top-0 bg-[#0A0A0A] p-4 border-b border-gray-800">
//               <h2 className="text-lg font-bold text-white">
//                 <Link href="/docs">Docs</Link>
//               </h2>
//             </div>
//             <div className="p-4 space-y-4">
//               {docsMenuItems.map((section) => (
//                 <MenuSection
//                   key={section.key}
//                   section={section}
//                   openSections={openSections}
//                   activeId={activeId}
//                   toggleSection={(key) => {
//                     setOpenSections(prev => {
//                       // If clicking on a main section that has subsections
//                       if (key === 'device-data-api' || key === 'user-api') {
//                         // Close other sections when opening one
//                         return {
//                           ...prev,
//                           'device-data-api': key === 'device-data-api' ? !prev[key] : false,
//                           'user-api': key === 'user-api' ? !prev[key] : false,
//                         };
//                       }
//                       // For other sections, just toggle
//                       return {
//                         ...prev,
//                         [key]: !prev[key],
//                       };
//                     });
//                   }}
//                   onLinkClick={() => isMobileView && setIsDrawerOpen(false)}
//                 />
//               ))}
//             </div>
//           </nav>
//         </aside>

//         {/* Overlay */}
//         {isDrawerOpen && isMobileView && (
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 z-30"
//             onClick={() => setIsDrawerOpen(false)}
//           />
//         )}

//         {/* Main Content */}
//         <main className="flex-1 min-w-0 p-8">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// const MenuSection = ({ section, openSections, activeId, toggleSection, level = 0, onLinkClick }) => {
//   const router = useRouter();
//   const getPaddingClass = (level) => {
//     const paddingLevels = {
//       0: 'pl-0',
//       1: 'pl-4',
//       2: 'pl-8',
//       3: 'pl-12',
//       4: 'pl-16'
//     };
//     return paddingLevels[level] || 'pl-16';
//   };

//   // Check if this section is currently active
//   const isActive = section.id === activeId;
  
//   // Check if any child subsection is active
//   const isChildActive = () => {
//     if (!section.subsections) return false;
    
//     return section.subsections.some(sub => {
//       if (sub.id === activeId) return true;
      
//       // Check one level deeper
//       if (sub.subsections) {
//         return sub.subsections.some(deepSub => deepSub.id === activeId);
//       }
      
//       return false;
//     });
//   };
  
//   const isCurrentOrChildActive = isActive || isChildActive();

//   const handleSectionClick = (sectionId, href, href1) => {
//     if (!sectionId) { 
//       router.push(`${href}`);
//     } else {
//       // Determine which href to use
//       const baseHref = href1 || href;
//       const fullHref = `${baseHref}#${sectionId}`;
      
//       // For client-side navigation, use router.push with shallow option
//       router.push(fullHref, undefined, { shallow: true });
      
//       // Set the active ID immediately without waiting for scroll event
//       setActiveId(sectionId);
      
//       // If we're in a page that has the section, scroll to it
//       if (document.getElementById(sectionId)) {
//         document.getElementById(sectionId).scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'start' 
//         });
//       }
//     }
//   };

//   return (
//     <div className="space-y-1">
//       <div
//         className={`flex items-center justify-between cursor-pointer rounded px-2 py-1 ${getPaddingClass(level)} 
//         ${isCurrentOrChildActive ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-gray-800 text-gray-300'}`}
//         onClick={() => toggleSection(section.key)}
//       >
//         {section.href ? (
//           <Link 
//             href={section.href} 
//             className={`text-sm flex-grow ${isCurrentOrChildActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
//             onClick={(e) => {
//               e.preventDefault();
//               handleSectionClick(section.id, section.href, section.href1);
//               e.stopPropagation();
//               onLinkClick?.();
//             }}
//           >
//             {section.title}
//           </Link>
//         ) : (
//           <span className="text-sm">{section.title}</span>
//         )}
//         {section.subsections && (
//           <div className={isCurrentOrChildActive ? 'text-blue-400' : 'text-gray-400'}>
//             {openSections[section.key] ? (
//               <ChevronDown className="h-4 w-4" />
//             ) : (
//               <ChevronRight className="h-4 w-4" />
//             )}
//           </div>
//         )}
//       </div>

//       {openSections[section.key] && section.subsections && (
//         <div className="space-y-1">
//           {section.subsections.map((subsection) => (
//             <div key={subsection.key}>
//               {subsection.subsections ? (
//                 <MenuSection
//                   section={subsection}
//                   openSections={openSections}
//                   activeId={activeId}
//                   toggleSection={toggleSection}
//                   level={level + 1}
//                   onLinkClick={onLinkClick}
//                 />
//               ) : (
//                 <Link
//                   href={subsection.href}
//                   className={`block text-sm rounded px-2 py-1 ${getPaddingClass(level + 1)}
//                   ${activeId === subsection.id
//                     ? 'bg-blue-500/10 text-blue-400' 
//                     : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
//                   onClick={(e) => { 
//                     e.preventDefault();
//                     onLinkClick(); 
//                     handleSectionClick(subsection.id, subsection.href, subsection.href1);
//                   }}
//                 >
//                   {subsection.title}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocsLayout;


