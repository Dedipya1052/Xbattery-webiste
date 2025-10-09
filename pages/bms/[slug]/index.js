import React, { useEffect } from "react";
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
  FaCog, FaWifi, FaServer, FaHome, FaTruck, FaCubes, FaBatteryEmpty, FaBatteryThreeQuarters
} from "react-icons/fa";
import FactoryIcon from "@/components/Icons/FactoryIcon";
 
import classes from "../../bharat-bms/styles.module.css";

// BMS Products array for navigation
const BMS_PRODUCTS = [
  {
    slug: "telecom-bms",
    title: "Xbattery BharatBMS-ESS-48V",
      link: "/bms/BharatBMS-ESS-48V"
  },
  {
    slug: "lv-bms", 
    title: "Xbattery BharatBMS-ESS-72V",
      link: "/bms/BharatBMS-ESS-72V"
  },
  {
    slug: "lv-bms-110v", 
    title: "Xbattery BharatBMS-ESS-110V",
      link: "/bms/BharatBMS-ESS-110V"
  },
  {
    slug: "ev-bms",
    title: "Xbattery BharatBMS-EV-400V", 
      link: "/bms/BharatBMS-EV-400V"
  },
  {
    slug: "ev-bms-110v",
    title: "Xbattery BharatBMS-EV-110V", 
      link: "/bms/BharatBMS-EV-110V"
  },
  {
    slug: "ev-bms-500v",
    title: "Xbattery BharatBMS-EV-500V", 
      link: "/bms/BharatBMS-EV-500V"
  },
  {
    slug: "ev-bms-800v",
    title: "Xbattery BharatBMS-EV-800V", 
      link: "/bms/BharatBMS-EV-800V"
  }
];

// Function to find the index of the current BMS product
const findBMSIndex = (slug) => {
  return BMS_PRODUCTS.findIndex((product) => product.slug === slug);
};

const CONTENT = {
  "telecom-bms": {
    title: "Xbattery BharatBMS-ESS-48V",
    description:
      "The XB-X 16S is a versatile 48V BMS designed for modular energy storage systems with support for both LFP and NMC chemistries across 13-17 series configurations. Its stackable architecture and 100A continuous current handling make it ideal for scalable residential and commercial energy storage applications.",
    imageAlt: "EV-BMS Image",
    image: "/images/bms_offerings/ess-48v.png",
  },
  "lv-bms": {
    title: "Xbattery BharatBMS-ESS-72V",
    description:
      "The XB-X 32S is a robust low-voltage energy storage system BMS operating at 110V nominal with LFP chemistry support for 32-36 series configurations.",
    imageAlt: "Telecom BMS Image",
    image: "/images/bms_offerings/ess-72v.png",
  },
  "lv-bms-110v": {
    title: "Xbattery BharatBMS-ESS-110V",
    description:
      "The XB-X 32S is a robust low-voltage energy storage system BMS operating at 110V nominal with LFP chemistry support for 32-36 series configurations.",
    imageAlt: "LV-BMS Image",
    image: "/images/bms_offerings/ess2-110v.png",
  },
  "ev-bms": {
    title: "Xbattery BharatBMS-EV-400V",
    description:
      "The XB-X 136S is a high-performance 435V BMS specifically engineered for electric vehicles including cars, trucks, and buses with 136-series LFP cell configurations. Built to automotive standards with ISO 26262 ASIL-C compliance, it supports up to 600A peak discharge currents and features advanced diagnostics for demanding EV applications.",
    imageAlt: "LV-BMS Image",
    image: "/images/bms_offerings/ev-400v.png",
  },
  "ev-bms-110v": {
    title: "Xbattery BharatBMS-EV-110V",
    description:
      "Advanced 110V BMS for electric passenger vehicles with enhanced safety protocols and intelligent thermal management systems. Designed for high-performance electric vehicles with robust protection systems and advanced diagnostics.",
    imageAlt: "EV-BMS Image",
    image: "/images/bms_offerings/ev-110v.png",
  },
  "ev-bms-500v": {
    title: "Xbattery BharatBMS-EV-500V",
    description:
      "High-performance 500V BMS specifically engineered for electric vehicles including cars, trucks, and buses with 125-156 series LFP cell configurations. Built to automotive standards with ISO 26262 ASIL-C compliance, it supports up to 600A peak discharge currents and features advanced diagnostics for demanding EV applications.",
    imageAlt: "EV-BMS Image",
    image: "/images/bms_offerings/ev-500v.png",
  },
  "ev-bms-800v": {
    title: "Xbattery BharatBMS-EV-800V",
    description:
      "Ultra-high-performance 800V BMS specifically engineered for electric vehicles including cars, trucks, and buses with 188-200 series LFP cell configurations. Built to automotive standards with ISO 26262 ASIL-C compliance, it supports up to 600A peak discharge currents and features advanced diagnostics for demanding EV applications.",
    imageAlt: "EV-BMS Image",
    image: "/images/bms_offerings/ev-800v.png",
  },
};

export default function BmsOfferingPage({ slug }) {
  const router = useRouter();
  // Ensure home page scrolls to BMS offerings when navigating back
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('scrollToOfferings', '1');
      } catch {}
    }
  }, []);
  // Backward-compatible slug aliases
  const SLUG_ALIAS = {
    "BharatBMS-ESS-48V": "telecom-bms",
    "BharatBMS-ESS-72V": "lv-bms",
    "BharatBMS-ESS-110V": "lv-bms-110v",
    "BharatBMS-EV-400V": "ev-bms",
    "BharatBMS-EV-110V": "ev-bms-110v",
    "BharatBMS-EV-500V": "ev-bms-500v",
    "BharatBMS-EV-800V": "ev-bms-800v",
  };

  const normalizedSlug = CONTENT[slug] ? slug : (SLUG_ALIAS[slug] || slug);
  const data = CONTENT[normalizedSlug] || CONTENT["telecom-bms"];

  // Navigation logic
  const currentBMSIndex = findBMSIndex(normalizedSlug);
  const prevBMS = currentBMSIndex > 0 ? BMS_PRODUCTS[currentBMSIndex - 1] : null;
  const nextBMS = currentBMSIndex < BMS_PRODUCTS.length - 1 ? BMS_PRODUCTS[currentBMSIndex + 1] : null;
  

  // Icon sets per BMS type for Features
  const featureIconSets = {
    "telecom-bms": [
      FaBatteryFull,        // Cell Monitoring & Balancing
      FaWifi,               // Communication & Control
      FaShieldAlt,          // Safety Features
      FaThermometerHalf,    // Thermal Management
      FaServer,             // Scalability
      FaChartLine           // Diagnostics and Monitoring
    ],
    "lv-bms": [
      FaBatteryThreeQuarters, // Cell Monitoring & Balancing
      FaNetworkWired,         // Communication & Control
      FaShieldAlt,            // Safety Features
      FaThermometerHalf,      // Thermal Management
      FactoryIcon,            // Scalability (custom detailed factory icon)
      FaChartBar              // Diagnostics and Monitoring
    ],
    "lv-bms-110v": [
      FaBatteryThreeQuarters, // same as lv-bms
      FaNetworkWired,
      FaShieldAlt,
      FaThermometerHalf,
      FactoryIcon,
      FaChartBar
    ],
    "ev-bms": [
      FaBatteryEmpty,         // Cell Monitoring & Balancing
      FaCar,                  // Communication & Control
      FaShieldAlt,            // Safety Features
      FaThermometerHalf,      // Thermal Management
      FaTruck,                // Scalability
      FaChartPie              // Diagnostics and Monitoring
    ],
    "ev-bms-110v": [
      FaBatteryEmpty,         // Cell Monitoring & Balancing
      FaCar,                  // Communication & Control
      FaShieldAlt,            // Safety Features
      FaThermometerHalf,      // Thermal Management
      FaTruck,                // Scalability
      FaChartPie              // Diagnostics and Monitoring
    ],
    "ev-bms-500v": [
      FaBatteryEmpty,         // Cell Monitoring & Balancing
      FaCar,                  // Communication & Control
      FaShieldAlt,            // Safety Features
      FaThermometerHalf,      // Thermal Management
      FaTruck,                // Scalability
      FaChartPie              // Diagnostics and Monitoring
    ],
    "ev-bms-800v": [
      FaBatteryEmpty,         // Cell Monitoring & Balancing
      FaCar,                  // Communication & Control
      FaShieldAlt,            // Safety Features
      FaThermometerHalf,      // Thermal Management
      FaTruck,                // Scalability
      FaChartPie              // Diagnostics and Monitoring
    ]
  };

  // Icon sets per BMS type for Software
  const softwareIconSets = {
    "telecom-bms": [FaChartLine, FaCog, FaCode],
    "lv-bms": [FaChartBar, FaCog, FaCode],
    "lv-bms-110v": [FaChartBar, FaCog, FaCode],
    "ev-bms": [FaChartPie, FaCog, FaCode],
    "ev-bms-110v": [FaChartPie, FaCog, FaCode],
    "ev-bms-500v": [FaChartPie, FaCog, FaCode],
    "ev-bms-800v": [FaChartPie, FaCog, FaCode]
  };

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
              // Push a state so that first Back goes to home cards
              var pushed = false;
              try { if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } } catch(e) {}
              try { sessionStorage.setItem('scrollToOfferings','1'); } catch(e) {}
              function ensureState(){
                if (!pushed) {
                  try {
                    // Ensure the previous entry is the home cards anchor
                    var current = window.location.href;
                    history.replaceState({}, document.title, '/#bms-offerings');
                    history.pushState({fromBms:true}, document.title, current);
                  } catch(e) {}
                  pushed = true;
                }
              }
              ensureState();
              window.addEventListener('popstate', function(){
                // Force navigate to the Home "OUR BMS OFFERINGS" section
                window.location.assign('/#bms-offerings');
              });
            })();
          `,
        }}
      />
      <div className={classes.head1}>
      <div className="bg-[#1c1c1c] text-white w-full relative">
        {/* Page header icon badge (top-right) */}
        <div className="absolute top-5 right-4 w-11 h-11 rounded-xl bg-[#0c0c0c] border border-white/20 flex items-center justify-center text-white overflow-visible z-50">
          <CustomTooltip text={normalizedSlug.startsWith('ev-bms') ? 'Electric vehicle' : 'Energy storage'}>
            {normalizedSlug === 'telecom-bms' && (
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <Image src="/images/icons/download (29)-Photoroom.png" alt="BMS icon" width={42} height={42} className="object-cover scale-[1.3]" />
              </div>
            )}
            {normalizedSlug === 'lv-bms' && (
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <Image src="/images/icons/download (29).png" alt="BMS icon" width={42} height={42} className="object-cover scale-[1.3]" />
              </div>
            )}
            {normalizedSlug === 'lv-bms-110v' && (
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <Image src="/images/icons/download (29).png" alt="BMS icon" width={42} height={42} className="object-cover scale-[1.3]" />
              </div>
            )}
            {normalizedSlug === 'ev-bms' && (
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <FaCar size={24} />
              </div>
            )}
            {normalizedSlug === 'ev-bms-110v' && (
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <FaCar size={24} />
              </div>
            )}
            {normalizedSlug === 'ev-bms-500v' && (
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <FaCar size={24} />
              </div>
            )}
            {normalizedSlug === 'ev-bms-800v' && (
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <FaCar size={24} />
              </div>
            )}
          </CustomTooltip>
        </div>
        <div className="mx-auto w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[1500px] py-8 md:py-16 px-3 md:px-6 flex flex-col lg:flex-row items-center justify-center h-full min-h-[460px]">
          <div className="text-center lg:text-left p-2 md:p-4 mb-6 lg:mb-0 w-full">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${classes.color} leading-[35px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] lg:whitespace-nowrap`}>
              {data.title}
            </h1>
            <h2 className="text-sm sm:text-base md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 text-[#e9e9e9] px-1 md:pl-[1.5px]">
              {data.description}
            </h2>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[100%] max-w-2xl rounded-lg bg-[#1c1c1c] h=[360px] md:h-[480px] overflow-hidden flex items-center justify-center">
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
            {(function() {
              const specMap = {
                "telecom-bms": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaCubes />, title: "Cell Count Range", description: "Up to 28S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "48V" }
                ],
                "lv-bms": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaCubes />, title: "Cell Count Range", description: "Up to 28S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "72V" }
                ],
                "lv-bms-110v": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaCubes />, title: "Cell Count Range", description: "Up to 42S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "110V" }
                ],
                "ev-bms": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaCubes />, title: "Cell Count Range", description: "100S to 125S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "400V" }
                ],
                "ev-bms-110v": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaCubes />, title: "Cell Count Range", description: "32S to 60S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "110V" }
                ],
                "ev-bms-500v": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaCubes />, title: "Cell Count Range", description: "125S to 156S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "500V" }
                ],
                "ev-bms-800v": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaCubes />, title: "Cell Count Range", description: "188S to 250S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "800V" }
                ]
              };
              const arr = specMap[normalizedSlug] || specMap["telecom-bms"]; 
              return arr;
            })().map((feature, index) => (
              <AnimatedDiv key={index}>
                <div className="flex w-full rounded-2xl overflow-hidden bg-[#1b1b1b] min-h-[120px]">
                  <div className="w-[96px] md:w-[110px] shrink-0 bg-[#141414] flex items-center justify-center">
                    <IconWithGradient size={32}>
                      {feature.icon}
                    </IconWithGradient>
                  </div>
                  <div className="flex-1 min-h-[120px] px-0 py-5 md:px-0 md:py-6 flex flex-col items-center justify-center text-center">
                    <h3 className="text-sm md:text-base font-semibold text-white whitespace-nowrap">{feature.title}</h3>
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
                <div className="flex flex-col items-center text-center bg-[#1c1c1c] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <IconWithGradient size={28}>
                    {React.createElement(featureIconSets[normalizedSlug][index])}
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
          <div className="w-full flex justify-end mt-2">
            <div className="flex flex-col items-center gap-2 mr-2">
              <a
                href="/api/download-brochure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View brochure PDF"
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition"
              >
                {/* Custom download icon with dual-color gradient stroke; button size unchanged */}
                <svg
                  width="28"
                  height="28"
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

        {/* Navigation Buttons */}
        <div
          className={`flex ${(prevBMS && nextBMS) ? "justify-between" : "justify-center"} mt-[6rem] mb-[4rem] flex-wrap gap-[1.2rem] sm:gap-0`}
        >
          {prevBMS && (
            <Link href={prevBMS.link}>
              <button
                className="text-white border border-white rounded-md px-6 py-3 text-sm font-medium hover:text-transparent transition-all duration-300"
                style={{
                  backgroundColor: '#151a1d',
                  backgroundImage: 'linear-gradient(90deg, #25f1fc, #5bb2ff, #b15dfb)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'white',
                  borderColor: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                }}
              >
                Previous: {prevBMS.title}
              </button>
            </Link>
          )}
          {nextBMS && (
            <Link href={nextBMS.link}>
              <button
                className="text-white border border-white rounded-md px-6 py-3 text-sm font-medium hover:text-transparent transition-all duration-300"
                style={{
                  backgroundColor: '#151a1d',
                  backgroundImage: 'linear-gradient(90deg, #25f1fc, #5bb2ff, #b15dfb)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'white',
                  borderColor: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'white';
                }}
              >
                Next: {nextBMS.title}
              </button>
            </Link>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params || {};
  return { props: { slug } };
}
                                    