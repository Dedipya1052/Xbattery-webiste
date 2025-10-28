import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import AnimatedDiv from "@/components/ui/Animate";
import IconWithGradient from "@/components/ui/IconGradient";
import ESSCabinetIcon from "@/components/Icons/ESSCabinetIcon";
import CustomTooltip from "@/components/ui/CustomTooltip";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { 
  FaFlask, FaLayerGroup, FaBolt, FaTachometerAlt, FaPlug, FaMicrochip,
  FaThermometerHalf, FaShieldAlt, FaChartLine, FaNetworkWired, FaBroadcastTower,
  FaBatteryFull, FaBatteryHalf, FaBatteryQuarter, FaCogs, FaCode, FaChartPie, FaSitemap, FaChartBar, FaDownload, FaCar,
  FaCog, FaWifi, FaServer, FaHome, FaTruck, FaCubes, FaBatteryEmpty, FaBatteryThreeQuarters, FaIndustry
} from "react-icons/fa";
import FactoryIcon from "@/components/Icons/FactoryIcon";
import Layout from "@/components/Layout";
import Footer from "@/components/ui/Footer/Footer";
 
import classes from "../bharat-bms/styles.module.css";


export default function BharatBMSEVPage() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const scrollableRef = useRef(null);
  const ev110vSectionRef = useRef(null);
  const ev110vScrollableRef = useRef(null);
  const ev400vSectionRef = useRef(null);
  const ev400vScrollableRef = useRef(null);
  const ev500vSectionRef = useRef(null);
  const ev500vScrollableRef = useRef(null);

  // Handle scrolling to specific section from menu navigation
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    if (scrollToSection) {
      sessionStorage.removeItem('scrollToSection');
      
      // Wait for page to fully load before scrolling
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  }, []);
  
  // Product images (first image only)
  const productImages = [
    "/images/bms_offerings/ev-110v.png",
    "/images/bms_offerings/ev110v-side.png",
  ];

  const ev400vImages = [
    "/images/bms_offerings/ev-400v.png",
    "/images/bms_offerings/ev-400v-side.png",
  ];

  const ev500vImages = [
    "/images/bms_offerings/ev-500v.png",
    "/images/bms_offerings/ev-500v-side.png",
  ];
  
  // Ensure home page scrolls to ESS sections when navigating back
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('scrollToESS', '1');
      } catch {}
    }
  }, []);

  // Handle hash navigation to specific sections
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const scrollToElement = () => {
          const element = document.getElementById(hash);
          if (element) {
            try {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              return true;
            } catch (error) {
              // Fallback to scrollIntoView if scrollTo fails
              try {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return true;
              } catch (fallbackError) {
                console.warn('Both scrollTo and scrollIntoView failed:', fallbackError);
                return false;
              }
            }
          }
          return false;
        };

        // Try immediately first
        if (!scrollToElement()) {
          // If element not found, try with increasing delays
          const delays = [200, 500, 1000, 2000];
          delays.forEach((delay, index) => {
            setTimeout(() => {
              if (!scrollToElement() && index === delays.length - 1) {
                console.warn(`Element with id "${hash}" not found after ${delay}ms`);
              }
            }, delay);
          });
        }
      }
    };

    // Handle initial load with hash
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  // Additional hash navigation handler for router changes
  useEffect(() => {
    const handleRouteChange = () => {
      const hash = router.asPath.split('#')[1];
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 300);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Robust smooth scroll handling for pinned sections
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout = null;
    let animationFrame = null;

    function smoothScrollTo(element, target, duration = 130) {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      const start = element.scrollTop;
      const change = target - start;
      const startTime = performance.now();

      function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Linear easing to prevent sticking
        element.scrollTop = start + change * progress;
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateScroll);
        } else {
          isScrolling = false;
          animationFrame = null;
        }
      }
      
      animationFrame = requestAnimationFrame(animateScroll);
    }

    function handleWheel(e) {
      // Reset scrolling flag after a short delay to prevent getting stuck
      if (isScrolling) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 100);
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Helper function to check if a section is in view
      function isSectionInView(sectionRef) {
        if (!sectionRef.current) return false;
        const rect = sectionRef.current.getBoundingClientRect();
        // Consider in view if any part overlaps the viewport
        return rect.bottom > 0 && rect.top < window.innerHeight;
      }

      // Helper function to handle scroll for a section
      function handleSectionScroll(sectionRef, scrollableRef) {
        if (!sectionRef.current || !scrollableRef.current) return false;
        
        if (!isSectionInView(sectionRef)) return false;
        
          const scrollable = scrollableRef.current;
          const atTop = scrollable.scrollTop <= 1;
          const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 2;

          // Handle upward scroll (scrolling up)
          if (e.deltaY < 0) {
            if (atTop) {
              // Content is at top, allow page scroll to previous section
            return false;
            } else {
              // Content not at top, scroll content up
              e.preventDefault();
              e.stopPropagation();
              isScrolling = true;
              
              // Smooth scroll to top if scrolling fast
              if (Math.abs(e.deltaY) > 100) {
                smoothScrollTo(scrollable, 0, 240);
              } else {
                // Smooth incremental scroll
                const scrollAmount = Math.max(55, Math.abs(e.deltaY) * 1.0);
                const newScrollTop = Math.max(0, scrollable.scrollTop - scrollAmount);
                smoothScrollTo(scrollable, newScrollTop, 100);
              }
            return true;
            }
          }

          // Handle downward scroll (scrolling down)
          if (e.deltaY > 0) {
            if (atBottom) {
              // Content is at bottom, allow page scroll to next section
            return false;
            } else {
              // Content not at bottom, scroll content down
              e.preventDefault();
              e.stopPropagation();
              isScrolling = true;
              
              // Smooth scroll to bottom if scrolling fast
              if (Math.abs(e.deltaY) > 100) {
                smoothScrollTo(scrollable, scrollable.scrollHeight, 240);
              } else {
                // Smooth incremental scroll
                const scrollAmount = Math.max(55, Math.abs(e.deltaY) * 1.0);
                const newScrollTop = Math.min(scrollable.scrollHeight, scrollable.scrollTop + scrollAmount);
                smoothScrollTo(scrollable, newScrollTop, 100);
              }
            return true;
          }
        }
        
        return false;
      }

      // Build section list
      const sections = [
        { sectionRef, scrollableRef },
        { sectionRef: ev110vSectionRef, scrollableRef: ev110vScrollableRef },
        { sectionRef: ev400vSectionRef, scrollableRef: ev400vScrollableRef },
        { sectionRef: ev500vSectionRef, scrollableRef: ev500vScrollableRef },
      ];

      // Determine hovered section by pointer position (Y within section rect)
      let hoveredIndex = -1;
      let bestDistance = Infinity;
      sections.forEach((s, idx) => {
        if (!s.sectionRef.current) return;
        const rect = s.sectionRef.current.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          const centerY = rect.top + rect.height / 2;
          const distance = Math.abs(centerY - e.clientY);
          if (distance < bestDistance) {
            bestDistance = distance;
            hoveredIndex = idx;
          }
        }
      });

      // Fallback: if none by Y-position, check DOM containment
      if (hoveredIndex === -1) {
        hoveredIndex = sections.findIndex(
          (s) => s.sectionRef.current && s.sectionRef.current.contains(e.target)
        );
      }

      if (hoveredIndex !== -1) {
        handleSectionScroll(
          sections[hoveredIndex].sectionRef,
          sections[hoveredIndex].scrollableRef
        );
        return;
      }

      // Otherwise, check sections in default order
      if (handleSectionScroll(sectionRef, scrollableRef)) return;
      if (handleSectionScroll(ev110vSectionRef, ev110vScrollableRef)) return;
      if (handleSectionScroll(ev400vSectionRef, ev400vScrollableRef)) return;
      if (handleSectionScroll(ev500vSectionRef, ev500vScrollableRef)) return;
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        window.removeEventListener("wheel", handleWheel);
        clearTimeout(scrollTimeout);
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
  }, []);

  const data = {
    title: "Xbattery BharatBMS-EV",
    description: "Xbattery BharatBMS-EV is a BMS designed for electric cars, trucks, and buses. It supports up to 186S LFP and NMC cells and enables cell monitoring, active balancing, and multi-level protection for reliable vehicle operation.",
    imageAlt: "LV-BMS Image",
    image: "/images/bms_offerings/ev-500v.png",
  };

  
  // Navigation logic - simplified for unified page
  const prevBMS = {
    title: "Xbattery BharatBMS-ESS-110V",
    link: "/bharatbms-ess-110v"
  };
  const nextBMS = {
    title: "Xbattery BharatBMS-EV-110V", 
    link: "/bharatbms-ev-110v"
  };

  // Icon sets for Features
  const featureIconSets = [
    FaBatteryEmpty,         // Cell Monitoring & Balancing
    FaCar,                  // Communication & Control
    FaShieldAlt,            // Safety Features
    FaThermometerHalf,      // Thermal Management
    FaTruck,                // Scalability
    FaChartPie              // Diagnostics and Monitoring
  ];

  // Icon sets for Software
  const softwareIconSets = [FaChartPie, FaCog, FaCode];

  // Flyer label should show brand on first line and product name on second line
  const flyerProductName = (data.title || "").replace(/^Xbattery\s+/i, "").toUpperCase();

  return (
    <Layout>
      <Head>
        <title>{data.title} | Xbattery</title>
      </Head>
      {/* When user navigates back from this page, send them to home cards section */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              if (typeof window === 'undefined') return;
              
              // Set session storage for home page to scroll to offerings
              try { 
                sessionStorage.setItem('scrollToOfferings','1'); 
              } catch(e) {}
              
              // Handle back button navigation
              function handleBackNavigation(event) {
                // Prevent default back behavior
                event.preventDefault();
                // Navigate to home page with BMS offerings section
                window.location.href = '/#bms-offerings';
                // Force scroll to the section after navigation
                setTimeout(() => {
                  const element = document.getElementById('bms-offerings');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }
              
              // Add back button listener
              window.addEventListener('popstate', handleBackNavigation);
              
              // Also handle browser back button with beforeunload
              window.addEventListener('beforeunload', function() {
                try {
                  sessionStorage.setItem('scrollToOfferings','1');
                } catch(e) {}
              });
              
              // Push a state to ensure back button works
              history.pushState({fromBms: true}, '', window.location.href);
            })();
          `,
        }}
      />
      <div className={`${classes.head1} bg-black`}>
      <div className="bg-[#1c1c1c] text-white w-full relative">
        {/* Page header navigation icon (top-right) */}
        <div className="absolute top-24 right-4 w-11 h-11 rounded-xl bg-[#0c0c0c] border border-white/20 flex items-center justify-center text-white overflow-visible z-50">
          <CustomTooltip text="Electric Vehicles">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
              <Image src="/images/icons/truck.png" alt="Electric Vehicles" width={37} height={37} className="object-cover scale-[1.0]" />
            </div>
          </CustomTooltip>
        </div>
        <div className="mx-auto w-full max-w-7xl py-8 md:py-16 px-3 md:px-6 flex flex-col lg:flex-row items-center justify-center h-full min-h-[460px]">
          <div className="text-center lg:text-left p-2 md:p-4 mb-6 lg:mb-0 w-full lg:w-1/2">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${classes.color} leading-[35px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px]`}>
              {data.title}
            </h1>
            <h2 className="text-sm sm:text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 text-[#e9e9e9] px-1">
              {data.description}
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-lg rounded-lg bg-[#1c1c1c] h-[320px] md:h-[440px] overflow-hidden flex items-center justify-center">
              <Image 
                src={data.image} 
                alt={data.imageAlt} 
                width={1000} 
                height={600} 
                className="object-contain w-full h-full scale-[1.08] md:scale-[1.15]" 
              />
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 px-3 md:px-6 mx-auto w-full max-w-none">


        {/* Features section (mirroring BharatBMS content) */}
        <div className=" py-9 px-4 md:px-6 rounded-lg mb-1">
          <AnimatedDiv>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-8 text-center ${classes.color}`}>
              Features
            </h2>
            <div className="max-w-[1000px] mx-auto mb-12">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-300">
                {data.title} is engineered on the BharatBMS architecture: a universal high-voltage Battery Management System that scales from home energy storage to industrial and EV applications, emphasizing reliability, safety, and ease of integration.
              </p>
            </div>
          </AnimatedDiv>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1000px] mx-auto">
            {[
              { title: "Safety Features", description: "Built-in protection against over-voltage, under-voltage, over-current, short-circuit, and ground faults." },
              { title: "Cell Monitoring & Balancing", description: "Supports up to 186 series cells with passive balancing for equalization. Voltage accuracy: ±2mV." },
              { title: "Diagnostics and Monitoring", description: "Real-time data visualization and lifecycle analytics for better battery management." },
              { title: "Thermal Management", description: "Real-time temperature sensing and thermal runaway detection for high-temperature control." },
              { title: "Scalability", description: "Modular architecture supports series and parallel setups for EV needs." },
              { title: "Communication & Control", description: "CAN 2.0B, CAN FD, RS-485, ETPL, UART, and optional Ethernet for seamless integration and real-time diagnostics." },
            ].map((feature, index) => (
              <AnimatedDiv key={index}>
                <div className="bg-[#0E0E10] border border-[#2E31F81A] rounded-3xl h-[350px] flex flex-col shadow-lg relative overflow-hidden">
                  {index === 0 && (
                        <Image
                          src="/images/icons/f11.svg"
                          alt="Safety Features"
                          fill
                          className="object-contain -mt-16"
                        />
                  )}
                  {index === 1 && (
                        <Image
                          src="/images/icons/f12.svg"
                          alt="Cell Monitoring & Balancing"
                          fill
                          className="object-contain -mt-16"
                        />
                  )}
                  {index === 2 && (
                        <Image
                          src="/images/icons/f13.svg"
                          alt="Diagnostics and Monitoring"
                          fill
                          className="object-contain -mt-16"
                        />
                  )}
                  {index === 3 && (
                        <Image
                          src="/images/icons/f14.svg"
                          alt="Thermal Management"
                          fill
                          className="object-contain -mt-16"
                        />
                  )}
                  {index === 4 && (
                        <Image
                          src="/images/icons/f15.svg"
                          alt="Scalability"
                          fill
                          className="object-contain -mt-16"
                        />
                  )}
                  {index === 5 && (
                        <Image
                          src="/images/icons/f16.svg"
                          alt="Communication & Control"
                          fill
                          className="object-contain -mt-16"
                        />
                  )}
                  
                  {/* Content Section - Overlay on image */}
                  <div className="text-left relative z-10 bg-[#0E0E10]/80 p-4 mt-auto h-[150px] w-full max-w-[377px]">
                    <h3 className="text-lg font-semibold text-white mb-[6px]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        {/* Software section (mirroring BharatBMS style) */}
        <div className="py-6 px-6 rounded-lg mb-1">
          <div className="max-w-[1000px] mx-auto py-16">
            <AnimatedDiv>
              <div className="bg-[#0E0E10] border border-[#2E31F81A] rounded-[15px] p-8 shadow-lg w-full h-[250px] flex flex-col">
                <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center text-white">
                  Software
                </h2>
                <div className="grid grid-cols-3 gap-8 w-full flex-1">
                  {[
                    {
                      title: "SOC/SOH Estimation",
                      description:
                        "Accurate algorithms for State-of-Charge and State-of-Health calculation, ensuring reliable battery status reporting.",
                    },
                    {
                      title: "Software Framework",
                      description:
                        "Optimized in C for high efficiency and real-time performance, suitable for demanding applications.",
                    },
                    {
                      title: "Customizable API",
                      description:
                        "Open API for seamless integration and tailoring system behavior to specific applications.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="text-center relative flex flex-col justify-center">
                      {index < 2 && (
                        <div className="absolute right-[-16px] top-0 bottom-0 w-px bg-gray-600"></div>
                      )}
                      <h3 className="text-lg font-semibold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>

        {/* Our Products Section */}
        <section id="our-products" className="py-4 md:py-6 lg:py-8 px-3 md:px-4 lg:px-6 bg-[#000000]">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedDiv>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-0 text-center ${classes.color}`}>
                Our Products
              </h2>
            </AnimatedDiv>

            {/* Black Div Box for EV 110V */}
            <div id="ev-110v-white" className="w-full h-8 bg-black mb-0 mt-24"></div>

            {/* EV 110V Product */}
            <AnimatedDiv>
            <div id="ev-110v" className="mb-0 bg-[#1c1c1c] border border-[#333] rounded-2xl p-3 md:p-4 lg:p-6 shadow-[0_6px_18px_rgba(0,0,0,0.20)] max-w-7xl mx-auto">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center mb-4 md:mb-6">Xbattery BharatBMS-EV-110V</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start">
                {/* Left - Product Image */}
                <div className="flex justify-center order-2 lg:order-1">
                  <div className="w-full max-w-lg text-center">
                     <div className="bg-[#1c1c1c] overflow-hidden h-[280px] sm:h-[320px] md:h-[380px] flex items-center justify-center rounded-lg">
                    <Image
                      src={productImages[0]}
                      alt="EV 110V BMS Product"
                          width={560}
                          height={340}
                          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                    </div>
                    <p className="text-gray-300 mt-3 md:mt-4 text-center text-sm md:text-base leading-relaxed px-2">
                    BharatBMS-EV-110V is optimized for e-rickshaws and tempos, featuring up to 36S configurations and automotive-grade safety compliance.
                    </p>
                </div>
              </div>

                {/* Right - Specifications */}
                <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                  {/* Key Specifications */}
                   <div>
                    <div className="flex items-center mb-3 md:mb-4">
                      <FaCogs className="text-gray-200 text-lg md:text-xl mr-2 md:mr-3" />
                      <h3 className="text-base md:text-lg font-semibold text-white">Key Specifications</h3>
                    </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="bg-[#262626] p-3 md:p-4 rounded-lg flex flex-col justify-center min-h-[160px] border border-[#333]">
                          <FaCubes className="text-gray-200 text-xl md:text-2xl mx-auto mb-2 md:mb-3" />
                          <div className="flex flex-col justify-center items-center text-center">
                            <h4 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">Cell Configuration</h4>
                            <p className="text-gray-300 text-xs md:text-sm text-center mt-1">Up to 36S</p>
                          </div>
                        </div>
                        <div className="bg-[#262626] p-3 md:p-4 rounded-lg flex flex-col justify-center min-h-[160px] border border-[#333]">
                          <FaBolt className="text-gray-200 text-xl md:text-2xl mx-auto mb-2 md:mb-3" />
                          <div className="flex flex-col justify-center items-center text-center">
                            <h4 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">Nominal Pack<br />Voltage Range</h4>
                            <p className="text-gray-300 text-xs md:text-sm text-center mt-1">110.0V</p>
                          </div>
                        </div>
                        <div className="bg-[#262626] p-3 md:p-4 rounded-lg flex flex-col justify-center min-h-[160px] border border-[#333] sm:col-span-2 lg:col-span-1">
                          <FaBatteryFull className="text-gray-200 text-xl md:text-2xl mx-auto mb-2 md:mb-3" />
                          <div className="flex flex-col justify-center">
                            <h4 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">Battery Capacity Range</h4>
                            <p className="text-gray-300 text-xs md:text-sm text-center mt-1">25kWh</p>
                          </div>
                        </div>
                      </div>
                  </div>

                  {/* Applications */}
                   <div>
                    <div className="flex items-center mb-3 md:mb-4 mt-6">
                      <FaIndustry className="text-gray-200 text-lg md:text-xl mr-2 md:mr-3" />
                      <h3 className="text-base md:text-lg font-semibold text-white">Applications</h3>
                    </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="bg-[#262626] p-3 md:p-4 rounded-lg text-center min-h-[160px] flex flex-col justify-center border border-[#333]">
                          <div className="w-10 h-8 md:w-12 md:h-10 mx-auto mb-2 md:mb-3 flex items-center justify-center">
                            <Image
                              src="/images/icons/truck.png"
                              alt="EV Truck"
                              width={48}
                              height={40}
                              className="object-contain scale-90"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">Mini Truck</h4>
                            <p className="text-gray-300 text-xs md:text-sm text-center mt-1">Reliable energy for heavy transport</p>
                          </div>
                        </div>
                        <div className="bg-[#262626] p-3 md:p-4 rounded-lg text-center min-h-[160px] flex flex-col justify-center border border-[#333]">
                          <div className="w-10 h-8 md:w-12 md:h-10 mx-auto mb-2 md:mb-3 flex items-center justify-center">
                            <Image
                              src="/images/icons/3wheel.png"
                              alt="EV 3 Wheeler"
                              width={48}
                              height={40}
                              className="object-contain scale-90"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">EV 3 Wheeler</h4>
                            <p className="text-gray-300 text-xs md:text-sm text-center mt-1">Optimized range for urban drive</p>
                          </div>
                        </div>
                        <div className="bg-[#262626] p-3 md:p-4 rounded-lg text-center min-h-[160px] flex flex-col justify-center border border-[#333] sm:col-span-2 lg:col-span-1">
                          <div className="w-10 h-8 md:w-12 md:h-10 mx-auto mb-2 md:mb-3 flex items-center justify-center">
                             <Image
                               src="/images/icons/2wheelsrs.png"
                               alt="EV 2 Wheeler"
                               width={48}
                               height={40}
                              className="object-contain scale-150"
                             />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">EV 2 Wheeler</h4>
                            <p className="text-gray-300 text-xs md:text-sm text-center mt-1">Efficient urban mobility</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    </div>
                      </div>
            </AnimatedDiv>

            {/* Black Div Box for EV 400V */}
            <div id="ev-400v-white" className="w-full h-8 bg-black mb-0 mt-24"></div>

            {/* EV 400V Product */}
            <AnimatedDiv>
            <div id="ev-400v" className="mb-0 bg-[#1c1c1c] border border-[#333] rounded-2xl p-3 md:p-4 lg:p-6 shadow-[0_6px_18px_rgba(0,0,0,0.20)] max-w-7xl mx-auto">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center mb-4 md:mb-6">Xbattery BharatBMS-EV-400V</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start">
                {/* Left - Product Image */}
                <div className="flex justify-center order-2 lg:order-1">
                  <div className="w-full max-w-lg text-center">
                     <div className="bg-[#1c1c1c] overflow-hidden h-[280px] sm:h-[320px] md:h-[380px] flex items-center justify-center rounded-lg">
                    <Image
                      src="/images/bms_offerings/ev-400v-2.png"
                      alt="EV 400V BMS Product"
                          width={560}
                          height={340}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    </div>
                    <p className="text-gray-300 mt-3 md:mt-4 text-center text-sm md:text-base leading-relaxed px-2">
                    BharatBMS-EV-400V is optimized for passenger cars, featuring up to 125S configurations and automotive-grade safety compliance.
                    </p>
                </div>
              </div>

                {/* Right - Specifications */}
                <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                  {/* Key Specifications */}
                    <div>
                    <div className="flex items-center mb-3 md:mb-4">
                       <FaCogs className="text-gray-200 text-lg md:text-xl mr-2 md:mr-3" />
                      <h3 className="text-base md:text-lg font-semibold text-white">Key Specifications</h3>
                    </div>
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                         <div className="bg-[#262626] p-3 md:p-4 rounded-lg flex flex-col justify-center min-h-[160px] border border-[#333]">
                           <FaCubes className="text-gray-200 text-xl md:text-2xl mx-auto mb-2 md:mb-3" />
                           <div className="flex flex-col justify-center items-center text-center">
                             <h4 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">Cell Configuration</h4>
                           <p className="text-gray-300 text-xs md:text-sm text-center mt-1">Up to 125S</p>
                          </div>
                          </div>
                         <div className="bg-[#262626] p-3 md:p-4 rounded-lg flex flex-col justify-center min-h-[160px] border border-[#333]">
                           <FaBolt className="text-gray-200 text-xl md:text-2xl mx-auto mb-2 md:mb-3" />
                           <div className="flex flex-col justify-center items-center text-center">
                             <h4 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">Nominal Pack<br />Voltage Range</h4>
                           <p className="text-gray-300 text-xs md:text-sm text-center mt-1">400.0V</p>
                        </div>
                          </div>
                         <div className="bg-[#262626] p-3 md:p-4 rounded-lg flex flex-col justify-center min-h-[160px] border border-[#333] sm:col-span-2 lg:col-span-1">
                           <FaBatteryFull className="text-gray-200 text-xl md:text-2xl mx-auto mb-2 md:mb-3" />
                           <div className="flex flex-col justify-center items-center text-center">
                             <h4 className="text-xs md:text-sm font-semibold text-white text-center leading-tight">Battery Capacity Range</h4>
                           <p className="text-gray-300 text-xs md:text-sm text-center mt-1">80kWh</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Applications */}
                   <div>
                    <div className="flex items-center mb-3 md:mb-4 mt-6">
                      <FaIndustry className="text-gray-200 text-lg md:text-xl mr-2 md:mr-3" />
                      <h3 className="text-base md:text-lg font-semibold text-white">Applications</h3>
                    </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="bg-[#262626] p-4 rounded-lg text-center h-[180px] flex flex-col justify-center border border-[#333]">
                          <div className="w-12 h-10 mx-auto mb-3 -mt-1 flex items-center justify-center">
                            <Image
                              src="/images/icons/car.png"
                              alt="EV Car"
                              width={48}
                              height={40}
                              className="object-contain scale-90 mt-6"
                            />
                          </div>
                          <div className="flex flex-col justify-center mt-2">
                            <h4 className="text-sm font-semibold text-white whitespace-nowrap">EV Car</h4>
                        <p className="text-gray-300 text-sm">Efficient power for smart mobility</p>
                    </div>
                        </div>
                        <div className="bg-[#262626] p-4 rounded-lg text-center h-[180px] flex flex-col justify-center border border-[#333]">
                          <div className="w-12 h-10 mx-auto mb-3 mt-1 flex items-center justify-center">
                            <Image
                              src="/images/icons/truck.png"
                              alt="EV Truck"
                              width={48}
                              height={40}
                              className="object-contain scale-90 mt-3"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-semibold text-white whitespace-nowrap">Mini Truck</h4>
                        <p className="text-gray-300 text-sm">Reliable energy for heavy transport</p>
                      </div>
                      </div>
                        <div className="bg-[#262626] p-4 rounded-lg text-center h-[180px] flex flex-col justify-center border border-[#333]">
                          <div className="w-12 h-10 mx-auto mb-3 mt-1 flex items-center justify-center">
                            <Image
                              src="/images/icons/bus.png"
                              alt="EV Bus"
                              width={48}
                              height={40}
                              className="object-contain scale-105 mt-3"
                            />
                      </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-semibold text-white whitespace-nowrap">EV Bus</h4>
                        <p className="text-gray-300 text-sm">Safe, scalable fleet performance</p>
                          </div>
                      </div>
                    </div>
                  </div>
                    </div>
                      </div>
                      </div>
            </AnimatedDiv>

            {/* Black Div Box for EV 600V */}
            <div id="ev-600v-white" className="w-full h-8 bg-black mb-0 mt-24"></div>

            {/* EV 600V Product */}
            <AnimatedDiv>
            <div id="ev-600v" className="mb-24 bg-[#1c1c1c] border border-[#333] rounded-2xl p-2.5 md:p-3 shadow-[0_6px_18px_rgba(0,0,0,0.20)] max-w-7xl mx-auto">
               <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6">Xbattery BharatBMS-EV-600V</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                {/* Left - Product Image */}
                <div className="flex justify-center">
                  <div className="w-full max-w-lg text-center">
                     <div className="bg-[#1c1c1c] overflow-hidden h-[320px] md:h-[380px] flex items-center justify-center">
                    <Image
                      src={ev500vImages[0]}
                      alt="EV 500V BMS Product"
                          width={560}
                          height={340}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    </div>
                    <p className="text-gray-300 mt-4 text-center">
                    BharatBMS-EV-600V is optimized for buses and heavy commercial vehicles, supporting up to 186S configurations with automotive-grade safety compliance.
                    </p>
                </div>
              </div>

                {/* Right - Specifications */}
                <div className="space-y-2.5">
                  {/* Key Specifications */}
                   <div>
                    <div className="flex items-center mb-3 md:mb-4">
                      <FaCogs className="text-gray-200 text-lg md:text-xl mr-2 md:mr-3" />
                      <h3 className="text-base md:text-lg font-semibold text-white">Key Specifications</h3>
                    </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                         <div className="bg-[#262626] p-4 rounded-lg flex flex-col justify-center h-[180px] border border-[#333]">
                           <FaCubes className="text-gray-200 text-2xl mx-auto mb-3 mt-4" />
                           <div className="flex flex-col justify-center items-center text-center">
                            <h4 className="text-sm font-semibold text-white whitespace-nowrap">Cell Configuration</h4>
                          <p className="text-gray-300 text-sm text-center">Up to 186S</p>
                          </div>
                          </div>
                        <div className="bg-[#262626] p-4 rounded-lg flex flex-col justify-center h-[180px] border border-[#333]">
                          <FaBolt className="text-gray-200 text-2xl mx-auto mb-3 mt-4" />
                          <div className="flex flex-col justify-center items-center text-center">
                            <h4 className="text-sm font-semibold text-white whitespace-nowrap">Nominal Pack<br />Voltage Range</h4>
                          <p className="text-gray-300 text-sm text-center">600.0V</p>
                        </div>
                          </div>
                        <div className="bg-[#262626] p-4 rounded-lg flex flex-col justify-center h-[180px] border border-[#333]">
                          <FaBatteryFull className="text-gray-200 text-2xl mx-auto mb-3" />
                          <div className="flex flex-col justify-center items-center text-center">
                            <h4 className="text-sm font-semibold text-white whitespace-nowrap">Battery Capacity Range</h4>
                          <p className="text-gray-300 text-sm text-center">120kWh</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Applications */}
                   <div>
                    <div className="flex items-center mb-3 md:mb-4 mt-6">
                      <FaIndustry className="text-gray-200 text-lg md:text-xl mr-2 md:mr-3" />
                      <h3 className="text-base md:text-lg font-semibold text-white">Applications</h3>
                    </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="bg-[#262626] p-4 rounded-lg text-center h-[180px] flex flex-col justify-center border border-[#333]">
                          <div className="w-12 h-10 mx-auto mb-3 -mt-1 flex items-center justify-center">
                            <Image
                              src="/images/icons/truck.png"
                              alt="EV Truck"
                              width={48}
                              height={40}
                              className="object-contain scale-90 mt-3"
                            />
                          </div>
                          <div className="flex flex-col justify-center mt-2">
                            <h4 className="text-sm font-semibold text-white whitespace-nowrap">EV Truck</h4>
                        <p className="text-gray-300 text-sm">Reliable energy for heavy transport</p>
                      </div>
                      </div>
                        <div className="bg-[#262626] p-4 rounded-lg text-center h-[180px] flex flex-col justify-center border border-[#333]">
                          <div className="w-12 h-10 mx-auto mb-3 mt-1 flex items-center justify-center">
                            <Image
                              src="/images/icons/bus.png"
                              alt="EV Bus"
                              width={48}
                              height={40}
                              className="object-contain scale-105"
                            />
                      </div>
                          <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-semibold text-white whitespace-nowrap">EV Bus</h4>
                        <p className="text-gray-300 text-sm">Safe, scalable fleet performance</p>
                      </div>
                        </div>
                        <div className="bg-[#262626] p-4 rounded-lg text-center h-[180px] flex flex-col justify-center border border-[#333]">
                          <div className="w-12 h-10 mx-auto mb-3 mt-1 flex items-center justify-center">
                            <Image
                              src="/images/icons/heavy-truck.png"
                              alt="Heavy Vehicle"
                              width={48}
                              height={40}
                               className="object-contain scale-125 mt-10"
                            />
                          </div>
                           <div className="flex flex-col justify-center mt-5">
                             <h4 className="text-sm font-semibold text-white whitespace-nowrap">Heavy Vehicle</h4>
                         <p className="text-gray-300 text-sm"><span className="block">Industrial and commercial</span><span className="block">applications</span></p>
                          </div>
                      </div>
                    </div>
                  </div>
                    </div>
                      </div>
                      </div>
            </AnimatedDiv>

        {/* Download Section */}
        <div className="py-8 px-4 md:px-6">
          <div className="w-full flex justify-end">
            <div className="flex flex-col items-center gap-2 mr-2">
               <a
                 href="/api/download-ev"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="View brochure PDF"
                 className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
               >
                 {/* Custom download icon with dual-color gradient stroke; button size increased */}
                 <svg
                   width="28"
                   height="28"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <defs>
                     <linearGradient id="downloadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                       <stop offset="0%" stopColor="#3B82F6" />
                       <stop offset="100%" stopColor="#1D4ED8" />
                     </linearGradient>
                   </defs>
                   <path
                     d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 10L12 15M12 15L7 10M12 15V3"
                     stroke="url(#downloadGradient)"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                 </svg>
               </a>
               <span className="text-sm text-white font-medium text-center">
                 <div className="text-white">PRODUCT FLYER</div>
                 <div className="text-white">XBATTERY BHARATBMS-EV</div>
               </span>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
      <Footer />
    </Layout>
  );
}