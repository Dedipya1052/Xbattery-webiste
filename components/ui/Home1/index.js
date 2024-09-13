import React from 'react'
import Image from "next/image";
import styles from "./styles.module.css";
import LayoutEffect from "@/components/LayoutEffect";
import {
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';






const Example = () => {
 
    // const [imageSrc, setImageSrc] = useState(HeroImg);
    const [para, setPara] = useState(false);
    const [para1, setPara1] = useState(false);
    const [para2, setPara2] = useState(false);
    const [para3, setPara3] = useState(false);

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
    const [objectPosition, setObjectPosition] = useState('object-center');

    useEffect(() => {
      const timer = setTimeout(() => {
        setObjectPosition('object-right'); // After 6 seconds, change to 'object-right'
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
  
  
  

  return (
    <div className={styles.head1}>
      {/* <nav
        className={`fixed top-0 left-[0]  w-full mx-auto flex items-center justify-between p-4 pt-[1rem] z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
      <div  className={` w-[95%] mx-auto flex items-center justify-between z-50 }`}>
        <div>
          <Link href="/">
            <Image
              src="/images/logo1.png"
              width="160"
              height={"160"}
              alt="logo"
              className=' opacity-[100%]'
            />
          </Link>
        </div>

        <div className="flex gap-7 ">
          <Link href="/">
            {" "}
            <button className="text-[#cacaca] text-lg font-medium hover:text-white">
              Product
            </button>
          </Link>

          <Link href={"/blog"}>
            <button className="text-[#cacaca] text-lg font-medium hover:text-white">
              Blog
            </button>
          </Link>

          <Link href={"/learn"}>
            <button className="text-[#cacaca] text-lg font-medium hover:text-white">
              Learn
            </button>
          </Link>

          <Link href={"/whitepapers"}>
            {" "}
            <button className="text-[#cacaca] text-lg font-medium hover:text-white">
              Whitepapers
            </button>
          </Link>

         
        </div>

        <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
          <Link href="/coming-soon">Coming Soon</Link>
        </button>
        </div>
      </nav> */}

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
          >
            <source src="/videos/1.mp4" type="video/mp4" />
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

      {/* <div className='text-white w-[100%] h-[300px] bg-[#101010] border-t-[0.1px] border-[#525252]'>
       <div className='w-[80%] mx-auto'>
       <div>
        hi
       </div>

       </div>
      </div> */}
    </div>
  );
}

export default Example;
