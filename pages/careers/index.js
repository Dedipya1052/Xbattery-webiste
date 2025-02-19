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
        <title>
          Battery Packs, BMS & Energy Storage Jobs | Xbattery™ Careers
        </title>

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
        <div className="w-full h-[450px] md:h-[450px] xl:h-[550px] 2xl:h-[55vh] relative overflow-hidden">
          <Image
            src="/images/careers/hero.png" // Ensure the correct path to your image
            width={1500}
            height={1500}
            className="w-full h-full  object-cover object-top "
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
              BMS & Energy Storage Jobs
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
          {/* <AnimatedDiv>
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 bg-black text-white">
              
               
              <Link href={"/careers/senior-pcb-design-engineer"}>
              <div className="bg-[#212020] rounded-lg shadow-lg p-1  hover:cursor-pointer hover:bg-[#282828] transition-all duration-400">
                <Image
                  src="/images/careers/card4.webp"
                  width={600}
                  height={600}
                  alt="Software Engineer III"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-2 pb-6 px-4">
                  <h2 className="text-xl font-semibold mt-4">
                  Senior PCB Design Engineer (BMS & Power Electronics)
                  </h2>
                  <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                 
                </div>
              </div>
              </Link>
              
             
              <Link
                href={
                  "/careers/senior-embedded-application-engineer-microcontroller"
                }
              >
                <div className="bg-[#212020] rounded-lg shadow-lg p-1 hover:cursor-pointer hover:bg-[#282828] transition-all duration-400">
                  <Image
                    src="/images/careers/card1.webp"
                    width={600}
                    height={600}
                    alt="Product Solutions Engineer"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-2 pb-6 px-4">
                    <h2 className="text-xl font-semibold mt-4">
                      Senior Embedded Application Engineer- Microcontroller
                    </h2>
                    <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                    
                  </div>
                </div>
              </Link>

              
              <Link href="/careers/junior-embedded-application-engineer-microcontroller">
                <div className="bg-[#212020] rounded-lg shadow-lg p-1 hover:cursor-pointer hover:bg-[#282828] transition-all duration-400">
                  <Image
                    src="/images/careers/card2.webp"
                    width={600}
                    height={600}
                    alt="Google AI and ML roles"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-2 pb-6 px-4">
                    <h2 className="text-xl font-semibold mt-4">
                      Junior Embedded Application Engineer - Microcontroller
                    </h2>
                    <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                    
                  </div>
                </div>
              </Link>

              
              <Link href={"/careers/software-engineer-full-stack-core"}>
              <div className="bg-[#212020] rounded-lg shadow-lg p-1  hover:cursor-pointer hover:bg-[#282828] transition-all duration-400">
                <Image
                  src="/images/careers/card3.webp"
                  width={600}
                  height={600}
                  alt="Software Engineer III"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-2 pb-6 px-4">
                  <h2 className="text-xl font-semibold mt-4">
                    Software Engineer, Full Stack - Core
                  </h2>
                  <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                  
                </div>
              </div>
              </Link>

              
            </div>
          </AnimatedDiv> */}

          <AnimatedDiv>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 bg-black text-white">
            

            <Link href={"/careers/junior-pcb-design-engineer"}>
                <div className="bg-[#212020] rounded-lg shadow-lg p-6 hover:cursor-pointer hover:bg-[#282828] transition-all duration-400 h-full w-full">
                  <div className="h-full flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4">
                      Junior PCB Design Engineer (BMS & Power Electronics)
                    </h2>
                    <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </Link>


              <Link href={"/careers/senior-pcb-design-engineer"}>
                <div className="bg-[#212020] rounded-lg shadow-lg p-6 hover:cursor-pointer hover:bg-[#282828] transition-all duration-400 h-full w-full">
                  <div className="h-full flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4">
                      Senior PCB Design Engineer (BMS & Power Electronics)
                    </h2>
                    <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </Link>

              <Link
                href={
                  "/careers/senior-embedded-application-engineer-microcontroller"
                }
              >
                <div className="bg-[#212020] rounded-lg shadow-lg p-6 hover:cursor-pointer hover:bg-[#282828] transition-all duration-400 h-full w-full">
                  <div className="h-full flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4">
                      Senior Embedded Application Engineer - Microcontroller
                    </h2>
                    <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </Link>

              <Link href="/careers/junior-embedded-application-engineer-microcontroller">
                <div className="bg-[#212020] rounded-lg shadow-lg p-6 hover:cursor-pointer hover:bg-[#282828] transition-all duration-400 h-full w-full">
                  <div className="h-full flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4">
                      Junior Embedded Application Engineer - Microcontroller
                    </h2>
                    <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </Link>

              <Link href={"/careers/software-engineer-full-stack-core"}>
                <div className="bg-[#212020] rounded-lg shadow-lg p-6 hover:cursor-pointer hover:bg-[#282828] transition-all duration-400 h-full w-full">
                  <div className="h-full flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4">
                      Software Engineer, Full Stack - Core
                    </h2>
                    <p className="text-sm mt-2">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </Link>
            </div>
          </AnimatedDiv>

          
        </div>
      </div>
    </>
  );
};

export default Careers;
