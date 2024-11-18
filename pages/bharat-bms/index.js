import React, { useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import Head from "next/head";

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

      <div className={classes.head1}>
        <div className="bg-black text-white py-16 px-6">
          <h1
            className={`text-3xl md:text-4xl font-bold text-center mb-8 ${classes.color}`}
          >
            Introducing BharatBMS
          </h1>
          <p className="text-md md:text-lg max-w-4xl mx-auto leading-relaxed mb-10 text-center">
            BharatBMS is India's first universal Battery Management System
            dedicated to energy storage that scales from home to industrial
            applications. Imagine a flexible system that works just as
            efficiently for a 5kWh home backup as it does for megawatt-scale
            grid energy storage.
          </p>

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
              power flowing. The electronics are designed to handle our climate,
              from dusty summers to humid monsoons.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-12">
            <h2
              className={`text-xl md:text-xl font-semibold mb-4 ${classes.color}`}
            >
              Made in India
            </h2>
            <p className="leading-relaxed">
              We are proud to say that every circuit board is manufactured and
              tested in India, with most components sourced locally. This isn't
              just about self-reliance – it means faster support and better
              adaptability to local needs. Our team in Hyderabad can quickly
              modify the design based on user feedback and local requirements.
            </p>
          </section>

          <section className="max-w-4xl mx-auto">
            <h2
              className={`text-xl md:text-xl font-semibold mb-4 ${classes.color}`}
            >
              Partnership with OEMs
            </h2>
            <p className="leading-relaxed">
              We are excited to announce that we are opening partnerships with
              OEMs across India. Starting January 2025, we will be working with
              energy storage manufacturers to integrate BharatBMS into their
              products. This collaboration will help standardize battery
              management across the industry while allowing OEMs to focus on
              their core strengths in battery and system development.
            </p>
          </section>

          {/* Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[90%] md:w-[80%] lg:w-[70%] 2xl:w-[1024px] mx-auto px-4 md:px-8 mb-[1.5rem]">
            <div className="flex justify-center">
              <Image
                src="/images/bharatbms/1.png"
                alt="Battery System Image 1"
                className="rounded-lg shadow-lg"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/bharatbms/2.png"
                alt="Battery System Image 2"
                className="rounded-lg shadow-lg"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/bharatbms/3.png"
                alt="Battery System Image 3"
                className="rounded-lg shadow-lg"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BharatBMS;
