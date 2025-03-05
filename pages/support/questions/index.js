import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Search, X } from 'lucide-react';
import Link from 'next/link';
import SupportLayout from '@/components/ui/SupportLayout';
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "contentful";
import { useRouter } from 'next/router';

// Contentful client setup remains the same
async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "questions" });
  return res.items;
}

export async function getServerSideProps() {
  let blogs = await fetchBlogs();
  blogs = blogs.map((blog) => ({
    title: blog.fields.title,
    categories: blog.fields.categories,
    slug: blog.fields.slug,
    date: blog.fields.date,
    description: blog.fields.description,
    author: blog.fields.author,
  }));
  
  // Log to verify categories are correctly loaded from Contentful
  console.log('Loaded blogs:', blogs);
  
  return {
    props: {
      blogs,
    },
  };
}

const SearchSuggestions = ({ suggestions, onSelect, visible }) => {
  if (!visible || suggestions.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden z-50"
    >
      <div className="max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => (
          <motion.div
            key={`${suggestion.type}-${suggestion.text}-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-3 hover:bg-gray-800 cursor-pointer border-b border-gray-700 last:border-0"
            onClick={() => onSelect(suggestion)}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                {suggestion.type}
              </span>
              <span className="text-gray-200">{suggestion.text}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const QuestionCard = ({ question, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link 
        href={`/support/questions/${question.slug}`}
        className="block bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 p-6 group"
      >
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-3">
          {question.title}
        </h3>
        <p className="text-gray-400 mb-4">{question.description}</p>
        <div className="flex flex-wrap gap-2">
          {question.categories && question.categories.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default function QuestionsHome({ blogs }) {
  const router = useRouter();
  const { category } = router.query; // Get the category from query params

  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  

  // Get unique categories from blogs with safeguards
  const getAllCategories = () => {
    // Safely extract all categories, handling any undefined or missing properties
    const allCategories = blogs
      .filter(blog => blog.categories && Array.isArray(blog.categories))
      .flatMap(blog => blog.categories);
    
    // Convert to a Set to get unique values, then back to array
    const uniqueCategories = Array.from(new Set(allCategories));
    
    // Add 'all' at the beginning and return
    return ["all", ...uniqueCategories];
  };
  
  const categories = getAllCategories();
  
  // Debug categories
  useEffect(() => {
    console.log('Categories loaded:', categories);
    console.log('Initial blogs:', blogs);
  }, [blogs]);

  // Initialize filteredBlogs when component mounts
  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  // Generate search suggestions with improved logic
  const generateSuggestions = (query) => {
    if (!query || !query.trim()) {
      setSuggestions([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase().trim();
    
    // Find title matches
    const titleSuggestions = blogs
      .filter(blog => 
        blog.title && blog.title.toLowerCase().includes(lowercaseQuery))
      .map(blog => ({
        type: 'Title',
        text: blog.title,
        data: blog
      }));

    // Find category matches
    const categorySuggestions = categories
      .filter(category => 
        category && 
        category !== 'all' && 
        category.toLowerCase().includes(lowercaseQuery))
      .map(category => ({
        type: 'Category',
        text: category,
        data: category
      }));

    // Combine and deduplicate suggestions
    const allSuggestions = [...titleSuggestions, ...categorySuggestions];
    
    // Log suggestions for debugging
    console.log('Generated suggestions:', allSuggestions);
    
    setSuggestions(allSuggestions);
  };

  // Improved filter logic to handle the search and categories properly
  useEffect(() => {
    // Skip if blogs is not valid
    if (!blogs || !Array.isArray(blogs)) {
      setFilteredBlogs([]);
      return;
    }

    const filtered = blogs.filter(blog => {
      // Case 1: Check if search query matches title (case insensitive)
      const matchesSearch = !searchQuery.trim() || 
        (blog.title && blog.title.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Case 2: Check if selected category matches any of the blog's categories
      // If 'all' is selected, include all blogs regardless of category
      const matchesCategory = selectedCategory === "all" || 
        (blog.categories && 
         Array.isArray(blog.categories) && 
         blog.categories.includes(selectedCategory));
      
      // Log matches for debugging (only in development)
      if (process.env.NODE_ENV === 'development') {
        console.log(`Blog "${blog.title}" - Search match: ${matchesSearch}, Category match: ${matchesCategory}`);
      }
      
      // Return true only if both conditions are met
      return matchesSearch && matchesCategory;
    });

    // Log filtered results
    console.log(`Filtered blogs: ${filtered.length} of ${blogs.length}`);
    console.log('Search query:', searchQuery);
    console.log('Selected category:', selectedCategory);
    
    setFilteredBlogs(filtered);
  }, [searchQuery, selectedCategory, blogs]);

  // Handle click outside search suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle suggestion selection with improved logic
  const handleSuggestionSelect = (suggestion) => {
    console.log('Selected suggestion:', suggestion);
    
    if (suggestion.type === 'Title') {
      setSearchQuery(suggestion.text);
      // Don't change the category when selecting a title
    } else if (suggestion.type === 'Category') {
      setSelectedCategory(suggestion.data);
      // Clear search query when selecting a category
      setSearchQuery('');
    }
    
    setShowSuggestions(false);
  };

  // Handle search input
  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    generateSuggestions(value);
    setShowSuggestions(true);
  };

  // Handle search clear
  const handleSearchClear = () => {
    setSearchQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <>
      <Head>
        <title>Questions | Support | Xbattery™</title>
        <meta 
          name="description" 
          content="Get help and support for Xbattery products and services"
        />
        <meta property="og:image" content="/favicon.webp" />
      </Head>
      <SupportLayout categories={categories}>
        <div className="min-h-screen bg-gray-950">
          <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-4 mb-12"
            >
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Questions
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Find solutions or ask your own questions
              </p>
              
              {/* Enhanced Search Bar with Suggestions */}
              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="max-w-2xl mx-auto mt-6"
              >
                <div className="relative" ref={searchRef}>
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search questions or categories..."
                    value={searchQuery}
                    onChange={handleSearchInput}
                    onFocus={() => setShowSuggestions(true)}
                    className="w-full pl-12 pr-12 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  {searchQuery && (
                    <button
                      onClick={handleSearchClear}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-200"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                  <AnimatePresence>
                    <SearchSuggestions
                      suggestions={suggestions}
                      onSelect={handleSuggestionSelect}
                      visible={showSuggestions && suggestions.length > 0}
                    />
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>

            {/* Display current filters for clarity */}
            {(searchQuery || selectedCategory !== "all") && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 flex items-center flex-wrap gap-2"
              >
                <span className="text-gray-400">Active filters:</span>
                {searchQuery && (
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center gap-1">
                    <span className="text-blue-400">Search:</span> {searchQuery}
                    <button 
                      onClick={handleSearchClear}
                      className="ml-1 text-gray-400 hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {selectedCategory !== "all" && (
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center gap-1">
                    <span className="text-blue-400">Category:</span> {selectedCategory}
                    <button 
                      onClick={() => setSelectedCategory("all")}
                      className="ml-1 text-gray-400 hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </motion.div>
            )}

            {/* Main Content and Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                <AnimatePresence>
                  {filteredBlogs.length > 0 ? (
                    <motion.div className="space-y-4">
                      {filteredBlogs.map((blog, index) => (
                        <QuestionCard key={`${blog.slug}-${index}`} question={blog} index={index} />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-10"
                    >
                      <p className="text-gray-400">No questions found matching your criteria</p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                        }}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Clear all filters
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sidebar with categories */}
              <div className="space-y-6 sticky top-24 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gray-900 rounded-lg border border-gray-800 p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                  <div className="space-y-0.5">
                    {categories.map((category) => (
                      <motion.div
                        key={category}
                        whileHover={{ scale: 1.02 }}
                        className={`group cursor-pointer py-1 px-2 rounded-md transition-all duration-200 ${
                          selectedCategory === category 
                            ? 'bg-blue-500/10 text-blue-400' 
                            : 'hover:bg-gray-800'
                        }`}
                        onClick={() => {
                          setSelectedCategory(category);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Help Box */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-900 rounded-lg border border-gray-800 p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Our support team is available for assistance
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => router.push("/contact")}
                  >
                    Contact Support
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </SupportLayout>
    </>
  );
}