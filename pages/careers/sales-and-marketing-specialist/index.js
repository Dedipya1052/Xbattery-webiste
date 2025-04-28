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

// import React, { useState } from "react";
// import classes from "./styles.module.css";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@chakra-ui/react";
// import { useRouter } from "next/router";
// import { UnorderedList, ListItem } from "@chakra-ui/react";
// import { MdOutlineWork } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { HiOfficeBuilding } from "react-icons/hi";
// import { IoArrowBack } from "react-icons/io5";
// import Head from "next/head";

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
          Sales and Marketing Specialist | Xbattery
        </title>

        <meta property="og:image" content="/images/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta
          property="og:title"
          content="Sales and Marketing Specialist | Xbattery"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xbattery.energy/careers/sales-marketing-specialist"
        />

        <meta
          name="description"
          content="Join Xbattery as a Sales and Marketing Specialist to support the promotion and growth of our innovative BMS solutions. Develop and execute marketing strategies while driving B2B sales for our battery management systems."
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
              Sales and Marketing Specialist
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
              We are seeking a <span className="font-bold">Sales and Marketing Specialist</span> with at least{" "}
              <span className="font-bold">2 years</span> of experience in sales and marketing, preferably in the energy, technology, or sustainability sector, to support the promotion and growth of Xbattery. The ideal candidate will contribute to developing and executing marketing strategies to increase brand awareness, engage target audiences, and drive demand for our innovative BMS solutions. Additionally, the candidate will be responsible for initiating and managing B2B sales, identifying prospective buyers, and closing deals to drive revenue growth. The candidate should be proficient in sales, marketing, content creation, and market research, while following best practices to ensure effective communication, brand consistency, and measurable results. Candidates with an MBA in marketing and/or sales are preferred.
            </p>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Sales Responsibilities:</h3>
            <UnorderedList spacing={3}>
              {[
                "Identify and research prospective B2B buyers in the energy, automotive, renewable energy, and technology sectors to build a robust pipeline of potential clients for Xbattery's BMS solutions.",
                "Initiate outreach to prospective clients through cold calls, emails, networking events, and industry conferences to generate leads and establish relationships.",
                "Conduct product demonstrations and presentations to showcase the technical advantages, cost benefits, and sustainability features of Xbattery's BMS to prospective buyers.",
                "Negotiate contracts, pricing, and terms with clients to close sales deals, ensuring alignment with company revenue goals and customer satisfaction.",
                "Maintain and nurture long-term relationships with clients to secure repeat business, upsell additional BMS solutions, and generate referrals.",
                "Track and report sales performance metrics, including lead conversion rates, sales pipeline progress, and revenue generated, to optimize sales strategies.",
                "Collaborate with the product development team to relay client feedback and market needs, ensuring BMS solutions meet customer expectations and industry demands."
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
            <h3 className={classes.h3inaffiliate}>Marketing Responsibilities:</h3>
            <UnorderedList spacing={3}>
              {[
                "Conduct market research to identify target audiences, industry trends, competitor analysis, and opportunities for growth in the energy and battery technology sector, ensuring data-driven marketing and sales strategies.",
                "Develop and execute marketing campaigns across digital and traditional channels, email marketing, content marketing, and trade shows, to increase brand awareness and engagement for Xbattery.",
                "Meet with prospective clients to present Xbattery's solutions, gather feedback, and build relationships that drive business development and sales opportunities.",
                "Handle product display and branding at events, showrooms, and online platforms, ensuring consistent visual identity, messaging, and customer engagement.",
                "Create and manage marketing content, including blog posts, whitepapers, videos, and infographics, adhering to brand guidelines and best practices for clarity and impact.",
                "Follow industry standards and best practices (e.g., SEO, GDPR compliance, branding consistency) to ensure all marketing efforts are effective, compliant, and aligned with company goals.",
                "Implement design and content checks to ensure marketing materials are error-free, visually appealing, and optimized for target platforms.",
                "Assist in designing and integrating multi-channel communication strategies (email, social media, webinars, PR) to enhance customer outreach and retention.",
                "Contribute to brand compliance and reputation management, ensuring all marketing materials reflect Xbattery's values and commitment to innovation and sustainability.",
                "Collaborate with technical, founders, and customer support teams to ensure marketing efforts align with product launches, customer needs, and market demands.",
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
              <p className="text-[#c5c5c5] text-sm mt-1 text-center">
                Having trouble?&nbsp;
                <a
                  href="https://app.youform.com/forms/jfh1jwb6"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
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