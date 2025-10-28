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

import NavbarNavigation from "../NavbarNavigation";

import AnimatedDiv from "../Animate";

import IconWithGradient from "../IconGradient";

import CustomTooltip from "@/components/ui/CustomTooltip";

import { FaCar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { motion } from "framer-motion";

import { useRouter } from "next/router";

import BMSToggle from "@/components/ui/BMSToggle";

import Head from "next/head";







const Example = ({ media, recentBlogs }) => {

  const router = useRouter();

  // Function to handle navigation to energy storage page
  const navigateToEnergyStorage = (event) => {
    event.preventDefault();
    router.push("/energy-storage");
  };

  const videoUrl1 = media?.video1?.fields?.file?.url;



  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [bmsToggle, setBmsToggle] = useState('ENERGY STORAGE');



  const [isScrolled, setIsScrolled] = useState(false);

  const [isEnergyStorageInView, setIsEnergyStorageInView] = useState(false);
  const [isProductsInView, setIsProductsInView] = useState(false);



  const ref = useRef(null);

  const ref1 = useRef(null);

  const reference = useRef(null);

  const energyStorageRef = useRef(null);
  const productsRef = useRef(null);
  const essScrollRef = useRef(null);
  const evScrollRef = useRef(null);



  const handleMenuItemClick = () => {

    setMobileMenuOpen(false);

  };



  // If returning from a BMS page, scroll directly to the BMS offerings cards

  useEffect(() => {

    if (typeof window === 'undefined') return;

    const shouldScroll = sessionStorage.getItem('scrollToOfferings');
    const shouldScrollToESS = sessionStorage.getItem('scrollToESS');

    if (shouldScroll) {

      sessionStorage.removeItem('scrollToOfferings');

      const el = document.getElementById('bms-offerings');

      if (el) {

        const headerOffset = 80;

        const elementPosition = el.getBoundingClientRect().top;

        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'instant' in window ? 'instant' : 'smooth' });

      }

    }

    if (shouldScrollToESS) {

      sessionStorage.removeItem('scrollToESS');

      // Set the toggle to ENERGY STORAGE to show ESS sections
      setBmsToggle('ENERGY STORAGE');

      // Add a small delay to ensure the toggle state is updated before scrolling
      setTimeout(() => {
        const el = document.getElementById('bms-offerings');

        if (el) {

          const headerOffset = 80;

          const elementPosition = el.getBoundingClientRect().top;

          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({ top: offsetPosition, behavior: 'instant' in window ? 'instant' : 'smooth' });

        }
      }, 100);

    }

  }, []);



  // Enhanced anchor link handling for footer navigation and BMS offerings

  useEffect(() => {

    const scrollToSection = (hash) => {

      if (typeof window !== 'undefined' && hash) {

        console.log('Looking for element with hash:', hash);

        const element = document.getElementById(hash);

        if (element) {

          console.log('Found element:', element);

          console.log('Element text content:', element.textContent?.substring(0, 100));

          // Reduced header offset to prevent over-scrolling

          const headerOffset = 60;

          const elementPosition = element.getBoundingClientRect().top;

          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;



          console.log('Scrolling to position:', offsetPosition);

          window.scrollTo({

            top: offsetPosition,

            behavior: 'smooth'

          });

        } else {

          console.log('Element not found for hash:', hash);

        }

      }

    };



    // Handle initial page load with hash, prioritizing bms-offerings

    if (typeof window !== 'undefined') {

      const hash = (window.location.hash || '').substring(1);

      if (hash === 'bms-offerings') {

        setTimeout(() => scrollToSection('bms-offerings'), 200);

      } else if (hash) {

        setTimeout(() => scrollToSection(hash), 300);

      }

    }



    // Handle route changes (when navigating from other pages)

    const handleRouteChange = () => {

      if (typeof window !== 'undefined' && window.location.hash) {

        const hash = window.location.hash.substring(1);

        setTimeout(() => scrollToSection(hash), 500);

      }

    };



    router.events.on('routeChangeComplete', handleRouteChange);



    return () => {

      router.events.off('routeChangeComplete', handleRouteChange);

    };

  }, [router]);



  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 75) {

        setIsScrolled(true);

      } else {

        setIsScrolled(false);

      }



      // Check if energy storage section is in view

      if (energyStorageRef.current) {

        const rect = energyStorageRef.current.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        const headerOffset = 300; // Increased from 100 to 300 to highlight earlier

        
        
        // Check if the section is in the viewport (when top is near the top of viewport)

        const isInView = rect.top <= headerOffset;

        
        
        console.log('Energy Storage section:', {

          top: rect.top,

          bottom: rect.bottom,

          isInView: isInView,

          scrollY: window.scrollY

        });

        
        
        setIsEnergyStorageInView(isInView);

        console.log('Setting isEnergyStorageInView to:', isInView);

      }

      // Check if products section is in view
      if (productsRef.current) {
        const rect = productsRef.current.getBoundingClientRect();
        const headerOffset = 300; // Same offset as energy storage
        
        // Check if the section is in the viewport
        const isInView = rect.top <= headerOffset;
        
        console.log('Products section:', {
          top: rect.top,
          bottom: rect.bottom,
          isInView: isInView,
          scrollY: window.scrollY
        });
        
        setIsProductsInView(isInView);
        console.log('Setting isProductsInView to:', isInView);
      }

    };



    window.addEventListener("scroll", handleScroll);



    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);



  // Debug useEffect to log state changes

  useEffect(() => {

    console.log('isEnergyStorageInView changed to:', isEnergyStorageInView);

  }, [isEnergyStorageInView]);



  const isView = useInView(reference, { once: false });

  const isInView = useInView(ref, { once: true });

  const isInView1 = useInView(ref1, { triggerOnce: false });



  const controls = useAnimation();

  const [objectPosition, setObjectPosition] = useState("object-center");



  const [objectPosition1, setObjectPosition1] = useState("object-right");



  const handlePlay = () => {

    setObjectPosition1("object-right"); // Reset to object-right initially

    setTimeout(() => {

      setObjectPosition1("object-center"); // Switch to object-center after 2 seconds

    }, 2670);

  };
  
  

  

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

      scalable: "15 kWh",

      certifications: {

        one: "IS 17387",

        two: "IEC 61000 Series",

        three: "ROHS/UL 94V0",

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

      scalable: "15 kWh",

      certifications: {

        one: "IS 17387",

        two: "IEC 61000 Series",

        three: "ROHS/UL 94V0",

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

      scalable: "150 kWh",

      certifications: {

       one: "IS 17387",

        two: "IEC 61000 Series",

        three: "ROHS/UL 94V0",

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

      scalable: "150 kWh",

      certifications: {

        one: "IS 17387",

        two: "IEC 61000 Series",

        three: "ROHS/UL 94V0",

      },

    },

  };



  const batteryFeatures = [

    {

      heading: "Reliable Backup",

      content: "Powers your home for up to a day during outages.",

    },

    {

      heading: "Solar Safeguard",

      content: "Stops charging automatically when the battery is full.",

    },

    {

      heading: "Intelligent Modes",

      content: "Adjusts for power cuts and restores seamlessly.",

    },

    {

      heading: "Expandable System",

      content: "Add modules as your energy needs grow.",

    },

  ];



  const batteryFeatures2 = [

    {

      heading: "Reliable Backup",

      content:

        "Keeps your business running during power outages, minimizing downtime.",

    },

    {

      heading: "Solar Safeguard",

      content:

        "Stops charging when the battery is full, optimizing efficiency.",

    },

    {

      heading: "Intelligent Modes",

      content: "Adapts to power cuts and restores seamlessly.",

    },

    {

      heading: "Scalable for Business",

      content: "Grows with your energy needs, ideal for large operations.",

    },

  ];



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

  const videoRef3 = useRef(null);

  const videoRefHero2 = useRef(null);

  const hasPlayedHero2 = useRef(false);

  const [showHero2Text, setShowHero2Text] = useState(false);



  useEffect(() => {

    const handlePlayVideo = (entries) => {

      entries.forEach((entry) => {

        // For hero block 2: only play once

        if (entry.target === videoRefHero2.current) {

          if (entry.isIntersecting && !hasPlayedHero2.current) {

            entry.target.currentTime = 0;

            entry.target.play();

            hasPlayedHero2.current = true;

            setShowHero2Text(true); // Show text immediately

          }

          // Do NOT pause when not intersecting for hero2

        } else {

          // Default behavior for other videos

          if (entry.isIntersecting) {

            entry.target.currentTime = 0;

            entry.target.play();

          } else {

            entry.target.pause();

          }

        }

      });

    };



    const observer = new window.IntersectionObserver(handlePlayVideo, {

      threshold: 0.5, // Adjust this value as needed

    });



    // Copy the current ref values into local variables

    const currentVideoRef1 = videoRef1.current;

    const currentVideoRef2 = videoRef2.current;

    const currentVideoRef3 = videoRef3.current;

    const currentVideoRefHero2 = videoRefHero2.current;



    if (currentVideoRef1) observer.observe(currentVideoRef1);

    if (currentVideoRef2) observer.observe(currentVideoRef2);

    if (currentVideoRef3) observer.observe(currentVideoRef3);

    if (currentVideoRefHero2) observer.observe(currentVideoRefHero2);



    return () => {

      if (currentVideoRef1) observer.unobserve(currentVideoRef1);

      if (currentVideoRef2) observer.unobserve(currentVideoRef2);

      if (currentVideoRef3) observer.unobserve(currentVideoRef3);

      if (currentVideoRefHero2) observer.unobserve(currentVideoRefHero2);

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

        // Silently handle autoplay failures on mobile

        if (error.name !== 'AbortError') {

          console.warn("Autoplay failed: ", error);

        }

      });

    }

  }, []);



  const handleRedirect = () => {

    router.push("/learn"); // Adjust the path if needed

  };



  // last email



  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");



  const handleSubmit = async (e) => {

    e.preventDefault(); // Prevent the form from reloading the page



    // Simple email validation

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



    if (!emailRegex.test(email)) {

      setMessage("Please enter a valid email address.");

      return;

    }



    try {

      // Send the email in JSON format to the API endpoint

      const res = await fetch(

        "https://a70b67b1955ee7fba12198dd1cf2e2.db.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/3fcf5123d0a54bd28b0f50caba32ac9e/triggers/manual/paths/invoke/?api-version=1&tenantId=tId&environmentName=a70b67b1-955e-e7fb-a121-98dd1cf2e2db&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bGUX_Lth_qV_26pM9x5AVZyisP0-TKA-A-mor-c05eQ",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify({ email }), // Send email as JSON

        }

      );

       //console.log(res);



      if (res.ok) {

        // Handle success

        setMessage("Thank you for registering!");

      } else {

        // Handle API errors

        const errorData = await res.json();

        setMessage(errorData.message || "Oops! Something went wrong.");

      }

    } catch (error) {

      // Handle network or other unexpected errors

      setMessage("Error while submitting. Please try again.");

    }

  };



  // redirect to email



  const emailRef = useRef(null);



  const scrollToEmail = (event) => {

    event.preventDefault(); // Prevent the default link behavior

    if (emailRef.current) {

      const headerOffset = 80; // Adjust this value to match your header height

      const elementPosition = emailRef.current.getBoundingClientRect().top;

      const offsetPosition =

        elementPosition + window.pageYOffset - headerOffset;



      window.scrollTo({

        top: offsetPosition,

        behavior: "smooth", // Smooth scrolling

      });

    }

  };



  const currentPath = router.pathname;



  return (

    <>

      <Head>

        <link

          rel="preload"

          href="/images/logo1.webp"

          as="image"

          type="image/webp"

        />

      </Head>



      <div className={styles.head1}>

        <nav

          className={`fixed top-0 left-0 w-[100%] md:w-full mx-auto flex items-center justify-between p-4 z-50 transition-colors duration-300 ${

            isScrolled ? "bg-black" : "bg-transparent"

          }`}

        >

          <div className="w-[95%] mx-auto flex items-center justify-between">

            <Link href="/">

              <Image

                src="/images/logo1.webp"

                width={160}

                height={160}

                title="logo"

                priority

                alt="XBattery Company Logo"

              />

            </Link>



            <div className="hidden lg:flex gap-7 items-center ml-auto mr-8">

              <NavbarNavigation isProductsInView={isProductsInView} isBlackNav={true} />

              <button

                onClick={navigateToEnergyStorage}

                className={`text-lg font-medium transition-colors duration-300 space-grotesk-medium ${

                  router.pathname === "/energy-storage"

                    ? "text-white"

                    : "text-[#cacaca] hover:text-[#e6e6e6]"

                }`}

              >

                Energy Storage

              </button>

              {[

                { href: "/bharat-bms", label: "BharatBMS" },

                { href: "/about", label: "About" },

                { href: "/blog", label: "Blog" },

                { href: "/whitepapers", label: "Whitepapers" },

              ].map((item) => (

                <Link href={item.href} key={item.href}>

                  <button

                    className={`text-lg font-medium transition-colors duration-300 space-grotesk-medium ${

                      currentPath === item.href

                        ? "text-white"

                        : "text-[#cacaca] hover:text-[#e6e6e6]"

                    }`}

                  >

                    {item.label}

                  </button>

                </Link>

              ))}

            </div>



            <button className="text-white text-sm bg-transparent border border-white px-[15px] py-[9px] rounded-full hover:bg-white hover:text-black transition-colors duration-300 hidden lg:block space-grotesk-medium">

              <Link

                href="https://customerappdev.xbattery.energy/"

                target="_blank"

              >

                Customer Portal

              </Link>

            </button>



            <button

              aria-label="menu"

              className="lg:hidden flex items-center text-white"

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

            <div className="lg:hidden absolute top-16 left-0 right-0 bg-black text-white flex flex-col items-center p-4 space-y-4">

              <NavbarNavigation isProductsInView={isProductsInView} isBlackNav={true} />

              <button

                onClick={(e) => {

                  navigateToEnergyStorage(e);

                  handleMenuItemClick();

                }}

                className={`text-lg font-medium transition-colors duration-300 space-grotesk-medium ${

                  router.pathname === "/energy-storage"

                    ? "text-white"

                    : "text-[#cacaca] hover:text-[#e6e6e6]"

                }`}

              >

                Energy Storage

              </button>

              {[

                { href: "/bharat-bms", label: "BharatBMS" },

                { href: "/about", label: "About" },

                { href: "/blog", label: "Blog" },

                { href: "/whitepapers", label: "Whitepapers" },

              ].map((item) => (

                <Link href={item.href} key={item.href}>

                                      <button

                      className={`text-lg font-medium transition-colors duration-300 space-grotesk-medium ${

                        currentPath === item.href

                          ? "text-white"

                          : "text-[#cacaca] hover:text-[#e6e6e6]"

                      }`}

                      onClick={handleMenuItemClick}

                    >

                      {item.label}

                    </button>

                </Link>

              ))}

              <Link

                href="https://customerappdev.xbattery.energy/"

                target="_blank"

              >

                <button

                  className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 space-grotesk-medium"

                  onClick={handleMenuItemClick}

                >

                  Customer Portal

                </button>

              </Link>

            </div>

          )}

        </nav>



        <div>

          {/* hero block 1*/}

          <LayoutEffect

            className="duration-1000 delay-300"

            isInviewState={{

              trueState: "opacity-1",

              falseState: "opacity-0",

            }}

          >

            <div className="relative w-full top-[2rem] md:top-[-4rem] ">

              <video

                ref={videoRef1} // add reference for this video

                className={`w-full h-[35vh] md:w-full md:h-auto object-contain object-center`}

                autoPlay

                muted

                playsInline

                preload="none" // Load only metadata for better performance

                onLoadedData={(e) => {

                  // Ensure video starts playing after it's loaded

                  if (e.target.readyState >= 3) {

                    // Check if video can be played

                    e.target.play().catch((error) => {

                      // Silently handle autoplay failures on mobile

                      if (error.name !== 'AbortError') {

                        console.warn("Autoplay failed:", error);

                      }

                    });

                  }

                }}

              >

                <source src="/videos/Xbattery-Hd.mp4" type="video/mp4" />

                Your browser does not support the video tag.

              </video>

              <motion.div

                ref={ref}

                initial={{ y: "-100%" }}

                animate={{ y: isInView ? 0 : "-100%" }}

                transition={{ duration: 1, delay: 7.55 }}

                className="absolute top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-start md:justify-center p-4 md:p-16 space-y-2 text-center"

              >

                {/* <div className="text-white text-3xl lg:text-4xl font-medium mb-4">

                Xbattery

              </div> */}



                             <div className="mt-[-3rem] sm:mt-[-1rem] md:mt-[-10rem] text-center flex flex-col items-center justify-center px-4">

                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">

                Introducing BharatBMS

                </h1>

                <h2 className="text-white text-base sm:text-base md:text-lg lg:text-xl font-light md:font-semilight pt-3 sm:pt-4 md:pt-5">

                Scalable BMS up to 800V for EVs & stationary energy storage

                </h2>

                {/* <div className="pt-8 flex gap-7 pl-2">

                 
                 
                  <Link href="/bharat-bms">

                    <Button

                      bg="transparent"

                      border="1px"

                      borderColor="white"

                      color="white"

                      _hover={{ bg: "transparent" }}

                      className="min-h-[48px] min-w-[48px]"

                    >

                      Know More

                    </Button>

                  </Link>

                </div> */}

                </div>

              </motion.div>



            </div>

          </LayoutEffect>





          <AnimatedDiv>



          <div className="w-full bg-[#181818] mt-[-4rem] md:mt-[-11rem]">

              <div

                className="mt-[4rem] md:mt-[7rem] mb-[0rem] pt-[2rem] md:pt-[3rem] pb-[8rem] w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mx-auto "                // onClick={handleRedirect}



              >

                <div className="flex flex-col lg:flex-row items-center justify-center gap-[5%] p-6">

                  <div className="w-full lg:w-[45%] mb-6 lg:mb-0">

                    <Image

                      src="/images/hero/bharat/chip1.png" // Replace with your image path

                      alt="Energy Innovation"

                      width={500} // Adjust width as needed

                      height={300} // Adjust height as needed

                      loading="lazy"

                      className="rounded-lg w-full mx-auto xl:scale-[1.2] 2xl:scale-[1.0] opacity-[75%]"

                    />

                  </div>

                  <div className="w-full lg:w-[50%] text-center lg:text-left">

                    <h1

                      className={`text-2xl md:text-3xl font-bold mb-4 ${styles.color} `}

                    >

                      BharatBMS

                    </h1>

                    <p className="text-base md:text-lg mb-6 text-white">

                      India's first universal Battery Management System scales

                      from 5kWh setups to megawatt applications, offering

                      modular upgrades and reliable performance in tough power

                      conditions.

                    </p>

                    <p className="text-base md:text-lg mb-6 text-white">

                      Made in India with local components, it ensures fast

                      support and customization while driving innovation in

                      energy storage and EV products.

                    </p>

                    <Link href={"/bharat-bms"}>

                      <button

                        className={`px-6 py-3 rounded-lg font-bold text-white bg-transparent border-[2px] ${styles.gradientBorder}`}

                      >

                        Know More →

                      </button>

                    </Link>

                  </div>

                </div>

              {/* BMS cards directly below BharatBMS text in the same section */}

              <div className="mt-6" id="bms-offerings" ref={productsRef}>

                <h3 className={`${styles.color} text-center text-2xl md:text-3xl font-bold mb-6 mt-[6rem]`}>OUR BMS OFFERINGS</h3>

                <BMSToggle 

                  onToggle={(value) => setBmsToggle(value)}

                  initialValue={bmsToggle}

                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-[4rem]">
                  {/* ESS Products */}
                  {bmsToggle === 'ENERGY STORAGE' && (
                    <>

                      {/* Xbattery BharatBMS-ESS-48V */}

                      <AnimatedDiv>

                        <Link href="/bharatbms-ess#ess-48v-white" className="group focus:outline-none">

                         <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-colors duration-200 hover:bg-[#10151a] hover:border-[#1e2a31] hover:outline-none hover:shadow-[0_0_0_0.5px_rgba(0,229,255,0.55)] isolate w-full">

              

                            <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">

                              <Image src="/images/telecom_good_looking-Photoroom.png" alt="Xbattery BharatBMS-ESS-48V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.30]" />

                            </div>

                            <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>

                              <span>Xbattery BharatBMS-ESS-48V</span>

                            </h4>

                            <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>

                            <p className="text-sm text-[#cfe3ea] mb-4 leading-relaxed break-words hyphens-auto w-full">Xbattery BharatBMS-ESS-48V delivers efficient <br /> management for modular energy storage systems, supporting LFP and NMC chemistries upto 16S configurations.</p>

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



                      {/* Xbattery BharatBMS-ESS-72V */}

                      <AnimatedDiv>

                    <Link href="/bharatbms-ess#ess-72v-white" className="group focus:outline-none">

                     <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#1e2a31] hover:outline-none hover:shadow-[0_0_0_0.5px_rgba(0,229,255,0.55)]">

          

                        <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">

                          <Image src="/images/bms_offerings/ess-72v.png" alt="XB-X 32S" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.40]" />

                        </div>

                        <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>

                          <span>Xbattery BharatBMS-ESS-72V</span>

                        </h4>

                        <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>

                        <p className="text-sm text-[#cfe3ea] mb-4">Xbattery BharatBMS-ESS-72V is engineered for industrial and medium-scale energy storage systems, supporting LFP and NMC chemistries upto 28S configurations.</p>

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



                      {/* Xbattery BharatBMS-ESS-110V */}

                      <AnimatedDiv>

                        <Link href="/bharatbms-ess#ess-110v-white" className="group focus:outline-none">

                         <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#1e2a31] hover:outline-none hover:shadow-[0_0_0_0.5px_rgba(0,229,255,0.55)]">

              

                            <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">

                              <Image src="/images/bms_offerings/ess2-110v.png" alt="Xbattery BharatBMS-ESS-110V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.20]" />

                            </div>

                            <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>

                              <span>Xbattery BharatBMS-ESS-110V</span>

                            </h4>

                            <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>

                            <p className="text-sm text-[#cfe3ea] mb-4">Xbattery BharatBMS-ESS-110V is engineered for large-scale energy storage and grid applications, supporting up to 42S configurations.</p>

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



                      {/* Removed: Xbattery BharatBMS-ESS-72V-D2 card */}

                    </>

                  )}



                  {/* EV Products */}

                  {bmsToggle === 'ELECTRIC VEHICLES' && (

                    <>
                      {/* Xbattery BharatBMS-EV-110V */}
                      <AnimatedDiv>
                        <Link href="/bharatbms-ev#ev-110v-white" className="group focus:outline-none">
                          <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
                            <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                              <Image src="/images/bms_offerings/ev-110v.png" alt="Xbattery BharatBMS-EV-110V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.35]" />
                            </div>
                            <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                              <span>Xbattery BharatBMS-EV-110V</span>
                            </h4>
                            <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                            <p className="text-sm text-[#cfe3ea] mb-4">BharatBMS-EV-110V is Optimized for e-rickshaws, autos, and tempos with up to 80S configurations and automotive-grade safety compliance.</p>
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

                      {/* Xbattery BharatBMS-EV-400V */}
                      <AnimatedDiv>
                        <Link href="/bharatbms-ev#ev-400v-white" className="group focus:outline-none">
                          <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
                            <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                              <Image src="/images/bms_offerings/ev-400v-2.png" alt="Xbattery BharatBMS-EV-400V" fill className="object-contain object-[5%_center] transition-transform duration-500 ease-out group-hover:scale-[1.18]" />
                            </div>
                            <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                              <span>Xbattery BharatBMS-EV-400V</span>
                            </h4>
                            <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                            <p className="text-sm text-[#cfe3ea] mb-4">BharatBMS-EV-400V is Designed for passenger cars with up to 120S configurations and advanced CAN FD communication protocols.</p>
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

                      {/* Xbattery BharatBMS-EV-600V */}
                      <AnimatedDiv>
                        <Link href="/bharatbms-ev#ev-600v-white" className="group focus:outline-none">
                          <div className="relative rounded-2xl bg-[#151a1d] border border-[#1e2a31] p-6 h-full min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex flex-col transition-all duration-200 hover:bg-[#10151a] hover:border-[#00e5ff]/30 hover:border-2 hover:outline-none">
                            <div className="relative w-full h-[180px] md:h-[200px] rounded-xl overflow-hidden mb-4">
                              <Image src="/images/bms_offerings/ev-500v.png" alt="Xbattery BharatBMS-EV-500V" fill className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.20]" />
                            </div>
                            <h4 className={`text-lg md:text-xl font-semibold mb-2 text-[#00e5ff]`}>
                              <span>Xbattery BharatBMS-EV-600V</span>
                            </h4>
                            <div className="w-16 h-[3px] bg-[#00e5ff] rounded-full mb-4"></div>
                            <p className="text-sm text-[#cfe3ea] mb-4">BharatBMS-EV-600V is built for buses and heavy commercial vehicles supporting up to 180S configurations with robust current handling.</p>
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
                    </>

                  )}

                </div>

              </div>

              </div>

            </div>

          </AnimatedDiv>



          {/* hero block 2*/}

          <div id="energystorage" ref={energyStorageRef}></div>

           <LayoutEffect

            className="duration-1000 delay-300"

            isInviewState={{

              trueState: "opacity-1",

              falseState: "opacity-0",

            }}

          >

            <div className="relative w-full top-[-4rem] " id="xbattery5kwh">

              <video

                ref={videoRefHero2}

                className={`w-auto h-[85vh] md:w-full md:h-auto object-cover ${objectPosition}`}

                muted

                playsInline

                preload="none" // Load only metadata for better performance

                onLoadedData={(e) => {

                  if (e.target.readyState >= 3) {

                    e.target.play().catch((error) => {

                      // Silently handle autoplay failures on mobile

                      if (error.name !== 'AbortError') {

                        console.warn("Autoplay failed:", error);

                      }

                    });

                  }

                }}

              >

                <source src={`https:${videoUrl1}`} type="video/mp4" />

                Your browser does not support the video tag.

              </video>

              {showHero2Text && (

                <motion.div

                  ref={ref}

                  initial={{ x: "-100%" }}

                  animate={{ x: isInView ? 0 : "-100%" }}

                  transition={{ duration: 1, delay: 6 }}

                  className="absolute top-0 md:top-0 left-0 right-0 w-full h-full flex flex-col items-center md:items-start justify-center p-4 md:p-16 space-y-2 text-left"

                >

                  <h1 className="text-white text-4xl lg:text-6xl text-center md:text-left font-bold">

                    Power Your Home 24/7 

                  </h1>

                  <h2 className="text-white text-lg lg:text-2xl text-center md:text-left font-light pt-5 pl-1">

                    High-performance lithium battery packs designed for India

                  </h2>

                  <div className=" pt-8 flex gap-7 pl-2">

                    <Button

                      bg="transparent"

                      border="1px"

                      borderColor="white"

                      color="white"

                       _hover={{ 
                         bg: "white",
                         borderColor: "rgba(255, 255, 255, 0.8)",
                         color: "black",
                         transform: "translateY(-2px)",
                         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                       }}

                       _active={{
                         transform: "translateY(0px)",
                         boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                         bg: "rgba(255, 255, 255, 0.95)"
                       }}

                       transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"

                      onClick={() => router.push('/energy-storage')}

                       className="min-h-[48px] min-w-[48px] font-medium tracking-wide"

                    >

More Details

                    </Button>

                  </div>

                </motion.div>

              )}

            </div>

          </LayoutEffect>



          {/* Capacity As Per Your Needs */}







          {/* last Image */}

          



          {/* 50 kWh Powerhouse */}

          <div className="mb-[8rem]"></div>

          {/* <div id="xbattery50kwh" className="w-[95%] md:w-[75%] 2xl:w-[1450px] mx-auto  flex flex-col-reverse lg:flex-row justify-center items-center gap-[1rem] overflow-hidden">

           
           
            <div className="w-full lg:w-[55%] flex justify-center">

              <AnimatedDiv>

                <div className="w-full h-full flex justify-center items-center">

                  <video

                    className="w-full h-[65vh] md:h-[65vh] lg:h-[70vh] 2xl:h-[600px] object-cover"

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




           
            <div

              className="w-full lg:w-[50%] mt-6 md:mt-0 px-4 md:px-0"

              ref={reference}

            >

              <motion.div

                initial={{ x: "100%", opacity: 0 }}

                animate={{ x: isView ? 0 : "100%", opacity: isView ? 1 : 0 }}

                transition={{ duration: 0.8, ease: "easeInOut" }}

                className="text-center lg:text-left"

              >

                <div className={`${styles.block3Head}`}>Xbattery 50kWh</div>

                <div className="text-white text-[1.2rem] sm:text-[1.3rem] mt-3">

                  Xbattery 50kWh is a powerful energy solution for businesses

                  and commercial establishments. It ensures the critical systems

                  that you depend on will run smoothly and efficiently.

                </div>

              </motion.div>

            </div>

          </div> */}



          {/* specifications 50kwh */}



          {/* <div className="mt-[7rem] mb-[3rem] sm:mb-[5rem] w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mx-auto">

            <AnimatedDiv>

              <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center relative ">

                <div

                  className={`${styles.block2Head} text-center md:text-left w-full md:w-[45%]`}

                >

                  Xbattery 50kWh

                </div>



                <div className="w-full md:w-[42%] flex flex-row gap-[2rem] md:gap-[1rem] justify-evenly relative">

                  
                  
                  <div

                    className="absolute bottom-[-15px] h-[2px] bg-white transition-all duration-300 ease-in-out"

                    style={{

                      width: "50%",

                      left: activeBattery === "XBattery1" ? "50%" : "0%",

                    }}

                  />




                  
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




           
            {activeBattery === "XBattery2" && (

              <AnimatedDiv>

                <div className="mt-[4rem] flex flex-col gap-[1rem] pb-[4rem] border-b-[1px] border-[#2e2e2e]">

                  <div className="text-white font-bold text-xl text-center md:text-left mb-3 md:mb-0">

                    Features

                  </div>

                  <div className="w-[85%] mx-auto md:w-full flex flex-row flex-wrap md:flex-nowrap justify-between md:justify-start sm:flex-row gap-[2rem] sm:gap-[10%]">

                    {batteryFeatures2.map((feature, index) => (

                      <div key={index} className="flex flex-col gap-2">

                        <div className="text-[#979797] text-sm text-left">

                          {feature.heading}

                        </div>

                        <div id="value">

                          <div className="text-white text-sm">

                            {feature.content}

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </AnimatedDiv>

            )}




           
            {activeBattery === "XBattery1" && (

              <AnimatedDiv>

                <div className="mt-[4rem] flex flex-col gap-[1rem] pb-[4rem] border-b-[1px] border-[#2e2e2e]">

                  <div className="text-white font-bold text-xl text-center md:text-left mb-3 md:mb-0">

                    Specifications

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

                      <div className="text-[#979797] text-sm">Scalable</div>

                      <div id="value">

                        <div className="text-white text-sm">

                          {currentBattery1.scalable}

                        </div>

                      </div>

                    </div>

                    <div className="flex flex-col gap-2">

                      <div className="text-[#979797] text-sm">

                        Certification

                      </div>

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

          </div> */}



          {/* 50kwh video */}

          {/* <AnimatedDiv>

            <div className="w-full">

              <video

                className={`w-auto h-[85vh] md:w-full md:h-auto object-cover ${objectPosition1}`}

                autoPlay

                muted

                // loop

                playsInline

                preload="none"

                ref={videoRef3}

                onPlay={handlePlay}

              >

                <source src={"/videos/50kwh/1080p.mp4"} type="video/mp4" />

                Your browser does not support the video tag.

              </video>

            </div>

          </AnimatedDiv> */}



          {/* Learn redirect */}



         

         

          <AnimatedDiv>

            <div className="w-full h-[400px] flex items-center justify-center">

              <div

                className="w-full h-full mx-auto cursor-pointer relative overflow-hidden"

                onClick={handleRedirect}

              >

                <Image

                  src="/images/hero/learn.webp"

                  alt="Learn Energy Storage, Batteries and more"

                  layout="fill" // Ensures it spans the full div dimensions

                  objectFit="cover"

                  objectPosition="center"

                  loading="lazy"

                  priority={false} // Let Next.js handle lazy loading

                  quality={75} // Adjust image quality if needed

                  className="absolute inset-0 opacity-20"

                />



                <div className="w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] h-full mx-auto relative flex items-center justify-center p-6 text-center">

                  <div className="text-white w-[90%] md:w-[70%] lg:w-[60%]">

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">

                      Learn Energy Storage, Batteries and more

                    </h2>

                    <p className="text-base md:text-lg mb-6">

                      Get insights into energy, energy storage, and how they

                      work. Our learning hub simplifies these concepts to help

                      you understand and make the most of sustainable energy.

                    </p>

                    <button

                      className={`px-6 py-3 rounded-lg font-bold text-white bg-transparent border-[2px] ${styles.gradientBorder}`}

                    >

                      Xbattery Learn Hub →

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </AnimatedDiv>



          {/* Blog Section */}

          {recentBlogs && recentBlogs.length > 0 && (

            <AnimatedDiv>

              <div className="w-[94%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[1450px] mx-auto py-[4rem]">

                <h2 className={`${styles.color1} text-center mb-8 text-[1.5rem] md:text-[1.4rem]`}>Latest Blogs</h2>

                
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                  {recentBlogs.map((blog, index) => (

                    <Link href={`/blog/${blog.slug}`} key={index} className="cursor-pointer">

                      <div className="bg-[#181818] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.01] h-full flex flex-col">

                        <div className="relative h-48 md:h-52 lg:h-50 xl:h-55 2xl:h-60 overflow-hidden">

                          {blog.thumbnail && blog.thumbnail.fields && blog.thumbnail.fields.file && (

                            <Image

                              src={`https:${blog.thumbnail.fields.file.url}`}

                              alt={blog.title}

                              layout="fill"

                              objectFit="cover"

                              className="transition-transform duration-500 hover:scale-[1.02]"

                            />

                          )}

                        </div>

                        <div className="p-5 flex flex-col flex-grow">

                          <div className="flex justify-between items-center mb-3">

                            <div className="text-sm text-gray-400">

                              {new Date(blog.date).toLocaleDateString('en-US', {

                                year: 'numeric',

                                month: 'short',

                                day: 'numeric'

                              })}

                            </div>

                            {blog.categories && blog.categories.length > 0 && (

                              <div className="bg-[#333] text-white text-xs px-2 py-1 rounded">

                                {blog.categories[0]}

                              </div>

                            )}

                          </div>

                          <h3 className="text-xl font-bold text-white mb-2">{blog.subtitle}</h3>

                          {/* {blog.subtitle && (

                            <p className="text-gray-300 text-sm mb-3">{blog.subtitle}</p>

                          )} */}

                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">

                            {blog.description}

                          </p>

                          <div className="mt-auto">

                            <span className={`text-md text-[#d8d8d8] hover:text-[white] transition-all duration-150`}>

                              Read More →

                            </span>

                          </div>

                        </div>

                      </div>

                    </Link>

                  ))}

                </div>

                
                
                <div className="text-center mt-8">

                  <Link href="/blog">

                    <button className={`px-5 py-2 rounded-lg font-medium text-white bg-transparent border-[1px] ${styles.gradientBorder} text-sm`}>

                      View All Blogs →

                    </button>

                  </Link>

                </div>

              </div>

            </AnimatedDiv>

          )}
           
           

           

          <AnimatedDiv>

            <div

              className="email-registration text-center pt-[2rem] pb-[2rem] "

              ref={emailRef}

              id="registerEmail"

            >

              <h2

                className={`text-2xl font-semibold mb-[1.5rem] ${styles.color1} font-bolder xl:min-h-[3rem] leading-[45px] md:leading-[60px]`}

              >

                Get the updates from Xbattery

              </h2>

              <form

                onSubmit={handleSubmit}

                className="flex justify-center items-center mb-4]"

              >

                <input

                  type="email"

                  placeholder="Enter your email"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                  required

                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:border-[#bbbbbb] w-auto sm:w-[300px] bg-[#0f0f0f] text-white min-h-[48px] min-w-[48px]"

                />

                <button

                  type="submit"

                  className="px-6 py-2 border border-gray-300 text-white rounded-r-md hover:bg-[#181818] focus:outline-none focus:ring-2 min-h-[48px] min-w-[48px]"

                >

Get Notified

                </button>

              </form>

              {message && <p className="text-gray-400 mt-4">{message}</p>}

            </div>

          </AnimatedDiv>





        </div>

      </div>

    </>

  );

};



export default Example;





