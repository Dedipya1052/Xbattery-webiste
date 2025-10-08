import React, { useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import Head from "next/head";
import AnimatedDiv from "@/components/ui/Animate";
import {
  FaBatteryFull,
  FaMicrochip,
  FaShieldAlt,
  FaThermometerHalf,
  FaExpandArrowsAlt,
  FaChartBar,
  FaBeer,
  FaChartLine,
  FaCode,
  FaCogs,
  FaCar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import IconWithGradient from "@/components/ui/IconGradient";
import BMSToggle from "@/components/ui/BMSToggle";

const BharatBMS = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
  const [activeTab, setActiveTab] = useState("Features");
  
  // BMS Toggle state
  const [bmsToggle, setBmsToggle] = useState('ENERGY STORAGE');
  const [currentEVCard, setCurrentEVCard] = useState(0); // Carousel scroll position

  const evCards = [
    { id: '400V', title: 'Xbattery BharatBMS-EV-400V', link: '/bms/BharatBMS-EV-400V' },
    { id: '110V', title: 'Xbattery BharatBMS-EV-110V', link: '/bms/BharatBMS-EV-110V' },
    { id: '500V', title: 'Xbattery BharatBMS-EV-500V', link: '/bms/BharatBMS-EV-500V' },
    { id: '800V', title: 'Xbattery BharatBMS-EV-800V', link: '/bms/BharatBMS-EV-800V' }
  ];

  const goToPreviousCard = () => {
    setCurrentEVCard((prev) => Math.max(0, prev - 1));
  };

  const goToNextCard = () => {
    setCurrentEVCard((prev) => Math.min(evCards.length - 3, prev + 1));
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const tabs = ["Features", "Software", "Diagnostics"];

  const tabContent = {
    Features: [
      {
        icon: <FaBatteryFull />,
        title: "Cell Monitoring & Balancing",
        description:
          "Supports up to 18 series cells with passive balancing for equalization. Voltage accuracy: ±2mV.",
      },
      {
        icon: <FaMicrochip />,
        title: "Communication & Control",
        description:
          "CAN FD, UART, SPI, and Ethernet for real-time processing and remote monitoring.",
      },
      {
        icon: <FaShieldAlt />,
        title: "Safety Features",
        description:
          "ISO 26262 compliant protection for voltage, current, and temperature with fault diagnostics.",
      },
      {
        icon: <FaThermometerHalf />,
        title: "Thermal Management",
        description:
          "Real-time temperature sensing and thermal runaway detection for active cooling control.",
      },
      {
        icon: <FaExpandArrowsAlt />,
        title: "Scalability",
        description:
          "Modular architecture supports series and parallel setups for larger energy storage needs.",
      },
    ],
    Software: [
      {
        icon: <FaChartLine />,
        title: "SOC/SOH Estimation",
        description:
          "Accurate algorithms for State-of-Charge and State-of-Health calculation, ensuring reliable battery status reporting.",
      },
      {
        icon: <FaCode />,
        title: "Software Framework",
        description:
          "Optimized in C for high efficiency and real-time performance, suitable for demanding applications.",
      },
      {
        icon: <FaCogs />,
        title: "Customizable API",
        description:
          "Open API for seamless integration and tailoring system behavior to specific applications.",
      },
    ],
    Diagnostics: [
      {
        icon: <FaChartBar />,
        title: "Measurement Parameters",
        description:
          "Voltage (2V–4.2V per cell), Pack Voltage (up to 60V), Current (±500A), Temperature (-40°C to 85°C).",
      },
      {
        icon: <FaCogs />,
        title: "Data Visualization",
        description:
          "Real-time monitoring via TPL/CAN interface with lifecycle analytics for effective battery management.",
      },
    ],
  };
  
  return (
    <div className={classes.head1}>
      <Head>
        <title>
          BharatBMS - India's First Unified Battery Management System |
          Xbattery™
        </title>

        <meta property="og:image" content="/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta property="og:title" content="BharatBMS | Xbattery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xbattery.energy/bharat-bms" />

        <meta
          name="description"
          content="Bharat BMS optimizes LFP battery performance and efficiency, supporting India's power sector with advanced battery management technology."
        />
      </Head>

      <div className="bg-[#1f1f1f] text-white w-full  2xl:h-[37vh]">
        <div className="mx-auto w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[1500px] py-8 pb-[3rem]  md:py-16 px-6 flex flex-col lg:flex-row items-center justify-center h-full">
          <div className="text-center lg:text-left p-4 mb-6 lg:mb-0">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 ${classes.color} leading-[45px] 2xl:text-5xl md:leading-[60px] xl:leading-[60px] 2xl:leading-[70px]`}
            >
              Introducing BharatBMS
            </h1>
            <h2 className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 text-[#e9e9e9] pl-[1.5px] 2xl:text-2xl">
              India's first scalable high-voltage Battery Management System up
              to 800 volts for EVs and energy storage
            </h2>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image
              height={750} // Increased the height
              width={750} // Increased the width
              src="/images/bharatbms/hero.png"
              alt="Hero Image"
              className="rounded-lg shadow-lg w-[100%] max-w-lg object-cover 2xl:w-[80%] 2xl:h-[80%] scale-[1.0] lg:scale-[0.9] opacity-[90%] 2xl:pt-[2rem] 2xl:pb-[2rem]" // Adjusted image size for larger screens
            />
          </div>
        </div>
      </div>

      {/* Existing Content Below Hero Section */}
      <div className={classes.head1}>
        <div className="bg-black text-white pt-8 pb-16 px-6 mx-auto w-[90%] xl:w-[80%] 2xl:w-[1500px]">
          <AnimatedDiv>
            <div className="w-[95%] lg:w-[80%] mx-auto text-center md:text-center">
              <p className="text-lg md:text-xl leading-relaxed mb-2">
                BharatBMS is India's first universal high-voltage Battery
                Management System (BMS architecture) up to 800 volts for EVs and
                energy storage that scales effortlessly from home applications
                to industrial installations and EVs. It's as effective in a 5kWh
                home backup system as it is in megawatt-scale battery packs.
              </p>
            </div>
          </AnimatedDiv>

          {/* OUR BMS OFFERINGS - removed as per request */}

          <div className=" py-9 px-6 rounded-lg mb-1">
            <AnimatedDiv>
              <h2
                className={`text-2xl md:text-3xl font-semibold mb-12 text-center ${classes.color}`}
              >
                Features
              </h2>
            </AnimatedDiv>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
              {[
                {
                  icon: <FaBatteryFull />,
                  title: "Cell Monitoring & Balancing",
                  description:
                    "Supports up to 18 series cells with passive balancing for equalization. Voltage accuracy: ±2mV.",
                },
                {
                  icon: <FaMicrochip />,
                  title: "Communication & Control",
                  description:
                    "CAN FD, UART, SPI, and Ethernet for real-time processing and remote monitoring.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Safety Features",
                  description:
                    "ISO 26262 compliant protection for voltage, current, and temperature with fault diagnostics.",
                },
                {
                  icon: <FaThermometerHalf />,
                  title: "Thermal Management",
                  description:
                    "Real-time temperature sensing and thermal runaway detection for high-temperature control.",
                },
                {
                  icon: <FaExpandArrowsAlt />,
                  title: "Scalability",
                  description:
                    "Modular architecture supports series and parallel setups for larger energy storage needs.",
                },
                {
                  icon: <FaChartBar />,
                  title: "Diagnostics and Monitoring",
                  description:
                    "Real-time data visualization and lifecycle analytics for better battery management.",
                },
              ].map((feature, index) => (
                <AnimatedDiv key={index}>
                  <div className="flex flex-col items-center text-center bg-[#1c1c1c] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                    <IconWithGradient size={25}>
                      {feature.icon}
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

          <div className="py-6 px-6 rounded-lg mb-1">
            <AnimatedDiv>
              <h2
                className={`text-2xl md:text-3xl font-semibold mb-[-0.5rem] text-center ${classes.color}`}
              >
                Software
              </h2>
            </AnimatedDiv>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto py-16">
              {[
                {
                  title: "SOC/SOH Estimation",
                  description:
                    "Accurate algorithms for State-of-Charge and State-of-Health calculation, ensuring reliable battery status reporting.",
                  icon: <FaChartLine />,
                },
                {
                  title: "Software Framework",
                  description:
                    "Optimized in C for high efficiency and real-time performance, suitable for demanding applications.",
                  icon: <FaCode />,
                },
                {
                  title: "Customizable API",
                  description:
                    "Open API for seamless integration and tailoring system behavior to specific applications.",
                  icon: <FaCogs />,
                },
              ].map((feature, index) => (
                <AnimatedDiv key={index}>
                  <div className="flex flex-col items-center text-center bg-gradient-to-b bg-[#1c1c1c] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                    <IconWithGradient size={30}>
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

          {[
            {
              title: "Smart, Simple, Scalable",
              content:
                "Think of it as a building block system. Starting with a home installation? The basic module handles your needs perfectly. Growing to a larger system? Just add expansion boards – the main controller automatically recognizes and adapts to the new capacity. No complicated reconfiguration needed.",
            },
            {
              title: "Built for Indian Conditions",
              content:
                "India's power conditions can be challenging – from voltage fluctuations to complete outages. Our system handles these scenarios smoothly, protecting your batteries while keeping your power flowing. The electronics are designed to handle our climate, from dusty summers to humid monsoons.",
            },
            {
              title: "Made in India",
              content:
                "We are proud to say that every circuit board is manufactured and tested in India, with most components sourced locally. This isn't just about self-reliance – it means faster support and better adaptability to local needs. Our team in Hyderabad can quickly modify the design based on user feedback and local requirements.",
            },
            {
              title: "Partnership with OEMs",
              content:
                "We are excited to announce that we are opening partnerships with OEMs across India. Starting January 2025, we will be working with energy storage and EV manufacturers to integrate BharatBMS into their products. This collaboration will help standardize battery management across the industry while allowing OEMs to focus on their core strengths in battery and system development.",
            },
          ].map((section, index) => (
            <AnimatedDiv key={index}>
              <section className={`bg-[#1c1c1c] rounded-lg p-8 ${index === 3 ? "mb-6" : "mb-8"} w-[98%] lg:w-[80%] mx-auto`}>
                <h2
                  className={`text-xl md:text-2xl font-semibold mb-6 ${classes.color}`}
                >
                  {section.title}
                </h2>
                <p className="leading-relaxed text-gray-300">
                  {section.content}
                </p>
              </section>
            </AnimatedDiv>
          ))}

           {/* OUR BMS OFFERINGS - With Toggle and Both ESS and EV Cards */}
           <div className="mt-6" id="bms-offerings">
             <h3 className={`${classes.color} text-center text-2xl md:text-3xl font-bold mb-6 mt-[6rem]`}>OUR BMS OFFERINGS</h3>
             
             <BMSToggle 
               onToggle={(value) => setBmsToggle(value)}
               initialValue={bmsToggle}
             />
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-[4rem]">
               {/* ESS Products */}
               {bmsToggle === 'ENERGY STORAGE' && (
                 <>
                   <AnimatedDiv>
                     <Link href="/bms/BharatBMS-ESS-48V" className="group focus:outline-none">
                      <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
              
                        <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                          <Image src="/images/telecom_good_looking-Photoroom.png" alt="Xbattery BharatBMS-ESS-48V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.28]" />
                        </div>
                        <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                          <span>Xbattery BharatBMS-ESS-48V</span>
                        </h4>
                        <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                        <p className="text-sm text-[#cfe3ea] mb-4">The XB-X 16S is a versatile 48V BMS designed for modular energy storage systems with support for both LFP and NMC chemistries across 13-17 series configurations.</p>
                        <div className="mt-auto">
                          <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                          <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                            <li>
                              Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span>
                            </li>
                            <li>Cell Count Range: Up to 28S</li>
                            <li>Nominal Pack Voltage: 48V</li>
                          </ul>
                          <div className="mt-3 flex justify-end">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform duration-700 ease-out group-hover:text-[#00e5ff] group-hover:translate-x-2">
                              <path d="M4 12H20" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round"/>
                              <path d="M14 6L20 12L14 18" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="mt-3 border-t border-[#1d2a30]"></div>
                        </div>
                      </div>
                    </Link>
                   </AnimatedDiv>

                   <AnimatedDiv>
                     <Link href="/bms/BharatBMS-ESS-72V" className="group focus:outline-none">
                      <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
              
                        <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                          <Image src="/images/lv_good_looking-Photoroom.png" alt="XB-X 32S" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.48]" />
                        </div>
                        <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                          <span>Xbattery BharatBMS-ESS-72V</span>
                        </h4>
                        <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                        <p className="text-sm text-[#cfe3ea] mb-4">The XB-X 32S is a robust low-voltage energy storage system BMS operating at 110V nominal with LFP chemistry support for 32-36 series configurations.</p>
                        <div className="mt-auto">
                          <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                          <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                            <li>
                              Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span>
                            </li>
                            <li>Cell Count Range: Up to 28S</li>
                            <li>Nominal Pack Voltage: 72V</li>
                          </ul>
                          <div className="mt-3 flex justify-end">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform duration-700 ease-out group-hover:text-[#00e5ff] group-hover:translate-x-2">
                              <path d="M4 12H20" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round"/>
                              <path d="M14 6L20 12L14 18" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="mt-3 border-t border-[#1d2a30]"></div>
                        </div>
                      </div>
                    </Link>
                   </AnimatedDiv>

                   <AnimatedDiv>
                     <Link href="/bms/BharatBMS-ESS-110V" className="group focus:outline-none">
                      <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
              
                        <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                          <Image src="/images/lv_good_looking-Photoroom.png" alt="Xbattery BharatBMS-ESS-110V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.28]" />
                        </div>
                        <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                          <span>Xbattery BharatBMS-ESS-110V</span>
                        </h4>
                        <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                        <p className="text-sm text-[#cfe3ea] mb-4">The XB-X 32S is a robust low-voltage energy storage system BMS operating at 110V nominal with LFP chemistry support for 32-36 series configurations.</p>
                        <div className="mt-auto">
                          <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                          <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                            <li>
                              Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span>
                            </li>
                            <li>Cell Count Range: Up to 42S</li>
                            <li>Nominal Pack Voltage: 110V</li>
                          </ul>
                          <div className="mt-3 flex justify-end">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform duration-700 ease-out group-hover:text-[#00e5ff] group-hover:translate-x-2">
                              <path d="M4 12H20" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round"/>
                              <path d="M14 6L20 12L14 18" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="mt-3 border-t border-[#1d2a30]"></div>
                        </div>
                      </div>
                    </Link>
                   </AnimatedDiv>
                 </>
               )}

               {/* EV Products */}
               {bmsToggle === 'ELECTRIC VEHICLES' && (
                 <>
                   {/* Carousel Navigation and Cards Container */}
                   <div className="relative col-span-1 md:col-span-2 lg:col-span-3">
                     
                     {/* Left Arrow */}
                     <button
                       onClick={goToPreviousCard}
                       disabled={currentEVCard === 0}
                       aria-label="Previous card"
                       className={`absolute left-[-70px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-[#00e5ff] flex items-center justify-center transition-all duration-300 ${
                         currentEVCard === 0 
                           ? 'opacity-30 cursor-not-allowed' 
                           : 'hover:bg-[#00e5ff] hover:bg-opacity-10 cursor-pointer'
                       }`}
                     >
                       <FaChevronLeft className="text-white text-xl" />
                     </button>

                     {/* Container to show only 3 cards at a time */}
                     <div className="relative overflow-hidden">
                       {/* Cards Container with Overflow Hidden */}
                       <div className="overflow-hidden">
                         <div className="flex flex-nowrap transition-transform duration-500 ease-in-out gap-6" style={{ transform: `translateX(-${currentEVCard * 33.33}%)` }}>
                         {/* Xbattery BharatBMS-EV-400V */}
                         <AnimatedDiv className="flex-shrink-0" style={{ width: 'calc((100% / 3) - 1.5rem)' }}>
                           <Link href="/bms/BharatBMS-EV-400V" className="group focus:outline-none">
                             <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
                               <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                                 <Image src="/images/ev_good_looking-Photoroom.png" alt="Xbattery BharatBMS-EV-400V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.18]" />
                               </div>
                               <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                                 <span>Xbattery BharatBMS-EV-400V</span>
                               </h4>
                               <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                               <p className="text-sm text-[#cfe3ea] mb-4">The XB-X 136S is a high-performance 435V BMS specifically engineered for electric vehicles including cars, trucks, and buses with 136-series LFP cell configurations.</p>
                               <div className="mt-auto">
                                 <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                                 <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                                   <li>Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span></li>
                                   <li>Cell Count Range: 100S to 125S</li>
                                   <li>Nominal Pack Voltage: 400V</li>
                                 </ul>
                                 <div className="mt-3 flex justify-end">
                                   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform duration-700 ease-out group-hover:text-[#00e5ff] group-hover:translate-x-2">
                                     <path d="M4 12H20" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round"/>
                                     <path d="M14 6L20 12L14 18" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                   </svg>
                                 </div>
                                 <div className="mt-3 border-t border-[#1d2a30]"></div>
                               </div>
                             </div>
                           </Link>
                         </AnimatedDiv>

                         {/* Xbattery BharatBMS-EV-110V */}
                         <AnimatedDiv className="flex-shrink-0" style={{ width: 'calc((100% / 3) - 1.5rem)' }}>
                           <Link href="/bms/BharatBMS-EV-110V" className="group focus:outline-none">
                             <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
                               <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                                 <Image src="/images/ev_good_looking-Photoroom.png" alt="Xbattery BharatBMS-EV-110V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.18]" />
                               </div>
                               <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                                 <span>Xbattery BharatBMS-EV-110V</span>
                               </h4>
                               <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                               <p className="text-sm text-[#cfe3ea] mb-4">Advanced 400V BMS for electric passenger vehicles with enhanced safety protocols and intelligent thermal management systems.</p>
                               <div className="mt-auto">
                                 <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                                 <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                                   <li>Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span></li>
                                   <li>Cell Count Range: 32S to 60S</li>
                                   <li>Nominal Pack Voltage: 110V</li>
                                 </ul>
                                 <div className="mt-3 flex justify-end">
                                   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform duration-700 ease-out group-hover:text-[#00e5ff] group-hover:translate-x-2">
                                     <path d="M4 12H20" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round"/>
                                     <path d="M14 6L20 12L14 18" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                   </svg>
                                 </div>
                                 <div className="mt-3 border-t border-[#1d2a30]"></div>
                               </div>
                             </div>
                           </Link>
                         </AnimatedDiv>

                         {/* Xbattery BharatBMS-EV-500V */}
                         <AnimatedDiv className="flex-shrink-0" style={{ width: 'calc((100% / 3) - 1.5rem)' }}>
                           <Link href="/bms/BharatBMS-EV-500V" className="group focus:outline-none">
                             <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
                               <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                                 <Image src="/images/ev_good_looking-Photoroom.png" alt="Xbattery BharatBMS-EV-500V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.18]" />
                               </div>
                               <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                                 <span>Xbattery BharatBMS-EV-500V</span>
                               </h4>
                               <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                               <p className="text-sm text-[#cfe3ea] mb-4">High-performance 400V BMS for commercial electric vehicles with robust protection systems and advanced diagnostics.</p>
                               <div className="mt-auto">
                                 <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                                 <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                                   <li>Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span></li>
                                   <li>Cell Count Range: 125S to 156S</li>
                                   <li>Nominal Pack Voltage: 500V</li>
                                 </ul>
                                 <div className="mt-3 flex justify-end">
                                   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform duration-700 ease-out group-hover:text-[#00e5ff] group-hover:translate-x-2">
                                     <path d="M4 12H20" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round"/>
                                     <path d="M14 6L20 12L14 18" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                   </svg>
                                 </div>
                                 <div className="mt-3 border-t border-[#1d2a30]"></div>
                               </div>
                             </div>
                           </Link>
                         </AnimatedDiv>

                         {/* Xbattery BharatBMS-EV-800V */}
                         <AnimatedDiv className="flex-shrink-0" style={{ width: 'calc((100% / 3) - 1.5rem)' }}>
                           <Link href="/bms/BharatBMS-EV-800V" className="group focus:outline-none">
                             <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
                               <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                                 <Image src="/images/ev_good_looking-Photoroom.png" alt="Xbattery BharatBMS-EV-800V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.18]" />
                               </div>
                               <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                                 <span>Xbattery BharatBMS-EV-800V</span>
                               </h4>
                               <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                               <p className="text-sm text-[#cfe3ea] mb-4">Ultra-high voltage 800V BMS engineered for next-generation electric vehicles, delivering advanced diagnostics, robust safety, and high power performance.</p>
                               <div className="mt-auto">
                                 <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                                 <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                                   <li>Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span></li>
                                   <li>Cell Count Range: 188S to 250S</li>
                                   <li>Nominal Pack Voltage: 800V</li>
                                 </ul>
                                 <div className="mt-3 flex justify-end">
                                   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white transition-transform duration-700 ease-out group-hover:text-[#00e5ff] group-hover:translate-x-2">
                                     <path d="M4 12H20" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round"/>
                                     <path d="M14 6L20 12L14 18" stroke="currentColor" strokeOpacity="0.95" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                   </svg>
                                 </div>
                                 <div className="mt-3 border-t border-[#1d2a30]"></div>
                               </div>
                             </div>
                           </Link>
                         </AnimatedDiv>
                         </div>
                       </div>
                     </div>

                     {/* Right Arrow */}
                     <button
                       onClick={goToNextCard}
                       disabled={currentEVCard >= evCards.length - 3}
                       aria-label="Next card"
                       className={`absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-[#00e5ff] flex items-center justify-center transition-all duration-300 ${
                         currentEVCard >= evCards.length - 3
                           ? 'opacity-30 cursor-not-allowed' 
                           : 'hover:bg-[#00e5ff] hover:bg-opacity-10 cursor-pointer'
                       }`}
                     >
                       <FaChevronRight className="text-white text-xl" />
                     </button>
                   </div>
                 </>
               )}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BharatBMS;