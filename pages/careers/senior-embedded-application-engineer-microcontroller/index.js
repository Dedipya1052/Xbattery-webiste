import React, { useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { MdOutlineWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";
import Head from "next/head";

const Job1 = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
  // const screenWidth = window.innerWidth;
  // const formDesktop=useState(screenWidth>"600"? true:false)
  // //const formDesktop= screenWidth>"600"? true:false;
  // console.log({screenWidth});
  // console.log({formDesktop});
  return (
    <>
      <Head>
        <title>
          Senior Embedded Application Engineer - Microcontroller | Xbattery
        </title>

        <meta property="og:image" content="/images/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta
          property="og:title"
          content="Senior Embedded Application Engineer - Microcontroller | Xbattery"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xbattery.energy/careers/senior-embedded-application-engineer-microcontroller"
        />

        <meta
          name="description"
          content="Join Xbattery as a Senior Embedded Application Engineer - Microcontroller and play a key role in advancing energy storage solutions in India using cutting-edge technology."
        />
      </Head>
      <div className={classes.head1}>
       

        <div
          className={classes.affiliatewrapper}
          style={{ position: "relative" }}
        >
          <Button
            className="absolute top-[-1rem] right-[15%]"
            gap={"0.3rem"}
            onClick={() => router.push("/careers")}
            display={{ base: "none", md: "flex" }} // base (small screens) is hidden, sm and above is flex
          >
            <IoArrowBack />
            <p>Back</p>
          </Button>

          <div className={classes.affiliateheader}>
            <h1 className={classes.headername}>
              Senior Embedded Application Engineer - Microcontroller
            </h1>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Job Details:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div
                className={`${classes.infoCard} p-4 bg-[#202020] rounded-lg shadow-md flex items-center`}
              >
                <FaLocationDot
                  fontSize={"13px"}
                  className="text-yellow-400 mr-2"
                />
                <span className={classes.affiliateInfo}>
                  {" "}
                  <span className="text-white">
                    Hyderabad, Telangana, India
                  </span>
                </span>
              </div>

              <div
                className={`${classes.infoCard} p-4 bg-[#202020] rounded-lg shadow-md flex items-center`}
              >
                <HiOfficeBuilding
                  fontSize={"14px"}
                  className=" text-yellow-400 mr-2"
                />
                <span className={classes.affiliateInfo}>
                  {" "}
                  <span className="text-white">
                    Xbattery Energy Private Ltd.
                  </span>
                </span>
              </div>

              <div
                className={`${classes.infoCard} p-4 bg-[#202020] rounded-lg shadow-md flex items-center`}
              >
                <MdOutlineWork
                  fontSize={"14px"}
                  className=" text-yellow-400 mr-2"
                />
                <span className={classes.affiliateInfo}>
                  {" "}
                  <span className="text-white">Full-time</span>
                </span>
              </div>
            </div>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Job Description:</h3>
            <p className={classes.affPara}>
              We are looking for a highly skilled Embedded Application Developer
              with a strong background in NXP and STM32 boards, Battery
              Management Systems (BMS), and energy solutions. The ideal
              candidate will have experience in writing optimized embedded
              software, interfacing with hardware peripherals, and working on
              innovative energy projects.
            </p>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Key Responsibilities:</h3>
            <UnorderedList spacing={3}>
              {[
                "Develop, test, and maintain embedded firmware for NXP and STM32 microcontrollers.",
                "Design low-level drivers, communication protocols (CAN, SPI, I2C, UART), and hardware interfaces.",
                "Work on Battery Management Systems (BMS), including SOC (State of Charge), SOH (State of Health) algorithms, and balancing techniques.",
                "Collaborate with cross-functional teams to integrate energy storage solutions with power distribution and energy management systems.",
                "Optimize software for power consumption, performance, and safety in embedded systems.",
                "Conduct debugging and validation of embedded systems using tools such as JTAG, SWD, and oscilloscopes.",
                "Implement communication protocols and work on firmware updates and bootloader development.",
                "Maintain technical documentation and ensure compliance with relevant safety standards.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  className={`text-[#e2e2e2] ${classes.affPara}`}
                >
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>
              Practical Skills & Experience:
            </h3>
            <UnorderedList spacing={3}>
              {[
                "C/C++ Programming Skills.",
                "Experience in developing with Arm Based Microcontroller Architectures ideally with experience specifically on one or more of the microcontroller platforms from NXP, ST, Renesas or Infineon.",
                "Experience in Software development based on Eclipse based GCC & GBD tool chains.",
                "Experience on using/integrating RTOS (FreeRTOS or Zephyr) and most popular middleware (wireless connectivity, USB, Ethernet) into embedded software projects.",
                "A working knowledge of IoT Security standards such as Arm’s Platform Security Architecture (PSA) Certification Framework.",
                "Bachelor’s or Master’s degree in Electrical Engineering, Computer Engineering, or related fields.",
                "3-5 years of experience in embedded software development with NXP (e.g., S32, i.MX) and STM32 microcontrollers.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  className={`text-[#e2e2e2] ${classes.affPara}`}
                >
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Why Xbattery Energy?</h3>
            <UnorderedList spacing={3}>
              {[
                "Work on impactful projects that shape the future of energy solutions.",
                "A collaborative environment with opportunities for career growth and professional development.",
                "Competitive salary and benefits.",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  className={`text-[#e2e2e2] ${classes.affPara}`}
                >
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </div>

          {/* <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>How to Apply:</h3>
          <p className={classes.affPara}>
            Please send your resume and a cover letter to{" "}
            <span className="text-white font-semibold">
              <a
                href="mailto:sonu@XBattery.energy"
                className={`${classes.link} text-white`}
              >
                sonu@XBattery.energy
              </a>{" "}
            </span>{" "}
            with the subject line "Senior Embedded Application Engineer -
            Microcontroller – XBattery."
          </p>
        </div> */}

        <div className="mt-[2rem] w-[95%] mx-auto">
            <div>
              <iframe
                src="https://app.youform.com/forms/jfh1jwb6"
                loading="lazy"
                width="100%"
                height="700"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <p className=" text-[#c5c5c5] text-sm mt-1 text-center">
                Having trouble?&nbsp;
                <a
                  href="https://app.youform.com/forms/jfh1jwb6"
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:underline"
                >
                 Click here to open the form
                </a>
                .
              </p>
            </div>
          </div>
          {/* <div className={classes.affiliateholder}>
          <Button
            className=" mt-2"
            onClick={() =>
              (window.location.href = "mailto:sonu@XBattery.energy")
            }
          >
            Apply
          </Button>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Job1;
