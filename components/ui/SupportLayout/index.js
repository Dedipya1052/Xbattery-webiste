
// import React, { useState, useEffect, useRef } from "react";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import { createClient } from "contentful";

// // Contentful client setup
// async function fetchCategories() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   });

//   const res = await client.getEntries({ content_type: "questions" });
  
//   // Extract and deduplicate categories
//   const categories = res.items
//     .filter(item => item.fields.categories && Array.isArray(item.fields.categories))
//     .flatMap(item => item.fields.categories);
  
//   // Remove duplicates 
//   const uniqueCategories = Array.from(new Set(categories));
  
//   // Log to verify categories are correctly loaded
//   console.log('Loaded categories:', uniqueCategories);
  
//   return uniqueCategories;
// }

// export async function getStaticProps() {
//   let categories = await fetchCategories();
  
//   return {
//     props: {
//       categories,
//     },
//     revalidate: 60,
//   };
// }

// const SupportLayout = ({ children, categories = [] }) => {
//   const [docsMenuItems, setDocsMenuItems] = useState([]);
//   const [openSections, setOpenSections] = useState({});
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [startX, setStartX] = useState(null);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const drawerRef = useRef(null);

//   // Prepare menu items based on categories
//   useEffect(() => {
//     if (categories && categories.length > 0) {
//       const menuItems = [{
//         title: "Questions",
//         href: "/support/questions",
//         key: "questions",
//         subsections: categories.map(category => ({
//           title: category.charAt(0).toUpperCase() + category.slice(1),
//           key: category,
//           href: `/support/questions?category=${encodeURIComponent(category)}`
//         }))
//       }];

//       setDocsMenuItems(menuItems);
      
//       // Initialize open sections
//       const initialOpenSections = {
//         questions: true,
//         ...Object.fromEntries(
//           categories.map(category => [category, false])
//         )
//       };
//       setOpenSections(initialOpenSections);
//     }
//   }, [categories]);

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
//                 <Link href="/support">Support</Link>
//               </h2>
//             </div>
//             <div className="p-4 space-y-4">
//               {docsMenuItems.map((section) => (
//                 <MenuSection
//                   key={section.key}
//                   section={section}
//                   openSections={openSections}
//                   toggleSection={(key) => {
//                     setOpenSections(prev => ({
//                       ...prev,
//                       [key]: !prev[key],
//                     }));
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

// const MenuSection = ({ section, openSections, toggleSection, level = 0, onLinkClick }) => {
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

//   const [isCurrentPath, setIsCurrentPath] = useState(false);
//   const [isCurrentCategory, setIsCurrentCategory] = useState(false);
  
//   useEffect(() => {
//     const currentPath = window.location.pathname;
//     const currentHash = window.location.hash;
//     const currentSearch = window.location.search;
    
//     const isMatch = section.href === currentPath || 
//                    section.href === currentPath + currentHash;
    
//     // Check if the current category matches
//     const isCategory = section.href && 
//       currentPath === '/support/questions' && 
//       currentSearch.includes(`category=${encodeURIComponent(section.key)}`);
    
//     setIsCurrentPath(isMatch);
//     setIsCurrentCategory(isCategory);
//   }, [section.href, section.key]);

//   return (
//     <div className="space-y-1">
//       <div
//         className={`flex items-center justify-between cursor-pointer rounded px-2 py-1 ${getPaddingClass(level)} 
//         ${(isCurrentPath || isCurrentCategory) ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-gray-800 text-gray-300'}`}
//         onClick={() => toggleSection(section.key)}
//       >
//         {section.href ? (
//           <Link 
//             href={section.href} 
//             className={`text-sm flex-grow ${(isCurrentPath || isCurrentCategory) ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
//             onClick={(e) => {
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
//           <div className={isCurrentPath || isCurrentCategory ? 'text-blue-400' : 'text-gray-400'}>
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
//                   toggleSection={toggleSection}
//                   level={level + 1}
//                   onLinkClick={onLinkClick}
//                 />
//               ) : (
//                 <Link
//                   href={subsection.href}
//                   className={`block text-sm rounded px-2 py-1 ${getPaddingClass(level + 1)}
//                   ${(subsection.href === window.location.pathname + window.location.hash) ||
//                     (window.location.pathname === '/support/questions' && 
//                      window.location.search === `?category=${encodeURIComponent(subsection.key)}`)
//                     ? 'bg-blue-500/10 text-blue-400' 
//                     : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
//                   onClick={onLinkClick}
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

// export default SupportLayout;
// export { fetchCategories };


import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { createClient } from "contentful";

// Contentful client setup
async function fetchCategories() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "questions" });
  
  // Extract and deduplicate categories
  const categories = res.items
    .filter(item => item.fields.categories && Array.isArray(item.fields.categories))
    .flatMap(item => item.fields.categories);
  
  // Remove duplicates 
  const uniqueCategories = Array.from(new Set(categories));
  
  // Log to verify categories are correctly loaded
  console.log('Loaded categories:', uniqueCategories);
  
  return uniqueCategories;
}

export async function getStaticProps() {
  let categories = await fetchCategories();
  
  return {
    props: {
      categories,
    },
    revalidate: 60,
  };
}

const SupportLayout = ({ children, categories = [] }) => {
  const [docsMenuItems, setDocsMenuItems] = useState([]);
  const [openSections, setOpenSections] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [startX, setStartX] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const drawerRef = useRef(null);

  // Prepare menu items based on categories
  useEffect(() => {
    if (categories && categories.length > 0) {
      const menuItems = [{
        title: "\u00A0Questions",
        href: "/support/questions",
        key: "questions",
        subsections: categories.map(category => ({
          title: category.charAt(0).toUpperCase() + category.slice(1),
          key: category,
          href: `/support/questions?category=${encodeURIComponent(category)}`
        }))
      }];

      setDocsMenuItems(menuItems);
      
      // Initialize open sections
      const initialOpenSections = {
        questions: true,
        ...Object.fromEntries(
          categories.map(category => [category, false])
        )
      };
      setOpenSections(initialOpenSections);
    }
  }, [categories]);

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
      className="min-h-screen bg-white text-gray-800 mb-[-3rem]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartX(null)}
    >
      {/* Drawer Pull Indicator */}
      {isMobileView && !isDrawerOpen && (
        <div 
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-r-lg p-1 cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        >
          <div className="w-1 h-16 bg-gray-300 rounded-full" />
        </div>
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside
          ref={drawerRef}
          className={`
            fixed md:sticky top-0 h-screen
            ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            w-64 border-r border-gray-200 
            bg-gray-50 z-40
            transition-transform duration-300 ease-in-out
            overflow-hidden
          `}
        >
          <nav className="h-full overflow-y-auto">
            <div className="sticky top-0 bg-gray-50 p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-800">
                <Link href="/support">Support</Link>
              </h2>
            </div>
            <div className="p-4 space-y-4">
              {docsMenuItems.map((section) => (
                <MenuSection
                  key={section.key}
                  section={section}
                  openSections={openSections}
                  toggleSection={(key) => {
                    setOpenSections(prev => ({
                      ...prev,
                      [key]: !prev[key],
                    }));
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
            className="fixed inset-0 bg-black bg-opacity-10 z-30"
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
  const [isCurrentCategory, setIsCurrentCategory] = useState(false);
  
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const currentSearch = window.location.search;
    
    const isMatch = section.href === currentPath || 
                   section.href === currentPath + currentHash;
    
    // Check if the current category matches
    const isCategory = section.href && 
      currentPath === '/support/questions' && 
      currentSearch.includes(`category=${encodeURIComponent(section.key)}`);
    
    setIsCurrentPath(isMatch);
    setIsCurrentCategory(isCategory);
  }, [section.href, section.key]);

  return (
    <div className="space-y-1">
      <div
        className={`flex items-center justify-between cursor-pointer rounded px-2 py-1 ${getPaddingClass(level)} 
        ${(isCurrentPath || isCurrentCategory) ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-600'}`}
        onClick={() => toggleSection(section.key)}
      >
        {section.href ? (
          <Link 
            href={section.href} 
            className={`text-sm flex-grow ${(isCurrentPath || isCurrentCategory) ? 'text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
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
          <div className={isCurrentPath || isCurrentCategory ? 'text-blue-700' : 'text-gray-500'}>
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
                  ${(subsection.href === window.location.pathname + window.location.hash) ||
                    (window.location.pathname === '/support/questions' && 
                     window.location.search === `?category=${encodeURIComponent(subsection.key)}`)
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'}`}
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

export default SupportLayout;
export { fetchCategories };