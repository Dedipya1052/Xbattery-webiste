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

const Job2 = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>
          Junior Embedded Application Engineer - Microcontroller | Xbattery
        </title>

        <meta property="og:image" content="/images/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta
          property="og:title"
          content="Junior Embedded Application Engineer - Microcontroller | Xbattery"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xbattery.energy/careers/junior-embedded-application-engineer-microcontroller"
        />

        <meta
          name="description"
          content="Join Xbattery as a Junior Embedded Application Engineer - Microcontroller and be part of our mission to revolutionize energy storage in India using cutting-edge technology."
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
            display={{ base: "none", md: "flex" }}
          >
            <IoArrowBack />
            <p>Back</p>
          </Button>

          <div className={classes.affiliateheader}>
            <h1 className={classes.headername}>
              Junior Embedded Application Engineer - Microcontroller
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
                  className="text-yellow-400 mr-2"
                />
                <span className={classes.affiliateInfo}>
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
                  className="text-yellow-400 mr-2"
                />
                <span className={classes.affiliateInfo}>
                  <span className="text-white">Full-time</span>
                </span>
              </div>
            </div>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Job Description:</h3>
            <p className={classes.affPara}>
              We are looking for motivated fresh graduates with a strong
              foundation in embedded systems and a keen interest in Battery
              Management Systems (BMS) and energy solutions. This is an
              excellent opportunity for recent graduates to kickstart their
              career in the exciting field of embedded software development and
              renewable energy technology.
            </p>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Key Responsibilities:</h3>
            <UnorderedList spacing={3}>
              {[
                "Learn to develop, test, and maintain embedded firmware for NXP and STM32 microcontrollers under guidance.",
                "Assist in designing low-level drivers, communication protocols (CAN, SPI, I2C, UART), and hardware interfaces.",
                "Gain hands-on experience with Battery Management Systems (BMS), including SOC (State of Charge), SOH (State of Health) algorithms, and balancing techniques.",
                "Collaborate with cross-functional teams to understand the integration of energy storage solutions with power distribution and energy management systems.",
                "Learn to optimize software for power consumption, performance, and safety in embedded systems.",
                "Assist in debugging and validation of embedded systems using tools such as JTAG, SWD, and oscilloscopes.",
                "Help implement communication protocols and contribute to firmware updates and bootloader development.",
                "Participate in maintaining technical documentation and learn about compliance with relevant safety standards.",
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
              Required Skills & Qualifications:
            </h3>
            <UnorderedList spacing={3}>
              {[
                "Bachelor's degree in Electrical Engineering, Computer Engineering, or a related field.",
                "Strong foundation in C/C++ programming.",
                "Basic understanding of microcontroller architectures, preferably Arm-based.",
                "Familiarity with embedded systems development concepts.",
                "Eagerness to learn about Battery Management Systems and energy solutions.",
                "Good problem-solving skills and attention to detail.",
                "Excellent communication and teamwork abilities.",
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
            <h3 className={classes.h3inaffiliate}>Preferred Skills:</h3>
            <UnorderedList spacing={3}>
              {[
                "Experience with real-time operating systems (RTOS).",
                "Basic knowledge of power electronics or energy storage systems.",
                "Exposure to NXP or STM32 microcontroller development.",
                "Understanding of safety standards for embedded systems.",
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
                "Opportunity to work in the fast-growing renewable energy industry.",
                "Hands-on experience with cutting-edge Battery Management System technology.",
                "Supportive and collaborative team environment.",
                "Mentorship from industry experts.",
                "Career growth opportunities in embedded systems and energy solutions.",
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
        </div>
      </div>
    </>
  );
};

export default Job2;
