import styles from "./blog.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import { Search, X } from "lucide-react";

// Fetch blogs from contentful CMS
async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "media" });
  return res.items;
}

export async function getStaticProps() {
  let blogs = await fetchBlogs();
  blogs = blogs.map((blog) => ({
    title: blog.fields.title,
    thumbnail: blog.fields.thumbnail,
    categories: blog.fields.categories,
    slug: blog.fields.slug,
    date: blog.fields.date,
    description: blog.fields.description,
    author: blog.fields.author,
    subtitle: blog.fields.subtitle,
    featured: blog.fields.featured || false
  }));
  return {
    props: {
      blogs,
    },
  };
}

export default function Media({ blogs = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  
  // Today's date
  const today = new Date(); 
  
  // Create static featured blogs with today's date
  const featuredStaticBlogs = [
    {
      title: "Xbattery's Indigenous BMS That's Chemical Agnostic?",
      description: "Hyderabad-based deep tech startup Xbattery is developing intelligent, secure BMS solutions to power india's clean energy & electric mobility shift.",
      date: "2025-08-04T00:00:00.000Z",
      categories: ["Featured"],
      slug: "xbatterys-indigenous-bms-chemical-agnostic",
      externalLink: "https://online.fliphtml5.com/oxomv/kfyc/#p=54"
    },
    {
      title: "India Must Step Up R&D Funding and Policy Push for Battery Storage: Interview",
      description: "India added over 28 GW of renewable energy capacity in 2024, bringing the total to around 210 GW. However, to reach its 2030 target of 500 GW of non-fossil fuel energy and ensure a smoother energy transition, battery energy storage systems must complement renewables by addressing their intermittency.",
      date: "2025-05-20T00:00:00.000Z",
      categories: ["Featured"],
      slug: "india-must-step-up-rd-funding",
      externalLink: "https://www.mercomindia.com/india-must-step-up-rd-funding-and-policy-push-for-battery-storage-interview"
    },
    {
      title: "Xbattery Launches BharatBMS",
      description: "Xbattery, an energy storage solutions innovator based at T-Hub, Hyderabad, announced the official launch of BharatBMS, a high-voltage Battery Management System (BMS).",
      date: "2025-04-20T00:00:00.000Z",
      categories: ["Featured"],
      slug: "xbattery-launches-bharatbms",
      externalLink: "https://www.constructionworld.in/energy-infrastructure/power-and-renewable-energy/xbattery-launches-bharatbms/70706"
    },
    {
      title: "Powering India's Green Future, Xbattery Launches BharatBMS, A Homegrown Battery Management System To Supercharge Clean Energy Transition",
      description: "Powering India's Green Future, Xbattery Launches BharatBMS, A Homegrown Battery Management System To Supercharge Clean Energy Transition",
      date: "2025-04-18T00:00:00.000Z",
      categories: ["Featured"],
      slug: "powering-indias-green-future",
      externalLink: "https://solarquarter.com/2025/03/21/powering-indias-green-future-xbattery-launches-bharatbms-a-homegrown-battery-management-system-to-supercharge-clean-energy-transition/"
    },
    {
      title: "Xbattery's New BharatBMS Promises 15% Extra Battery Life",
      description: "Hyderabad-based Xbattery, an energy storage solutions innovator based at T-Hub, has launched BharatBMS, a high-voltage Battery Management System (BMS).",
      date: "2025-04-18T00:00:00.000Z",
      categories: ["Featured"],
      slug: "xbatterys-new-bharatbms-promises-15-extra-battery-life",
      externalLink: "https://www.saurenergy.com/ev-storage/xbatterys-new-bharatbms-promises-15-extra-battery-life"
    },
    {
      title: "Hyderabad Startup Unveils Indigenous Battery Tech Promising Longer Life and Efficiency",
      description: "Xbattery, an energy storage solutions innovator based at T-Hub in Hyderabad, has launched BharatBMS, a high-voltage Battery Management System (BMS) designed for homes, factories, EV fleets, and solar installations.",
      date: "2025-04-17T00:00:00.000Z",
      categories: ["Featured"],
      slug: "hyderabad-startup-unveils-bharatbms",
      externalLink: "https://www.manufacturingtodayindia.com/hyderabad-startup-unveils-indigenous-battery-tech"
    },
    {
      title: "Xbattery Introduces BharatBMS: India's First Homegrown Battery Management System to Boost Clean Energy Shift",
      description: "Xbattery, a leader in energy storage technology based in T-Hub, Hyderabad, has officially launched BharatBMS, a high-voltage Battery Management System (BMS) designed to address energy storage challenges across homes, factories, electric vehicles.",
      date: "2025-04-17T00:00:00.000Z",
      categories: ["Featured"],
      slug: "xbattery-introduces-bharatbms",
      externalLink: "https://themachinemaker.com/news/xbattery-introduces-bharatbms-indias-first-homegrown-battery-management-system-to-boost-clean-energy-shift/"
    }
  ];

  
  // Initialize allBlogs and set up categories
  useEffect(() => {
    // Make sure blogs from Contentful are at the top, followed by static featured blogs
    const contentfulBlogs = Array.isArray(blogs) ? blogs : [];
    const combinedBlogs = [...contentfulBlogs, ...featuredStaticBlogs];
    
    // Sort all blogs by date (most recent first)
    const sortedBlogs = combinedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    setAllBlogs(sortedBlogs);
    setFilteredBlogs(sortedBlogs); // Initial filtered state is all blogs
  }, [blogs]);

  // Extract unique categories from all blogs
  const categories = ["All", ...new Set(allBlogs.flatMap(blog => blog.categories || []))];
  
  // Filter blogs based on search term and active category
  useEffect(() => {
    let results = allBlogs;
    
    // Filter by category
    if (activeCategory !== "All") {
      results = results.filter(blog => 
        blog.categories && blog.categories.includes(activeCategory)
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(blog => 
        (blog.title && blog.title.toLowerCase().includes(term)) || 
        (blog.description && blog.description.toLowerCase().includes(term)) ||
        (blog.categories && blog.categories.some(category => 
          category && category.toLowerCase().includes(term)
        ))
      );
    }
    
    setFilteredBlogs(results);
  }, [searchTerm, activeCategory, allBlogs]);

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };
  
  return (
    <>
      <Head>
        <title>
          Media | Xbattery™
        </title>
        <meta 
          name="description" 
          content="Explore the latest news, videos, press releases and resources about battery technology, energy storage solutions and industry updates from Xbattery™."
        />
        <meta property="og:image" content="/favicon.webp" />
      </Head>
      
      <div className={styles.mediaContainer}>
        <div className="mt-[2.5rem] mb-[4.3rem] flex flex-col justify-center items-center gap-[1rem]">
          <h1 className={`text-[2.22rem] md:text-[2.8rem] text-center font-semibold ${styles.head1}`}>
            Media
          </h1>
        </div>
        
        {/* Enhanced Search and Filter Section */}
        <motion.div 
          className="w-[90%] mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Search and Categories container with justify-between */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            {/* Search Bar with improved styling */}
            <div className="md:w-[40%] w-full relative">
              <div className={`${styles.searchWrapper} ${searchFocused ? styles.searchActive : ''} w-full rounded-lg bg-white shadow-sm`}>
                <Search size={18} className="ml-4 text-gray-400" />
                <input 
                  type="text" 
                  className="flex-grow py-3 px-2 border-none outline-none text-gray-700 bg-transparent"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                {searchTerm && (
                  <button 
                    onClick={clearSearch} 
                    className="mx-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X size={16} className="text-gray-500" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Tabs with horizontal scrolling for mobile */}
            <div className="flex overflow-x-auto md:overflow-visible pb-2 md:pb-0 md:flex-wrap gap-2 justify-start md:justify-end md:w-[58%]">
              {categories.map((category, index) => (
                <motion.button 
                  key={index}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all whitespace-nowrap
                    ${activeCategory === category 
                      ? 'bg-[#0c2340] text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Search Results Counter */}
          <div className="mt-2 text-sm text-gray-500">
            Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'result' : 'results'}
            {searchTerm && <span> for "{searchTerm}"</span>}
            {activeCategory !== "All" && <span> in {activeCategory}</span>}
          </div>
        </motion.div>

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 text-gray-500"
          >
            <div className="mb-3 text-gray-400">
              <Search size={48} className="mx-auto mb-2 opacity-50" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p>Try adjusting your search terms or filter selection.</p>
            {(searchTerm || activeCategory !== "All") && (
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-[#0c2340] hover:underline font-medium"
              >
                Clear all filters
              </button>
            )}
          </motion.div>
        )}

        {/* Media Grid */}
        <div className={`${styles.mediaGrid}`}>
          <AnimatePresence>
            {filteredBlogs.map((blog, index) => (
              <MediaCard 
                key={blog.slug || index} 
                blog={blog} 
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

// Updated Media Card Component
// const MediaCard = ({ blog }) => {
//   const { title, categories, slug, date, description, externalLink } = blog;
  
//   // Format date
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   // Determine link destination (external or internal)
//   const linkHref = externalLink || `/media/${slug}`;

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       className={styles.mediaCard}
//       transition={{ duration: 0.3 }}
//     >
//       <a href={linkHref} className={styles.cardLink} target={externalLink ? "_blank" : "_self"} rel={externalLink ? "noopener noreferrer" : ""}>
//         <div className={`${styles.mediaContent} rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 bg-white h-full flex flex-col`}>
//           {/* Category on top */}
//           {categories?.length > 0 && (
//             <div className="mb-3">
//               <span className="bg-[#0c2340] text-white text-xs font-medium px-2.5 py-1 rounded-full">
//                 {categories[0]}
//               </span>
//             </div>
//           )}
          
//           {/* Date */}
//           <div className="text-gray-500 text-sm mb-2">
//             {date && formatDate(date)}
//           </div>
          
//           {/* Title */}
//           <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-[#0c2340]">{title}</h3>
          
//           {/* Description */}
//           {description && (
//             <p className="text-gray-600 text-sm mb-4 flex-grow">
//               {description.length > 120 ? `${description.substring(0, 120)}...` : description}
//             </p>
//           )}
          
//           {/* Featured badge (if applicable) */}
//           {blog.featured && (
//             <div className="mb-2">
//               <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded">
//                 Featured
//               </span>
//             </div>
//           )}
          
//           {/* Read More link */}
//           <div className="text-[#0c2340] font-medium text-sm mt-auto flex items-center">
//             Read More
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </div>
//         </div>
//       </a>
//     </motion.div>
//   );
// };

// Updated Media Card Component
const MediaCard = ({ blog }) => {
  const { title, categories, slug, date, description, externalLink } = blog;
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Determine link destination (external or internal)
  const linkHref = externalLink || `/media/${slug}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={styles.mediaCard}
      transition={{ duration: 0.3 }}
    >
      <a href={linkHref} className={styles.cardLink} target={externalLink ? "_blank" : "_self"} rel={externalLink ? "noopener noreferrer" : ""}>
        <div className={`${styles.mediaContent} rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4 bg-white h-full flex flex-col relative`}>
          {/* External Link Icon */}
          {externalLink && (
            <div className="absolute top-4 right-4 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          )}
          
          {/* Category on top */}
          {categories?.length > 0 && (
            <div className="mb-3">
              <span className="bg-[#0c2340] text-white text-xs font-medium px-2.5 py-1 rounded-full">
                {categories[0]}
              </span>
            </div>
          )}
          
          {/* Date */}
          <div className="text-gray-500 text-sm mb-2">
            {date && formatDate(date)}
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-[#0c2340]">{title}</h3>
          
          {/* Description */}
          {description && (
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              {description.length > 120 ? `${description.substring(0, 120)}...` : description}
            </p>
          )}
          
          {/* Featured badge (if applicable) */}
          {blog.featured && (
            <div className="mb-2">
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded">
                Featured
              </span>
            </div>
          )}
          
          {/* Read More link */}
          <div className="text-[#0c2340] font-medium text-sm mt-auto flex items-center">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </a>
    </motion.div>
  );
};





