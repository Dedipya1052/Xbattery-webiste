import React, { useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
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
            <Link href="/coming-soon">Coming Soon</Link>
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

            <Link href="/coming-soon">
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

      <div
        className={classes.affiliatewrapper}
        style={{ position: "relative" }}
      >
        {/* <Button
          className={classes.affBackButton}
          onClick={() => router.push("/")}
        >
          {" "}
          <IoArrowBack /> <p>Back</p>
        </Button> */}
        <div className={classes.affiliateheader}>
          <h1 className={classes.headername}>India's Power Problem</h1>
        </div>

        <div className={classes.affiliateholder}>
          <div className={classes.affiliateParaHolder}>
            <p className={classes.affPara}>
              Electricity sector in India has come a long way, but it still
              faces big problems. Many people do not have steady power, and
              power cuts are common in many areas. Since our country is growing
              day by day, we need more and more electricity. Also, India has set
              an ambitious target of 50% renewable energy by 2030. Great for the
              planet, but this opens up a new set of challenges. The sun and the
              wind are clean, but they don't always produce energy at times when
              we need them to.
            </p>
            <p className={classes.affPara}>
              That is where the concept of battery storage comes in. Large
              batteries can store extra energy when the sun is shining or the
              wind is blowing. Then, we can use this stored power when it's
              needed, like at night or on calm days.
            </p>
          </div>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>
            Energy storage helps in many ways:
          </h3>

          <ul className={classes.mylist}>
            <li className="flex items-start">
              <GoDotFill className="text-[#eeeeee] text-[12px] mr-2 mt-[5.5px]" />
              <span>It keeps the power grid stable, reducing power cuts.</span>
            </li>
            <li className="flex items-start">
              <GoDotFill className="text-[#e0e0e0] text-[12px] mr-2 mt-[5.5px]" />
              <span>
                It allows us to use more solar and wind power effectively.
              </span>
            </li>
            <li className="flex items-start">
              <GoDotFill className="text-[#e0e0e0] text-[12px] mr-2 mt-[5.5px]" />
              <span>
                It can be utilized as backup power in homes, factories,
                hospitals, schools, and other important places.
              </span>
            </li>
            <li className="flex items-start">
              <GoDotFill className="text-[#e0e0e0] text-[12px] mr-2 mt-[5.5px]" />
              <span>
                It helps to supply assured electricity to remote villages.
              </span>
            </li>
          </ul>
        </div>

        <div className={classes.affiliateheader}>
          <h1 className={`${classes.headername1}`}>About XBattery</h1>
        </div>

        <div className={classes.affiliateholder}>
          <div className={classes.affiliateParaHolder}>
            <p className={classes.affPara}>
              Our story began with a group of engineers and scientists who were
              passionate about renewable energy and sustainability. We had
              first-hand experience in the struggle of unreliable power supply
              in urban and rural India. We recognized a key gap in the Indian
              energy storage market and firmly believed the key to unleashing
              India's renewable energy potential was through advanced energy
              storage solutions.
            </p>
            <p className={classes.affPara}>
              Our team, of diverse backgrounds in electrical engineering,
              computer science, AI and business, all came together with a
              single-minded vision for the transformation of the energy storage
              industry.
            </p>
          </div>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>
            We started to build Indian tech stack:
          </h3>

          <ul className={classes.mylist}>
            <li className="flex items-start">
              <GoDotFill className="text-[#eeeeee] text-[12px] mr-2 mt-[5.5px]" />
              <span>
                Developing advanced battery management systems that can handle
                megawatt-level storage.
              </span>
            </li>
            <li className="flex items-start">
              <GoDotFill className="text-[#e0e0e0] text-[12px] mr-2 mt-[5.5px]" />
              <span>
                Creating smart and configurable energy management systems.
              </span>
            </li>
            <li className="flex items-start">
              <GoDotFill className="text-[#e0e0e0] text-[12px] mr-2 mt-[5.5px]" />
              <span>Implementing IoT technologies for remote tracking.</span>
            </li>
            <li className="flex items-start">
              <GoDotFill className="text-[#e0e0e0] text-[12px] mr-2 mt-[5.5px]" />
              <span>
                Applying AI and digital twin modeling to optimize energy
                storage.
              </span>
            </li>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <div className={classes.affiliateParaHolder}>
            <p className={classes.affPara}>
              Our large battery systems are designed specifically with the needs
              of India in mind. We use custom-designed BMS, EMS, IoT, Digital
              Twins, and AI to make our batteries work seamlessly with the
              Indian Power Grid.
            </p>
            <p className={classes.affPara}>
              Our goal is simple: to ensure that India has reliable, clean power
              for all. We believe that with better energy storage, we can light
              up homes, we can power businesses, and energize the future of our
              nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
