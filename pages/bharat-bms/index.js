import React, { useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import Head from "next/head";
import AnimatedDiv from "@/components/ui/Animate";

const BharatBMS = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <Head>
        <title>BharatBMS | Xbattery</title>

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
              className={`text-4xl md:text-5xl font-bold mb-6 ${classes.color} leading-[45px] 2xl:text-6xl md:leading-[60px] xl:leading-[60px] 2xl:leading-[70px]`}
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
              src="/images/bharatbms/hero1.png" 
              alt="Hero Image"
              className="rounded-lg shadow-lg w-full max-w-lg object-cover 2xl:w-[80%] 2xl:h-[80%] scale-[1.3] lg:scale-[0.9] opacity-[90%]" // Adjusted image size for larger screens
            />
          </div>
        </div>
      </div>

      {/* Existing Content Below Hero Section */}
      <div className={classes.head1}>
        <div className="bg-black text-white py-16 px-6">
          <AnimatedDiv>
            <p className="text-md md:text-lg max-w-4xl mx-auto leading-relaxed mb-10 text-left">
              BharatBMS is India's first universal Battery Management System for
              energy storage and EVs that scales from home to industrial
              applications. Imagine a flexible system that works just as
              efficiently for a 5kWh home backup as it does for megawatt-scale
              battery packs.
            </p>
          </AnimatedDiv>
          <AnimatedDiv>
            <section className="max-w-4xl mx-auto mb-12">
              <h2
                className={`text-xl md:text-xl font-semibold mb-4 ${classes.color}`}
              >
                Smart, Simple, Scalable
              </h2>
              <p className="leading-relaxed">
                Think of it as a building block system. Starting with a home
                installation? The basic module handles your needs perfectly.
                Growing to a larger system? Just add expansion boards – the main
                controller automatically recognizes and adapts to the new
                capacity. No complicated reconfiguration needed.
              </p>
            </section>
          </AnimatedDiv>
          <AnimatedDiv>
            <section className="max-w-4xl mx-auto mb-12">
              <h2
                className={`text-xl md:text-xl font-semibold mb-4 ${classes.color}`}
              >
                Built for Indian Conditions
              </h2>
              <p className="leading-relaxed">
                India's power conditions can be challenging – from voltage
                fluctuations to complete outages. Our system handles these
                scenarios smoothly, protecting your batteries while keeping your
                power flowing. The electronics are designed to handle our
                climate, from dusty summers to humid monsoons.
              </p>
            </section>
          </AnimatedDiv>
          <AnimatedDiv>
            <section className="max-w-4xl mx-auto mb-12">
              <h2
                className={`text-xl md:text-xl font-semibold mb-4 ${classes.color}`}
              >
                Made in India
              </h2>
              <p className="leading-relaxed">
                We are proud to say that every circuit board is manufactured and
                tested in India, with most components sourced locally. This
                isn't just about self-reliance – it means faster support and
                better adaptability to local needs. Our team in Hyderabad can
                quickly modify the design based on user feedback and local
                requirements.
              </p>
            </section>
          </AnimatedDiv>
          <AnimatedDiv>
            <section className="max-w-4xl mx-auto">
              <h2
                className={`text-xl md:text-xl font-semibold mb-4 ${classes.color}`}
              >
                Partnership with OEMs
              </h2>
              <p className="leading-relaxed">
                We are excited to announce that we are opening partnerships with
                OEMs across India. Starting January 2025, we will be working
                with energy storage and EV manufacturers to integrate BharatBMS
                into their products. This collaboration will help standardize
                battery management across the industry while allowing OEMs to
                focus on their core strengths in battery and system development.
              </p>
            </section>
          </AnimatedDiv>

          {/* Image Section */}
          <AnimatedDiv>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[90%] md:w-[80%] lg:w-[70%] 2xl:w-[1024px] mx-auto px-4 md:px-8 mb-[1.5rem]">
              <div className="flex justify-center">
                <Image
                  src="/images/bharatbms/1.png"
                  alt="Battery System Image 1"
                  className="rounded-lg shadow-lg h-[200px]"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/bharatbms/2.png"
                  alt="Battery System Image 2"
                  className="rounded-lg shadow-lg h-[200px]"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/bharatbms/3.png"
                  alt="Battery System Image 3"
                  className="rounded-lg shadow-lg h-[200px]"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </>
  );
};

export default BharatBMS;
