import React, { useRef, useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button, UnorderedList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import { motion } from "framer-motion";
import AnimatedDiv from "@/components/ui/Animate";
import NavLink from "@/components/ui/NavLink";
import Head from "next/head";
import { Box, Text, List, ListItem, VStack } from '@chakra-ui/react';
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const opportunitiesRef = useRef(null);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  


  const handleScroll = async (e) => {
    e.preventDefault();

    // Navigate to the about page, then smooth scroll
    await router.push('/about#teams'); // This navigates to /about page
    // const teamsSection = document.querySelector('#teams');

    // if (teamsSection) {
    //   // Smoothly scrolls to the section and stops exactly at it
    //   teamsSection.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start', // 'start' to align to the top of the viewport, 'center' for middle
    //   });
    // }
  };
  const handleScroll1 = async (e) => {
    e.preventDefault();

    await router.push('/about#story'); 
    // const teamsSection = document.querySelector('#story');

    // if (teamsSection) {
    //   // Smoothly scrolls to the section and stops exactly at it
    //   teamsSection.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start', // 'start' to align to the top of the viewport, 'center' for middle
    //   });
    // }
  };

  return (
    <>
      <Head>
        <title>Building India's Energy Storage Future | About Xbattery™</title>

        <meta property="og:image" content="/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta property="og:title" content="About Us | Xbattery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xbattery.energy/about" />

        <meta
          name="description"
          content="Learn more about Xbattery and our mission to transform energy storage in India using advanced BMS, IoT, Digital Twins, and AI."
        />
      </Head>

      <div className={`${classes.head1} bg-black`}>
        {/* banner */}
        <div className="w-full  h-[550px] md:h-[650px] 2xl:h-[80vh] relative overflow-hidden">
          {/* <Image
            src="/images/about/hero.png" // Ensure the correct path to your image 
            width={1500}
            height={1500}
            className="w-full h-full  object-cover object-top" 
            alt="hero"
          /> */}
          <video
            className={`w-auto h-[85vh] md:w-full md:h-[650px] 2xl:h-[80vh] object-cover object-bottom`}
            style={{ objectPosition: "center bottom" }}
            autoPlay
            muted
            playsInline
            loop
            preload="none"
          >
            <source src={"/videos/about/1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }} // Assuming you want it to always animate in
            transition={{ duration: 0.75, delay: 0 }}
            className={`absolute md:top-0 md:left-0  md:right-0 top-[-2rem] w-full md:w-[90%]  mx-auto h-full flex flex-col items-center md:items-start justify-center p-4 md:p-16 space-y-2 text-left ${classes.color}`}
          >
            {/* <div className="text-[white] text-4xl lg:text-4xl font-medium mb-4">
              About us
            </div> */}
            <div className="text-white text-3xl lg:text-3xl text-center md:text-left font-bold">
              Coding for 10,000+ Lithium Cells. Zero Errors. One Platform.
            </div>
            <div className="pt-8 flex gap-7 pl-2">
              <Button
                bg="transparent"
                border="1px"
                borderColor="white"
                color="white"
                _hover={{ bg: "transparent" }}
                onClick={handleScroll1}
              >
                Our message
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Xbattery: Powering the Future  and story*/}
        <div className="w-[100%] mx-auto overflow-hidden mt-[-2rem] md:mt-[2rem]">
          <section className="bg-black py-12 mt-[3rem] ">
            <AnimatedDiv>
              <div className="text-center mb-12 text-white w-[90%] sm:w-[85%] mx-auto">
                <h2 className={`${classes.block3Head}`}>Xbattery</h2>
                <p className="text-xl mt-[2rem] ">
                  {/* Xbattery builds large battery packs that help businesses and
                  grids store energy affordably and access it on demand. */}
                  Xbattery is building lithium battery packs in India, including
                  electronics and software, to help businesses, EVs and grids
                  store energy affordably and access it on demand.
                </p>
              </div>
            </AnimatedDiv>

            {/* Icon blocks */}
            <AnimatedDiv>
              <div className="flex flex-col md:flex-row justify-center gap-[2rem] md:gap-[5rem] mb-16">
                <div className="text-center text-white">
                  <div className="flex justify-center items-center  p-4 rounded-full mb-4">
                    {/* Replace with the actual icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="67"
                      height="72"
                      viewBox="0 0 67 55"
                      fill="none"
                    >
                      <path
                        d="M63.78 31.1501C59.18 35.2501 52.99 36.8001 46.86 41.1201C46.2 41.5901 43.31 43.7401 41.37 45.6201C40.43 46.5301 39.9 47.1301 38.93 48.1101C38.37 48.6701 37.86 49.1601 37.69 49.3201C36.87 50.1001 34.41 52.4501 31.05 53.5301C29.94 53.8901 27.63 54.6301 24.8 53.9901C20.84 53.0901 18.07 49.9501 17.23 47.5801C17.09 47.1801 16.76 46.1001 16.55 44.7301C16.42 43.8201 16.41 43.2401 16.37 42.0701C16.27 38.9601 16.21 37.3901 16.02 36.5901C15.89 36.0501 15.49 34.6401 14.48 33.2301C13.11 31.3201 11.7 30.9301 7.26998 27.9201C6.93998 27.7001 6.24998 27.1801 5.35998 26.4701C4.87998 26.0801 4.35998 25.6101 3.73998 24.9301C1.50998 22.5001 0.849983 20.7001 0.679983 20.2201C0.319983 19.1501 -0.550017 16.5601 0.469983 13.6801C1.23998 11.4901 2.70998 10.2201 3.38998 9.65009C6.93998 6.65009 11.77 6.66009 13.71 6.78009C14.01 6.80009 14.24 6.82009 14.39 6.83009C21.24 7.50009 36.55 11.0601 37.59 11.3001C49.38 14.0101 57.37 14.0601 63 18.0601C65.78 20.0301 66.48 21.9001 66.72 22.9301C67.33 25.5801 66.11 28.0301 65.81 28.5901C65.1 29.9301 64.2 30.7601 63.77 31.1501H63.78Z"
                        fill="url(#paint0_linear_67_14)"
                      ></path>
                      <path
                        d="M22.34 27.9901C29.7627 27.9901 35.78 21.9728 35.78 14.5501C35.78 7.1274 29.7627 1.11011 22.34 1.11011C14.9173 1.11011 8.89996 7.1274 8.89996 14.5501C8.89996 21.9728 14.9173 27.9901 22.34 27.9901Z"
                        fill="white"
                      ></path>
                      <path
                        d="M22.34 29.1C14.32 29.1 7.78998 22.57 7.78998 14.55C7.78998 6.53 14.32 0 22.34 0C30.36 0 36.89 6.53 36.89 14.55C36.89 22.57 30.36 29.1 22.34 29.1ZM22.34 2.22C15.54 2.22 10.01 7.75 10.01 14.55C10.01 21.35 15.54 26.88 22.34 26.88C29.14 26.88 34.67 21.35 34.67 14.55C34.67 7.75 29.14 2.21 22.34 2.21V2.22Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M32.7494 24.1922L31.0834 25.6594L36.1658 31.4304L37.8319 29.9632L32.7494 24.1922Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M32.0797 30.4287L37.3897 25.4926L55.6569 45.1435C57.0254 46.6157 56.9413 48.9193 55.4692 50.2878C54.0116 51.6427 51.7221 51.5591 50.3672 50.1016L32.0797 30.4287Z"
                        fill="white"
                      ></path>
                      <path
                        d="M52.97 52.6699C51.91 52.6699 50.85 52.2499 50.07 51.4099L30.51 30.3699L37.44 23.9199L56.98 44.9399C58.47 46.5499 58.38 49.0699 56.78 50.5699L55.66 51.6099C54.9 52.3199 53.93 52.6699 52.97 52.6699ZM33.64 30.4799L51.69 49.8999C52.34 50.5999 53.45 50.6399 54.15 49.9899L55.27 48.9499C55.98 48.2899 56.02 47.1699 55.36 46.4499L37.32 27.0499L33.63 30.4799H33.64Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M14.64 10.7999C14.93 10.2499 16.43 7.51989 19.83 6.41989C23.3 5.28989 26.18 6.69989 26.71 6.96989"
                        fill="white"
                      ></path>
                      <path
                        d="M14.64 11.9099C14.47 11.9099 14.29 11.8699 14.13 11.7799C13.59 11.4999 13.38 10.8299 13.66 10.2799C14.24 9.17992 15.96 6.50992 19.49 5.35992C23.09 4.18992 26.09 5.39992 27.22 5.97992C27.76 6.25992 27.98 6.92992 27.7 7.46992C27.42 8.00992 26.75 8.22992 26.21 7.94992C25.52 7.59992 23.06 6.52992 20.17 7.46992C17.34 8.38992 15.97 10.6399 15.62 11.3099C15.42 11.6899 15.04 11.8999 14.64 11.8999V11.9099Z"
                        fill="#192232"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_67_14"
                          x1="62.9412"
                          y1="37.459"
                          x2="-1.55691"
                          y2="26.8617"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00BDB1"></stop>
                          <stop offset="0.23" stop-color="#00B9AF"></stop>
                          <stop offset="0.43" stop-color="#00AFAA"></stop>
                          <stop offset="0.6" stop-color="#009EA1"></stop>
                          <stop offset="0.77" stop-color="#008695"></stop>
                          <stop offset="0.93" stop-color="#006786"></stop>
                          <stop offset="1" stop-color="#00577E"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-md font-semibold">
                    Scientific Rigor with Human Touch
                  </h3>
                </div>

                <div className="text-center text-white">
                  <div className="flex justify-center items-center p-4 rounded-full mb-4">
                    {/* Replace with the actual icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="72"
                      viewBox="0 0 58 72"
                      fill="none"
                    >
                      <path
                        d="M48.11 64.3C41.02 64.09 38.2 56.88 29.28 55.98C28.68 55.92 28.15 55.9 27.63 55.88C22.04 55.65 20.1 56.76 15.82 56.8C13.51 56.83 11.34 56.85 8.77001 55.82C7.63001 55.36 4.31001 53.95 2.17001 50.27C1.70001 49.46 -0.339991 45.75 0.750009 41.18C1.60001 37.6 3.97001 35.41 5.21001 34.25C6.22001 33.31 6.77001 33.03 7.91001 32.19C9.16001 31.27 13.18 28.31 15.03 24.93C17.89 19.71 14.08 16.23 17.33 11.09C18.59 9.10005 20.2 8.00999 21.02 7.46999C25.21 4.69999 29.73 5.18 31.39 5.36001C39.04 6.16001 43.81 11.66 44.6 12.6C50.05 19.09 50.55 28.05 50.7 30.84C50.75 31.8 50.87 35.22 51.94 39.71C52.09 40.33 52.22 40.88 52.44 41.64C53.73 46.01 56.07 50.45 56.82 51.87C57 52.22 57.44 53.03 57.7 54.2C57.74 54.4 58 55.51 57.88 56.67C57.61 59.39 55.83 61.15 55.39 61.59C52.66 64.3 48.84 64.3 48.11 64.28V64.3Z"
                        fill="url(#paint0_linear_21_1694)"
                      ></path>
                      <path
                        d="M36.01 70.1L40.81 56.33H20.54L25.35 70.1H36.01Z"
                        fill="white"
                      ></path>
                      <path
                        d="M36.01 71.16H25.3601C24.9101 71.16 24.5101 70.87 24.3601 70.45L19.5501 56.68C19.4401 56.36 19.4901 56 19.6901 55.71C19.8901 55.42 20.2101 55.26 20.5601 55.26H40.8301C41.1701 55.26 41.5001 55.43 41.7001 55.71C41.9001 55.99 41.9501 56.35 41.8401 56.68L37.0301 70.45C36.8801 70.88 36.4801 71.16 36.0301 71.16H36.01ZM26.1101 69.03H35.26L39.3301 57.38H22.0501L26.1201 69.03H26.1101Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M42.04 51.95H19.31V56.33H42.04V51.95Z"
                        fill="white"
                      ></path>
                      <path
                        d="M42.05 57.39H19.31C18.72 57.39 18.25 56.91 18.25 56.33V51.95C18.25 51.36 18.73 50.89 19.31 50.89H42.04C42.63 50.89 43.1 51.37 43.1 51.95V56.33C43.1 56.92 42.62 57.39 42.04 57.39H42.05ZM20.38 55.26H40.99V53.01H20.37V55.26H20.38Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M31.68 52.58C31.54 52.58 31.4 52.55 31.26 52.49C30.72 52.26 30.47 51.64 30.7 51.1C33.71 44.03 31.21 39.91 28.79 35.92C26.01 31.34 23.14 26.6 31.57 19C32.01 18.61 32.68 18.64 33.07 19.08C33.46 19.52 33.43 20.19 32.99 20.58C25.87 27 27.86 30.28 30.61 34.82C33.05 38.85 36.1 43.87 32.66 51.94C32.49 52.34 32.1 52.5901 31.68 52.5901V52.58Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M50.15 19.66C43.51 24.38 32.44 20.2 32.44 20.2C32.44 20.2 32.14 8.37003 38.78 3.65003C45.42 -1.06997 56.49 3.10999 56.49 3.10999C56.49 3.10999 56.79 14.94 50.15 19.66Z"
                        fill="white"
                      ></path>
                      <path
                        d="M41.94 22.98C36.88 22.98 32.36 21.31 32.06 21.2C31.66 21.05 31.38 20.67 31.37 20.23C31.36 19.72 31.13 7.77996 38.16 2.78996C45.18 -2.20004 56.39 1.94998 56.86 2.11998C57.26 2.26998 57.54 2.65001 57.55 3.09001C57.56 3.60001 57.79 15.54 50.76 20.53C48.14 22.39 44.94 22.98 41.93 22.98H41.94ZM33.51 19.44C35.96 20.22 44.35 22.48 49.54 18.8C54.73 15.12 55.36 6.44999 55.43 3.87999C52.98 3.09999 44.59 0.840014 39.4 4.53001C34.21 8.21001 33.58 16.88 33.51 19.45V19.44Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M56.49 3.12C46.96 5.36 38.36 10.77 32.44 20.21Z"
                        fill="white"
                      ></path>
                      <path
                        d="M32.43 21.26C32.24 21.26 32.04 21.21 31.87 21.1C31.37 20.79 31.22 20.13 31.53 19.64C37.19 10.62 45.73 4.55001 56.24 2.08001C56.81 1.95001 57.38 2.29999 57.52 2.86999C57.65 3.43999 57.3 4.01002 56.73 4.15002C46.78 6.49002 38.69 12.23 33.33 20.77C33.13 21.09 32.78 21.27 32.43 21.27V21.26Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M42.7 44.76C38.25 46.07 33.06 41.77 33.06 41.77C33.06 41.77 35.09 35.34 39.54 34.03C43.99 32.72 49.18 37.02 49.18 37.02C49.18 37.02 47.15 43.45 42.7 44.76Z"
                        fill="white"
                      ></path>
                      <path
                        d="M40.91 46.07C36.64 46.07 32.57 42.75 32.38 42.59C32.05 42.31 31.91 41.86 32.04 41.45C32.13 41.17 34.3 34.46 39.23 33.01C44.17 31.56 49.62 36.01 49.85 36.2C50.18 36.48 50.32 36.93 50.19 37.34C50.1 37.62 47.93 44.33 43 45.78C42.31 45.98 41.61 46.07 40.91 46.07ZM34.32 41.39C35.72 42.38 39.34 44.64 42.39 43.74C45.45 42.84 47.27 38.99 47.9 37.39C46.5 36.4 42.88 34.14 39.83 35.04C36.77 35.94 34.95 39.79 34.32 41.39Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M49.18 37.01C43.63 36.45 37.99 37.77 33.06 41.76Z"
                        fill="white"
                      ></path>
                      <path
                        d="M33.06 42.83C32.75 42.83 32.44 42.7 32.23 42.44C31.86 41.98 31.93 41.31 32.39 40.95C37.2 37.06 43.05 35.34 49.29 35.97C49.87 36.03 50.3 36.55 50.24 37.13C50.18 37.71 49.66 38.14 49.08 38.08C43.41 37.51 38.1 39.07 33.73 42.6C33.53 42.76 33.3 42.8401 33.06 42.8401V42.83Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M13.02 32.27C6.76004 30.41 3.92004 21.36 3.92004 21.36C3.92004 21.36 11.24 15.32 17.5 17.17C23.76 19.03 26.6 28.08 26.6 28.08C26.6 28.08 19.28 34.12 13.02 32.27Z"
                        fill="white"
                      ></path>
                      <path
                        d="M15.56 33.69C14.61 33.69 13.65 33.57 12.71 33.29C5.98002 31.3 3.02002 22.07 2.90002 21.68C2.77002 21.27 2.90002 20.82 3.24002 20.54C3.56002 20.28 11.07 14.16 17.8 16.15C24.53 18.15 27.49 27.37 27.61 27.76C27.74 28.17 27.61 28.62 27.27 28.9C27 29.12 21.4 33.69 15.56 33.69ZM5.18003 21.73C5.97003 23.8 8.64002 29.86 13.32 31.25C18 32.64 23.55 29.01 25.34 27.71C24.55 25.64 21.88 19.58 17.2 18.19C12.52 16.8 6.97003 20.43 5.18003 21.73Z"
                        fill="#192232"
                      ></path>
                      <path
                        d="M26.6 28.08C20.47 23.17 12.8 20.42 3.91998 21.35Z"
                        fill="white"
                      ></path>
                      <path
                        d="M26.6 29.15C26.37 29.15 26.13 29.07 25.94 28.92C19.59 23.83 12.01 21.58 4.03001 22.42C3.44001 22.48 2.92001 22.0599 2.86001 21.4699C2.80001 20.8899 3.22001 20.36 3.81001 20.3C12.35 19.4 20.47 21.81 27.27 27.25C27.73 27.62 27.8 28.29 27.44 28.74C27.23 29 26.92 29.14 26.61 29.14L26.6 29.15Z"
                        fill="#192232"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_21_1694"
                          x1="0.440009"
                          y1="34.76"
                          x2="57.91"
                          y2="34.76"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00BDB1"></stop>
                          <stop offset="0.23" stop-color="#00B9AF"></stop>
                          <stop offset="0.43" stop-color="#00AFAA"></stop>
                          <stop offset="0.6" stop-color="#009EA1"></stop>
                          <stop offset="0.77" stop-color="#008695"></stop>
                          <stop offset="0.93" stop-color="#006786"></stop>
                          <stop offset="1" stop-color="#00577E"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-md font-semibold">
                    Sustainability & Clearn Energy Focus
                  </h3>
                </div>

                <div className="text-center text-white">
                  <div className="flex justify-center items-center  p-4 rounded-full mb-4">
                    {/* Replace with the actual icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="113"
                      height="72"
                      viewBox="0 0 113 109"
                      fill="none"
                    >
                      <path
                        d="M8.86999 25.8599C10.65 24.6899 12.28 23.9899 16.15 22.7199C26.75 19.2499 28.64 20.05 37.26 17.01C40.46 15.88 44.67 14.39 49.88 11.69C52.89 10.12 54.11 9.34997 55.76 8.44997C57.92 7.26997 73.76 -1.34006 84.08 4.60994C86.13 5.78994 89.35 8.33996 91.38 12.31C92.13 13.77 92.55 15.09 92.83 16.2C94.69 23.55 92.47 29.48 92.36 35.26C92.21 43.01 95.84 48.9699 98.41 53.0899C102.98 60.4199 108.55 63.9199 111.35 72.5799C111.76 73.8499 112.23 75.6099 112.28 77.8399C112.31 79.3999 112.22 84.6199 108.44 89.4399C105.65 92.9999 102.25 94.5899 100.84 95.2099C91.39 99.3599 81.14 95.58 78.92 94.76C75.72 93.58 74.73 92.6499 70.14 91.1999C65.96 89.8799 62.14 89.25 60.64 89.05C50.05 87.6 46.23 90.2299 39.63 86.5699C39.03 86.2299 38.61 85.96 38.32 85.77C28.71 79.48 30.44 69.49 24.04 61.01C16.19 50.6 4.31 53.3799 0.919995 43.1099C0.589995 42.1099 -0.290001 39.34 0.439999 36.05C1.71 30.28 7.01 27.0699 8.88 25.8499L8.86999 25.8599Z"
                        fill="url(#paint0_linear_202_292)"
                      ></path>
                      <path
                        d="M41.43 54.8701C41.49 60.4001 41.57 68.4001 41.43 79.2201C41.36 84.7901 41.25 89.4201 41.16 92.6101C41.97 94.7301 42.78 96.8501 43.6 98.9701C46.67 101.31 49.73 103.66 52.8 106C56.05 106.09 59.29 106.18 62.54 106.27C65.25 104.65 67.95 103.02 70.66 101.4C72.37 98.3301 74.09 95.2701 75.8 92.2001C75.71 65.7701 75.62 39.3501 75.53 12.9201C77.38 12.2001 79.23 11.4801 81.08 10.7601C81.13 8.55013 81.17 6.34013 81.22 4.13013C79.64 3.54013 78.06 2.96012 76.49 2.37012C63.32 2.51012 50.15 2.64015 36.99 2.78015C36.27 3.82015 35.55 4.85014 34.83 5.89014C34.97 7.24014 35.1 8.60013 35.24 9.95013C36.19 10.6701 37.13 11.3901 38.08 12.1101C39.07 12.4301 40.06 12.7401 41.06 13.0601C41.22 29.7201 41.38 46.4201 41.47 54.8601L41.43 54.8701Z"
                        fill="white"
                      ></path>
                      <path
                        d="M49.94 90.0601C49.94 91.9101 50.66 93.6399 51.95 94.9399C53.25 96.2499 54.98 96.96 56.82 96.96C58.67 96.96 60.39 96.25 61.7 94.95C63.01 93.65 63.72 91.92 63.72 90.08C63.72 86.28 60.64 83.1899 56.84 83.1899C53.04 83.1899 49.94 86.2799 49.95 90.0699L49.94 90.0601ZM60.69 90.08C60.69 92.15 58.9 93.9399 56.83 93.9399C55.79 93.9399 54.83 93.5301 54.11 92.8101C53.39 92.0901 52.98 91.11 52.99 90.09C52.99 89.03 53.42 88.06 54.12 87.37C54.82 86.68 55.79 86.25 56.84 86.25C58.97 86.22 60.7 87.95 60.7 90.09L60.69 90.08Z"
                        fill="#192232"
                        stroke="#192232"
                        stroke-width="0.8"
                        stroke-miterlimit="10"
                      ></path>
                      <path
                        d="M55.36 36.65C55.36 40.45 58.44 43.54 62.24 43.54C64.13 43.54 65.86 42.78 67.12 41.53C68.37 40.28 69.15 38.56 69.14 36.66C69.14 34.81 68.42 33.08 67.13 31.78C65.84 30.48 64.1 29.76 62.26 29.76C60.41 29.76 58.69 30.47 57.38 31.77C56.09 33.09 55.37 34.81 55.36 36.64V36.65ZM64.98 33.95C65.71 34.68 66.11 35.65 66.1 36.67C66.1 38.79 64.36 40.52 62.24 40.53C60.11 40.52 58.39 38.79 58.38 36.67C58.38 35.63 58.79 34.67 59.51 33.95C60.23 33.23 61.21 32.82 62.23 32.83C63.28 32.82 64.24 33.23 64.97 33.96L64.98 33.95Z"
                        fill="#192232"
                        stroke="#192232"
                        stroke-width="0.8"
                        stroke-miterlimit="10"
                      ></path>
                      <path
                        d="M78.02 13.92C79.39 13.92 80.68 13.38 81.65 12.42C82.62 11.45 83.15 10.16 83.16 8.79999V6.21002C83.16 3.37002 80.87 1.08001 78.04 1.07001L38.86 1.03003C38.42 1.03003 37.65 1.08002 36.79 1.46002C36.57 1.56002 35.88 1.88003 35.23 2.53003C33.89 3.88003 33.75 5.63997 33.72 6.15997V8.75C33.72 10.12 34.25 11.41 35.22 12.38C36.19 13.35 37.48 13.88 38.84 13.89H39.56L39.49 89.1801C39.48 99.5801 47.95 108.06 58.34 108.07C63.38 108.07 68.12 106.11 71.69 102.55C75.26 98.99 77.24 94.25 77.24 89.21L77.31 13.92H78.02ZM74.2 89.2C74.2 93.43 72.55 97.41 69.55 100.4C66.55 103.39 62.57 105.03 58.34 105.03C49.61 105.03 42.5 97.9 42.51 89.17L42.53 65.72C44.85 67.32 48.48 69.2499 52.28 69.0699C55.08 68.9299 57.51 67.71 59.51 65.41C64.68 59.48 72.08 63.77 74.22 65.21L74.2 89.2ZM74.23 61.65C69.66 59.12 62.45 57.4 57.25 63.42C55.8 65.1 54.13 65.95 52.16 66.05C48.06 66.25 43.91 63.0801 42.54 61.9301V50.29H47.64C48.07 50.29 48.44 50.12 48.71 49.85C48.98 49.58 49.16 49.2 49.15 48.78C49.15 47.95 48.48 47.27 47.63 47.26H42.54V38.12H47.63C48.06 38.12 48.43 37.9599 48.7 37.6899C48.97 37.4199 49.15 37.04 49.14 36.62C49.14 35.79 48.47 35.11 47.62 35.1H42.53V25.96H47.62C48.05 25.96 48.42 25.8 48.69 25.53C48.96 25.26 49.14 24.88 49.13 24.46C49.13 23.63 48.46 22.95 47.61 22.94H42.52V13.91L74.21 13.94V61.64L74.23 61.65ZM36.73 8.77002V6.17999C36.73 5.58999 36.97 5.07001 37.34 4.70001C37.71 4.33001 38.25 4.08003 38.83 4.09003L78.01 4.13C79.16 4.13 80.1 5.07999 80.11 6.23999V8.83002C80.11 9.96002 79.13 10.93 78 10.93L38.81 10.87C38.25 10.87 37.72 10.65 37.33 10.26C36.95 9.85001 36.72 9.34002 36.72 8.77002H36.73Z"
                        fill="#192232"
                        stroke="#192232"
                        stroke-width="0.8"
                        stroke-miterlimit="10"
                      ></path>
                      <path
                        d="M60.05 73.61C60.05 76.76 62.6 79.3201 65.74 79.3101C67.31 79.3101 68.75 78.67 69.77 77.65C70.79 76.63 71.44 75.2 71.44 73.62C71.44 70.47 68.89 67.91 65.75 67.92C62.61 67.9 60.04 70.47 60.05 73.61ZM68.42 73.61C68.42 75.03 67.17 76.28 65.75 76.27C65.03 76.27 64.37 75.99 63.86 75.48C63.35 74.97 63.07 74.31 63.07 73.59C63.07 72.87 63.35 72.2099 63.86 71.6999C64.37 71.1899 65.03 70.91 65.75 70.91C66.47 70.91 67.13 71.1899 67.64 71.6999C68.15 72.2099 68.4 72.89 68.41 73.6L68.42 73.61Z"
                        fill="#192232"
                        stroke="#192232"
                        stroke-width="0.8"
                        stroke-miterlimit="10"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_202_292"
                          x1="30.1825"
                          y1="28.3697"
                          x2="137.533"
                          y2="78.5563"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00C0B1"></stop>
                          <stop offset="0.23" stop-color="#00BCAF"></stop>
                          <stop offset="0.42" stop-color="#00B2AA"></stop>
                          <stop offset="0.6" stop-color="#00A1A2"></stop>
                          <stop offset="0.76" stop-color="#008997"></stop>
                          <stop offset="0.92" stop-color="#006A89"></stop>
                          <stop offset="1" stop-color="#005881"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-md font-semibold">
                    Economic Sustainability
                  </h3>
                </div>
              </div>
            </AnimatedDiv>

            <AnimatedDiv>
              <div className="relative bg-[#1f1e1e] py-16 mt-[5rem] mb-[30rem] pb-[20rem] ">
                <div className="flex flex-col gap-[3rem] md:gap-0 md:flex-row justify-around relative z-10 w-[93%] md:w-[90%] xl:w-[90%] 2xl:w-[1450px] mx-auto">
                  <div className="text-center text-white">
                    <div className="flex gap-[0.4rem] justify-center items-center mb-[1rem]">
                      <Image
                        src="/images/about/teams/shortimages/1.png"
                        alt="photo"
                        height="50"
                        width="50"
                        className="rounded-full"
                      />
                      <Image
                        src="/images/about/teams/shortimages/2.png"
                        alt="photo"
                        height="50"
                        width="50"
                        className="rounded-full"
                      />
                      <Image
                        src="/images/about/teams/shortimages/3.png"
                        alt="photo"
                        height="50"
                        width="50"
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Meet Our Leadership Team
                    </h3>
                    <p className="mt-2 mb-4">
                      Learn more about the executives leading Xbattery.
                    </p>
                    <Link href="/about#teams">
                      <button
                        className="bg-white text-black py-2 px-6 rounded-full font-semibold transition hover:bg-gray-300"
                        onClick={handleScroll}
                      >
                        Meet Our Leaders
                      </button>
                    </Link>
                  </div>

                  <div className="text-center text-white">
                    <div className="flex gap-[0.4rem] justify-center items-center mb-[0.5rem]">
                      <Image
                        src="/images/about/teams/shortimages/4.svg"
                        alt="photo"
                        height="45"
                        width="45"
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold">Join Our Team</h3>
                    <p className="mt-2 mb-4">
                      Make Xbattery the best chapter of your career.
                    </p>
                    <Link href="/careers">
                      <button className="bg-white text-black py-2 px-6 rounded-full font-semibold transition hover:bg-gray-300">
                        View Open Opportunities
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="absolute bottom-[-12rem] left-0 right-0 w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[1450px] mx-auto flex justify-evenly flex-wrap md:flex-nowrap">
                  {/* Image wrapper that hides all but one image on mobile */}
                  <div className="w-[90%] md:w-[45%] lg:w-[30%] h-[450px] object-cover rounded-md">
                    <Image
                      src="/images/about/people/2.png"
                      alt="photo"
                      height="600"
                      width="600"
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>

                  {/* Display the rest of the images only on medium screens and above */}
                  <div className="hidden md:block md:w-[45%] lg:w-[30%] h-[450px] object-cover rounded-md">
                    <Image
                      src="/images/about/people/1.png"
                      alt="photo"
                      height="600"
                      width="600"
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>
                  <div className="hidden lg:block w-[30%] h-[450px] object-cover rounded-md">
                    <Image
                      src="/images/about/people/3.png"
                      alt="photo"
                      height="600"
                      width="600"
                      className="object-cover rounded-md w-full h-full object-center "
                    />
                  </div>
                </div>
              </div>
            </AnimatedDiv>

            <div id="story"></div>
            <AnimatedDiv>
              <div className="relative bg-[#242323] min-h-[7rem] xs:min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem] lg:min-h-[15rem]  xl:min-h-[21rem]">
                <div className="w-[95%] lg:w-[78%] 2xl:w-[1140px] mx-auto absolute top-[-7rem] left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <Image
                      src={"/images/about/group.png"}
                      alt="photo"
                      width={1500}
                      height={1500}
                      className="shadow-2xl shadow-[#101010] filter blur-[0.09rem] object-cover h-[210px] sm:h-auto"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="text-[#ffffff] text-[2.5rem] md:text-[4rem] font-bold drop-shadow-xl ">
                        Our Story
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedDiv>

            {/* <AnimatedDiv>
              <Box className="bg-[#242323]">
                <Box className="w-[93%] md:w-[90%] xl:w-[80%] 2xl:w-[1450px] mx-auto p-[1rem] pb-[2rem] bg-[#242323] flex flex-col justify-center items-center gap-[2rem] md:gap-[0.5rem]">
                  <Box className="flex flex-wrap items-center text-center gap-5 mb-[-0.5rem] md:mb-4 w-[100%] md:w-[75%] lg:w-[65%] 2xl:w-[60%] justify-start">
                    <Image
                      src="/images/about/teams/shortimages/1.png"
                      alt="Founder Image"
                      height={100}
                      width={100}
                      className="w-20 h-20 rounded-full"
                    />
                    <Box className="text-left">
                      <Text className="text-white text-xl font-bold">
                        Satish Reddy
                      </Text>
                      <Text className="text-gray-400 text-md">
                        Founder & CEO
                      </Text>
                    </Box>
                  </Box>

                  <VStack
                    align="start"
                    spacing={4}
                    className="w-[100%] md:w-[75%] lg:w-[65%] 2xl:w-[60%]"
                    mx="auto"
                  >
                    <Text className="text-white text-lg font-bold">
                      We pick up from where the energy leaves
                    </Text>

                    <Text className="text-gray-300 text-lg text-left">
                      Why does the power in India go out at the worst possible
                      time? Mid-movie, mid-meeting, or worse-right in the middle
                      of a wedding! Welcome to India, where electricity still
                      plays hide-and-seek with us every now and then. Even as
                      India aims for ambitious renewable energy goals, our homes
                      and businesses remain at the mercy of the grid. It’s not
                      just frustrating; it’s outdated.
                    </Text>

                    <Text className="text-gray-300 text-lg text-left">
                      Xbattery was born out of this frustration. We saw a gap in
                      India’s energy infrastructure, a gap where reliability,
                      efficiency, and scalability didn’t meet. So, we created a
                      solution that would.
                    </Text>

                    <Text className="text-gray-300 text-lg text-left">
                      Our battery packs are designed to thrive in the toughest
                      conditions, whether it’s your busy home or a factory in
                      the middle of nowhere.
                    </Text>

                    <Text className="text-white text-lg font-bold">
                      What is the X Factor? Glad you asked.
                    </Text>
                    <UnorderedList spacing={2} className="text-gray-300">
                      <ListItem>
                        <strong>Brainpower:</strong> Our battery management
                        system is smart enough to handle everything YOUR way.
                      </ListItem>
                      <ListItem>
                        <strong>Smart sensors:</strong> They see trouble even
                        before it walks in.
                      </ListItem>
                      <ListItem>
                        <strong>Made in India:</strong> Innovation doesn’t need
                        an import tag.
                      </ListItem>
                      <ListItem>
                        <strong>Affordable:</strong> Worth your every paisa.
                      </ListItem>
                    </UnorderedList>

                    <Text className="text-gray-300 text-lg text-left">
                      We are launching our first product for homes and
                      businesses, with a few smart partners in Hyderabad already
                      on board. If you want to know how we can change your
                      relationship with energy, give us a shout at{" "}
                      <Text as="span" color="teal.300">
                        <a
                          href="mailto:support@xbattery.energy"
                          target="_blank"
                          aria-label="Xbattery support email"
                          rel="noreferrer"
                        >
                          support@xbattery.energy
                        </a>
                      </Text>
                      .
                    </Text>
                  </VStack>
                </Box>
              </Box>
            </AnimatedDiv> */}

            <AnimatedDiv>
              <Box className="bg-[#242323]">
                <Box className="w-[93%] md:w-[90%] xl:w-[80%] 2xl:w-[1450px] mx-auto p-[1rem] pb-[2rem] bg-[#242323] flex flex-col justify-center items-center gap-[2rem] md:gap-[0.5rem]">
                  <Box className="flex flex-wrap items-center text-center gap-5 mb-[-0.5rem] md:mb-4 w-[100%] md:w-[75%] lg:w-[65%] 2xl:w-[60%] justify-start">
                    <Image
                      src="/images/about/teams/shortimages/1.png"
                      alt="Founder Image"
                      height={100}
                      width={100}
                      className="w-20 h-20 rounded-full"
                    />
                    <Box className="text-left">
                      <Text className="text-white text-xl font-bold">
                        Satish Reddy
                      </Text>
                      <Text className="text-gray-400 text-md">
                        Founder & CEO
                      </Text>
                    </Box>
                  </Box>

                  <VStack
                    align="start"
                    spacing={4}
                    className="w-[100%] md:w-[75%] lg:w-[65%] 2xl:w-[60%]"
                    mx="auto"
                  >
                    <Text className="text-gray-300 text-lg text-left">
                      Climate change is one of the existential risks for
                      humanity. I believe technology plays major role in
                      fighting the crisis. How we generate and consume energy
                      plays a big part in this. India has set an ambitious goal
                      of generating 50% of its energy from renewable sources by
                      2030. To achieve this, we need to have the supporting
                      technology in place. Of course, we made great progress in
                      renewable energy generation, and we are on the right path.
                      But there is a crucial piece missing: energy storage which
                      makes renewable energy more efficient.
                    </Text>

                    <Text className="text-gray-300 text-lg text-left">
                      India needs to create advanced battery technology to
                      support this. Producing battery cells and BMS locally is
                      critical. With these advancements, building large-scale
                      battery packs is not just possible—it's within reach.
                    </Text>

                    <Text className="text-gray-300 text-lg text-left">
                      The vision of Xbattery is clear: to make India
                      self-reliant in battery technology. One of the key
                      products of this vision is BharatBMS, our state-of-the-art
                      BMS that can be used to build battery packs of any size
                      and works with wide battery chemistries. Creating such a
                      unified BMS is no easy task, and we are fully aware of the
                      challenges.
                    </Text>

                    <Text className="text-gray-300 text-lg text-left">
                      To achieve this, I believe perseverance must remain our
                      core value. We have already developed key technologies
                      like BharatBMS and secured initial partnerships, but this
                      is a tough journey, and we are committed to take on.
                    </Text>

                    <Text className="text-gray-300 text-lg text-left">
                      We are excited to launch our first energy storage product
                      for homes and businesses, featuring the BharatBM. If you
                      want early access, send an email to&nbsp;
                      <Text as="span" color="teal.300"> 
                        <a
                          href="mailto:support@xbattery.energy"
                          target="_blank"
                          aria-label="Xbattery support email"
                          rel="noreferrer"
                        >
                          support@xbattery.energy
                        </a>
                      </Text>
                      .
                    </Text>
                  </VStack>
                </Box>
              </Box>
            </AnimatedDiv>
          </section>
        </div>

        {/* teams */}

        <div id="teams" className="mb-[4rem]"></div>
        <div className=" w-[93%] md:w-[90%] xl:w-[80%] 2xl:w-[1450px] mx-auto  mb-[5rem]">
          <AnimatedDiv>
            <h2 className="text-lg text-white text-center font-semibold mb-[-0.3rem]">
              Meet Our Leaders
            </h2>
            <h2 className={`${classes.block3Head} text-center`}>
              The Xbattery Leadership Team
            </h2>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="mt-[3rem] flex flex-col md:flex-row gap-[2rem] md:gap-[5%] items-center">
              <Image
                src={"/images/about/leaders/1.png"}
                alt="photo"
                width={"600"}
                height={"600"}
                className="w-full md:w-[30%] h-[350px] object-cover rounded-md"
              />
              <div className="text-white  w-full md:w-[65%] flex flex-col gap-[1rem] text-center md:text-left">
                <div className=" text-2xl font-semibold flex flex-row justify-between md:justify-start items-start sm:items-center gap-[0.5rem] text-left">
                  Satish Reddy, CEO of Xbattery{" "}
                  <span className=" mt-1 sm:mt-0">
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/satishreddyv/"
                      aria-label="Xbattery Linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin size={"26px"} />
                    </a>
                  </span>
                </div>
                <div className=" opacity-[80%] text-lg text-center md:text-left">
                  Satish Reddy leads Xbattery as founder and CEO. He spent 15
                  years in tech, working at Microsoft before starting his own
                  company. His first venture, Pascalcase, grew to 35 people and
                  hit $500K in annual revenue within 5 years. Now he's switched
                  gears completely. Instead of building software, he's tackling
                  something bigger: India's power backup problems. His
                  experience scaling companies and building solid teams comes in
                  handy when you're trying to change how energy storage works in
                  India.
                </div>
              </div>
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="mt-[3rem] flex flex-col gap-[2rem]  md:flex-row-reverse md:gap-[5%] items-center">
              <Image
                src={"/images/about/leaders/2.png"}
                alt="photo"
                width={"600"}
                height={"600"}
                className="w-full md:w-[30%] h-[350px] object-cover rounded-md"
              />
              <div className="text-white  w-full md:w-[65%] flex flex-col gap-[1rem] text-center md:text-left">
                <div className=" text-2xl font-semibold flex flex-row justify-between md:justify-start items-start sm:items-center gap-[0.5rem] text-left">
                  Sonu Mishra, CTO of Xbattery{" "}
                  <span className=" mt-1 sm:mt-0">
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/sonumishra662/"
                      aria-label="Xbattery Linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin size={"26px"} />
                    </a>
                  </span>
                </div>
                <div className=" opacity-[80%] text-lg">
                  Sonu Mishra brings hands-on battery expertise to Xbattery as
                  co-founder and CTO. After getting his Master's in Embedded
                  Systems from Stuttgart, he spent 5 years at Bosch Germany
                  working on energy systems and battery management. Now back in
                  India, he's putting his German engineering experience to work
                  on local power problems. Turns out, designing chips and
                  battery systems for one of Germany's biggest tech companies is
                  pretty useful when you're building power backup solutions for
                  Indian conditions.
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>

        {/* vision */}
        <AnimatedDiv>
          <section className="bg-[#191818] py-8 mb-[0.2rem] mt-[4rem]">
            <div className="w-[90%] sm:w-[90%] lg:w-[80%] 2xl:w-[1450px] mx-auto flex flex-col lg:flex-row items-center md:gap-[2%]">
              <div className="md:w-[68%] w-full text-center md:text-left">
                <h1 className={`${classes.block4Head} mb-4`}>Our Vision</h1>
                <p className="text-[#e6e6e6] text-[18px] leading-7 mb-4">
                  A flick of a switch, and the bulb is on. Welcome to
                  Edison&apos;s world. But - bam! - a power cut. If you were
                  living in the 1800s, you would have to wait for the lights to
                  come back on. But it is 2024, and you have got Xbattery.
                </p>
                <p className="text-[#e6e6e6] text-[18px] leading-7 mb-4">
                  At Xbattery, we continue the work of the greats. Our vision is
                  to make smart energy storage as intuitive as switching on a
                  light, making sure it is always there when you need it,
                  whether for your business, vehicles, or home.
                </p>
                {/* <p className="text-[#e6e6e6] text-[18px] leading-7">
                  Edison would have been proud. Or maybe a little bit jealous.
                </p> */}
              </div>
              <div className="md:w-[30%] w-full flex justify-center md:justify-end mt-6 md:mt-0">
                <Image
                  src="/images/logo1.png"
                  alt="A professional person"
                  width={230}
                  height={230}
                  className="rounded-lg object-contain w-auto lg:w-[100%] h-auto lg:h-[300px] "
                />
              </div>
            </div>
          </section>
        </AnimatedDiv>

        {/* last thing */}

        <div className="bg-[#181818] text-white py-3 pt-[2rem] mt-3rem">
          <AnimatedDiv>
            <div className="w-[93%] md:w-[90%] xl:w-[85%] 2xl:w-[1450px] mx-auto flex flex-col gap-[1.5rem] items-start justify-between  overflow-hidden xl:overflow-visible">
              {/* Text Section */}
              <div className="w-[90%] mx-auto px-4 md:px-8 text-center mt-[1rem]">
                <h2
                  className={`${classes.block5Head}  mb-6 text-center md:text-center  text-3xl leading-[45px] md:leading-[52px]`}
                >
                  Building India's Clean Energy Backbone
                </h2>
                <p className="text-md opacity-[80%] text-center md:text-center mb-3 mt-[-2px]">
                  Engineered in India for India
                </p>
              </div>
              {/* Image Section */}
              <div className="w-full flex justify-center mx-auto ">
                <Image
                  src="/images/about/group2.png" // Replace with your actual image path
                  alt="Group photo"
                  width={900}
                  height={600}
                  className="rounded-md mx-auto z-10"
                />
              </div>

              {/* <div className=" absolute top-20 right-[-6rem] xl:overflow-hidden">
                <Image
                  src={"/images/logo1.webp"}
                  alt="logo"
                  height={650}
                  width={650}
                  className=" opacity-[3%] z-[-20px] hidden md:block "
                />
              </div> */}
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </>
  );
};

export default About;
