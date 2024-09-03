import React from 'react'
import GradientWrapper from "@/components/GradientWrapper";
import Image from "next/image";
import styles from "./styles.module.css";

import LayoutEffect from "@/components/LayoutEffect";
import { Box } from "@chakra-ui/react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Button,
} from "@chakra-ui/react";
import { act, useState } from "react";
import { useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import {  Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Link from 'next/link';



const Example = () => {
 
    // const [imageSrc, setImageSrc] = useState(HeroImg);
    const [para, setPara] = useState(false);
    const [para1, setPara1] = useState(false);
    const [para2, setPara2] = useState(false);
    const [para3, setPara3] = useState(false);
  
    
  
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
    <div>
     {/* <nav className="fixed top-3 left-[0%] right-0 w-[95%] mx-auto  flex items-center justify-between p-4 z-50 bg-transparent">
      
      <div>
        <img src="/images/logo1.png" width="160" alt="logo" />
      </div>

     
      <div className="relative group">
        <button className="text-white text-lg font-medium">
          Resources
        </button>
        <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">Blog</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">Learn</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md">Whitepapers</li>
          </ul>
        </div>
      </div>

     
      <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
        Coming Soon
      </button>
    </nav> */}

    <nav className="fixed top-3 left-[0%] right-0 w-[95%] mx-auto flex items-center justify-between p-4 z-50 bg-transparent">
      <div>
        <Link href="/">
          <img src="/images/logo1.png" width="160" alt="logo" />
        </Link>
      </div>
  

      <div className='flex gap-7 '>

      <button className="text-white text-lg font-medium hover:text-[#f6f6f6]">
         Product 1
        </button>

        <button className="text-white text-lg font-medium">
        Product 2
        </button>

      <div className="relative group">
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
      </div>

      </div>

      <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
        <Link href="/coming-soon">Coming Soon</Link>
      </button>
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
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center p-16 space-y-2"
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
            <div className=" pt-8 flex gap-7">
              <div className={styles.gradientButton}>Watch Video</div>
              <Button
                bg={"transparent"}
                border={"1px"}
                borderColor={"white"}
                color={"white"}
              >
                Watch the Event
              </Button>
            </div>
          </motion.div>
         
        </div>
      
      </LayoutEffect>
    </div>
  )
}

export default Example;
