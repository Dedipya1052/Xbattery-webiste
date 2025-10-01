import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import AnimatedDiv from "@/components/ui/Animate";
import IconWithGradient from "@/components/ui/IconGradient";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { 
  FaFlask, FaLayerGroup, FaBolt, FaTachometerAlt, FaPlug, FaMicrochip,
  FaThermometerHalf, FaShieldAlt, FaChartLine, FaNetworkWired, FaBroadcastTower,
  FaBatteryFull, FaBatteryHalf, FaBatteryQuarter, FaCogs, FaCode, FaChartPie, FaSitemap, FaChartBar, FaDownload, FaCar
} from "react-icons/fa";
 
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
    slug: "ev-bms",
    title: "Xbattery BharatBMS-EV-400V", 
      link: "/bms/BharatBMS-EV-400V"
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
    image: "/images/telecom_good_looking-Photoroom.png",
  },
  "lv-bms": {
    title: "Xbattery BharatBMS-ESS-72V",
    description:
      "The XB-X 32S is a robust low-voltage energy storage system BMS operating at 110V nominal with LFP chemistry support for 32-36 series configurations. Engineered for reliable energy storage applications, it delivers 100A continuous current with advanced thermal management and comprehensive safety protections.",
    imageAlt: "Telecom BMS Image",
    image: "/images/lv_good_looking-Photoroom.png",
  },
  "ev-bms": {
    title: "Xbattery BharatBMS-EV-400V",
    description:
      "The XB-X 136S is a high-performance 435V BMS specifically engineered for electric vehicles including cars, trucks, and buses with 136-series LFP cell configurations. Built to automotive standards with ISO 26262 ASIL-C compliance, it supports up to 600A peak discharge currents and features advanced diagnostics for demanding EV applications.",
    imageAlt: "LV-BMS Image",
    image: "/images/ev_good_looking-Photoroom.png",
  },
};

export default function BmsOfferingPage({ slug }) {
  const router = useRouter();
  // Backward-compatible slug aliases
  const SLUG_ALIAS = {
    "BharatBMS-ESS-48V": "telecom-bms",
    "BharatBMS-ESS-72V": "lv-bms",
    "BharatBMS-EV-400V": "ev-bms",
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
      FaNetworkWired,       // Communication & Control
      FaShieldAlt,          // Safety Features
      FaThermometerHalf,    // Thermal Management
      FaLayerGroup,         // Scalability
      FaChartLine           // Diagnostics and Monitoring
    ],
    "lv-bms": [
      FaBatteryHalf,
      FaBroadcastTower,
      FaShieldAlt,
      FaThermometerHalf,
      FaSitemap,
      FaChartBar
    ],
    "ev-bms": [
      FaBatteryQuarter,
      FaNetworkWired,
      FaShieldAlt,
      FaThermometerHalf,
      FaLayerGroup,
      FaChartPie
    ]
  };

  // Icon sets per BMS type for Software
  const softwareIconSets = {
    "telecom-bms": [FaChartPie, FaCogs, FaCode],
    "lv-bms": [FaChartBar, FaCogs, FaCode],
    "ev-bms": [FaChartLine, FaCogs, FaCode]
  };

  return (
    <>
      <Head>
        <title>{data.title} | Xbattery</title>
      </Head>
      <div className={classes.head1}>
      <div className="bg-[#1c1c1c] text-white w-full relative">
        {/* Page header icon badge (top-right) */}
        <div className="absolute top-6 right-4 w-12 h-12 rounded-xl bg-[#0c0c0c] border border-[#2a2a2a] flex items-center justify-center">
          <IconWithGradient size={24}>
            {normalizedSlug === 'telecom-bms' ? <FaBatteryFull /> : normalizedSlug === 'lv-bms' ? <FaPlug /> : <FaCar />}
          </IconWithGradient>
        </div>
        <div className="mx-auto w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[1500px] py-8 md:py-16 px-3 md:px-6 flex flex-col lg:flex-row items-center justify-center h-full min-h-[420px]">
          <div className="text-center lg:text-left p-2 md:p-4 mb-6 lg:mb-0 w-full">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${classes.color} leading-[35px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] lg:whitespace-nowrap`}>
              {data.title}
            </h1>
            <h2 className="text-sm sm:text-base md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 text-[#e9e9e9] px-1 md:pl-[1.5px]">
              {data.description}
            </h2>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[100%] max-w-2xl rounded-lg bg-[#1c1c1c] h-[320px] md:h-[420px] overflow-hidden flex items-center justify-center">
              <Image 
                src={data.image} 
                alt={data.imageAlt} 
                width={800} 
                height={450} 
                className="object-contain w-full h-full" 
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-[1200px] mx-auto items-stretch">
            {(
              {
                "telecom-bms": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaLayerGroup />, title: "Cell Count Range", description: "13S-17S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "42.9V to 56.1V" },
                  { icon: <FaMicrochip />, title: "Communications", description: "CAN-powered or separate DC" }
                ],
                "lv-bms": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMP" },
                  { icon: <FaLayerGroup />, title: "Cell Count Range", description: "32S-36S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "110V" },
                  { icon: <FaMicrochip />, title: "Communications", description: "CAN 2.0B, UART, BLE" }
                ],
                "ev-bms": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaLayerGroup />, title: "Cell Count Range", description: "136S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "435V" },
                  { icon: <FaMicrochip />, title: "Communications", description: "CAN Bus, RS-485, UART" }
                ]
              }[normalizedSlug] || [
                { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                { icon: <FaLayerGroup />, title: "Cell Count Range", description: "13S-17S" },
                { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "42.9V to 56.1V" },
                { icon: <FaMicrochip />, title: "Communications", description: "CAN-powered or separate DC" }
              ]
            ).map((feature, index) => (
              <AnimatedDiv key={index}>
                <div className="flex w-full rounded-2xl overflow-hidden bg-[#1b1b1b] min-h-[120px]">
                  <div className="w-[96px] md:w-[110px] shrink-0 bg-[#141414] flex items-center justify-center">
                    <IconWithGradient size={28}>
                      {feature.icon}
                    </IconWithGradient>
                  </div>
                  <div className="flex-1 h-full px-6 py-5 md:px-8 md:py-6 flex flex-col items-center justify-center text-center">
                    <h3 className="text-base md:text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{feature.description}</p>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        {/* Features section (mirroring BharatBMS content) */}
        <div className="py-6 px-4 md:px-6 rounded-lg mb-1">
          <AnimatedDiv>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-[-0.5rem] text-center ${classes.color}`}>
              Features
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-16">
            {[
              { title: "Cell Monitoring & Balancing", description: "Supports up to 18 series cells with passive balancing for equalization. Voltage accuracy: ±2mV." },
              { title: "Communication & Control", description: "CAN FD, UART, SPI, and Ethernet for real-time processing and remote monitoring." },
              { title: "Safety Features", description: "ISO 26262 compliant protection for voltage, current, and temperature with fault diagnostics." },
              { title: "Thermal Management", description: "Real-time temperature sensing and thermal runaway detection for high-temperature control." },
              { title: "Scalability", description: "Modular architecture supports series and parallel setups for larger energy storage needs." },
              { title: "Diagnostics and Monitoring", description: "Real-time data visualization and lifecycle analytics for better battery management." },
            ].map((item, index) => (
              <AnimatedDiv key={index}>
                <div className="relative bg-[#1b1b1b] rounded-2xl p-8 h-full">
                  <div className="absolute -top-3 left-4 w-9 h-9 rounded-xl bg-[#0c0c0c] flex items-center justify-center">
                    <IconWithGradient size={20}>
                      {React.createElement(featureIconSets[normalizedSlug][index])}
                    </IconWithGradient>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white mt-3">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-16">
            {[
              { title: "SOC/SOH Estimation", description: "Accurate algorithms for State-of-Charge and State-of-Health, ensuring reliable reporting." },
              { title: "Software Framework", description: "Optimized for efficiency and real-time performance suitable for demanding use-cases." },
              { title: "Customizable API", description: "Open interfaces for seamless OEM integration and configurability." }
            ].map((item, index) => (
              <AnimatedDiv key={index}>
                <div className="relative bg-[#1b1b1b] rounded-2xl p-8 h-full">
                  <div className="absolute -top-3 left-4 w-9 h-9 rounded-xl bg-[#0c0c0c] flex items-center justify-center">
                    <IconWithGradient size={20}>
                      {React.createElement(softwareIconSets[normalizedSlug][index])}
                    </IconWithGradient>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white mt-3">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                  
                </div>
              </AnimatedDiv>
            ))}
          </div>
          <div className="w-full flex justify-center mt-2">
            <div className="w-full max-w-[1200px] bg-[#1b1b1b] rounded-2xl px-4 py-6 md:px-8 md:py-7 flex flex-col items-center gap-3">
              <p className="text-sm md:text-base text-gray-300 text-center font-medium px-2">
                Download our brochure now to see how our Battery Management Systems and Energy Storage Solutions can transform your business.
              </p>
              <Link href="/api/download-brochure" className="inline-flex items-center justify-center text-sm font-medium text-white border border-white/30 rounded-md px-4 py-2 hover:bg-white hover:text-black transition-colors">
                <FaDownload className="mr-2" />
                <span>Download Brochure (PDF)</span>
              </Link>
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
                                    