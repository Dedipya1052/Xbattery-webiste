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
          Senior PCB Design Engineer (BMS & Power Electronics) | Xbattery
        </title>

        <meta property="og:image" content="/images/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta
          property="og:title"
          content="Senior PCB Design Engineer (BMS & Power Electronics) | Xbattery"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xbattery.energy/careers/senior-pcb-design-engineer-bms-power-electronics"
        />

        <meta
          name="description"
          content="Join Xbattery as a Senior PCB Design Engineer specializing in Battery Management Systems and Power Electronics. Play a pivotal role in designing high-voltage and high-power PCBs for energy storage solutions."
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
              Senior PCB Design Engineer (BMS & Power Electronics)
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
              We are seeking a talented Senior PCB Design Engineer with
              expertise in Battery Management Systems (BMS) and Power
              Electronics. The ideal candidate will lead the design of
              high-performance, high-voltage PCBs for energy storage solutions,
              ensuring compliance with safety standards and delivering
              innovative, reliable designs.
            </p>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Responsibilities:</h3>
            <UnorderedList spacing={3}>
              {[
                "Design and develop complex multi-layer PCB layouts for BMS and power conversion systems.",
                "Lead PCB design efforts for high-current, high-voltage applications with emphasis on safety and reliability.",
                "Implement protection circuits and isolation requirements for battery systems.",
                "Experience with battery safety standards.",
                "Integration of temperature monitoring systems.",
                "Design of communication interfaces (CAN, I2C, SPI).",
                "Proficiency in Altium Designer or Cadence Allegro.",
                "EMI/EMC compliance design techniques.",
                "Advanced layer stack-up planning.",
                "Impedance-controlled routing.",
                "Power integrity and signal integrity analysis.",
                "Thermal simulation and analysis.",
                "EMC/EMI testing and validation.",
                "Design rule checks (DRC) and electrical rule checks (ERC).",
                "Interface with component suppliers and PCB manufacturers.",
                "Conduct simulations (e.g., SPICE) and perform design verification tests.",
                "Validate PCB designs for high voltage (up to 800V) and high-power applications.",
                "Create design documentation, including schematics, BOMs, and assembly drawings.",
                "Collaborate with firmware and software engineers to ensure seamless integration.",
              
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
