import React, { useRef, useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import { motion } from "framer-motion";
import AnimatedDiv from "@/components/ui/Animate";
import Head from "next/head";

const Careers = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const opportunitiesRef = useRef(null);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToOpportunities = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    if (opportunitiesRef.current) {
      const headerOffset = 80; // Adjust this value to match your header height
      const elementPosition =
        opportunitiesRef.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <>
      <Head>
        <title>Careers | Xbattery</title>

        <meta property="og:image" content="/images/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta property="og:title" content="Careers | Xbattery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xbattery.energy/careers" />

        <meta
          name="description"
          content="Explore career opportunities with Xbattery and join our mission to transform energy storage in India using advanced technologies."
        />
      </Head>

      <div className={`${classes.head1} bg-black`}>
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

              <Link href="/blog">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                  Blog
                </button>
              </Link>

              <Link href="/learn">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                  Learn
                </button>
              </Link>

              <Link href="/whitepapers">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
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
        <div className="w-full h-[450px] md:h-[450px] relative overflow-hidden">
          <Image
            src="/images/careers/1.png" // Ensure the correct path to your image
            width={1500}
            height={1500}
            className="w-full h-full  object-cover object-center scale-[1.2] sm:scale-[1.0]"
            alt="career"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }} // Assuming you want it to always animate in
            transition={{ duration: 0.75, delay: 0 }}
            className="absolute md:top-0 md:left-0  md:right-0 top-[-4rem] w-full md:w-[90%] mx-auto h-full flex flex-col items-center md:items-start justify-center p-4 md:p-16 space-y-2 text-left"
          >
            <div className="text-white text-4xl lg:text-4xl font-medium mb-4">
              Careers
            </div>
            <div className="text-white text-4xl lg:text-5xl text-center md:text-left font-bold">
              Shape Tomorrow, Today
            </div>
            <div className="pt-8 flex gap-7 pl-2">
              <Button
                bg="transparent"
                border="1px"
                borderColor="white"
                color="white"
                _hover={{ bg: "transparent" }}
                onClick={scrollToOpportunities}
              >
                Explore Opportunities
              </Button>
            </div>
          </motion.div>
        </div>

        <div
          className=" w-[95%] sm:w-[87%] lg:w-[80%] 2xl:w-[1500px] mx-auto mb-[3rem] mt-[2rem] md:mt-[5rem]"
          id="opportunities"
          ref={opportunitiesRef}
        >
          <AnimatedDiv>
            <div className="text-3xl text-[#e6e6e6] font-bold mt-6 mb-5 md:text-center text-center">
              Opportunities
            </div>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 bg-black text-white">
              {/* Box 1 */}
              <Link
                href={
                  "/careers/senior-embedded-application-engineer-microcontroller"
                }
              >
                <div className="bg-[#212020] rounded-lg shadow-lg p-1 hover:cursor-pointer hover:bg-[#282828] transition-all duration-400">
                  <img
                    src="/images/careers/card1.webp"
                    alt="Product Solutions Engineer"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-2 pb-6 px-4">
                    <h2 className="text-xl font-semibold mt-4">
                      Senior Embedded Application Engineer- Microcontroller
                    </h2>
                    <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                    {/* <p className="mt-4 text-gray-400">
            Google Pay provides secure solutions for easy digital transactions.
          </p> */}
                  </div>
                </div>
              </Link>

              {/* Box 2 */}
              <Link href="/careers/junior-embedded-application-engineer-microcontroller">
                <div className="bg-[#212020] rounded-lg shadow-lg p-1 hover:cursor-pointer hover:bg-[#282828] transition-all duration-400">
                  <img
                    src="/images/careers/card2.webp"
                    alt="Google AI and ML roles"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-2 pb-6 px-4">
                    <h2 className="text-xl font-semibold mt-4">
                      Junior Embedded Application Engineer - Microcontroller
                    </h2>
                    <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                    {/* <p className="mt-4 text-gray-400">
            Search for roles focused on innovation in machine learning and AI at
            Google.
          </p> */}
                  </div>
                </div>
              </Link>

              {/* Box 3 */}
              <div className="bg-[#212020] rounded-lg shadow-lg p-1  hover:cursor-pointer hover:bg-[#282828] transition-all duration-400">
                <img
                  src="/images/careers/card3.webp"
                  alt="Software Engineer III"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-2 pb-6 px-4">
                  <h2 className="text-xl font-semibold mt-4">
                    Software Engineer III, Full Stack, Core
                  </h2>
                  <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                  {/* <p className="mt-4 text-gray-400">
            Work on Google Ads to create user-centered digital advertising
            experiences.
          </p> */}
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </>
  );
};

export default Careers;
