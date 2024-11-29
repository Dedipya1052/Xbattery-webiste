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
          content="Advanced Battery Management System by XBattery"
        />
      </Head>

      {/* <div className="bg-[#1f1f1f] text-white w-full 2xl:h-[40vh]">
        <div className="mx-auto w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[1500px] py-16 px-6 flex flex-col lg:flex-row items-center justify-center">
          
          <div className="text-center lg:text-left p-4 mb-6 lg:mb-0">
            <h1
              className={`text-4xl md:text-5xl font-bold  mb-6 ${classes.color} leading-[45px]`}
            >
              Introducing BharatBMS
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0  text-[#e9e9e9] pl-[1.5px] ">
              India's first scalable Battery Management System.
            </p>
          </div>

         
          <div className="md:w-1/2 flex justify-center">
            <Image
              height={600}
              width={600}
              src="/images/bharatbms/hero.png" 
              alt="Hero Image"
              className="rounded-lg shadow-lg w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div> */}

      <div className="bg-[#1f1f1f] text-white w-full  2xl:h-[37vh]">
        <div className="mx-auto w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[1500px] py-8 pb-[3rem]  md:py-16 px-6 flex flex-col lg:flex-row items-center justify-center h-full">
          <div className="text-center lg:text-left p-4 mb-6 lg:mb-0">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 ${classes.color} leading-[45px] 2xl:text-5xl md:leading-[60px] xl:leading-[60px] 2xl:leading-[70px]`}
            >
              Introducing BharatBMS
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 text-[#e9e9e9] pl-[1.5px] 2xl:text-2xl">
              India's first scalable Battery Management System.
            </p>
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
          {/* <AnimatedDiv>
      <p className="text-lg md:text-xl mx-auto leading-relaxed mb-12 text-left w-[95%] lg:w-[80%]">
        BharatBMS is India's first universal Battery Management System for energy storage and EVs that scales from home to industrial applications. Imagine a flexible system that works just as efficiently for a 5kWh home backup as it does for megawatt-scale battery packs.
      </p>
    </AnimatedDiv> */}

          <AnimatedDiv>
            <div className="w-[95%] lg:w-[80%] mx-auto text-center md:text-center">
              <p className="text-lg md:text-xl leading-relaxed mb-2">
                BharatBMS is India's first universal Battery Management System (BMS architecture)
                for energy storage and EVs that scales effortlessly from home
                applications to industrial installations. It's as effective in a
                5kWh home backup system as it is in megawatt-scale battery
                packs.
              </p>
            </div>
          </AnimatedDiv>

          {/* <AnimatedDiv>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-[90%] md:w-[80%] mx-auto mb-10">
              {[
                "/images/bharatbms/1.png",
                "/images/bharatbms/2.png",
                "/images/bharatbms/3.png",
              ].map((src, index) => (
                <div
                  key={index}
                  className="flex justify-center bg-[#1c1c1c] rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={src}
                    alt={`Battery System Image ${index + 1}`}
                    className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    width={400}
                    height={400}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </AnimatedDiv> */}

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
                <AnimatedDiv>
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-[#1c1c1c] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
                  >
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

       

          {/* <div className="mb-16 w-[95%] mx-auto">
           
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center relative">
              <div
                className={`${classes.color} text-2xl font-bold text-center md:text-left w-full md:w-[45%]`}
              >
                Bharat BMS
              </div>

              <div className="w-full md:w-[42%] flex flex-row gap-[2rem] md:gap-[1rem] justify-evenly relative">
               
                <div
                  className="absolute bottom-[-15px] h-[2px] bg-white transition-all duration-300 ease-in-out"
                  style={{
                    width: `${100 / tabs.length}%`, // Dynamically adjust width based on number of tabs
                    left: `${(tabs.indexOf(activeTab) * 100) / tabs.length}%`, // Dynamically adjust the position based on active tab index
                  }}
                />
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    onClick={() => handleTabChange(tab)}
                    className={`cursor-pointer flex-1 text-center relative ${
                      activeTab === tab ? "text-white" : "text-[#b5b5b5]"
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>
            </div>

           
            <div className="py-9 px-6 rounded-lg">
             
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto mt-[1rem]">
                {tabContent[activeTab].map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-[#1c1c1c] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    
                    <IconWithGradient size={25} className="mb-4">
                      {feature.icon}
                    </IconWithGradient>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

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
              <section className="bg-[#1c1c1c] rounded-lg p-8 mb-8 w-[95%] lg:w-[80%] mx-auto">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-[90%] md:w-[80%] mx-auto">
              {[
                "/images/bharatbms/1.png",
                "/images/bharatbms/2.png",
                "/images/bharatbms/3.png",
              ].map((src, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={src}
                    alt={`Battery System Image ${index + 1}`}
                    className="rounded-lg shadow-lg"
                    width={400}
                    height={400}
                    style={{ objectFit: "cover", height: "180px" }}
                  />
                </div>
              ))}
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </div>
  );
};

export default BharatBMS;
