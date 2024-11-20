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

const Job3 = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>Software Engineer, Full Stack (Core) | Xbattery</title>

        <meta property="og:image" content="/images/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta
          property="og:title"
          content="Software Engineer, Full Stack (Core) | Xbattery"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://xbattery.energy/careers/software-engineer-full-stack-core"
        />

        <meta
          name="description"
          content="Join Xbattery as a Software Engineer, Full Stack (Core) and be part of our mission to revolutionize energy storage in India using cutting-edge technology."
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
              Software Engineer, Full Stack (Core)
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
              We are seeking enthusiastic, recent graduates with a strong
              foundation in software engineering and a passion for developing
              scalable, efficient, and user-friendly full-stack applications.
              This role offers an excellent opportunity to launch a career in
              software development, focusing on front-end, back-end, and
              middleware technology.
            </p>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>Key Responsibilities:</h3>
            <UnorderedList spacing={3}>
              {[
                "Develop, test, and maintain full-stack applications, focusing on both front-end and back-end functionality.",
                "Design and implement RESTful APIs and integrate them with front-end frameworks to provide seamless user experiences.",
                "Work with middleware and server-side logic, ensuring smooth data flow and application scalability.",
                "Utilize cloud-based platforms, primarily Azure, for deployment and management of applications.",
                "Optimize applications for performance, responsiveness, and scalability.",
                "Assist in debugging, testing, and deploying applications in staging and production environments.",
                "Contribute to continuous integration (CI) and continuous deployment (CD) pipelines for seamless software updates.",
                "Participate in maintaining technical documentation and ensure compliance with relevant software standards.",
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
                "Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
                "Strong foundation in JavaScript, HTML, CSS, and at least one backend language (e.g., Python, Node.js, or Java).",
                "Basic understanding of modern frontend frameworks (React, Angular, or Vue).",
                "Familiarity with database management, especially MongoDB.",
                "Eagerness to work with cloud platforms, particularly Azure.",
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
                "Experience with version control systems (e.g., Git).",
                "Basic knowledge of cloud services such as Azure or AWS.",
                "Exposure to frontend libraries and frameworks, especially React or NextJS.",
                "Understanding of secure coding practices.",
                "Familiarity with microservices architecture and containerization tools like Docker.",
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
                "Hands-on experience with innovative technology.",
                "Supportive and collaborative team environment.",
                "Mentorship from industry experts.",
                "Career growth opportunities in software engineering and energy solutions.",
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

export default Job3;
