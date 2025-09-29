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
} from "react-icons/fa";
import IconWithGradient from "@/components/ui/IconGradient";

const BharatBMS = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
  const [activeTab, setActiveTab] = useState("Features");

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
        <div className="bg-black text-white py-16 px-6 mx-auto w-[90%] xl:w-[80%] 2xl:w-[1500px]">
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

          <AnimatedDiv>
            <div className="py-6 px-6 rounded-lg mb-1">
              <AnimatedDiv>
                <h2 className={`text-2xl md:text-3xl font-semibold mb-[-0.5rem] text-center ${classes.color}`}>OUR BMS OFFERINGS</h2>
              </AnimatedDiv>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mx-auto pt-6 pb-16">
              {/* XB-X 16S */}
              <AnimatedDiv>
                <Link href="/bms/telecom-bms" className="group focus:outline-none">
                  <div className="rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[560px] md:min-h-[600px] lg:min-h-[620px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#1e2a31] hover:outline-none hover:shadow-[0_0_0_0.5px_rgba(0,229,255,0.55)]">
                    <div className="relative w-full h-[240px] md:h-[260px] rounded-xl overflow-hidden mb-4">
                      <Image src="/images/telecom_good_looking-Photoroom.png" alt="XB-X 16S" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.28]" />
                    </div>
                    <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>XB-X 16S</h4>
                    <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                    <p className="text-sm text-[#cfe3ea] mb-4">The XB-X 16S is a versatile 48V BMS designed for modular energy storage systems with support for both LFP and NMC chemistries across 13-17 series configurations.</p>
                    <div className="mt-auto">
                      <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                      <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                        <li>Supported Cell Chemistry: LFP/NMC</li>
                        <li>Cell Count Range: 13S to 17S</li>
                        <li>Max Pack Voltage: ~58.4V</li>
                      </ul>
                      <div className="mt-6 border-t border-[#1d2a30]"></div>
                    </div>
                    {/* Read More button removed to match home page cards */}
                  </div>
                </Link>
              </AnimatedDiv>

              {/* XB-X 36S */}
              <AnimatedDiv>
                <Link href="/bms/lv-bms" className="group focus:outline-none">
                  <div className="rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[560px] md:min-h-[600px] lg:min-h-[620px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#1e2a31] hover:outline-none hover:shadow-[0_0_0_0.5px_rgba(0,229,255,0.55)]">
                    <div className="relative w-full h-[240px] md:h-[260px] rounded-xl overflow-hidden mb-4">
                      <Image src="/images/lv_good_looking-Photoroom.png" alt="XB-X 32S" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.28]" />
                    </div>
                    <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>XB-X 36S</h4>
                    <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                    <p className="text-sm text-[#cfe3ea] mb-4">The XB-X 32S is a robust low-voltage energy storage system BMS operating at 110V nominal with LFP chemistry support for 32-36 series configurations.</p>
                    <div className="mt-auto">
                      <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                      <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                        <li>Supported Cell Chemistry: LFP/NMC</li>
                        <li>Cell Count Range: 32S to 36S</li>
                        <li>Max Pack Voltage: 135V</li>
                      </ul>
                      <div className="mt-6 border-t border-[#1d2a30]"></div>
                    </div>
                    {/* Read More button removed to match home page cards */}
                  </div>
                </Link>
              </AnimatedDiv>

              {/* XB-X 136S */}
              <AnimatedDiv>
                <Link href="/bms/ev-bms" className="group focus:outline-none">
                  <div className="rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[560px] md:min-h-[600px] lg:min-h-[620px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#1e2a31] hover:outline-none hover:shadow-[0_0_0_0.5px_rgba(0,229,255,0.55)]">
                    <div className="relative w-full h-[240px] md:h-[260px] rounded-xl overflow-hidden mb-4">
                      <Image src="/images/ev_good_looking-Photoroom.png" alt="XB-X 136S" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.18]" />
                    </div>
                    <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>XB-X 136S</h4>
                    <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                    <p className="text-sm text-[#cfe3ea] mb-4">The XB-X 136S is a high-performance 435V BMS specifically engineered for electric vehicles including cars, trucks, and buses with 136-series LFP cell configurations.</p>
                    <div className="mt-auto">
                      <div className="text-sm text-[#64efff] tracking-wide mb-2">KEY FEATURES</div>
                      <ul className="text-sm text-[#cfe3ea] list-disc pl-4 space-y-1 marker:text-[#00e5ff]">
                        <li>Supported Cell Chemistry: LFP/NMC</li>
                        <li>Cell Count Range: 136S</li>
                        <li>Max Pack Voltage: 496V</li>
                      </ul>
                      <div className="mt-6 border-t border-[#1d2a30]"></div>
                    </div>
                    {/* Read More button removed to match home page cards */}
                </div>
                </Link>
              </AnimatedDiv>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </div>
  );
};

export default BharatBMS;