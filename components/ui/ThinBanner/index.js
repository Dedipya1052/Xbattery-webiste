import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function ThinBanner({ topClass = "top-20", theme = "media", withSpacer = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner has been shown before in this browsing session
    let hasSeenBanner = false;
    try {
      hasSeenBanner = sessionStorage.getItem('xbattery-thin-banner-seen') === 'true';
    } catch {}
    
    if (!hasSeenBanner) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark banner as seen for this session
    try { sessionStorage.setItem('xbattery-thin-banner-seen', 'true'); } catch {}
  };

  const handleBannerClick = () => {
    // Open the specific media article
    // Mark banner as seen for this session so it doesn't show again until reopen
    try { sessionStorage.setItem('xbattery-thin-banner-seen', 'true'); } catch {}
    setIsVisible(false);
    window.open('/media/xbattery-raises-2-3m-seed-funding-battery-electronics', '_blank');
  };

  // Push navbar down while banner is visible on home page (top-0)
  useEffect(() => {
    if (theme !== "home" || topClass !== "top-0") return;
    const offset = "24px";
    const navEls = Array.from(document.querySelectorAll('nav'));
    if (isVisible) {
      navEls.forEach((el) => {
        try {
          el.dataset.prevMarginTop = el.style.marginTop || '';
          el.style.marginTop = offset;
        } catch {}
      });
    } else {
      navEls.forEach((el) => {
        try {
          el.style.marginTop = el.dataset.prevMarginTop || '';
          delete el.dataset.prevMarginTop;
        } catch {}
      });
    }
    return () => {
      navEls.forEach((el) => {
        try {
          el.style.marginTop = el.dataset.prevMarginTop || '';
          delete el.dataset.prevMarginTop;
        } catch {}
      });
    };
  }, [isVisible, theme, topClass]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed ${topClass} left-0 right-0 z-50 ${
            theme === "home"
              ? "bg-white text-gray-900"
              : "bg-gradient-to-r from-gray-50 to-white text-gray-800"
          } border-b border-gray-200 shadow-md`}
        >
          <div className={`max-w-7xl mx-auto px-4 py-0 ${theme === "home" ? "my-2" : ""}`}>
            <div className={`flex items-center justify-between h-4 ${theme === "home" ? "rounded-xl px-3" : ""}`}>
              <div 
                className={`flex items-center h-full space-x-2 flex-1 cursor-pointer transition-all duration-200 rounded px-1 py-0 -mx-1 -my-0 -mt-1 border border-transparent ${
                  theme === "home" ? "hover:bg-gray-50" : "hover:bg-gray-100 hover:border-gray-200"
                } ${theme === "home" ? "justify-center" : ""}`}
                onClick={handleBannerClick}
              >
                <div className="flex-shrink-0 self-center">
                  <div className={`w-1.5 h-1.5 rounded-full animate-pulse shadow-sm ${theme === "home" ? "bg-gray-700" : "bg-blue-500"}`}></div>
                </div>
                <div className="flex-1">
                  <div className={`flex items-center space-x-3 ${theme === "home" ? "justify-center" : ""}`}>
                    <div className="flex items-center space-x-2">
                      <span className={`text-[10px] leading-none font-bold uppercase tracking-wide px-1 py-0 rounded-full ${
                        theme === "home" ? "bg-gray-100 text-gray-800" : "bg-blue-50 text-blue-600"
                      }`}>Xbattery Media</span>
                      <span className={`text-[10px] leading-none font-medium ${theme === "home" ? "text-gray-700" : "text-gray-500"}`}>24 September 2025</span>
                    </div>
                    <div className="flex-1">
                      <p className={`text-xs leading-none font-semibold line-clamp-1 ${theme === "home" ? "text-gray-900 text-center" : "text-gray-800"}`}>
                        <span className={`font-bold ${theme === "home" ? "text-gray-900" : "text-gray-900"}`}>Xbattery Raises $2.3M in Seed Round</span> from Bipin Patel Family Office with participation from Jhaveri Credits, to build Battery Electronics
                      </p>
                    </div>
                    <div className={`flex-shrink-0 flex items-center space-x-1 px-1 py-0 rounded-full transition-colors ${
                      theme === "home" ? "bg-gray-100 text-gray-900 hover:bg-gray-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}>
                      <span className="text-[10px] leading-none font-semibold">Read More</span>
                      <ExternalLink size={9} />
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className={`ml-2 flex-shrink-0 p-0 rounded-full transition-colors ${theme === "home" ? "hover:bg-gray-100" : "hover:bg-gray-200"}`}
                aria-label="Close banner"
              >
                <X size={10} className={`${theme === "home" ? "text-gray-700" : "text-gray-700"}`} />
              </button>
            </div>
          </div>
        </motion.div>
        {withSpacer && (
          <div
            aria-hidden="true"
            className="w-full"
            style={{ height: "24px" }}
          />
        )}
        </>
      )}
    </AnimatePresence>
  );
}
