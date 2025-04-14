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
          Marketing Associate | Xbattery
        </title>

        <meta property="og:image" content="/images/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta
          property="og:title"
          content="Marketing Associate | Xbattery"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xbattery.energy/careers/marketing-associate"
        />

        <meta
          name="description"
          content="Join Xbattery as a Marketing Associate to support the promotion and growth of our innovative battery solutions. Develop and execute marketing strategies to increase brand awareness and engage target audiences."
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
              Marketing Associate
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
              We are seeking a <span className=" font-bold">Marketing Associate</span> with at least{" "}
              <span className=" font-bold">2 years</span> of experience in marketing, preferably in the energy, technology, or sustainability sector, to support the promotion and growth of Xbattery. The ideal candidate will contribute to developing and executing marketing strategies to increase brand awareness, engage target audiences, and drive demand for our innovative battery solutions. The candidate should be proficient in marketing, content creation, and market research, while following best practices to ensure effective communication, brand consistency, and measurable results. Candidates with MBA in marketing and/or sales are preferred.
            </p>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Responsibilities:</h3>
            <UnorderedList spacing={3}>
              {[
                "Conduct market research to identify target audiences, industry trends, competitor analysis, and opportunities for growth in the energy and battery technology sector, ensuring data-driven marketing strategies.",
                "Develop and execute marketing campaigns across digital and traditional channels, including social media, email marketing, content marketing, and trade shows, to increase brand awareness and engagement for Xbattery.",
                "Meet with prospective clients to present Xbattery's solutions, gather feedback, and build relationships that drive business development and sales opportunities.",
                "Support sales initiatives by collaborating with the sales team to create promotional materials, pitch decks, and case studies that highlight the benefits of our battery products and services.",
                "Handle product display and branding at events, showrooms, and online platforms, ensuring consistent visual identity, messaging, and customer engagement.",
                "Create and manage marketing content, including blog posts, whitepapers, videos, and infographics, adhering to brand guidelines and best practices for clarity and impact.",
                "Follow industry standards and best practices (e.g., SEO, GDPR compliance, branding consistency) to ensure all marketing efforts are effective, compliant, and aligned with company goals.",
                "Support senior marketing team members in planning and optimizing marketing strategies, including budget allocation, campaign performance analysis, and ROI tracking.",
                "Implement design and content checks to ensure marketing materials are error-free, visually appealing, and optimized for target platforms.",
                "Assist in designing and integrating multi-channel communication strategies (email, social media, webinars, PR) to enhance customer outreach and retention.",
                "Contribute to brand compliance and reputation management, ensuring all marketing materials reflect Xbattery's values and commitment to innovation and sustainability.",
                "Collaborate with product, sales, and customer support teams to ensure marketing efforts align with product launches, customer needs, and market demands.",
                "Generate and maintain marketing documentation, including campaign reports, performance metrics, customer feedback, and promotional asset libraries.",
                "Work closely with external vendors, such as graphic designers, PR agencies, and digital marketing platforms, to ensure seamless execution of marketing initiatives."
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