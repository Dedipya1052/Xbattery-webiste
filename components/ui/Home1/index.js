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
// import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";
import { useRouter } from "next/router";

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
  const reference = useRef(null);
  const isView = useInView(reference, { once: false });
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
      energyCapacity: "5 kWh",
      onGridPower: "5 kW continuous",
      backupPower: {
        peak: "7 kW peak",
        motorStart: "106A LRA motor start",
        transition: "Seamless backup transition",
      },
      size: "37 kgs",
      scalable: "5 MW continuous",
      certifications: {
        one: "UL 1973",
        two: "IEEE 154",
        three: "IEC 62477-1",
      },
    },
    XBattery2: {
      energyCapacity: "5 kWh",
      onGridPower: "5 kW continuous",
      backupPower: {
        peak: "7 kW peak",
        motorStart: "106A LRA motor start",
        transition: "Seamless backup transition",
      },
      size: "37 kgs",
      scalable: "5 MW continuous",
      certifications: {
        one: "UL 1973",
        two: "IEEE 154",
        three: "IEC 62477-1",
      },
    },
   
  };

  const batteryData50 = {
    XBattery1: {
      energyCapacity: "50 kWh",
      onGridPower: "50 kW continuous",
      backupPower: {
        peak: "7 kW peak",
        motorStart: "106A LRA motor start",
        transition: "Seamless backup transition",
      },
      size: "370 kgs",
      scalable: "5 MW continuous",
      certifications: {
        one: "UL 1973",
        two: "IEEE 154",
        three: "IEC 62477-1",
      },
    },
    XBattery2: {
      energyCapacity: "50 kWh",
      onGridPower: "50 kW continuous",
      backupPower: {
        peak: "7 kW peak",
        motorStart: "106A LRA motor start",
        transition: "Seamless backup transition",
      },
      size: "370 kgs",
      scalable: "50 MW continuous",
      certifications: {
        one: "UL 1973",
        two: "IEEE 154",
        three: "IEC 62477-1",
      },
    },
   
  };

  const handleBatteryChange = (battery) => {
    setActiveBattery(battery);
  };

  const currentBattery = batteryData[activeBattery];
  const currentBattery1 = batteryData50[activeBattery];

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

  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const handlePlayVideo = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.currentTime = 0;
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    };
  
    const observer = new IntersectionObserver(handlePlayVideo, {
      threshold: 0.5, // Adjust this value as needed
    });
  
    // Copy the current ref values into local variables
    const currentVideoRef1 = videoRef1.current;
    const currentVideoRef2 = videoRef2.current;
  
    if (currentVideoRef1) observer.observe(currentVideoRef1);
    if (currentVideoRef2) observer.observe(currentVideoRef2);
  
    return () => {
      // Use the copied ref values for cleanup
      if (currentVideoRef1) observer.unobserve(currentVideoRef1);
      if (currentVideoRef2) observer.unobserve(currentVideoRef2);
    };
  }, []);
  

  const handleVideoChange = (index) => {
    setSelectedIndex(index);
    if (videoRef1.current) {
      videoRef1.current.load();
    }
  };

  // for videos

  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.muted = true;
      videoElement.play().catch((error) => {
        console.error("Autoplay failed: ", error);
      });
    }
  }, []);

  const router= useRouter();
  const handleRedirect = () => {
    router.push('/learn'); // Adjust the path if needed
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

            <Link href="/about">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                About
              </button>
            </Link>

            <Link href="/blog">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                Blog
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

            <Link href="/about">
              <button
                className="text-lg font-medium"
                onClick={handleMenuItemClick}
              >
                About
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

      <div>
        {/* hero block */}
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
              preload="none" // Load only metadata for better performance
              onLoadedData={(e) => {
                // Ensure video starts playing after it's loaded
                if (e.target.readyState >= 3) {
                  // Check if video can be played
                  e.target.play().catch((error) => {
                    console.error("Autoplay failed:", error);
                  });
                }
              }}
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
              className="absolute top-0 md:top-0 left-0 right-0 w-full h-full flex flex-col items-center md:items-start justify-center p-4 md:p-16 space-y-2 text-left"
            >
              {/* <div className="text-white text-3xl lg:text-4xl font-medium mb-4">
                Xbattery
              </div> */}
              <div className="text-white text-4xl lg:text-6xl text-center md:text-left font-bold">
                Power Your Home 24/7
              </div>
              <div className="text-white text-lg lg:text-2xl text-center md:text-left font-light pt-5 pl-1">
                High-performance lithium battery packs designed for India
              </div>
              {/* <div className=" pt-8 flex gap-7 pl-2">
                <div className={styles.gradientButton}>Watch Video</div>
                <Button
                  bg="transparent"
                  border="1px"
                  borderColor="white"
                  color="white"
                  _hover={{ bg: "transparent" }}
                >
                  Watch the Event
                </Button>
              </div> */}
            </motion.div>
          </div>
        </LayoutEffect>

        {/* Energy Customized to Your Needs */}
        <div className="mx-auto w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mt-[4rem] mb-[5rem]">
          <AnimatedDiv>
            <div className={`${styles.block3Head} text-center`}>
              Energy Customized to Your Needs
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="text-white text-[1.3rem] text-center mt-3">
              Scale power from 5kWh to 180kWh or 3kW to 36kW to perfectly match
              your needs with X1. No matter how much power or backup capacity
              you need.
            </div>
          </AnimatedDiv>

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
                            <div className="text-[0.6rem] md:text-[0.8rem] text-white hidden md:flex  w-[150px] ">
                              Remove
                            </div>
                            <div className={styles.plus1}>
                              <div className="mt-[-0.85rem] ml-[-0.11rem] cursor-pointer text-[1.2rem]">
                                -
                              </div>
                            </div>
                          </div>
                        )}
                        <Image
                          src="/images/batteryApp/xbattery.png"
                          alt="Battery"
                          width={"1000"}
                          height={"1000"}
                          className="mx-auto w-[100px] md:w-[150px]"
                        />
                        {index === batteryCount - 1 && batteryCount < 3 && (
                          <div
                            className="absolute top-[-15%] left-[90%]"
                            onClick={addBattery}
                          >
                            <div className="text-[0.6rem] md:text-[0.8rem] text-white hidden md:flex w-[150px] ">
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

                <div className="w-full mx-auto flex justify-center mt-[-1.2rem] md:mt-[-2.5rem] lg:mt-[-5.5rem]  z-[0]">
                  <Image
                    src={applianceImages1[applianceIndex]}
                    width={"1000"}
                    height={"1000"}
                    alt="battery"
                  />
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>

        {/* specifications 1 */}

        <div id="features" className="mb-[4rem]"></div>

        <div className=" mb-[6rem] w-[94%] md:w-[90%] lg:w-[85%] xl:w-[75%] 2xl:w-[1450px] mx-auto">
          <AnimatedDiv>
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center relative ">
              <div
                className={`${styles.block2Head} text-center md:text-left w-full md:w-[45%]`}
              >
                Xbattery 5 kWh
              </div>

              <div className="w-full md:w-[42%] flex flex-row md:flex-row gap-[2rem] md:gap-[1rem] justify-evenly relative">
                {/* Active border element */}
                <div
                  className="absolute bottom-[-15px] h-[2px] bg-white transition-all duration-300 ease-in-out"
                  style={{
                    width: "50%",
                    left: activeBattery === "XBattery1" ? "0%" : "50%",
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
                  Features
                </div>

                <div
                  onClick={() => handleBatteryChange("XBattery2")}
                  className={`cursor-pointer flex-1 text-center relative ${
                    activeBattery === "XBattery2"
                      ? "text-white"
                      : "text-[#b5b5b5]"
                  }`}
                >
                  Specifications
                </div>
              </div>
            </div>
          </AnimatedDiv>

          {/* Specifications for Xbattery1 */}
          {activeBattery === "XBattery1" && (
            <AnimatedDiv>
              <div className="mt-[4rem] flex flex-col gap-[1rem] pb-[4rem] border-b-[1px] border-[#2e2e2e]">
                <div className="text-white font-bold text-xl text-center md:text-left mb-3 md:mb-0">
                  Features
                </div>
                <div className="w-[85%] mx-auto md:w-full flex flex-row flex-wrap md:flex-nowrap justify-between md:justify-start sm:flex-row gap-[2rem] sm:gap-[10%]">
                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm text-left">
                      Size and Weight
                    </div>
                    <div id="value">
                      <div className="text-white text-sm">
                        {currentBattery.size}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm">Scalable</div>
                    <div id="value">
                      <div className="text-white text-sm">
                        {currentBattery.scalable}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm">Certification</div>
                    <div id="value">
                      <div className="text-white text-sm">
                        {currentBattery.certifications.one}
                      </div>
                      <div className="text-white text-sm">
                        {currentBattery.certifications.two}
                      </div>
                      <div className="text-white text-sm">
                        {currentBattery.certifications.three}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          )}

          {/* Features for Xbattery2 */}
          {activeBattery === "XBattery2" && (
            <AnimatedDiv>
              <div className="mt-[4rem] flex flex-col gap-[1rem] pb-[4rem] border-b-[1px] border-[#2e2e2e]">
                <div className="text-white font-bold text-xl text-center md:text-left mb-3 md:mb-0">
                  Specifications
                </div>
                <div className="w-[85%] mx-auto md:w-full flex flex-row flex-wrap md:flex-nowrap justify-between md:justify-start sm:flex-row gap-[2rem] sm:gap-[10%]">
                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm">
                      Energy Capacity
                    </div>
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
          )}
        </div>

        {/* modes */}
        <div className="mx-auto w-[95%] md:w-[75%] xl:w-[80%] 2xl:w-[1450px] mt-[9rem]">
          <AnimatedDiv>
            <div
              className={`${styles.block3Head} text-center text-[1.5rem] md:text-[2rem]`}
            >
              Extreme Off-Grid Performance
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="text-white text-[1.2rem] md:text-[1.5rem] text-center mt-3">
              You're protected at all stages of an outage with X1 and its four
              off-grid features. They start long before a blackout occurs.
            </div>
          </AnimatedDiv>

          <div className="mt-[3rem]">
            <AnimatedDiv>
              <video
                ref={videoRef1}
                className="w-full min-h-[400px] md:min-h-[650px] object-cover"
                autoPlay
                muted
                playsInline
                preload="auto"
                loop
                onLoadedData={(e) => e.target.play()}
              >
                <source
                  src={
                    selectedIndex === 0
                      ? "/videos/steps/1.mp4"
                      : selectedIndex === 1
                      ? "/videos/steps/2.mp4"
                      : selectedIndex === 2
                      ? "/videos/steps/3.mp4"
                      : selectedIndex === 3
                      ? "/videos/steps/4.mp4"
                      : ""
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className={styles.switchBox}>
                {[
                  "Before Outage",
                  "Outage Occurrence",
                  "During Blackouts",
                  "Extended Outages",
                ].map((label, index) => (
                  <div
                    key={index}
                    className={`${styles.textBox} ${
                      selectedIndex === index
                        ? `${styles.selected} ${styles.animate}`
                        : ""
                    }`}
                    onClick={() => handleVideoChange(index)}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </AnimatedDiv>

            <AnimatedDiv>
              {selectedIndex === 0 && (
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-[2rem]">
                  <div className="w-full md:w-[50%] text-white opacity-[50%]">
                    X1 activates Storm Guard mode automatically when the
                    National Weather Service issues a warning. Your battery will
                    be fully charged in case an outage occurs.
                  </div>
                  <div className="flex flex-col gap-[0rem] mt-3 md:mt-0">
                    <div className="text-white text-[1.3rem] md:text-[2rem] font-bold">
                      Storm Guard Mode
                    </div>
                    <div className="text-white opacity-[50%]">
                      Automatically detects and prepares for outages.
                    </div>
                  </div>
                </div>
              )}

              {selectedIndex === 1 && (
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-[2rem]">
                  <div className="w-full md:w-[50%] text-white opacity-[50%]">
                    In less than 20ms, your power switches over to X1, so you
                    can run appliances without interruption.
                  </div>
                  <div className="flex flex-col gap-[0rem] mt-3 md:mt-0">
                    <div className="text-white text-[1.3rem] md:text-[2rem] font-bold">
                      Under 20ms
                    </div>
                    <div className="text-white opacity-[50%]">
                      Enjoy seamless backup transition.
                    </div>
                  </div>
                </div>
              )}

              {selectedIndex === 2 && (
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-[2rem]">
                  <div className="w-full md:w-[50%] text-white opacity-[50%]">
                    Power with confidence thanks to the 1.1X rated power output.
                    It's more than enough to run high-wattage home appliances at
                    the same time.
                  </div>
                  <div className="flex flex-col gap-[0rem] mt-3 md:mt-0">
                    <div className="text-white text-[1.3rem] md:text-[2rem] font-bold">
                      1.1X Rated Power Output
                    </div>
                    <div className="text-white opacity-[50%]">
                      With InfiniPower™, you always have electricity.
                    </div>
                  </div>
                </div>
              )}

              {selectedIndex === 3 && (
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-[2rem]">
                  <div className="w-full md:w-[50%] text-white opacity-[50%]">
                    Normally, blackouts disrupt solar systems, too. Not with X1.
                    You'll have a constant power supply.
                  </div>
                  <div className="flex flex-col gap-[0rem] mt-3 md:mt-0">
                    <div className="text-white text-[1.3rem] md:text-[2rem] font-bold">
                      24/7 Solar Power
                    </div>
                    <div className="text-white opacity-[50%]">
                      Keep life smooth, even during lengthy outages.
                    </div>
                  </div>
                </div>
              )}
            </AnimatedDiv>
          </div>
        </div>

        {/* last Image */}
        <AnimatedDiv>
          <div className="relative w-full mb-2 mt-[9rem] sm:mt-[8rem]">
            <div className="block md:hidden text-[white] text-center px-4 mt-[-1rem] mb-7 w-[90%] mx-auto">
              <h1 className={`${styles.textColor} font-bold`}>
                Power Your Home, Save Money
              </h1>
              <p className="mt-4">
                Xbattery offers efficient energy storage solutions in India,
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
              <h1 className="text-2xl font-bold">
                Power Your Home, Save Money
              </h1>
              <p className="mt-4">
                Xbattery offers advanced energy storage in India with
                large-scale batteries, BMS, IoT, Digital Twins, and AI, allowing
                efficient energy management, reduced electricity costs, and
                reliable power during outages with customizable performance
                modes.{" "}
              </p>
            </div>
          </div>
        </AnimatedDiv>

        {/* 50 kWh Powerhouse */}
        <div className="w-[95%] md:w-[75%] 2xl:w-[1450px] mx-auto mt-[8rem] flex flex-col-reverse lg:flex-row justify-center items-center gap-[1rem] overflow-hidden">
          {/* Video Section */}
          <div className="w-full lg:w-[55%] flex justify-center">
            <AnimatedDiv>
              <div className="w-full h-full flex justify-center items-center">
                <video
                  className="w-full h-[65vh] md:h-[65vh] lg:h-[85vh] object-cover"
                  autoPlay
                  muted
                  playsInline
                  preload="none"
                  ref={videoRef2}
                >
                  <source src={"/videos/rotate50.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </AnimatedDiv>
          </div>

          {/* Text Section */}
          <div
            className="w-full lg:w-[45%] mt-6 md:mt-0 px-4 md:px-0"
            ref={reference}
          >
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: isView ? 0 : "100%", opacity: isView ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-center lg:text-left"
            >
              <div className={`${styles.block3Head}`}>50 kWh Powerhouse</div>
              <div className="text-white text-[1.2rem] sm:text-[1.3rem] mt-3">
                X1 is ultra-thin and packed with a power density of 8.7W/ft³,
                the highest in the industry, thanks to its all-in-one design
                that combines battery and power modules. Install it almost
                anywhere around your home.
              </div>
            </motion.div>
          </div>
        </div>

        {/* specifications 2 */}
        {/* <div className="mt-[7rem] mb-[5rem] w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mx-auto">
          <AnimatedDiv>
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center relative ">
              <div
                className={`${styles.block2Head} text-center md:text-left w-full md:w-[45%]`}
              >
                50 kwh Powerhouse Specifications
              </div>

              <div className="w-full md:w-[55%] flex flex-row md:flex-row gap-[2rem] md:gap-[1rem] justify-evenly relative">
                
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

                
                <div
                  onClick={() => handleBatteryChange("XBattery1")}
                  className={`cursor-pointer flex-1 text-center relative ${
                    activeBattery === "XBattery1"
                      ? "text-white"
                      : "text-[#b5b5b5]"
                  }`}
                >
                  Xbattery1
                </div>

                <div
                  onClick={() => handleBatteryChange("XBattery2")}
                  className={`cursor-pointer flex-1 text-center relative ${
                    activeBattery === "XBattery2"
                      ? "text-white"
                      : "text-[#b5b5b5]"
                  }`}
                >
                  Xbattery2
                </div>

                <div
                  onClick={() => handleBatteryChange("XBattery3")}
                  className={`cursor-pointer flex-1 text-center relative ${
                    activeBattery === "XBattery3"
                      ? "text-white"
                      : "text-[#b5b5b5]"
                  }`}
                >
                  Xbattery3
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
                      {currentBattery1.energyCapacity}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[#979797] text-sm">On-Grid Power</div>
                  <div id="value">
                    <div className="text-white text-sm">
                      {currentBattery1.onGridPower}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[#979797] text-sm">Backup Power</div>
                  <div id="value">
                    <div className="text-white text-sm">
                      {currentBattery1.backupPower.peak}
                    </div>
                    <div className="text-white text-sm">
                      {currentBattery1.backupPower.motorStart}
                    </div>
                    <div className="text-white text-sm">
                      {currentBattery1.backupPower.transition}
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
                      {currentBattery1.size}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[#979797] text-sm">Scalable</div>
                  <div id="value">
                    <div className="text-white text-sm">
                      {currentBattery1.scalable}
                    </div>
                  </div>
                </div>

             

                <div className="flex flex-col gap-2">
                  <div className="text-[#979797] text-sm">Certification</div>
                  <div id="value">
                    <div className="text-white text-sm">
                      {currentBattery1.certifications.one}
                    </div>
                    <div className="text-white text-sm">
                      {currentBattery1.certifications.two}
                    </div>
                    <div className="text-white text-sm">
                      {currentBattery1.certifications.three}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div> */}

        <div className="mt-[7rem] mb-[3rem] sm:mb-[5rem] w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mx-auto">
          <AnimatedDiv>
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center relative ">
              <div
                className={`${styles.block2Head} text-center md:text-left w-full md:w-[45%]`}
              >
                50 kWh Powerhouse
              </div>

              <div className="w-full md:w-[42%] flex flex-row gap-[2rem] md:gap-[1rem] justify-evenly relative">
                {/* Active border element */}
                <div
                  className="absolute bottom-[-15px] h-[2px] bg-white transition-all duration-300 ease-in-out"
                  style={{
                    width: "50%",
                    left: activeBattery === "XBattery1" ? "50%" : "0%",
                  }}
                />

                {/* Battery options */}
                <div
                  onClick={() => handleBatteryChange("XBattery2")}
                  className={`cursor-pointer flex-1 text-center relative ${
                    activeBattery === "XBattery2"
                      ? "text-white"
                      : "text-[#b5b5b5]"
                  }`}
                >
                  Features
                </div>

                <div
                  onClick={() => handleBatteryChange("XBattery1")}
                  className={`cursor-pointer flex-1 text-center relative ${
                    activeBattery === "XBattery1"
                      ? "text-white"
                      : "text-[#b5b5b5]"
                  }`}
                >
                  Specifications
                </div>
              </div>
            </div>
          </AnimatedDiv>

          {/* Features for XBattery2 */}
          {activeBattery === "XBattery2" && (
            <AnimatedDiv>
              <div className="mt-[4rem] flex flex-col gap-[1rem] pb-[4rem] border-b-[1px] border-[#2e2e2e]">
                <div className="text-white font-bold text-xl text-center sm:text-left mb-3 md:mb-0">
                  Features
                </div>
                <div className="w-[85%] mx-auto md:w-full flex flex-row flex-wrap md:flex-nowrap justify-between md:justify-start sm:flex-row gap-[2rem] sm:gap-[10%]">
                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm text-left">
                      Size and Weight
                    </div>
                    <div id="value">
                      <div className="text-white text-sm">
                        {currentBattery1.size}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm">Scalable</div>
                    <div id="value">
                      <div className="text-white text-sm">
                        {currentBattery1.scalable}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm">Certification</div>
                    <div id="value">
                      <div className="text-white text-sm">
                        {currentBattery1.certifications.one}
                      </div>
                      <div className="text-white text-sm">
                        {currentBattery1.certifications.two}
                      </div>
                      <div className="text-white text-sm">
                        {currentBattery1.certifications.three}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          )}

          {/* Specifications for XBattery1 */}
          {activeBattery === "XBattery1" && (
            <AnimatedDiv>
              <div className="mt-[4rem] flex flex-col gap-[1rem] pb-[4rem] border-b-[1px] border-[#2e2e2e]">
                <div className="text-white font-bold text-xl text-center sm:text-left mb-3 md:mb-0">
                  Specifications
                </div>
                <div className="w-[85%] mx-auto md:w-full flex flex-row flex-wrap md:flex-nowrap justify-between md:justify-start sm:flex-row gap-[2rem] sm:gap-[10%]">
                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm">
                      Energy Capacity
                    </div>
                    <div id="value">
                      <div className="text-white text-sm">
                        {currentBattery1.energyCapacity}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm">On-Grid Power</div>
                    <div id="value">
                      <div className="text-white text-sm">
                        {currentBattery1.onGridPower}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-[#979797] text-sm">Backup Power</div>
                    <div id="value">
                      <div className="text-white text-sm">
                        {currentBattery1.backupPower.peak}
                      </div>
                      <div className="text-white text-sm">
                        {currentBattery1.backupPower.motorStart}
                      </div>
                      <div className="text-white text-sm">
                        {currentBattery1.backupPower.transition}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          )}
        </div>

        {/* Learn redirect */}

        <AnimatedDiv>
        <div className="w-full bg-[#1f1f1f]">
          <div
            className="mt-[7rem] mb-[0rem] pt-[3rem] pb-[4rem] w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mx-auto cursor-pointer"
            onClick={handleRedirect}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[5%] p-6">
              <div className="w-full lg:w-[45%] mb-6 lg:mb-0">
                <Image
                  src="/images/hero/learn.png" // Replace with your image path
                  alt="Energy Innovation"
                  width={500} // Adjust width as needed
                  height={300} // Adjust height as needed
                  className="rounded-lg w-full"
                />
              </div>
              <div className="w-full lg:w-[50%] ">
                <h1
                  className={`text-2xl md:text-3xl font-bold mb-4 ${styles.color}`}
                >
                  Explore Topics in Energy Innovation
                </h1>
                <p className="text-base md:text-lg mb-6">
                  Dive deep into energy solutions, advanced BMS, IoT, Digital
                  Twins, AI, and the future of energy storage in India.
                </p>
                <button
                  className={`px-6 py-3 rounded-lg font-bold text-white bg-transparent border-[2px] ${styles.gradientBorder}`}
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
        </AnimatedDiv>

        {/* <div className="w-full h-[400px] flex items-center justify-center">
          <div
            className="w-full h-full mx-auto cursor-pointer relative overflow-hidden"
            onClick={handleRedirect}
          >
            
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('/images/hero/learn.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.25, // Set the image opacity here
              }}
            ></div>

            
            <div className="w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] h-full mx-auto relative flex items-center justify-center p-6 text-center">
              <div className="text-white w-[90%] md:w-[70%] lg:w-[60%]">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  Explore Topics in Energy Innovation
                </h1>
                <p className="text-base md:text-lg mb-6">
                  Dive deep into energy solutions, advanced BMS, IoT, Digital
                  Twins, AI, and the future of energy storage in India.
                </p>
                <button
                  className={`px-6 py-3 rounded-lg font-bold text-white bg-transparent border-[2px] ${styles.gradientBorder}`}
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Example;
