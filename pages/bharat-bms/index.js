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
          {/* OUR BMS OFFERINGS - removed as per request */}

          <div className="py-9 px-6 rounded-lg mb-1">
            <AnimatedDiv>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white">
                Features
              </h2>
            </AnimatedDiv>
            
            <AnimatedDiv>
              <div className="w-[95%] lg:w-[80%] mx-auto text-center md:text-center mb-16">
                <p className="text-lg md:text-xl leading-relaxed mb-2">
                Xbattery BharatBMS-ESS is engineered on the BharatBMS architecture: a universal high-voltage Battery Management System that scales from home energy storage to industrial and EV applications, emphasizing reliability, safety, and ease of integration.
                </p>
              </div>
            </AnimatedDiv>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1000px] mx-auto">
               {[
                 {
                   title: "Safety Features",
                   description:
                     "ISO 26262 compliant protection for voltage, current, and temperature with fault diagnostics.",
                 },
                 {
                  title: "Cell Monitoring & Balancing",
                  description:
                    "Supports up to 18 series cells with passive balancing for equalization. Voltage accuracy: ±2mV.",
                },
                {
                   title: "Diagnostics and Monitoring",
                  description:
                     "Real-time data visualization and lifecycle analytics for better battery management.",
                 },
                 {
                  title: "Thermal Management",
                  description:
                    "Real-time temperature sensing and thermal runaway detection for high-temperature control.",
                },
                {
                  title: "Scalability",
                  description:
                    "Modular architecture supports series and parallel setups for larger energy storage needs.",
                },
                {
                   title: "Communication & Control",
                  description:
                     "CAN FD, UART, SPI, and Ethernet for real-time processing and remote monitoring.",
                },
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
                            alt="Safety Features"
                            fill
                            className="object-contain -mt-16"
                          />
                    )}
                    {index === 4 && (
                          <Image
                            src="/images/icons/f15.svg"
                            alt="Cell Monitoring & Balancing"
                            fill
                            className="object-contain -mt-16"
                          />
                    )}
                    {index === 5 && (
                          <Image
                            src="/images/icons/f16.svg"
                            alt="Diagnostics and Monitoring"
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
             <h3 className={`${classes.color} text-center text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 mt-[4rem] md:mt-[6rem]`}>OUR BMS OFFERINGS</h3>
             
             <BMSToggle 
               onToggle={(value) => setBmsToggle(value)}
               initialValue={bmsToggle}
             />
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10 mb-[2rem] md:mb-[4rem] px-4 md:px-0">
               {/* ESS Products */}
               {bmsToggle === 'ENERGY STORAGE' && (
                 <>
                   <AnimatedDiv>
                     <Link href="/bharatbms-ess#ess-48v-white" className="group focus:outline-none">
                      <div className="relative rounded-2xl bg-[#1c1c1c] border border-white/20 p-4 md:p-6 h-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#1c1c1c] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none focus:outline-none hover:border-solid hover:outline-none">
              
                        <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-3 md:mb-4">
                          <Image src="/images/telecom_good_looking-Photoroom.png" alt="Xbattery BharatBMS-ESS-48V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.28]" />
                        </div>
                        <h4 className={`text-base md:text-lg lg:text-xl font-semibold mb-2 text-[#00e5ff] leading-tight`}>
                          <span>Xbattery BharatBMS-ESS-48V</span>
                        </h4>
                        <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-[#00e5ff] rounded-full mb-3 md:mb-4"></div>
                        <p className="text-xs md:text-sm text-[#cfe3ea] mb-3 md:mb-4 leading-relaxed">Xbattery BharatBMS-ESS-48V delivers efficient <br />management for modular energy storage systems, supporting LFP and NMC chemistries upto 16S configurations.</p>
                        <div className="mt-auto">
                          <div className="text-xs md:text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                          <ul className="text-xs md:text-sm text-[#cfe3ea] list-disc pl-3 md:pl-4 space-y-1 marker:text-[#00e5ff]">
                            <li className="leading-relaxed">
                              Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span>
                            </li>
                            <li className="leading-relaxed">Cell Count Range: Up to 16S</li>
                            <li className="leading-relaxed">Nominal Pack Voltage: 51.2V</li>
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
                     <Link href="/bharatbms-ess#ess-72v-white" className="group focus:outline-none">
                      <div className="relative rounded-2xl bg-[#1c1c1c] border border-white/20 p-4 md:p-6 h-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#1c1c1c] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none focus:outline-none hover:border-solid hover:outline-none">
              
                        <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-3 md:mb-4">
                          <Image src="/images/bms_offerings/ess-72v.png" alt="XB-X 32S" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.48]" />
                        </div>
                        <h4 className={`text-base md:text-lg lg:text-xl font-semibold mb-2 text-[#00e5ff] leading-tight`}>
                          <span>Xbattery BharatBMS-ESS-72V</span>
                        </h4>
                        <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-[#00e5ff] rounded-full mb-3 md:mb-4"></div>
                        <p className="text-xs md:text-sm text-[#cfe3ea] mb-3 md:mb-4 leading-relaxed">Xbattery BharatBMS-ESS-72V is engineered for industrial and medium-scale energy storage systems, supporting LFP and NMC chemistries upto 28S configurations.</p>
                        <div className="mt-auto">
                          <div className="text-xs md:text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                          <ul className="text-xs md:text-sm text-[#cfe3ea] list-disc pl-3 md:pl-4 space-y-1 marker:text-[#00e5ff]">
                            <li className="leading-relaxed">
                              Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span>
                            </li>
                            <li className="leading-relaxed">Cell Count Range: Up to 28S</li>
                            <li className="leading-relaxed">Nominal Pack Voltage: 72V</li>
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
                     <Link href="/bharatbms-ess#ess-110v-white" className="group focus:outline-none">
                      <div className="relative rounded-2xl bg-[#1c1c1c] border border-white/20 p-4 md:p-6 h-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#1c1c1c] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none focus:outline-none hover:border-solid hover:outline-none">
              
                        <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-3 md:mb-4">
                          <Image src="/images/bms_offerings/ess2-110v.png" alt="Xbattery BharatBMS-ESS-110V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.28]" />
                        </div>
                        <h4 className={`text-base md:text-lg lg:text-xl font-semibold mb-2 text-[#00e5ff] leading-tight`}>
                          <span>Xbattery BharatBMS-ESS-110V</span>
                        </h4>
                        <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-[#00e5ff] rounded-full mb-3 md:mb-4"></div>
                        <p className="text-xs md:text-sm text-[#cfe3ea] mb-3 md:mb-4 leading-relaxed">Xbattery BharatBMS-ESS-110V is engineered for large-scale energy storage and grid applications, supporting up to 42S configurations.</p>
                        <div className="mt-auto">
                          <div className="text-xs md:text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                          <ul className="text-xs md:text-sm text-[#cfe3ea] list-disc pl-3 md:pl-4 space-y-1 marker:text-[#00e5ff]">
                            <li className="leading-relaxed">
                              Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span>
                            </li>
                            <li className="leading-relaxed">Cell Count Range: Up to 42S</li>
                            <li className="leading-relaxed">Nominal Pack Voltage: 110V</li>
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
                   {/* Xbattery BharatBMS-EV-110V */}
                   <AnimatedDiv>
                     <Link href="/bharatbms-ev#ev-110v-white" className="group focus:outline-none">
                       <div className="relative rounded-2xl bg-[#1c1c1c] border border-white/20 p-4 md:p-6 h-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#1c1c1c] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none focus:outline-none hover:border-solid hover:outline-none">
                         <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-3 md:mb-4">
                           <Image src="/images/bms_offerings/ev-110v.png" alt="Xbattery BharatBMS-EV-110V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.18]" />
                         </div>
                         <h4 className={`text-base md:text-lg lg:text-xl font-semibold mb-2 text-[#00e5ff] leading-tight`}>
                           <span>Xbattery BharatBMS-EV-110V</span>
                         </h4>
                         <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-[#00e5ff] rounded-full mb-3 md:mb-4"></div>
                         <p className="text-xs md:text-sm text-[#cfe3ea] mb-3 md:mb-4 leading-relaxed">BharatBMS-EV-110V is Optimized for<br /><span className="whitespace-nowrap">e-rickshaws,</span> autos, and tempos with up to 80S configurations and automotive-grade safety compliance.</p>
                         <div className="mt-auto">
                           <div className="text-xs md:text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                           <ul className="text-xs md:text-sm text-[#cfe3ea] list-disc pl-3 md:pl-4 space-y-1 marker:text-[#00e5ff]">
                             <li className="leading-relaxed">Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span></li>
                             <li className="leading-relaxed">Cell Count Range: 32S to 60S</li>
                             <li className="leading-relaxed">Nominal Pack Voltage: 110V</li>
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

                   {/* Xbattery BharatBMS-EV-400V */}
                   <AnimatedDiv>
                     <Link href="/bharatbms-ev#ev-400v-white" className="group focus:outline-none">
                       <div className="relative rounded-2xl bg-[#1c1c1c] border border-white/20 p-4 md:p-6 h-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#1c1c1c] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none focus:outline-none hover:border-solid hover:outline-none">
                         <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-3 md:mb-4">
                           <Image src="/images/bms_offerings/ev-400v.png" alt="Xbattery BharatBMS-EV-400V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.18]" />
                         </div>
                         <h4 className={`text-base md:text-lg lg:text-xl font-semibold mb-2 text-[#00e5ff] leading-tight`}>
                           <span>Xbattery BharatBMS-EV-400V</span>
                         </h4>
                         <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-[#00e5ff] rounded-full mb-3 md:mb-4"></div>
                         <p className="text-xs md:text-sm text-[#cfe3ea] mb-3 md:mb-4 leading-relaxed">BharatBMS-EV-400V is Designed for passenger cars with up to 120S configurations and advanced CAN FD communication protocols.</p>
                         <div className="mt-auto">
                           <div className="text-xs md:text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                           <ul className="text-xs md:text-sm text-[#cfe3ea] list-disc pl-3 md:pl-4 space-y-1 marker:text-[#00e5ff]">
                             <li className="leading-relaxed">Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span></li>
                             <li className="leading-relaxed">Cell Count Range: 100S to 125S</li>
                             <li className="leading-relaxed">Nominal Pack Voltage: 400V</li>
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

                   {/* Xbattery BharatBMS-EV-600V */}
                   <AnimatedDiv>
                     <Link href="/bharatbms-ev#ev-600v-white" className="group focus:outline-none">
                       <div className="relative rounded-2xl bg-[#1c1c1c] border border-white/20 p-4 md:p-6 h-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#1c1c1c] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none focus:outline-none hover:border-solid hover:outline-none">
                         <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-3 md:mb-4">
                           <Image src="/images/bms_offerings/ev-500v.png" alt="Xbattery BharatBMS-EV-500V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.18]" />
                         </div>
                         <h4 className={`text-base md:text-lg lg:text-xl font-semibold mb-2 text-[#00e5ff] leading-tight`}>
                           <span>Xbattery BharatBMS-EV-600V</span>
                         </h4>
                         <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-[#00e5ff] rounded-full mb-3 md:mb-4"></div>
                         <p className="text-xs md:text-sm text-[#cfe3ea] mb-3 md:mb-4 leading-relaxed">BharatBMS-EV-600V is Built for buses and heavy commercial vehicles supporting up to 180S configurations with robust current handling.</p>
                         <div className="mt-auto">
                           <div className="text-xs md:text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                           <ul className="text-xs md:text-sm text-[#cfe3ea] list-disc pl-3 md:pl-4 space-y-1 marker:text-[#00e5ff]">
                             <li className="leading-relaxed">Supported Cell Chemistry: <span className="font-semibold">LFP/NMC</span></li>
                             <li className="leading-relaxed">Cell Count Range: 125S to 156S</li>
                             <li className="leading-relaxed">Nominal Pack Voltage: 500V</li>
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
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BharatBMS;