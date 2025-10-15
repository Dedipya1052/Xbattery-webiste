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
 
import classes from "../../bharat-bms/styles.module.css";


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
    description: "The XB-X 136S is a high-performance 435V BMS specifically engineered for electric vehicles including cars, trucks, and buses with 136-series LFP cell configurations. Built to automotive standards with ISO 26262 ASIL-C compliance, it supports up to 600A peak discharge currents and features advanced diagnostics for demanding EV applications.",
    imageAlt: "LV-BMS Image",
    image: "/images/bms_offerings/ev-500v.png",
  };

  // Navigation logic - simplified for unified page
  const prevBMS = {
    title: "Xbattery BharatBMS-ESS-110V",
    link: "/bms/BharatBMS-ESS-110V"
  };
  const nextBMS = {
    title: "Xbattery BharatBMS-EV-110V", 
    link: "/bms/BharatBMS-EV-110V"
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
    <React.Fragment>
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
          <CustomTooltip text="Electric vehicle">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
              <FaCar size={24} />
            </div>
          </CustomTooltip>
        </div>
        <div className="mx-auto w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[1500px] py-8 md:py-16 px-3 md:px-6 flex flex-col lg:flex-row items-center justify-center h-full min-h-[460px]">
          <div className="text-center lg:text-left p-2 md:p-4 mb-6 lg:mb-0 w-full ml-4">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${classes.color} leading-[35px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] lg:whitespace-nowrap`}>
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
                  <div className="text-[#00e5ff] text-2xl mb-4">
                    {React.createElement(featureIconSets[index])}
                  </div>
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
        <div className="py-6 px-4 md:px-6 rounded-lg mb-1">
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
                  <IconWithGradient size={34} title="Energy storage">
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
        <section id="our-products" className="py-5 md:py-6 px-4 md:px-6 bg-[#000000]">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedDiv>
              <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center ${classes.color}`}>
                Our Products
              </h2>
            </AnimatedDiv>

            {/* EV 110V Product */}
            <AnimatedDiv>
            <div id="ev-110v" className="scroll-mt-[80px] mb-24 bg-[#1c1c1c] border border-[#333] rounded-2xl p-2.5 md:p-3 shadow-[0_6px_18px_rgba(0,0,0,0.20)] max-w-7xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6">Xbattery BharatBMS-EV-110V</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                {/* Left - Product Image */}
                <div className="flex justify-center">
                  <div className="w-full max-w-lg text-center">
                    <div className="rounded-[22px] border-[6px] border-[#333] p-6 bg-black">
                      <div className="rounded-[14px] border-[1px] border-[#444] bg-[#1c1c1c] overflow-hidden h-[280px] md:h-[340px] flex items-center justify-center">
                    <Image
                      src={productImages[0]}
                      alt="EV 110V BMS Product"
                          width={560}
                          height={340}
                          className="w-full h-full object-contain"
                    />
                  </div>
                    </div>
                    <p className="text-gray-300 mt-4 text-center">
                      The XB-X 32S is a robust low-voltage electric vehicle BMS operating at 110V nominal with LFP chemistry support for 32-36 series configurations.
                    </p>
                </div>
              </div>

                {/* Right - Specifications */}
                <div className="space-y-2.5">
                  {/* Key Specifications */}
                  <div className="bg-[#2a2a2a] p-2 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FaCogs className="text-gray-400 text-lg mr-3" />
                      <h3 className="text-lg font-semibold text-white">Key Specifications</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="bg-[#1a1a1a] p-2.5 rounded-lg flex items-center">
                        <FaCubes className="text-gray-400 text-xl mr-3" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Cell Configuration</h4>
                          <p className="text-gray-300 text-sm">Up to 36S</p>
                          </div>
                          </div>
                      <div className="bg-[#1a1a1a] p-2.5 rounded-lg flex items-center">
                        <FaBolt className="text-gray-400 text-xl mr-3" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Nominal Pack Voltage Range</h4>
                          <p className="text-gray-300 text-sm">110.0V</p>
                        </div>
                        </div>
                      <div className="bg-[#1a1a1a] p-2.5 rounded-lg flex items-center sm:col-start-1 sm:col-end-3 sm:justify-self-center sm:w-1/2">
                        <FaBatteryFull className="text-gray-400 text-xl mr-3" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Battery Capacity Range</h4>
                          <p className="text-gray-300 text-sm">25kWh</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="bg-[#2a2a2a] p-3 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FaIndustry className="text-gray-400 text-lg mr-3" />
                      <h3 className="text-lg font-semibold text-white">Applications</h3>
                    </div>
                    <div className="space-y-2.5">
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – Truck</h4>
                        <p className="text-gray-300 text-sm">Reliable energy for heavy transport.</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – 3 Wheeler</h4>
                        <p className="text-gray-300 text-sm">Optimized range for urban drive.</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – Car</h4>
                        <p className="text-gray-300 text-sm">Efficient power for smart mobility.</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – Bus</h4>
                        <p className="text-gray-300 text-sm">Safe, scalable fleet performance</p>
                      </div>
                    </div>
                  </div>
                    </div>
                      </div>
                      </div>
            </AnimatedDiv>

            {/* EV 400V Product */}
            <AnimatedDiv>
            <div id="ev-400v" className="scroll-mt-[80px] mb-24 bg-[#1c1c1c] border border-[#333] rounded-2xl p-2.5 md:p-3 shadow-[0_6px_18px_rgba(0,0,0,0.20)] max-w-7xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6">Xbattery BharatBMS-EV-400V</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                {/* Left - Product Image */}
                <div className="flex justify-center">
                  <div className="w-full max-w-lg text-center">
                    <div className="rounded-[22px] border-[6px] border-[#333] p-6 bg-black">
                      <div className="rounded-[14px] border-[1px] border-[#444] bg-[#1c1c1c] overflow-hidden h-[280px] md:h-[340px] flex items-center justify-center">
                    <Image
                      src={ev400vImages[0]}
                      alt="EV 400V BMS Product"
                          width={560}
                          height={340}
                          className="w-full h-full object-contain"
                    />
                  </div>
                    </div>
                    <p className="text-gray-300 mt-4 text-center">
                      The XB-X 32S is a robust low-voltage electric vehicle BMS operating at 400V nominal with LFP chemistry support for 32-36 series configurations.
                    </p>
                </div>
              </div>

                {/* Right - Specifications */}
                <div className="space-y-2.5">
                  {/* Key Specifications */}
                  <div className="bg-[#2a2a2a] p-2 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FaCogs className="text-gray-400 text-lg mr-3" />
                      <h3 className="text-lg font-semibold text-white">Key Specifications</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="bg-[#1a1a1a] p-2.5 rounded-lg flex items-center">
                        <FaCubes className="text-gray-400 text-xl mr-3" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Cell Configuration</h4>
                          <p className="text-gray-300 text-sm">Up to 125S</p>
                          </div>
                          </div>
                      <div className="bg-[#1a1a1a] p-2.5 rounded-lg flex items-center">
                        <FaBolt className="text-gray-400 text-xl mr-3" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Nominal Pack Voltage Range</h4>
                          <p className="text-gray-300 text-sm">400.0V</p>
                        </div>
                          </div>
                      <div className="bg-[#1a1a1a] p-2.5 rounded-lg flex items-center sm:col-start-1 sm:col-end-3 sm:justify-self-center sm:w-1/2">
                        <FaBatteryFull className="text-gray-400 text-xl mr-3" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Battery Capacity Range</h4>
                          <p className="text-gray-300 text-sm">80kWh</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="bg-[#2a2a2a] p-3 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FaIndustry className="text-gray-400 text-lg mr-3" />
                      <h3 className="text-lg font-semibold text-white">Applications</h3>
                    </div>
                    <div className="space-y-2.5">
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – Truck</h4>
                        <p className="text-gray-300 text-sm">Reliable energy for heavy transport.</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – 3 Wheeler</h4>
                        <p className="text-gray-300 text-sm">Optimized range for urban drive.</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – Car</h4>
                        <p className="text-gray-300 text-sm">Efficient power for smart mobility.</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – Bus</h4>
                        <p className="text-gray-300 text-sm">Safe, scalable fleet performance</p>
                      </div>
                    </div>
                  </div>
                    </div>
                      </div>
                      </div>
            </AnimatedDiv>

            {/* EV 500V Product */}
            <AnimatedDiv>
            <div id="ev-500v" className="scroll-mt-[80px] mb-24 bg-[#1c1c1c] border border-[#333] rounded-2xl p-2.5 md:p-3 shadow-[0_6px_18px_rgba(0,0,0,0.20)] max-w-7xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6">Xbattery BharatBMS-EV-500V</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                {/* Left - Product Image */}
                <div className="flex justify-center">
                  <div className="w-full max-w-lg text-center">
                    <div className="rounded-[22px] border-[6px] border-[#333] p-6 bg-black">
                      <div className="rounded-[14px] border-[1px] border-[#444] bg-[#1c1c1c] overflow-hidden h-[280px] md:h-[340px] flex items-center justify-center">
                    <Image
                      src={ev500vImages[0]}
                      alt="EV 500V BMS Product"
                          width={560}
                          height={340}
                          className="w-full h-full object-contain"
                    />
                  </div>
                    </div>
                    <p className="text-gray-300 mt-4 text-center">
                      The XB-X 32S is a robust low-voltage electric vehicle BMS operating at 500V nominal with LFP chemistry support for 32-36 series configurations.
                    </p>
                </div>
              </div>

                {/* Right - Specifications */}
                <div className="space-y-2.5">
                  {/* Key Specifications */}
                  <div className="bg-[#2a2a2a] p-2 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FaCogs className="text-gray-400 text-lg mr-3" />
                      <h3 className="text-lg font-semibold text-white">Key Specifications</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="bg-[#1a1a1a] p-2.5 rounded-lg flex items-center">
                        <FaCubes className="text-gray-400 text-xl mr-3" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Cell Configuration</h4>
                          <p className="text-gray-300 text-sm">Up to 186S</p>
                          </div>
                          </div>
                      <div className="bg-[#1a1a1a] p-2.5 rounded-lg flex items-center">
                        <FaBolt className="text-gray-400 text-xl mr-3" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Nominal Pack Voltage Range</h4>
                          <p className="text-gray-300 text-sm">600.0V</p>
                        </div>
                          </div>
                      <div className="bg-[#1a1a1a] p-2.5 rounded-lg flex items-center sm:col-start-1 sm:col-end-3 sm:justify-self-center sm:w-1/2">
                        <FaBatteryFull className="text-gray-400 text-xl mr-3" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">Battery Capacity Range</h4>
                          <p className="text-gray-300 text-sm">120kWh</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="bg-[#2a2a2a] p-3 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FaIndustry className="text-gray-400 text-lg mr-3" />
                      <h3 className="text-lg font-semibold text-white">Applications</h3>
                    </div>
                    <div className="space-y-2.5">
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – Truck</h4>
                        <p className="text-gray-300 text-sm">Reliable energy for heavy transport.</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – 3 Wheeler</h4>
                        <p className="text-gray-300 text-sm">Optimized range for urban drive.</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – Car</h4>
                        <p className="text-gray-300 text-sm">Efficient power for smart mobility.</p>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-white mb-2">EV – Bus</h4>
                        <p className="text-gray-300 text-sm">Safe, scalable fleet performance</p>
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
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition"
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
                <div>PRODUCT FLYER</div>
                <div>XBATTERY BHARATBMS-ESS</div>
              </span>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    </React.Fragment>
  );
}
