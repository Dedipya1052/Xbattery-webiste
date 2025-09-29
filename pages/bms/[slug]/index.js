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
  FaBatteryFull, FaBatteryHalf, FaBatteryQuarter, FaCogs, FaCode, FaChartPie, FaSitemap, FaChartBar
} from "react-icons/fa";
import classes from "../../bharat-bms/styles.module.css";

// BMS Products array for navigation
const BMS_PRODUCTS = [
  {
    slug: "telecom-bms",
    title: "XB-X 16S",
    link: "/bms/telecom-bms"
  },
  {
    slug: "lv-bms", 
    title: "XB-X 36S",
    link: "/bms/lv-bms"
  },
  {
    slug: "ev-bms",
    title: "XB-X 136S", 
    link: "/bms/ev-bms"
  }
];

// Function to find the index of the current BMS product
const findBMSIndex = (slug) => {
  return BMS_PRODUCTS.findIndex((product) => product.slug === slug);
};

const CONTENT = {
  "telecom-bms": {
    title: "XB-X 16S",
    description:
      "The XB-X 16S is a versatile 48V BMS designed for modular energy storage systems with support for both LFP and NMC chemistries across 13-17 series configurations. Its stackable architecture and 100A continuous current handling make it ideal for scalable residential and commercial energy storage applications.",
    imageAlt: "EV-BMS Image",
    image: "/images/telecom_good_looking-Photoroom.png",
  },
  "lv-bms": {
    title: "XB-X 36S",
    description:
      "The XB-X 32S is a robust low-voltage energy storage system BMS operating at 110V nominal with LFP chemistry support for 32-36 series configurations. Engineered for reliable energy storage applications, it delivers 100A continuous current with advanced thermal management and comprehensive safety protections.",
    imageAlt: "Telecom BMS Image",
    image: "/images/lv_good_looking-Photoroom.png",
  },
  "ev-bms": {
    title: "XB-X 136S",
    description:
      "The XB-X 136S is a high-performance 435V BMS specifically engineered for electric vehicles including cars, trucks, and buses with 136-series LFP cell configurations. Built to automotive standards with ISO 26262 ASIL-C compliance, it supports up to 600A peak discharge currents and features advanced diagnostics for demanding EV applications.",
    imageAlt: "LV-BMS Image",
    image: "/images/ev_good_looking-Photoroom.png",
  },
};

export default function BmsOfferingPage({ slug }) {
  const router = useRouter();
  const data = CONTENT[slug] || CONTENT["telecom-bms"];

  // Navigation logic
  const currentBMSIndex = findBMSIndex(slug);
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
      <div className="bg-[#1c1c1c] text-white w-full">
        <div className="mx-auto w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[1500px] py-8 md:py-16 px-6 flex flex-col lg:flex-row items-center justify-center h-full min-h-[420px]">
          <div className="text-center lg:text-left p-4 mb-6 lg:mb-0">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${classes.color} leading-[45px] md:leading-[60px]`}>
              {data.title}
            </h1>
            <h2 className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 text-[#e9e9e9] pl-[1.5px]">
              {data.description}
            </h2>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[100%] max-w-lg rounded-lg bg-[#1c1c1c] h-[260px] md:h-[320px] overflow-hidden flex items-center justify-center">
              <Image 
                src={data.image} 
                alt={data.imageAlt} 
                width={640} 
                height={360} 
                className="object-contain w-full h-full" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 px-6 mx-auto w-[90%] xl:w-[80%] 2xl:w-[1500px]">
        {/* Intro paragraph (same placement as BharatBMS) */}
        <AnimatedDiv>
          <div className="w-[95%] lg:w-[80%] mx-auto text-center md:text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-2">
              {data.title} is engineered on the BharatBMS architecture: a universal high-voltage Battery Management System that scales from home energy storage to industrial and EV applications, emphasizing reliability, safety, and ease of integration.
            </p>
          </div>
        </AnimatedDiv>

        {/* Key Specifications section (mirroring BharatBMS style) */}
        <div className=" py-9 px-6 rounded-lg mb-1">
          <AnimatedDiv>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-12 text-center ${classes.color}`}>
              Key Specifications
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
            {(
              {
                "telecom-bms": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaLayerGroup />, title: "Cell Count Range", description: "13S-17S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "42.9V to 56.1V" },
                  { icon: <FaTachometerAlt />, title: "Max Pack Voltage", description: "~58.4V" },
                  { icon: <FaPlug />, title: "Input Power", description: "9V–60V" },
                  { icon: <FaMicrochip />, title: "Communications", description: "CAN-powered or separate DC" }
                ],
                "lv-bms": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMP" },
                  { icon: <FaLayerGroup />, title: "Cell Count Range", description: "32S-36S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "110V" },
                  { icon: <FaTachometerAlt />, title: "Max Pack Voltage", description: "135V" },
                  { icon: <FaPlug />, title: "Input Power", description: "110V" },
                  { icon: <FaMicrochip />, title: "Communications", description: "CAN 2.0B, UART, BLE" }
                ],
                "ev-bms": [
                  { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                  { icon: <FaLayerGroup />, title: "Cell Count Range", description: "136S" },
                  { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "435V" },
                  { icon: <FaTachometerAlt />, title: "Max Pack Voltage", description: "496V" },
                  { icon: <FaPlug />, title: "Input Power", description: "435V–496V" },
                  { icon: <FaMicrochip />, title: "Communications", description: "CAN Bus, RS-485, UART" }
                ]
              }[slug] || [
                { icon: <FaFlask />, title: "Supported Cell Chemistry", description: "LFP/NMC" },
                { icon: <FaLayerGroup />, title: "Cell Count Range", description: "13S-17S" },
                { icon: <FaBolt />, title: "Nominal Pack Voltage", description: "42.9V to 56.1V" },
                { icon: <FaTachometerAlt />, title: "Max Pack Voltage", description: "~58.4V" },
                { icon: <FaPlug />, title: "Input Power", description: "9V–60V" },
                { icon: <FaMicrochip />, title: "Communications", description: "CAN-powered or separate DC" }
              ]
            ).map((feature, index) => (
              <AnimatedDiv key={index}>
                <div className="flex flex-col items-center text-center bg-[#1c1c1c] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <IconWithGradient size={28}>
                    {feature.icon}
                  </IconWithGradient>
                  <h3 className="text-lg font-semibold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        {/* Features section (mirroring BharatBMS content) */}
        <div className="py-6 px-6 rounded-lg mb-1">
          <AnimatedDiv>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-[-0.5rem] text-center ${classes.color}`}>
              Features
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto py-16">
            {[
              { title: "Cell Monitoring & Balancing", description: "Supports up to 18 series cells with passive balancing for equalization. Voltage accuracy: ±2mV." },
              { title: "Communication & Control", description: "CAN FD, UART, SPI, and Ethernet for real-time processing and remote monitoring." },
              { title: "Safety Features", description: "ISO 26262 compliant protection for voltage, current, and temperature with fault diagnostics." },
              { title: "Thermal Management", description: "Real-time temperature sensing and thermal runaway detection for high-temperature control." },
              { title: "Scalability", description: "Modular architecture supports series and parallel setups for larger energy storage needs." },
              { title: "Diagnostics and Monitoring", description: "Real-time data visualization and lifecycle analytics for better battery management." },
            ].map((item, index) => (
              <AnimatedDiv key={index}>
                <div className="flex flex-col items-center text-center bg-[#1c1c1c] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <IconWithGradient size={30}>
                    {React.createElement(featureIconSets[slug][index])}
                  </IconWithGradient>
                  <h3 className="text-xl font-semibold mt-4 mb-3 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 flex-grow">{item.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        {/* Software section (mirroring BharatBMS style) */}
        <div className="py-6 px-6 rounded-lg mb-1">
          <AnimatedDiv>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-[-0.5rem] text-center ${classes.color}`}>
              Software
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto py-16">
            {[
              { title: "SOC/SOH Estimation", description: "Accurate algorithms for State-of-Charge and State-of-Health, ensuring reliable reporting." },
              { title: "Software Framework", description: "Optimized for efficiency and real-time performance suitable for demanding use-cases." },
              { title: "Customizable API", description: "Open interfaces for seamless OEM integration and configurability." }
            ].map((item, index) => (
              <AnimatedDiv key={index}>
                <div className="flex flex-col items-center text-center bg-[#1c1c1c] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <IconWithGradient size={30}>
                    {React.createElement(softwareIconSets[slug][index])}
                  </IconWithGradient>
                  <h3 className="text-xl font-semibold mt-4 mb-3 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 flex-grow">{item.description}</p>
                </div>
              </AnimatedDiv>
            ))}
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
