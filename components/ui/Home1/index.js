import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import LayoutEffect from "@/components/LayoutEffect";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import AnimatedDiv from "../Animate";
import { motion } from "framer-motion";





// * fetch blogs from contentful CMS

const Example = ({ media }) => {
  // const [imageSrc, setImageSrc] = useState(HeroImg);
  const [para, setPara] = useState(false);
  const [para1, setPara1] = useState(false);
  const [para2, setPara2] = useState(false);
  const [para3, setPara3] = useState(false);

  const videoUrl1 = media?.video1?.fields?.file?.url;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { triggerOnce: false });

  const controls = useAnimation();
  const [objectPosition, setObjectPosition] = useState("object-center");

  useEffect(() => {
    const timer = setTimeout(() => {
      setObjectPosition("object-right"); // After 6 seconds, change to 'object-right'
    }, 6500); // 6000 milliseconds = 6 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    if (isInView1) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView1]);

  const [activeBattery, setActiveBattery] = useState("XBattery1");

  const batteryData = {
    XBattery1: {
      energyCapacity: "13.5 kWh1",
      onGridPower: "5 kW continuous",
      backupPower: {
        peak: "7 kW peak",
        motorStart: "106A LRA motor start",
        transition: "Seamless backup transition",
      },
    },
    XBattery2: {
      energyCapacity: "14 kWh",
      onGridPower: "6 kW continuous",
      backupPower: {
        peak: "8 kW peak",
        motorStart: "110A LRA motor start",
        transition: "Fast backup transition",
      },
    },
    XBattery3: {
      energyCapacity: "15 kWh",
      onGridPower: "7 kW continuous",
      backupPower: {
        peak: "9 kW peak",
        motorStart: "120A LRA motor start",
        transition: "Instant backup transition",
      },
    },
  };

  const handleBatteryChange = (battery) => {
    setActiveBattery(battery);
  };

  const currentBattery = batteryData[activeBattery];

  const [batteryCount, setBatteryCount] = useState(1);
  const [applianceIndex, setApplianceIndex] = useState(0);

  const applianceImages = [
    "/images/batteryApp/2.1.png",
    "/images/batteryApp/2.2.png",
    "/images/batteryApp/2.3.png",
  ];
  const applianceImages1 = [
    "/images/hero/appliances/1.1.png",
    "/images/hero/appliances/1.2.png",
    "/images/hero/appliances/1.3.png",
  ];

  const addBattery = () => {
    if (batteryCount < 3) {
      setBatteryCount(batteryCount + 1);
      setApplianceIndex((applianceIndex + 1) % applianceImages.length);
    }
  };

  const removeBattery = (index) => {
    if (batteryCount > 1) {
      setBatteryCount(batteryCount - 1);
      setApplianceIndex(
        (applianceIndex - 1 + applianceImages.length) % applianceImages.length
      );
    }
  };

  return (
    <div className={styles.head1}>
      <nav
        className={`fixed top-0 left-0 w-[100%] md:w-full mx-auto flex items-center justify-between p-4 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="w-[95%] mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo1.png"
              width={160}
              height={160}
              alt="logo"
              className="opacity-100"
            />
          </Link>

          <div className="hidden md:flex gap-7 items-center">
            <Link href="/">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                Product
              </button>
            </Link>

            <Link href="/blog">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                Blog
              </button>
            </Link>

            <Link href="/learn">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                Learn
              </button>
            </Link>

            <Link href="/whitepapers">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                Whitepapers
              </button>
            </Link>
          </div>

          <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 hidden md:block">
            <Link href="/">Coming Soon</Link>
          </button>

          <button
            className="md:hidden flex items-center text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black text-white flex flex-col items-center p-4 space-y-4">
            <Link href="/">
              <button
                className="text-lg font-medium"
                onClick={handleMenuItemClick}
              >
                Product
              </button>
            </Link>

            <Link href="/blog">
              <button
                className="text-lg font-medium"
                onClick={handleMenuItemClick}
              >
                Blog
              </button>
            </Link>

            <Link href="/learn">
              <button
                className="text-lg font-medium"
                onClick={handleMenuItemClick}
              >
                Learn
              </button>
            </Link>

            <Link href="/whitepapers">
              <button
                className="text-lg font-medium"
                onClick={handleMenuItemClick}
              >
                Whitepapers
              </button>
            </Link>

            <Link href="/">
              <button
                className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                onClick={handleMenuItemClick}
              >
                Coming Soon
              </button>
            </Link>
          </div>
        )}
      </nav>

      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div className="relative w-full top-[-4rem] ">
          <video
            className={`w-auto h-[85vh] md:w-full md:h-auto object-cover ${objectPosition}`}
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedData={(e) => e.target.play()} // Ensure video starts playing after it's loaded
          >
            <source src={`https:${videoUrl1}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            ref={ref}
            initial={{ x: "-100%" }}
            animate={{ x: isInView ? 0 : "-100%" }}
            transition={{ duration: 1, delay: 6 }}
            // className="absolute top-8 left-0 w-full h-full flex flex-col items-start justify-center p-16 space-y-2"
            className="absolute top-0 md:top-8 left-0 right-0 w-full h-full flex flex-col items-center md:items-start justify-center p-4 md:p-16 space-y-2 text-left"
          >
            <div className="text-white text-3xl lg:text-4xl font-medium mb-4">
              XBattery
            </div>
            <div className="text-white text-4xl lg:text-6xl text-center md:text-left font-bold">
              Power for the Extreme
            </div>
            <div className="text-white text-lg lg:text-2xl text-center md:text-left font-light pt-5 pl-1">
              Extreme Performance Energy Storage System
            </div>
            <div className=" pt-8 flex gap-7 pl-2">
              {/* <div className={styles.gradientButton}>Watch Video</div> */}
              <Button
                bg="transparent"
                border="1px"
                borderColor="white"
                color="white"
                _hover={{ bg: "transparent" }}
              >
                Watch the Event
              </Button>
            </div>
          </motion.div>
        </div>
      </LayoutEffect>

      <div className="mt-[2.5rem] mb-[5rem] w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mx-auto">
        <AnimatedDiv>
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center relative ">
            <div
              className={`${styles.block2Head} text-center md:text-left w-full md:w-[45%]`}
            >
              XBattery Specifications
            </div>

            <div className="w-full md:w-[55%] flex flex-row md:flex-row gap-[2rem] md:gap-[1rem] justify-evenly relative">
              {/* Active border element */}
              <div
                className="absolute bottom-[-15px] h-[2px] bg-white transition-all duration-300 ease-in-out"
                style={{
                  width: "30%",
                  left:
                    activeBattery === "XBattery1"
                      ? "0%"
                      : activeBattery === "XBattery2"
                      ? "35%"
                      : "70%",
                }}
              />

              {/* Battery options */}
              <div
                onClick={() => handleBatteryChange("XBattery1")}
                className={`cursor-pointer flex-1 text-center relative ${
                  activeBattery === "XBattery1"
                    ? "text-white"
                    : "text-[#b5b5b5]"
                }`}
              >
                XBattery1
              </div>

              <div
                onClick={() => handleBatteryChange("XBattery2")}
                className={`cursor-pointer flex-1 text-center relative ${
                  activeBattery === "XBattery2"
                    ? "text-white"
                    : "text-[#b5b5b5]"
                }`}
              >
                XBattery2
              </div>

              <div
                onClick={() => handleBatteryChange("XBattery3")}
                className={`cursor-pointer flex-1 text-center relative ${
                  activeBattery === "XBattery3"
                    ? "text-white"
                    : "text-[#b5b5b5]"
                }`}
              >
                XBattery3
              </div>
            </div>
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div className="mt-[4rem] flex flex-col gap-[1rem] pb-[4rem] border-b-[1px] border-[#2e2e2e]">
            <div className="text-white font-bold text-xl text-center sm:text-left mb-3 md:mb-0">
              Power
            </div>
            <div className="w-[85%] mx-auto md:w-full flex flex-row flex-wrap md:flex-nowrap justify-between md:justify-start sm:flex-row gap-[2rem]  sm:gap-[10%]">
              <div className="flex flex-col gap-2">
                <div className="text-[#979797] text-sm">Energy Capacity</div>
                <div id="value">
                  <div className="text-white text-sm">
                    {currentBattery.energyCapacity}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[#979797] text-sm">On-Grid Power</div>
                <div id="value">
                  <div className="text-white text-sm">
                    {currentBattery.onGridPower}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[#979797] text-sm">Backup Power</div>
                <div id="value">
                  <div className="text-white text-sm">
                    {currentBattery.backupPower.peak}
                  </div>
                  <div className="text-white text-sm">
                    {currentBattery.backupPower.motorStart}
                  </div>
                  <div className="text-white text-sm">
                    {currentBattery.backupPower.transition}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div className="mt-[2rem] flex flex-col gap-[1rem] pb-[4rem] border-b-[1px] border-[#2e2e2e]">
            <div className="text-white font-bold text-xl text-center sm:text-left mb-3 md:mb-0">
              Features
            </div>
            <div className="w-[85%] mx-auto md:w-full flex flex-row flex-wrap md:flex-nowrap justify-between   md:justify-start sm:flex-row gap-[2rem] sm:gap-[10%]">
              <div className="flex flex-col gap-2">
                <div className="text-[#979797] text-sm text-left">
                  Size and Weight
                </div>
                <div id="value">
                  <div className="text-white text-sm">
                    {currentBattery.energyCapacity}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[#979797] text-sm">Scalable</div>
                <div id="value">
                  <div className="text-white text-sm">
                    {currentBattery.onGridPower}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[#979797] text-sm">Installation</div>
                <div id="value">
                  <div className="text-white text-sm">
                    {currentBattery.backupPower.peak}
                  </div>
                  <div className="text-white text-sm">
                    {currentBattery.backupPower.motorStart}
                  </div>
                  <div className="text-white text-sm">
                    {currentBattery.backupPower.transition}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[#979797] text-sm">Certification</div>
                <div id="value">
                  <div className="text-white text-sm">
                    {currentBattery.backupPower.peak}
                  </div>
                  <div className="text-white text-sm">
                    {currentBattery.backupPower.motorStart}
                  </div>
                  <div className="text-white text-sm">SEMI standards</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>

      <div className="mx-auto w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mt-[7rem] mb-[5rem]">
        <AnimatedDiv>
          <div className={`${styles.block3Head} text-center`}>
            Energy Customized to Your Needs
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="text-white text-[1.3rem] text-center mt-3">
            Scale power from 5kWh to 180kWh or 3kW to 36kW to perfectly match
            your needs with X1. No matter how much power or backup capacity you
            need.
          </div>
        </AnimatedDiv>
        {/* <AnimatedDiv>
        <div className="flex flex-col justify-evenly mt-[4rem]">
          <div className="flex flex-col gap-[1rem]">
            <div className="flex gap-[8rem]">
              <div className="flex flex-col gap-[1rem] w-[40%]">
                <div className="text-white text-[1.6rem] ml-[3.2rem]">
                  Essential Appliances
                </div>
                <img
                  src="/images/batteryApp/1.png"
                  alt="1"
                  width={"80%"}
                  className="mx-auto"
                />
              </div>
              <div className={`flex flex-col gap-0.5 w-[60%]`}>
                <div className="text-white text-[2.4rem] font-bold">
                  <div className={styles.textColor}>
                    {`${3 * batteryCount}kW/${5 * batteryCount}kWh`}
                  </div>
                </div>
                <div className="text-white text-[1.3rem] font-light opacity-[60%]">
                  {`${batteryCount} Power Module + ${batteryCount} Battery Module`}
                </div>
              </div>
            </div>
            <div className="flex gap-[8rem] mt-[2rem]">
              <div className="flex flex-col gap-[1rem] w-[40%]">
                <div className="text-white text-[1.6rem] ml-[3.2rem] ">
                  Heavy Appliances
                </div>
                <img
                  src={applianceImages[applianceIndex]}
                  alt="Heavy Appliances"
                  width={"80%"}
                  className="mx-auto mt-[0.5rem] scale-[1.03]"
                />
              </div>
              <div className="flex justify-start items-center gap-2 relative w-[60%]">
                {[...Array(batteryCount)].map((_, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    {index > 0 && (
                      <div
                        className="absolute top-[-15%] left-[0%]"
                        onClick={removeBattery}
                      >
                        <div className="text-[0.8rem] text-white w-[150px]">
                         Remove
                        </div>
                        <div className={styles.plus1}>
                          <div className="mt-[-0.85rem] ml-[-0.11rem] cursor-pointer text-[1.2rem]">
                           -
                          </div>
                        </div>
                      </div>
                    )}
                    <img
                      src="/images/batteryApp/xbattery.png"
                      alt="Battery"
                      width={"150px"}
                      className="mx-auto"
                    />
                    {index === batteryCount - 1 && batteryCount < 3 && (
                      <div
                        className="absolute top-[-15%] left-[90%]"
                        onClick={addBattery}
                      >
                        <div className="text-[0.8rem] text-white w-[150px]">
                          Add More Power
                        </div>
                        <div className={styles.plus1}>
                          <div className="mt-[-0.5rem] ml-[-0.15rem] cursor-pointer">
                            +
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedDiv> */}
        <AnimatedDiv>
          <div className="flex flex-col justify-evenly mt-[4rem] mb-[-8rem]">
            <div className="flex flex-col gap-[1rem] relative">
              <div className="flex justify-center">
                <div className={`flex flex-col gap-0.5`}>
                  <div className="text-white text-[2.4rem] font-bold text-center">
                    <div className={styles.textColor}>
                      {`${3 * batteryCount}kW/${5 * batteryCount}kWh`}
                    </div>
                  </div>
                  <div className="text-white text-[1.3rem] font-light opacity-[60%] text-center">
                    {`${batteryCount} Power Module + ${batteryCount} Battery Module`}
                  </div>
                </div>
              </div>
              <div className="flex mt-[4rem] justify-center ">
                <div className="flex justify-center items-center gap-2 relative z-30 flex-wrap md:flex-nowrap">
                  {[...Array(batteryCount)].map((_, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col items-center"
                    >
                      {index > 0 && (
                        <div
                          className="absolute top-[-15%] left-[0%]"
                          onClick={removeBattery}
                        >
                          <div className="text-[0.8rem] text-white w-[150px]">
                            Remove
                          </div>
                          <div className={styles.plus1}>
                            <div className="mt-[-0.85rem] ml-[-0.11rem] cursor-pointer text-[1.2rem]">
                              -
                            </div>
                          </div>
                        </div>
                      )}
                      <img
                        src="/images/batteryApp/xbattery.png"
                        alt="Battery"
                        width={"150px"}
                        className="mx-auto"
                      />
                      {index === batteryCount - 1 && batteryCount < 3 && (
                        <div
                          className="absolute top-[-15%] left-[90%]"
                          onClick={addBattery}
                        >
                          <div className="text-[0.8rem] text-white w-[150px]">
                            Add More Power
                          </div>
                          <div className={styles.plus1}>
                            <div className="mt-[-0.5rem] ml-[-0.15rem] cursor-pointer">
                              +
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className={styles.circle}></div>
      <div className={styles.circle1}></div> */}
              <div className="w-full mx-auto flex justify-center mt-[-2.2rem] md:mt-[-5.5rem] z-[0]">
                <Image
                  src={applianceImages1[applianceIndex]}
                  width={"1000"}
                  height={"1000"}
                />
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>

      {/* <div className="mx-auto w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mt-[8rem] mb-[5rem]">
      <div className="mx-auto w-full">
        <Image src={"/images/hero/50kwh/battery50.png"} width={"1000"} height={"1000"} className="mx-auto w-[300px] z-20"/>
      </div>
      </div> */}

      <AnimatedDiv>
        <div className="relative w-full mb-2">
          <div className="block md:hidden text-[white] text-center px-4 mt-[-1rem] mb-7 w-[90%] mx-auto">
            <h1 className="text-2xl font-bold">Power Your Home, Save Money</h1>
            <p className="mt-4">
              XBattery offers efficient energy storage solutions in India,
              integrating advanced technologies for optimal energy management.
            </p>
          </div>
          <Image
            src="/images/hero/houseXbattery.png"
            layout="responsive"
            width={1000}
            height={1000}
            alt="image"
            className="w-full h-auto"
          />
          <div className="md:block hidden absolute top-4 xl:top-10 left-1/2 transform -translate-x-1/2 text-black text-center">
            <h1 className="text-2xl font-bold">Power Your Home, Save Money</h1>
            <p className="mt-4">
              XBattery offers advanced energy storage in India with large-scale
              batteries, BMS, IoT, Digital Twins, and AI, allowing efficient
              energy management, reduced electricity costs, and reliable power
              during outages with customizable performance modes.{" "}
            </p>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default Example;
