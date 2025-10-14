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
  FaCog, FaWifi, FaServer, FaHome, FaTruck, FaCubes, FaBatteryEmpty, FaBatteryThreeQuarters, FaIndustry, FaChevronLeft, FaChevronRight
} from "react-icons/fa";
import FactoryIcon from "@/components/Icons/FactoryIcon";
 
import classes from "../../bharat-bms/styles.module.css";

export default function BharatBMSESSPage() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const scrollableRef = useRef(null);
  const ess72vSectionRef = useRef(null);
  const ess72vScrollableRef = useRef(null);
  const ess110vSectionRef = useRef(null);
  const ess110vScrollableRef = useRef(null);

  // Product images (first image only)
  const productImages = [
    "/images/telecom_good_looking-Photoroom.png",
    "/images/bms_offerings/ess-48v-front-view.png",
    "/images/bms_offerings/ess-48v-side.png",
  ];

  const ess72vImages = [
    "/images/bms_offerings/ess-72v.png",
    "/images/bms_offerings/ess-72-front-Photoroom.png",
    "/images/bms_offerings/ess-72v-side-Photoroom.png",
  ];
  
  // Ensure home page scrolls to BMS offerings when navigating back
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('scrollToOfferings', '1');
      } catch {}
    }
  }, []);

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
        return rect.top <= 100 && rect.bottom > window.innerHeight - 100;
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

      // Check all sections in order of priority
      if (handleSectionScroll(sectionRef, scrollableRef)) return;
      if (handleSectionScroll(ess72vSectionRef, ess72vScrollableRef)) return;
      if (handleSectionScroll(ess110vSectionRef, ess110vScrollableRef)) return;
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
    title: "Xbattery BharatBMS-ESS",
    description: "The XB-X 16S is a versatile 48V BMS designed for modular energy storage systems with support for both LFP and NMC chemistries across 13-17 series configurations. Its stackable architecture and 100A continuous current handling make it ideal for scalable residential and commercial energy storage applications.",
    imageAlt: "EV-BMS Image",
    image: "/images/telecom_good_looking-Photoroom.png",
  };

  // Navigation logic - simplified for unified page
  const prevBMS = null; // No previous for first ESS page
  const nextBMS = {
    title: "Xbattery BharatBMS-ESS-72V",
    link: "/bms/BharatBMS-ESS-72V"
  };

  // Icon sets for Features
  const featureIconSets = [
    FaBatteryFull,        // Cell Monitoring & Balancing
    FaWifi,               // Communication & Control
    FaShieldAlt,          // Safety Features
    FaThermometerHalf,    // Thermal Management
    FaServer,             // Scalability
    FaChartLine           // Diagnostics and Monitoring
  ];

  // Icon sets for Software
  const softwareIconSets = [FaChartLine, FaCog, FaCode];

  // Flyer label should show brand on first line and product name on second line
  const flyerProductName = (data.title || "").replace(/^Xbattery\s+/i, "").toUpperCase();

  return (
    <>
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
      <div className={classes.head1}>
      <div className="bg-[#1c1c1c] text-white w-full relative">
        {/* Page header icon badge (top-right) */}
        <div className="absolute top-5 right-4 w-11 h-11 rounded-xl bg-[#0c0c0c] border border-white/20 flex items-center justify-center text-white overflow-visible z-50">
          <CustomTooltip text="Energy storage">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
              <Image src="/images/icons/download (29)-Photoroom.png" alt="BMS icon" width={42} height={42} className="object-cover scale-[1.3]" />
            </div>
          </CustomTooltip>
        </div>
        <div className="mx-auto w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[1500px] py-8 md:py-16 px-3 md:px-6 flex flex-col lg:flex-row items-center justify-center h-full min-h-[460px]">
          <div className="text-center lg:text-left p-2 md:p-4 mb-6 lg:mb-0 w-full ml-4">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${classes.color} leading-[35px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] lg:leading-tight`}>
              {data.title}
            </h1>
            <h2 className="text-sm sm:text-base md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 text-[#e9e9e9] px-1 md:pl-[1.5px]">
              {data.description}
            </h2>
          </div>
          <div className="md:w-1/2 flex justify-start">
            <div className="w-[100%] max-w-2xl rounded-lg bg-[#1c1c1c] h=[360px] md:h-[480px] overflow-hidden flex items-center justify-center -ml-20">
              <Image 
                src={data.image} 
                alt={data.imageAlt} 
                width={1000} 
                height={600} 
                className="object-contain w-full h-full scale-[1.18] md:scale-[1.25]" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 px-3 md:px-6 mx-auto w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[1500px]">
        {/* Intro paragraph (same placement as BharatBMS) */}
        <AnimatedDiv>
          <div className="w-[95%] lg:w-[80%] mx-auto text-center md:text-center px-2">
            <p className="text-sm sm:text-base md:text-xl leading-relaxed mb-2">
              {data.title} is engineered on the BharatBMS architecture: a universal high-voltage Battery Management System that scales from home energy storage to industrial and EV applications, emphasizing reliability, safety, and ease of integration.
            </p>
          </div>
        </AnimatedDiv>

        {/* Key Specifications section (mirroring BharatBMS style) */}
        <div className=" py-9 px-4 md:px-6 rounded-lg mb-1">
          <AnimatedDiv>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-12 text-center ${classes.color}`}>
              Key Specifications
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto items-stretch">
            {[
              { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
              { icon: <FaCubes />, title: "Cell Count Range", description: "Up to 28S" },
              { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "48V" }
            ].map((feature, index) => (
              <AnimatedDiv key={index}>
                 <div className="flex w-full rounded-2xl overflow-hidden bg-[#1b1b1b] min-h-[120px] pointer-events-none">
                  <div className="w-[96px] md:w-[110px] shrink-0 bg-[#141414] flex items-center justify-center">
                    <IconWithGradient size={24} title="Energy storage">
                      {feature.icon}
                    </IconWithGradient>
                  </div>
                  <div className="flex-1 min-h-[120px] px-0 py-5 md:px-0 md:py-6 flex flex-col items-center justify-center text-center">
                    <h3 className="text-sm md:text-base font-semibold text-white leading-tight">{feature.title}</h3>
                    <p className="text-sm text-gray-300 mt-1 text-center">{feature.description}</p>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        {/* Features section (mirroring BharatBMS content) */}
        <div className=" py-9 px-4 md:px-6 rounded-lg mb-1">
          <AnimatedDiv>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-12 text-center ${classes.color}`}>
              Features
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
            {[
              { title: "Cell Monitoring & Balancing", description: "Supports up to 18 series cells with passive balancing for equalization. Voltage accuracy: ±2mV." },
              { title: "Communication & Control", description: "CAN FD, UART, SPI, and Ethernet for real-time processing and remote monitoring." },
              { title: "Safety Features", description: "ISO 26262 compliant protection for voltage, current, and temperature with fault diagnostics." },
              { title: "Thermal Management", description: "Real-time temperature sensing and thermal runaway detection for high-temperature control." },
              { title: "Scalability", description: "Modular architecture supports series and parallel setups for larger energy storage needs." },
              { title: "Diagnostics and Monitoring", description: "Real-time data visualization and lifecycle analytics for better battery management." },
            ].map((feature, index) => (
              <AnimatedDiv key={index}>
                <div className="flex flex-col items-center text-center bg-[#1c1c1c] p-8 rounded-lg shadow-md h-full">
                  <IconWithGradient size={25} title="Energy storage">
                    {React.createElement(featureIconSets[index])}
                  </IconWithGradient>
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        {/* Software section (mirroring BharatBMS style) */}
        <div className="py-6 px-4 md:px-6 rounded-lg mb-[-2rem]">
          <AnimatedDiv>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-[-0.5rem] text-center ${classes.color}`}>
              Software
            </h2>
          </AnimatedDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto py-16">
            {[
              {
                title: "SOC/SOH Estimation",
                description: "Accurate algorithms for State-of-Charge and State-of-Health calculation, ensuring reliable battery status reporting.",
                icon: <FaChartLine />,
              },
              {
                title: "Software Framework",
                description: "Optimized in C for high efficiency and real-time performance, suitable for demanding applications.",
                icon: <FaCode />,
              },
              {
                title: "Customizable API",
                description: "Open API for seamless integration and tailoring system behavior to specific applications.",
                icon: <FaCogs />,
              },
            ].map((feature, index) => (
              <AnimatedDiv key={index}>
                <div className="flex flex-col items-center text-center bg-gradient-to-b bg-[#1c1c1c] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <IconWithGradient size={30} title="Energy storage">
                    {feature.icon}
                  </IconWithGradient>
                  <h3 className="text-xl font-semibold mt-4 mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        {/* Our Products Section */}
        <section
          id="products-section"
          ref={sectionRef}
          className="relative h-[100vh] bg-[#000000] overflow-hidden"
        >
          <div className="sticky top-0 h-screen flex flex-col justify-center px-4 md:px-6">
            <AnimatedDiv>
              <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center ${classes.color}`}>
                Our Products
              </h2>
            </AnimatedDiv>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* LEFT STICKY IMAGE */}
              <div className="flex justify-center image-container relative">
                {/* Image Container */}
                <div className="w-full h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] shadow-2xl flex flex-col">
                  {/* Heading */}
                  <div className="bg-[#1d1d1d] p-4 text-center rounded-t-2xl border-b border-gray-200 border-opacity-30">
                    <h3 className="text-xl font-bold text-white">Xbattery BharatBMS-ESS-48V</h3>
                  </div>
                  
                  {/* Image */}
                  <div className="flex-1 flex items-center justify-center p-8">
                    <Image
                      src={productImages[0]}
                      alt="ESS 48V BMS Product"
                      width={2000}
                      height={500}
                      className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Placeholder Text */}
                  <div className="bg-[#1a1a1a] p-4 text-center">
                    <p className="text-gray-300 text-sm">
                    The XB-X 16S is a versatile 48V BMS designed for modular energy storage systems with support for both LFP and NMC chemistries across 13-17 series configurations.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SCROLL CONTENT */}
              <div ref={scrollableRef} className="h-[600px] overflow-y-auto pr-4 scrollbar-hide">
                <div className="space-y-6">

                  {/* ---------- Key Specifications ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <FaCogs className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Key Specifications</h3>
                      </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex w-full rounded-xl overflow-hidden bg-[#1b1b1b] min-h-[80px] pointer-events-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20">
                          <div className="w-[60px] md:w-[70px] shrink-0 bg-[#141414] flex items-center justify-center">
                            <IconWithGradient size={18} title="Energy storage">
                              <FaFlask />
                            </IconWithGradient>
                            </div>
                           <div className="flex-1 min-h-[100px] px-0 py-3 md:px-0 md:py-4 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xs font-semibold text-white leading-tight">Supported Cell Chemistry</h3>
                            <p className="text-xs text-gray-300 mt-1 text-center">LFP/NMC</p>
                          </div>
                        </div>
                        <div className="flex w-full rounded-xl overflow-hidden bg-[#1b1b1b] min-h-[80px] pointer-events-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20">
                          <div className="w-[60px] md:w-[70px] shrink-0 bg-[#141414] flex items-center justify-center">
                            <IconWithGradient size={18} title="Energy storage">
                              <FaBolt />
                            </IconWithGradient>
                            </div>
                           <div className="flex-1 min-h-[100px] px-0 py-3 md:px-0 md:py-4 flex flex-col items-center justify-center text-center">
                             <h3 className="text-xs font-semibold text-white leading-tight text-center">Nominal Pack Voltage</h3>
                            <p className="text-xs text-gray-300 mt-1 text-center">48V</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex w-full max-w-[48%] rounded-xl overflow-hidden bg-[#1b1b1b] min-h-[100px] pointer-events-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20">
                          <div className="w-[60px] md:w-[70px] shrink-0 bg-[#141414] flex items-center justify-center">
                            <IconWithGradient size={18} title="Energy storage">
                              <FaCubes />
                            </IconWithGradient>
                            </div>
                           <div className="flex-1 min-h-[100px] px-0 py-3 md:px-0 md:py-4 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xs font-semibold text-white leading-tight">Cell Count Range</h3>
                            <p className="text-xs text-gray-300 mt-1 text-center">Up to 28S</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* ---------- Additional Content for Testing Scroll ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <FaShieldAlt className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Safety & Compliance</h3>
                      </div>
                    <div className="space-y-3">
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">ISO 26262 Compliance</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Automotive functional safety standard compliance for critical safety applications.
                      </p>
                    </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Fault Detection</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Advanced fault detection and isolation capabilities for enhanced system reliability.
                      </p>
                    </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Emergency Shutdown</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Rapid emergency shutdown protocols for critical safety situations.
                      </p>
                    </div>
                    </div>
                  </div>

                  {/* ---------- Performance Box ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <FaChartLine className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Performance</h3>
                      </div>
                    <div className="space-y-3">
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Real-time Monitoring</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Continuous real-time monitoring of battery parameters with high precision.
                        </p>
                    </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Data Logging</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Comprehensive data logging and analytics for performance optimization.
                        </p>
                      </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Predictive Analytics</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          AI-powered predictive analytics for proactive maintenance and optimization.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ---------- Diagnostics & Monitoring ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <FaChartLine className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Diagnostics & Monitoring</h3>
                      </div>
                    <div className="space-y-3">
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Health Monitoring</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Comprehensive battery health monitoring with predictive failure analysis.
                        </p>
                      </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Fault Detection</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Advanced fault detection algorithms for early warning and prevention.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ---------- Thermal Management ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <FaIndustry className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Thermal Management</h3>
                      </div>
                    <div className="space-y-3">
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Temperature Control</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Intelligent thermal management system for optimal battery performance.
                        </p>
                    </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Cooling System</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Advanced cooling mechanisms to maintain optimal operating temperatures.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ---------- Communication & Control ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <FaCogs className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Communication & Control</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">CAN Bus Interface</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          High-speed CAN bus communication for seamless system integration.
                        </p>
                      </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Remote Monitoring</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Cloud-based remote monitoring and control capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESS 72V BMS Product Section */}
        <section
          id="ess-72v-section"
          ref={ess72vSectionRef}
          className="relative h-[100vh] bg-[#0a0a0a] overflow-hidden"
        >
          <div className="sticky top-0 h-screen flex flex-col justify-center px-4 md:px-6">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* LEFT STICKY IMAGE */}
              <div className="flex justify-center image-container relative">
                {/* Image Container */}
                <div className="w-full h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] shadow-2xl flex flex-col">
                  {/* Heading */}
                  <div className="bg-[#1d1d1d] p-4 text-center rounded-t-2xl border-b border-gray-200 border-opacity-30">
                    <h3 className="text-xl font-bold text-white">Xbattery BharatBMS-ESS-72V</h3>
                  </div>
                  
                  {/* Image */}
                  <div className="flex-1 flex items-center justify-center p-8">
                    <Image
                      src={ess72vImages[0]}
                      alt="ESS 72V BMS Product"
                      width={3000}
                      height={500}
                      className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Placeholder Text */}
                  <div className="bg-[#1a1a1a] p-4 text-center">
                    <p className="text-gray-300 text-sm">
                      The XB-X 32S is a robust low-voltage energy storage system BMS operating at 72V nominal with LFP chemistry support for 32-36 series configurations.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SCROLL CONTENT */}
              <div ref={ess72vScrollableRef} className="h-[600px] overflow-y-auto pr-4 scrollbar-hide">
                <div className="space-y-6">

                  {/* ---------- Key Specifications ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <FaCogs className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Key Specifications</h3>
                      </div>
                      <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex w-full rounded-xl overflow-hidden bg-[#1b1b1b] min-h-[80px] pointer-events-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20">
                          <div className="w-[60px] md:w-[70px] shrink-0 bg-[#141414] flex items-center justify-center">
                            <IconWithGradient size={18} title="Energy storage">
                              <FaFlask />
                            </IconWithGradient>
                        </div>
                           <div className="flex-1 min-h-[100px] px-0 py-3 md:px-0 md:py-4 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xs font-semibold text-white leading-tight">Supported Cell Chemistry</h3>
                            <p className="text-xs text-gray-300 mt-1 text-center">LFP/NMC</p>
                        </div>
                        </div>
                        <div className="flex w-full rounded-xl overflow-hidden bg-[#1b1b1b] min-h-[80px] pointer-events-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20">
                          <div className="w-[60px] md:w-[70px] shrink-0 bg-[#141414] flex items-center justify-center">
                            <IconWithGradient size={18} title="Energy storage">
                              <FaBolt />
                            </IconWithGradient>
                        </div>
                           <div className="flex-1 min-h-[100px] px-0 py-3 md:px-0 md:py-4 flex flex-col items-center justify-center text-center">
                             <h3 className="text-xs font-semibold text-white leading-tight text-center">Nominal Pack Voltage</h3>
                            <p className="text-xs text-gray-300 mt-1 text-center">72V</p>
                      </div>
                        </div>
                        </div>
                      <div className="flex justify-center">
                        <div className="flex w-full max-w-[48%] rounded-xl overflow-hidden bg-[#1b1b1b] min-h-[100px] pointer-events-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20">
                          <div className="w-[60px] md:w-[70px] shrink-0 bg-[#141414] flex items-center justify-center">
                            <IconWithGradient size={18} title="Energy storage">
                              <FaCubes />
                            </IconWithGradient>
                        </div>
                           <div className="flex-1 min-h-[100px] px-0 py-3 md:px-0 md:py-4 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xs font-semibold text-white leading-tight">Cell Count Range</h3>
                            <p className="text-xs text-gray-300 mt-1 text-center">Up to 28S</p>
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* ---------- Safety & Compliance ---------- */}
                <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300 mt-8">
                    <div className="flex items-center mb-6">
                    <FaShieldAlt className="text-white text-lg mr-4" />
                    <h3 className="text-base font-semibold text-white">Safety & Compliance</h3>
                      </div>
                    <div className="space-y-3">
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">ISO 26262 Compliance</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Automotive functional safety standard compliance for critical safety applications.
                      </p>
                    </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Fault Detection</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Advanced fault detection and isolation capabilities for enhanced system reliability.
                      </p>
                            </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Emergency Shutdown</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Rapid emergency shutdown protocols for critical safety situations.
                      </p>
                          </div>
                          </div>
                        </div>

                {/* ---------- Performance ---------- */}
                <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300 mt-8">
                  <div className="flex items-center mb-6">
                    <FaChartLine className="text-white text-lg mr-4" />
                    <h3 className="text-base font-semibold text-white">Performance</h3>
                            </div>
                  <div className="space-y-3">
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Real-time Monitoring</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Continuous real-time monitoring of battery parameters with high precision.
                      </p>
                          </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Data Logging</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Comprehensive data logging and analytics for performance optimization.
                      </p>
                          </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Predictive Analytics</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        AI-powered predictive analytics for proactive maintenance and optimization.
                      </p>
                        </div>
                      </div>
                            </div>

                {/* ---------- Diagnostics & Monitoring ---------- */}
                <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300 mt-8">
                  <div className="flex items-center mb-6">
                    <FaChartLine className="text-white text-lg mr-4" />
                    <h3 className="text-base font-semibold text-white">Diagnostics & Monitoring</h3>
                          </div>
                  <div className="space-y-3">
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Health Monitoring</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Comprehensive battery health monitoring with predictive failure analysis.
                      </p>
                          </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Fault Detection</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Advanced fault detection algorithms for early warning and prevention.
                      </p>
                        </div>
                      </div>
                    </div>

                {/* ---------- Thermal Management ---------- */}
                <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300 mt-8">
                  <div className="flex items-center mb-6">
                    <FaIndustry className="text-white text-lg mr-4" />
                    <h3 className="text-base font-semibold text-white">Thermal Management</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Temperature Control</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Intelligent thermal management system for optimal battery performance.
                      </p>
                    </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Cooling System</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Advanced cooling mechanisms to maintain optimal operating temperatures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ---------- Communication & Control ---------- */}
                <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300 mt-8">
                  <div className="flex items-center mb-6">
                      <FaCogs className="text-white text-lg mr-4" />
                    <h3 className="text-base font-semibold text-white">Communication & Control</h3>
                    </div>
                  <div className="space-y-3">
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">CAN Bus Interface</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        High-speed CAN bus communication for seamless system integration.
                      </p>
                  </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                      <h4 className="text-sm font-semibold text-white mb-2">Remote Monitoring</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Cloud-based remote monitoring and control capabilities.
                      </p>
                    </div>
                    </div>
                    </div>

                  </div>
                </div>
                      </div>
        </section>

        {/* ESS 110V BMS Product Section */}
        <section
          id="ess-110v-section"
          ref={ess110vSectionRef}
          className="relative h-[100vh] bg-[#0a0a0a] overflow-hidden"
        >
          <div className="sticky top-0 h-screen flex flex-col justify-center px-4 md:px-6">

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* LEFT STICKY IMAGE */}
              <div className="flex justify-center image-container relative">
                {/* Image Container */}
                <div className="w-full h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] shadow-2xl flex flex-col">
                  {/* Heading */}
                  <div className="bg-[#1d1d1d] p-4 text-center rounded-t-2xl border-b border-gray-200 border-opacity-30">
                    <h3 className="text-xl font-bold text-white">Xbattery BharatBMS-ESS-110V</h3>
                      </div>
                  
                  {/* Image */}
                  <div className="flex-1 flex items-center justify-center p-8">
                    <Image
                      src="/images/bms_offerings/ess-110v-enhanced-Photoroom.png"
                      alt="ESS 110V BMS Product"
                      width={1000}
                      height={500}
                      className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
                    />
                      </div>
                  
                  {/* Placeholder Text */}
                  <div className="bg-[#1a1a1a] p-4 text-center">
                    <p className="text-gray-300 text-sm">
                      The XB-X 32S is a robust low-voltage energy storage system BMS operating at 110V nominal with LFP chemistry support for 32-36 series configurations.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SCROLL CONTENT */}
              <div ref={ess110vScrollableRef} className="h-[600px] overflow-y-auto pr-4 scrollbar-hide">
                <div className="space-y-6">

                  {/* ---------- Key Specifications ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                  <div className="flex items-center mb-6">
                      <FaCogs className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Key Specifications</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex w-full rounded-xl overflow-hidden bg-[#1b1b1b] min-h-[80px] pointer-events-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20">
                          <div className="w-[60px] md:w-[70px] shrink-0 bg-[#141414] flex items-center justify-center">
                            <IconWithGradient size={18} title="Energy storage">
                              <FaFlask />
                            </IconWithGradient>
                  </div>
                           <div className="flex-1 min-h-[100px] px-0 py-3 md:px-0 md:py-4 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xs font-semibold text-white leading-tight">Supported Cell Chemistry</h3>
                            <p className="text-xs text-gray-300 mt-1 text-center">LFP/NMC</p>
                      </div>
                      </div>
                        <div className="flex w-full rounded-xl overflow-hidden bg-[#1b1b1b] min-h-[80px] pointer-events-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20">
                          <div className="w-[60px] md:w-[70px] shrink-0 bg-[#141414] flex items-center justify-center">
                            <IconWithGradient size={18} title="Energy storage">
                              <FaBolt />
                            </IconWithGradient>
                      </div>
                           <div className="flex-1 min-h-[100px] px-0 py-3 md:px-0 md:py-4 flex flex-col items-center justify-center text-center">
                             <h3 className="text-xs font-semibold text-white leading-tight text-center">Nominal Pack Voltage</h3>
                            <p className="text-xs text-gray-300 mt-1 text-center">110V</p>
                    </div>
                      </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex w-full max-w-[48%] rounded-xl overflow-hidden bg-[#1b1b1b] min-h-[100px] pointer-events-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00e5ff]/20">
                          <div className="w-[60px] md:w-[70px] shrink-0 bg-[#141414] flex items-center justify-center">
                            <IconWithGradient size={18} title="Energy storage">
                              <FaCubes />
                            </IconWithGradient>
                          </div>
                           <div className="flex-1 min-h-[100px] px-0 py-3 md:px-0 md:py-4 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xs font-semibold text-white leading-tight">Cell Count Range</h3>
                            <p className="text-xs text-gray-300 mt-1 text-center">Up to 42S</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  {/* ---------- Safety & Compliance ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                  <div className="flex items-center mb-6">
                      <FaShieldAlt className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Safety & Compliance</h3>
                    </div>
                  <div className="space-y-3">
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">ISO 26262 Compliance</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Automotive functional safety standard compliance for critical safety applications.
                        </p>
                  </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Fault Detection</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Advanced fault detection and isolation capabilities for enhanced system reliability.
                        </p>
                    </div>
                    <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Emergency Shutdown</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Rapid emergency shutdown protocols for critical safety situations.
                        </p>
                    </div>
                  </div>
                </div>

                  {/* ---------- Performance ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                  <div className="flex items-center mb-6">
                      <FaChartLine className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Performance</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Real-time Monitoring</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Continuous real-time monitoring of battery parameters with high precision.
                        </p>
                  </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Data Logging</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Comprehensive data logging and analytics for performance optimization.
                        </p>
                      </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Predictive Analytics</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          AI-powered predictive analytics for proactive maintenance and optimization.
                        </p>
                    </div>
                  </div>
                </div>

                  {/* ---------- Diagnostics & Monitoring ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                  <div className="flex items-center mb-6">
                      <FaChartLine className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Diagnostics & Monitoring</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Health Monitoring</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Comprehensive battery health monitoring with predictive failure analysis.
                        </p>
                      </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Fault Detection</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Advanced fault detection algorithms for early warning and prevention.
                        </p>
                      </div>
                      </div>
                      </div>

                  {/* ---------- Thermal Management ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                  <div className="flex items-center mb-6">
                      <FaIndustry className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Thermal Management</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Temperature Control</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Intelligent thermal management system for optimal battery performance.
                        </p>
                      </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Cooling System</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Advanced cooling mechanisms to maintain optimal operating temperatures.
                        </p>
                      </div>
                      </div>
                    </div>

                  {/* ---------- Communication & Control ---------- */}
                  <div className="bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] p-6 rounded-xl border border-[#333] transition-all duration-300">
                  <div className="flex items-center mb-6">
                      <FaCogs className="text-white text-lg mr-4" />
                      <h3 className="text-base font-semibold text-white">Communication & Control</h3>
                  </div>
                    <div className="space-y-3">
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">CAN Bus Interface</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          High-speed CAN bus communication for seamless system integration.
                        </p>
                  </div>
                      <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
                        <h4 className="text-sm font-semibold text-white mb-2">Remote Monitoring</h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Cloud-based remote monitoring and control capabilities.
                        </p>
                      </div>
                      </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <div className="py-8 px-4 md:px-6">
          <div className="w-full flex justify-end">
            <div className="flex flex-col items-center gap-2 mr-2">
              <a
                href="/api/download-ess"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View brochure PDF"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition"
              >
                {/* Custom download icon with dual-color gradient stroke; button size increased */}
                <svg
                  width="28"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3v10" stroke="#1e40af" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M8.5 10.5L12 14l3.5-3.5" stroke="#1e40af" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 17h16" stroke="#1e40af" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </a>
              <div className="text-center leading-4">
                <div className="text-sm font-semibold text-white" style={{wordSpacing: '0.1em'}}>PRODUCT FLYER XBATTERY</div>
                <div className="text-sm font-semibold text-white">{flyerProductName}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </>
  );
}
