import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";


const docsMenuItems = [
  {
    title: "API",
    href: "/docs/api",
    key: "apis",
    subsections: [
      {
        title: "Device API",
        key: "device-data-api",
        href: "/docs/api/device-data",
        subsections: [
          {
            title: "Base URL",
            key: "base-url",
            href: "/docs/api/device-data#base-url"
          },
          {
            title: "Authentication",
            key: "authentication",
            href: "/docs/api/device-data#authentication"
          },
          {
            title: "Query Parameters",
            key: "parameters",
            href: "/docs/api/device-data#parameters"
          },
          {
            title: "Response Format",
            key: "response",
            href: "/docs/api/device-data#response"
          },
          {
            title: "Error Responses",
            key: "response",
            href: "/docs/api/device-data#errorResponse"
          }
        ]
      },
      // {
      //   title: "User API",
      //   key: "user-api",
      //   href: "/docs/api/user",
      //   subsections: [
      //       {
      //         title: "Base URL",
      //         key: "base-url",
      //         href: "/docs/api/user#base-url"
      //       },
      //       {
      //         title: "Authentication",
      //         key: "authentication",
      //         href: "/docs/api/user#authentication"
      //       },
      //       {
      //         title: "Available Endpoints",
      //         key: "parameters",
      //         href: "/docs/api/user#endpoints"
      //       },
      //       {
      //         title: "Response Format",
      //         key: "response",
      //         href: "/docs/api/user#response"
      //       }
      //     ]
           
      // }
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
    if (currentPath.includes('/device-data')) {
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
  }, [section.href]);

  return (
    <div className="space-y-1">
      <div
        className={`flex items-center justify-between cursor-pointer rounded px-2 py-1 ${getPaddingClass(level)} 
        ${isCurrentPath ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-gray-800 text-gray-300'}`}
        onClick={() => toggleSection(section.key)}
      >
        {section.href ? (
          <Link 
            href={section.href} 
            className={`text-sm flex-grow ${isCurrentPath ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            onClick={(e) => {
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
          <div className={isCurrentPath ? 'text-blue-400' : 'text-gray-400'}>
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
                  className={`block text-sm rounded px-2 py-1 ${getPaddingClass(level + 1)}
                  ${subsection.href === window.location.pathname + window.location.hash 
                    ? 'bg-blue-500/10 text-blue-400' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                  onClick={onLinkClick}
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