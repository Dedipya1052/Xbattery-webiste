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

    const [isScrolled, setIsScrolled] = useState(false);

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
  
  
    useEffect(() => {
      if (isInView1) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, isInView1]);
  
  
  

  return (
    <div className={styles.head1}>
      <nav
        className={`fixed top-0 left-[0%] right-0 w-[100%] mx-auto flex items-center justify-between p-4 pt-[1rem] z-50 transition-colors duration-300 ${
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

          {/* <button className="text-white text-lg font-medium">Product 2</button> */}

          {/* <div className="relative group">
            <button className="text-white text-lg font-medium">
              Resources
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                  <Link href="/learn">Learn</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">
                  <Link href="/whitepapers">Whitepapers</Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>

        <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
          <Link href="/coming-soon">Coming Soon</Link>
        </button>
        </div>
      </nav>

      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div className="relative w-full top-[-4rem] ">
          <video width="100%" autoPlay muted>
            <source src="/videos/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            ref={ref}
            initial={{ x: "-100%" }}
            animate={{ x: isInView ? 0 : "-100%" }}
            transition={{ duration: 1, delay: 7.5 }}
            className="absolute top-8 left-0 w-full h-full flex flex-col items-start justify-center p-16 space-y-2"
          >
            <div className="text-white text-4xl  font-medium mb-4">
              XBattery
            </div>
            <div className="text-white text-6xl font-bold">
              Power for the Extreme
            </div>
            <div className="text-white text-2xl font-light pt-5 pl-1">
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
