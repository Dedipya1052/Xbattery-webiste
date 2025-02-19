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

  return (
    <>
      <Head>
        <title>
          Junior PCB Design Engineer (BMS) | Xbattery
        </title>

        <meta property="og:image" content="/images/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta
          property="og:title"
          content="Junior PCB Design Engineer (BMS) | Xbattery"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xbattery.energy/careers/junior-pcb-design-engineer-bms"
        />

        <meta
          name="description"
          content="Join Xbattery as a Junior PCB Design Engineer specializing in Battery Management Systems. Contribute to the design and testing of multi-layer PCBs for energy storage solutions."
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
              Junior PCB Design Engineer (BMS)
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
            <h3 className={classes.h3inaffiliate}>Job Overview:</h3>
            <p className={classes.affPara}>
              We are seeking a <span className=" font-bold">Junior PCB Design Engineer</span> with at least{" "}
              <span className=" font-bold">2 years</span> of experience in PCB design to assist in the development of Battery Management Systems (BMS). The ideal candidate will contribute to the design and testing of multi-layer PCBs (up to 12 layers) for high-voltage, high-current applications, ensuring compliance with industry standards. The candidate should be proficient in schematic design, footprint creation, and layout optimization while following best practices for manufacturability, reliability, and safety.
            </p>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Responsibilities:</h3>
            <UnorderedList spacing={3}>
              {[
                "Assist in schematic design and testing for Battery Management Systems (BMS), ensuring robust and efficient circuit implementations.",
                "Develop multi-layer PCB layouts (up to 12 layers), focusing on signal integrity, power integrity, and thermal management for BMS applications.",
                "Create and manage component footprints, symbols, and libraries, adhering to IPC standards and best practices.",
                "Follow industry standards (IPC, UL, ISO, IEC 62133, ISO 26262 for automotive BMS) to ensure safety and regulatory compliance.",
                "Support senior engineers in PCB stack-up planning, high-current routing, and component placement for optimal performance.",
                "Implement design rule checks (DRC) and electrical rule checks (ERC) to ensure manufacturing feasibility.",
                "Assist in designing and integrating communication interfaces (CAN, I2C, SPI, UART) for BMS communication.",
                "Contribute to EMI/EMC compliance design and layout techniques for noise reduction.",
                "Collaborate with fabrication and assembly vendors to ensure seamless PCB manufacturing.",
                "Conduct basic thermal simulations and validation tests for board-level thermal performance.",
                "Generate and maintain design documentation, including schematics, BOMs, Gerber files, and assembly drawings.",
                "Work closely with firmware, hardware, and test engineers to validate PCB performance and ensure system integration."
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

export default Job1;