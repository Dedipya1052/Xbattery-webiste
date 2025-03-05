import React, { useState, useRef, useEffect } from 'react';
import { createClient } from "contentful";
import { Search, HelpCircle, AlertCircle, Activity, Mail, ExternalLink, MessageCircle, X } from 'lucide-react';
import SupportLayout from '@/components/ui/SupportLayout';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion, AnimatePresence } from "framer-motion";

// Contentful client setup
const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

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

export async function getServerSideProps() {
  const articles = await client.getEntries({
    content_type: "questions",
    order: '-fields.date',
  });

  const transformedArticles = articles.items.map(item => ({
    title: item.fields.title,
    slug: item.fields.slug,
    // Store all categories as an array instead of just the first one
    categories: item.fields.categories || ['General'],
    category: item.fields.categories?.[0] || 'General', // Keep for backward compatibility
    description: item.fields.description,
    readTime: '5 min read',
  }));

  const popularArticles = transformedArticles.slice(0, 4).map(article => ({
    ...article,
    info: article.readTime,
  }));

  return {
    props: {
      articles: transformedArticles,
      popularArticles,
    },
  
  };
}

export default function SupportHome({ articles, popularArticles }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  
  // Get all unique categories across all articles
  const getAllCategories = () => {
    // First, extract all categories from all articles
    const allCategoriesWithDuplicates = articles.flatMap(article => 
      Array.isArray(article.categories) ? article.categories : [article.category]
    );
    
    // Then remove duplicates using a Set
    return Array.from(new Set(allCategoriesWithDuplicates));
  };
  
  const semicategories = getAllCategories();
  const categories =["all",...semicategories]
  
  // For debugging
  useEffect(() => {
    console.log('All unique categories:', categories);
  }, [categories]);

  // Generate search suggestions with improved logic
  const generateSuggestions = (query) => {
    if (!query || !query.trim()) {
      setSuggestions([]);
      return;
    }

    const trimmedQuery = query.trim().toLowerCase();
    
    // Title suggestions - show all matching titles
    const titleSuggestions = articles
      .filter(article => 
        article.title && article.title.toLowerCase().includes(trimmedQuery))
      .map(article => ({
        type: 'Title',
        text: article.title,
        data: article
      }));

    // Category suggestions - show all matching categories
    const categorySuggestions = categories
      .filter(category => 
        category && category.toLowerCase().includes(trimmedQuery))
      .map(category => ({
        type: 'Category',
        text: category,
        data: category
      }));

    // Combine suggestions
    const allSuggestions = [...titleSuggestions, ...categorySuggestions];
    
    setSuggestions(allSuggestions);
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion) => {
    if (suggestion.type === 'Title') {
      setSearchQuery(suggestion.text);
      handleArticleClick(suggestion.data.slug);
    } else if (suggestion.type === 'Category') {
      setSearchQuery(suggestion.text);
      // Optionally navigate to category page or filter results
      // You could add: router.push(`/support/categories/${suggestion.data}`);
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

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // If there are suggestions and Enter is pressed, select the first suggestion
    if (suggestions.length > 0) {
      handleSuggestionSelect(suggestions[0]);
    }
    setShowSuggestions(false);
  };

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

 

  const handleArticleClick = (slug) => {
    router.push(`/support/questions/${slug}`);
  };

  // Enhanced filter for articles based on search query
  const filteredArticles = articles.filter(article => {
    // Check if query matches title
    const matchesTitle = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Check if query matches description
    const matchesDescription = article.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Check if query matches any category in the article
    const matchesCategory = (Array.isArray(article.categories) 
      ? article.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
      : article.category.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesTitle || matchesDescription || matchesCategory;
  });

  return (
    <SupportLayout categories={categories}>
      <Head>
        <title>Support Center | Xbattery™</title>
        <meta
          name="description"
          content="Get help and support for Xbattery products and services"
        />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section with Search */}
        <div className="bg-gradient-to-b from-blue-900 to-black">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-6 text-white">
              How can we help you?
            </h1>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative" ref={searchRef}>
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInput}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search help articles..."
                  className="w-full pl-12 pr-12 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    type="button"
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
              </form>

              {/* Search Results */}
              {searchQuery && !showSuggestions && (
                <div className="mt-4 bg-gray-900 rounded-lg border border-gray-800 max-h-96 overflow-y-auto">
                  {filteredArticles.map((article, index) => (
                    <button
                      key={index}
                      onClick={() => handleArticleClick(article.slug)}
                      className="w-full text-left p-4 hover:bg-gray-800 border-b border-gray-800 last:border-b-0"
                    >
                      <h3 className="text-white font-medium">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {article.description}
                      </p>
                    </button>
                  ))}
                  {filteredArticles.length === 0 && (
                    <div className="p-4 text-gray-400">
                      No articles found matching your search.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Popular Articles Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Popular Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <button
                key={index}
                onClick={() => handleArticleClick(article.slug)}
                className="text-left bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <HelpCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-400">
                        {article.category}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs px-2 py-1 bg-blue-500/10 rounded-full text-blue-400">
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still need help?
            </h2>
            <p className="text-gray-400 mb-6">
              Our support team is available to assist you
            </p>
            <button
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => router.push("/contact")}
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </SupportLayout>
  );
}