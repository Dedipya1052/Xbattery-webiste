import React, { useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button ,} from "@chakra-ui/react";
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
        <nav
          className={`fixed top-0 left-0 w-full mx-auto flex items-center justify-between p-4 z-50 transition-colors duration-300 bg-black`}
        >
          <div className="w-[95%] mx-auto flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  src="/images/logo1.png"
                  width={160}
                  height={160}
                  alt="logo"
                  className="opacity-100"
                />
              </Link>
            </div>

            <div className="hidden md:flex gap-7 items-center">
              <Link href="/">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                  Product
                </button>
              </Link>

              <Link href="/about">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                  About
                </button>
              </Link>

              <Link href="/blog">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                  Blog
                </button>
              </Link>

              <Link href="/whitepapers">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                  Whitepapers
                </button>
              </Link>
            </div>

            <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 hidden md:block">
              <Link href="/#registerEmail">Get Notified</Link>
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

              <Link href="/#registerEmail">
                <button
                  className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={handleMenuItemClick}
                >
                  Get Notified
                </button>
              </Link>
            </div>
          )}
        </nav>

        {/* <div className="flex flex-col justify-center items-center bg-black text-white">
     

      <main className="text-center px-6 mt-[3.5rem]  md:mt-[6rem] mb-[6rem]">
        <h1 className={`text-5xl font-bold mb-8 ${classes.color}`}>Introducing BharatBMS</h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-8">
          BharatBMS is a state-of-the-art Battery Management System designed to optimize, protect,
          and enhance the efficiency of your energy storage systems. With intelligent monitoring and
          control, BharatBMS ensures long-lasting performance and reliability for both our XBattery
          5kWh and XBattery 50kWh solutions. 
        </p>
        <button className="text-white font-semibold px-8 py-3 border border-white rounded-3xl transition duration-300">
          Coming Soon
        </button>
      </main>
    </div> */}

        <div className="flex flex-col justify-center items-center bg-black text-white">
          <main className="text-center px-6 mt-[3.5rem] md:mt-[6rem] mb-[6rem]">
            <h1 className={`text-5xl font-bold mb-8 ${classes.color}`}>
              Introducing BharatBMS
            </h1>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              BharatBMS is a state-of-the-art Battery Management System designed
              to optimize, protect, and enhance the efficiency of your energy
              storage systems. With intelligent monitoring and control,
              BharatBMS ensures long-lasting performance and reliability for
              both our XBattery 5kWh and XBattery 50kWh solutions.
            </p>

            {/* Image Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[90%]  md:w-[80%] lg:w-[70%] mx-auto px-4 md:px-8">
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

            <button className="text-white font-semibold px-8 py-3 border border-white rounded-3xl transition duration-300 mt-[3rem]">
              Coming Soon
            </button>
          </main>
        </div>
      </div>
    </>
  );
};

export default BharatBMS;
