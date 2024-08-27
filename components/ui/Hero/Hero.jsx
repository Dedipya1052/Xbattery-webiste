import GradientWrapper from "@/components/GradientWrapper";
import Image from "next/image";
import styles from "./hero.module.css";
import { Box, Link } from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <>
      {/* hero */}
      {/* <div className={`bg-[#E1EBDC] w-[100%] border-b-[1px] border-black`}>
        <div className={`${styles.head1} border-b-[1px] border-black`}>
          <div className=" w-[96%] mx-auto pt-[1rem] pb-[1rem] text-[2.1rem]">
            Investing basics
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-[-2rem] pb-[2rem] flex justify-center items-center gap-[3rem]">
          <div className={`${styles.head1} flex flex-col w-[40%]`}>
            <div className=" text-[3rem] font-semibold leading-[58px]">
              The building <br></br> blocks of your financial journey
            </div>
            <div className="mt-[1.5rem] text-[1.5rem]">
              What you need to know about investing from the get-go.
            </div>
          </div>
          <div className="w-[60%]">
            {" "}
            <img src="/images/hero1.svg" width={"80%"} />
          </div>
        </div>
      </div> */}

      <div className="w-[100%]">
        <div className={`${styles.head1} border-b-[1px] border-[#20c420]`}>
          <div className=" w-[96%] mx-auto pt-[1rem] pb-[1rem] text-[2.1rem] font-[520]">
            Learn
          </div>
        </div>
        <div className=" mt-[4rem] mb-[5rem] flex flex-col justify-center items-center gap-[1rem] w-[100%]">
          <div className={`text-[3.1rem] font-semibold ${styles.head1}`}>
            Explore the topics
          </div>
          <div className={`${styles.head1} text-[1.25rem] font-semibold`}>
            There’s always more to learn when it comes to knowledge.
          </div>
        </div>
        <div className="mt-[5rem] w-[90%] mx-auto grid xl:grid-cols-3 lg:grid-cols-2 justify-center lg:justify-start items-center gap-[1.2rem]">
          <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px]">
            <img src="/images/comp5/box1.svg" className="block rounded-md" />

            <div className="absolute top-0 flex flex-col items-start justify-center p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                >
                  <Link href="learn/what-is-relative-strength-index">
                    {" "}
                    <span className="hover:text-[#33c433] hover:no-underline">
                     Energy Storage
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className=" pl-[0.5rem] flex flex-col gap-1">
                  <li className="cursor-pointer text-md">
                    <Link
                      href="learn/what-is-relative-strength-index"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 1
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="learn/what-is-relative-strength-index"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 2
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="learn/what-is-relative-strength-index"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 3
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="learn/what-is-relative-strength-index"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 4
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="learn/what-is-relative-strength-index"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px]">
            <img src="/images/comp5/box2.svg" className="block rounded-md" />

            <div className="absolute top-0 flex flex-col items-start justify-center p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                >
                  <Link href="/learn/what-is-a-stock">
                    {" "}
                    <span className="hover:text-[#33c433] hover:no-underline">
                     Renewable Energy
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className=" pl-[0.5rem] flex flex-col gap-1">
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                     Hydro and tidal power
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                      Fuel cells
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                     Biomass power
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                      Carbon Footprint 
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                     Biodiversity 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px]">
            <img src="/images/comp5/box3.svg" className="block rounded-md" />

            <div className="absolute top-0 flex flex-col items-start justify-center p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                >
                  <Link href="/learn/what-is-a-stock-split">
                    {" "}
                    <span className="hover:text-[#33c433] hover:no-underline">
                     Electricity
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className=" pl-[0.5rem] flex flex-col gap-1">
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock-split"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 1
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock-split"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 2
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock-split"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 3
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock-split"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 4
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock-split"
                      className=" hover:text-[#33c433]"
                    >
                      Sub topic 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px]">
            <img src="/images/comp5/box1.svg" className="block rounded-md" />

            <div className="absolute top-0 flex flex-col items-start justify-center p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                >
                  <Link href="/learn/what-is-the-stock-market">
                    {" "}
                    <span className="hover:text-[#33c433] hover:no-underline">
                     Electric Vehicles (EV's)
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className=" pl-[0.5rem] flex flex-col gap-1">
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                     Charging Infrastructure
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                     EV Maintenance
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                     EV Market and Trends
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                      EV Lifetime Costs
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-a-stock"
                      className=" hover:text-[#33c433]"
                    >
                      Battery Swapping Technology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px]">
            <img src="/images/comp5/box2.svg" className="block rounded-md" />

            <div className="absolute top-0 flex flex-col items-start justify-center p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                >
                  <Link href="/learn/what-is-an-investment">
                    {" "}
                    <span className="hover:text-[#33c433] hover:no-underline">
                     Batteries
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className=" pl-[0.5rem] flex flex-col gap-1">
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-an-investment"
                      className=" hover:text-[#33c433]"
                    >
                       Battery economics 
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-an-investment"
                      className=" hover:text-[#33c433]"
                    >
                     Battery Applications 
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-an-investment"
                      className=" hover:text-[#33c433]"
                    >
                     Battery charge and discharge
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-an-investment"
                      className=" hover:text-[#33c433]"
                    >
                     Battery Software & Analytics 
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-an-investment"
                      className=" hover:text-[#33c433]"
                    >
                     Battery & IoT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px]">
            <img src="/images/comp5/box3.svg" className="block rounded-md" />

            <div className="absolute top-0 flex flex-col items-start justify-center p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                >
                  <Link href="/learn/what-is-profit">
                    {" "}
                    <span className="hover:text-[#33c433] hover:no-underline">
                      Grid
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className=" pl-[0.5rem] flex flex-col gap-1">
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-profit"
                      className=" hover:text-[#33c433]"
                    >
                     Grid Technologies 
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-profit"
                      className=" hover:text-[#33c433]"
                    >
                      Grid balancing 
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-profit"
                      className=" hover:text-[#33c433]"
                    >
                      Smart Meters 
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-profit"
                      className=" hover:text-[#33c433]"
                    >
                     Sensors and Automation
                    </Link>
                  </li>
                  <li className="cursor-pointer text-md">
                    <Link
                      href="/learn/what-is-profit"
                      className=" hover:text-[#33c433]"
                    >
                     Grid EMS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-[5rem] w-[70%] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-[1.2rem]">
          <div className="relative inline-block cursor-pointer group">
            <img src="/images/comp2/box1.svg" className="block" />

            <div className="absolute inset-3 flex flex-col items-start justify-start p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.5rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#fefefe]`}
                >
                  <Link href="blog/what-is-relative-strength-index">
                    {" "}
                    <span className="hover:text-[#ffffff] hover:no-underline">
                      What is RSI?
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className=" pl-[0.4rem] flex flex-col gap-1">
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#fdfdfd]"
                    >
                      Sub topic 1
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 2
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 3
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 4
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative inline-block cursor-pointer group">
            <img src="/images/comp2/box2.svg" className="block" />

            <div className="absolute inset-3 flex flex-col items-start justify-start p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.5rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#fefefe]`}
                >
                  <Link href="blog/what-is-a-stock">
                    {" "}
                    <span className="hover:text-[#ffffff] hover:no-underline">
                      What is a stock?
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className=" pl-[0.4rem] flex flex-col gap-1">
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#fdfdfd]"
                    >
                      Sub topic 1
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 2
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 3
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 4
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative inline-block cursor-pointer group">
            <img src="/images/comp2/box3.svg" className="block" />

            <div className="absolute inset-3 flex flex-col items-start justify-start p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.5rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#fefefe]`}
                >
                  <Link href="blog/what-is-a-stock">
                    {" "}
                    <span className="hover:text-[#ffffff] hover:no-underline">
                      What is a stock split?
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className="pl-[0.4rem] flex flex-col gap-1">
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#fdfdfd]"
                    >
                      Sub topic 1
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 2
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 3
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 4
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative inline-block cursor-pointer group">
            <img src="/images/comp4/box1.svg" className="block" />

            <div className="absolute inset-3 flex flex-col items-start justify-start p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.5rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#fefefe]`}
                >
                  <Link href="blog/what-is-a-stock">
                    {" "}
                    <span className="hover:text-[#ffffff] hover:no-underline">
                      What is a investment?
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className="pl-[0.4rem] flex flex-col gap-1">
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#fdfdfd]"
                    >
                      Sub topic 1
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 2
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 3
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 4
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative inline-block cursor-pointer group">
            <img src="/images/comp4/box2.svg" className="block" />

            <div className="absolute inset-3 flex flex-col items-start justify-start p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.5rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#fefefe]`}
                >
                  <Link href="blog/what-is-a-stock">
                    {" "}
                    <span className="hover:text-[#ffffff] hover:no-underline">
                      What is profit?
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className="pl-[0.4rem] flex flex-col gap-1">
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#fdfdfd]"
                    >
                      Sub topic 1
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 2
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 3
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 4
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative inline-block cursor-pointer group">
            <img src="/images/comp4/box3.svg" className="block" />

            <div className="absolute inset-3 flex flex-col items-start justify-start p-4">
              <div className="p-0.5 rounded-md text-left">
                <h2
                  className={`text-[1.5rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#fefefe]`}
                >
                  <Link href="blog/what-is-a-stock">
                    {" "}
                    <span className="hover:text-[#ffffff] hover:no-underline">
                      What is stock market?
                    </span>
                  </Link>
                </h2>
              </div>
              <div className=" flex flex-col justify-start mt-[-0.5rem]">
                <ul className="pl-[0.4rem] flex flex-col gap-1">
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#fdfdfd]"
                    >
                      Sub topic 1
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 2
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 3
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 4
                    </Link>
                  </li>
                  <li
                    className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                  >
                    <Link
                      href="blog/what-is-relative-strength-index"
                      className=" hover:text-[#ffffff]"
                    >
                      Sub topic 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[7rem] mb-[6rem]"></div>

      {/* Investing 101 */}
      <div className="mt-[6rem]">
        <div className="flex flex-col justify-center items-center gap-[1rem]">
          <div className={`text-[3rem] font-semibold ${styles.head1}`}>
            Investing 101
          </div>
          <div className={`${styles.head1} text-[1.25rem] font-semibold`}>
            A good place to start. Get the <br></br>low-down before you dive in.
          </div>
        </div>
        <div className="mt-[5rem] flex justify-center items-center gap-[1.2rem]">
          <div className="relative inline-block cursor-pointer group">
            <Link href="/learn/what-is-an-investment">
              <img src="/images/comp2/box1.svg" className="block" />

              <div className="absolute inset-0 flex items-start justify-center p-4">
                <div className="p-4 rounded-md text-left ">
                  <h2
                    className={`text-[2rem] font-semibold mb-2 ${styles.head1} leading-[45px] group-hover:text-white`}
                  >
                    What is an <br></br>investment?
                  </h2>
                  <p className="text-black text-md group-hover:text-white">
                    An investment is an asset bought with the expectation that
                    it will generate some future income or profit.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="relative inline-block cursor-pointer group">
            <Link href="/learn/what-is-a-stock">
              <img src="/images/comp2/box2.svg" className="block" />

              <div className="absolute inset-0 flex items-start justify-center p-4">
                <div className="p-4 rounded-md text-left group-hover:text-white">
                  <h2
                    className={`text-[2rem] font-semibold mb-2 ${styles.head1} leading-[45px] group-hover:text-white`}
                  >
                    What is a <br></br>stock?
                  </h2>
                  <p className="text-black text-md group-hover:text-white">
                    A stock is a unit of ownership in a company.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="relative inline-block cursor-pointer group">
            <Link href="/learn/what-is-the-stock-market">
              <img src="/images/comp2/box3.svg" className="block" />

              <div className="absolute inset-0 flex items-start justify-center p-4 ">
                <div className="p-4 rounded-md text-left">
                  <h2
                    className={`text-[2rem] font-semibold mb-2 ${styles.head1} leading-[45px] group-hover:text-white`}
                  >
                    What is the <br></br>stock market?
                  </h2>
                  <p className="text-black text-md group-hover:text-white">
                    The stock market is where buyers and sellers come together
                    to trade shares in eligible companies.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="mt-[5.5rem]">
        <div
          className={`text-[2rem] text-center font-semibold ${styles.head1}`}
        >
          There’s more to learn
        </div>
        <div className="mt-[2rem] w-[60%] mx-auto">
          <div>
            <div className="pt-[20px] pb-[20px] border-t-[2px] border-b-[2px]">
              Three things to do before you start investing
            </div>
            <div className="pt-[20px] pb-[20px] border-b-[2px]">
              Picking an investment: How to approach analyzing a stock
            </div>
          </div>

          <div className="mt-[2rem] flex flex-col justify-center items-center gap-[1rem]">
            <div className="px-[30px] py-[7px] w-[250px] rounded-[100px] text-white border-[1px] border-black bg-black font-bold text-center">
              See Investing Articles
            </div>

            <div className="px-[30px] py-[7px] w-[250px] rounded-[100px] text-white border-[1px] border-black bg-black font-bold text-center">
              Investor's Guild
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[8rem] mb-[6rem]"></div>

      {/* Options trading essentials */}
      <div className="">
        <div className="flex flex-col justify-center items-center gap-[1.4rem]">
          <div className={`text-[3rem] font-semibold ${styles.head1}`}>
            Options trading essentials
          </div>
          <div
            className={`${styles.head1} text-[1.25rem] font-semibold text-center`}
          >
            Curious about options? Learn the ins and outs from <br></br>
            the pros before making your move.
          </div>
        </div>
        <div className="mt-[5rem] flex justify-center items-center gap-[1.2rem]">
          <div className="relative inline-block cursor-pointer group">
            <img src="/images/comp4/box1.svg" className="block" />

            <div className="absolute inset-0 flex items-start justify-center p-4">
              <div className="p-4 rounded-md text-left">
                <h2
                  className={`text-[2rem] font-semibold mb-2 ${styles.head1} leading-[45px] group-hover:text-white`}
                >
                  Getting started <br></br> with options
                </h2>
                <p className="text-black text-md group-hover:text-white">
                  What’s the buzz about Options? Take a peek behind the curtain
                  and get a preview of what they’re about.
                </p>
              </div>
            </div>
          </div>
          <div className="relative inline-block cursor-pointer group">
            <img src="/images/comp4/box2.svg" className="block" />

            <div className="absolute inset-0 flex items-start justify-center p-4">
              <div className="p-4 rounded-md text-left">
                <h2
                  className={`text-[2rem] font-semibold mb-2 ${styles.head1} leading-[45px] group-hover:text-white`}
                >
                  A big,<br></br> little primer on <br></br>options
                </h2>
                <p className="text-black text-md group-hover:text-white">
                  Before you start trading, take a moment to learn about calls
                  and puts.
                </p>
              </div>
            </div>
          </div>
          <div className="relative inline-block cursor-pointer group">
            <img src="/images/comp4/box3.svg" className="block" />

            <div className="absolute inset-0 flex items-start justify-center p-4">
              <div className="p-4 rounded-md text-left">
                <h2
                  className={`text-[2rem] font-semibold mb-2 ${styles.head1} leading-[45px] group-hover:text-white`}
                >
                  Risk<br></br> management
                </h2>
                <p className="text-black text-md group-hover:text-white">
                  Options trading can be risky business, and it’s important for
                  any trader to have a handle on their personal risk management
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-[6rem]">
        <div
          className={`text-[2rem] text-center font-semibold ${styles.head1}`}
        >
          There’s more to learn
        </div>
        <div className="mt-[2rem] w-[60%] mx-auto">
          <div>
            <div className="pt-[20px] pb-[20px] border-t-[2px] border-b-[2px]">
              The long & short of trading
            </div>
            <div className="pt-[20px] pb-[20px] border-b-[2px]">
              Trading calls & puts
            </div>
            <div className="pt-[20px] pb-[20px] border-b-[2px]">
              Navigating exercise & assignment
            </div>
            <div className="pt-[20px] pb-[20px] border-b-[2px]">
              Volatility explained
            </div>
          </div>

          <div className="mt-[2rem] flex flex-col justify-center items-center gap-[1rem]">
            <div className="px-[30px] py-[7px] w-[250px] rounded-[100px] text-white border-[1px] border-black bg-black font-bold text-center">
              See Options Articles
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[8rem] mb-[7rem]"></div>

      {/* The library */}
      <div className="">
        <div className="flex flex-col justify-center items-center gap-[1.4rem]">
          <div className={`text-[3rem] font-semibold ${styles.head1}`}>
            The library
          </div>
          <div
            className={`${styles.head1} text-[1.25rem] font-semibold text-center`}
          >
            There’s always more to learn when it comes to <br></br>
            investing. Check out our entire library.
          </div>
        </div>
        <div className="mt-[5rem] w-[70%] mx-auto flex flex-wrap justify-start items-center gap-[1.2rem]">
          <div className="relative inline-block cursor-pointer border-[0.8px] border-black rounded-md ">
            <img src="/images/comp5/box1.svg" className="block rounded-md" />

            <div className="absolute top-0 flex items-start justify-center p-4">
              <div className="p-4 rounded-md text-left">
                <h2
                  className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px]`}
                >
                  What is a portfolio?
                </h2>
              </div>
            </div>
          </div>
          <div className="relative inline-block cursor-pointer border-[0.8px] border-black rounded-md">
            <img src="/images/comp5/box2.svg" className="block rounded-md" />

            <div className="absolute top-0 flex items-start justify-center p-4">
              <div className="p-4 rounded-md text-left">
                <h2
                  className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px]`}
                >
                  What is an ETF?
                </h2>
              </div>
            </div>
          </div>
          <div className="relative inline-block cursor-pointer border-[0.8px] border-black rounded-md">
            <img src="/images/comp5/box3.svg" className="block rounded-md" />

            <div className="absolute top-0 flex items-start justify-center p-4">
              <div className="p-4 rounded-md text-left">
                <h2
                  className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px]`}
                >
                  What is dividend?
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[4rem] flex flex-col justify-center items-center gap-[1rem]">
          <div className="px-[30px] py-[7px] w-[220px] rounded-[100px] text-white border-[1px] border-black bg-black font-bold text-center">
            See Library
          </div>
        </div>
      </div>

      <div className="bg-black h-[0.7px] w-[100%] mx-auto mt-[6rem] mb-[6rem]"></div>

      <div className="flex flex-col gap-[1rem] w-[60%] mx-auto">
        <div className="text-black opacity-[70%] text-left text-[1.15rem]">
          Content is provided for informational purposes only, does not
          constitute tax or investment advice, and is not a recommendation for
          any security or trading strategy. All investments involve risk,
          including the possible loss of capital. Past performance does not
          guarantee future results.
        </div>
        <div className="text-black opacity-[70%] text-left text-[1.15rem]">
          Options trading entails significant risk and is not appropriate for
          all customers. Customers must read and understand the{" "}
          <span>
            <a href="/" className=" underline hover:text-green-600">
              Characteristics and Risks of Standardized Options
            </a>
          </span>{" "}
          before engaging in any options trading strategies. Supporting
          documentation for any claims, if applicable, will be furnished upon
          request.
        </div>
      </div>

      {/* <div className="bg-black h-[0.8px] w-[100%] mx-auto mt-[8rem] mb-[3rem]"></div> */}

      {/* footer */}

      {/* <div
        className={`w-[90%] mx-auto ${styles.head1} flex xl:flex-row  justify-between`}
      >
        <div className="w-[65%]">
          <div className=" text-[1.2rem] pb-[0.8rem] border-b-[0.8px] border-black font-semibold">
            Topics
          </div>
          <div className=" flex flex-col gap-[1rem]">
            <div className="grid grid-cols-3 ">
              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="blog/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        What is RSI?
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 1
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 2
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 3
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 4
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="blog/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        What is profit?
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 1
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 2
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 3
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 4
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="blog/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        What is a stock?
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 1
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 2
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 3
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 4
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="blog/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        What is stock split?
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 1
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 2
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 3
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 4
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="blog/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        What is a investment?
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 1
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 2
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 3
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 4
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="blog/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        What is a stock market?
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 1
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 2
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 3
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 4
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-md font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="blog/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-[2rem]">
        <div className="flex flex-col gap-[1.5rem]">
          <div className=" text-[1.2rem] pb-[0.8rem] border-b-[0.8px] border-black font-semibold">
            Company
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <div className="text-[0.9rem]">
              This information is educational, and is not an offer to sell or a
              solicitation of an offer to buy any security. This information is
              not a recommendation to buy, hold, or sell an investment or
              financial product, or take any action. This information is neither
              individualized nor a research report, and must not serve as the
              basis for any investment decision. All investments involve risk,
              including the possible loss of capital. Past performance does not
              guarantee future results or returns. Before making decisions with
              legal, tax, or accounting effects, you should consult appropriate
              professionals.
            </div>
            
          </div>
          </div>
          <div className="flex flex-col gap-[1.5rem]">
          <div className=" text-[1.2rem] pb-[0.8rem] border-b-[0.8px] border-black font-semibold">
            Join us
          </div>
          <div className="flex  gap-[1.5rem]">
          <FiInstagram size={"1.4rem"} className=" cursor-pointer hover:text-green-500"/>
          <FaTwitter size={"1.4rem"} className=" cursor-pointer  hover:text-green-500"/>
          <FaYoutube size={"1.4rem"} className=" cursor-pointer  hover:text-green-500"/>
          <FaFacebook size={"1.4rem"} className=" cursor-pointer  hover:text-green-500"/>
          <MdEmail size={"1.4rem"} className=" cursor-pointer  hover:text-green-500"/>
          </div>
          </div>
        </div>
      </div> */}
      <div
        className={`w-[100%] mt-[8rem] mx-auto ${styles.head1} flex xl:flex-row  justify-between border-t-[0.8px] border-black`}
      >
        <div className="w-[65%] border-r-[0.8px] border-black">
          <div className=" text-[1.2rem] pb-[0.8rem] pl-[2rem]  pt-[1rem] border-b-[0.8px] border-black font-semibold">
            Topics
          </div>
          <div className=" flex flex-col gap-[1rem] pl-8">
            <div className="grid grid-cols-3 ">
              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                      Energy Storage
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 1
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 2
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 3
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 4
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                      Renewable Energy
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Hydro and tidal power
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Fuel cells
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Biomass power
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Carbon Footprint
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Biodiversity
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                      Electricity
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 1
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 2
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 3
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 4
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                        Sub topic 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                      Electric Vehicles (EV's)
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Charging Infrastructure
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       EV Maintenance
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       EV Market and Trends
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                      EV Lifetime Costs
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                      Battery Swapping Technology
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                      Batteries
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Battery economics
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Battery Applications
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Battery charge and discharge
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Battery Software & Analytics
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Battery & IoT
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/what-is-relative-strength-index">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                      Grid
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Grid Technologies
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Grid balancing
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Smart Meters
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Sensors and Automation
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                    >
                      <Link
                        href="learn/what-is-relative-strength-index"
                        className=" hover:text-[#27b633] opacity-[70%]"
                      >
                       Grid EMS
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-[2rem]">
          <div className="flex flex-col gap-[1.5rem]">
            <div className=" text-[1.2rem] pb-[0.8rem] pl-[0.8rem]  pt-[1rem] border-b-[0.8px] border-black font-semibold">
              Company
            </div>
            <div className="flex flex-col gap-[0.8rem]">
              <div className="text-[0.9rem] pl-[0.8rem] pr-[0.8rem]">
                This information is educational, and is not an offer to sell or
                a solicitation of an offer to buy any security. This information
                is not a recommendation to buy, hold, or sell an investment or
                financial product, or take any action. This information is
                neither individualized nor a research report, and must not serve
                as the basis for any investment decision. All investments
                involve risk, including the possible loss of capital. Past
                performance does not guarantee future results or returns. Before
                making decisions with legal, tax, or accounting effects, you
                should consult appropriate professionals.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1.5rem]">
            <div className=" text-[1.2rem] pb-[0.8rem] pl-[0.8rem] border-b-[0.8px] border-black font-semibold">
              Join us
            </div>
            <div className="flex  gap-[1.5rem] pl-[0.8rem]">
              <FiInstagram
                size={"1.4rem"}
                className=" cursor-pointer hover:text-green-500"
              />
              <FaTwitter
                size={"1.4rem"}
                className=" cursor-pointer  hover:text-green-500"
              />
              <FaYoutube
                size={"1.4rem"}
                className=" cursor-pointer  hover:text-green-500"
              />
              <FaFacebook
                size={"1.4rem"}
                className=" cursor-pointer  hover:text-green-500"
              />
              <MdEmail
                size={"1.4rem"}
                className=" cursor-pointer  hover:text-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
