import styles from "./styles.module.css";
import { Box, Link } from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Image } from "@chakra-ui/react";
import Head from "next/head";



import { learnGroups } from "@/utils/learnLinks";

const LearnComp= () => {
  return (
    <>
      <Head>
        <title>Xbattery™ Learn BMS, Energy Storage & Battery Tech Guides</title>
        <meta name="description" content="Discover expert guides on BMS, energy storage, and battery tech. Learn from Xbattery™'s resources to stay ahead in the world of energy solutions."/>
        <meta property="og:image" content="/favicon.webp" />
      </Head>

      <div className={styles.head1}>
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
          {/* <div className={`${styles.head1} border-b-[1px] border-[#aeaeae]`}>
          <div className=" w-[96%] mx-auto pt-[1rem] pb-[1rem] text-[2.1rem] font-[520]">
            Learn
          </div>
        </div> */}
          <div className=" mt-[2.5rem] mb-[2rem] flex flex-col justify-center items-center gap-[1rem] w-[100%]">
            <h1
              className={`text-[2.22rem] md:text-[2.8rem] text-center font-semibold ${styles.head1}`}
            >
              Explore the topics
            </h1>
            {/* <div
            className={`${styles.head1} text-[1.05rem] md:text-[1.28rem] text-center font-semibold p-2`}
          >
            There’s always more to learn when it comes to knowledge.
          </div> */}
          </div>
          <div className="mt-[2.8rem] md:mt-[4.5rem] w-[90%] mx-auto grid xl:grid-cols-3 lg:grid-cols-2 justify-center lg:justify-start items-center gap-[1.2rem]">
            <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px] overflow-hidden">
              <Image
                alt="image"
                src="/images/comp5/box1.svg"
                className="block rounded-md h-[219px] w-[100%] object-cover object-right-bottom"
              />

              <div className="absolute top-0 flex flex-col items-start justify-center p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                  >
                    <Link href="/learn/energy-storage">
                      {" "}
                      <span className="hover:text-[#33c433] hover:no-underline">
                        Energy Storage
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.5rem] flex flex-col gap-1">
                    {learnGroups.energyStorage.map((item, index) => (
                      <li key={index} className="cursor-pointer text-md">
                        <Link href={item.link} className="hover:text-[#33c433]">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px] overflow-hidden">
              <Image
                alt="image"
                src="/images/comp5/box2.svg"
                className="block rounded-md h-[219px] w-[100%] object-cover "
              />

              <div className="absolute top-0 flex flex-col items-start justify-center p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                  >
                    <Link href="/learn/renewable-energy">
                      {" "}
                      <span className="hover:text-[#33c433] hover:no-underline">
                        Renewable Energy
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.5rem] flex flex-col gap-1">
                    {learnGroups.renewableEnergy.map((item, index) => (
                      <li key={index} className="cursor-pointer text-md">
                        <Link href={item.link} className="hover:text-[#33c433]">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px] overflow-hidden">
              <Image
                alt="image"
                src="/images/comp5/box3.svg"
                className="block rounded-md h-[219px] w-[100%] object-cover "
              />

              <div className="absolute top-0 flex flex-col items-start justify-center p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                  >
                    <Link href="/learn/electricity">
                      {" "}
                      <span className="hover:text-[#33c433] hover:no-underline">
                        Electricity
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.5rem] flex flex-col gap-1">
                    {learnGroups.electricity.map((item, index) => (
                      <li key={index} className="cursor-pointer text-md">
                        <Link href={item.link} className="hover:text-[#33c433]">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px] overflow-hidden">
              <Image
                alt="image"
                src="/images/comp5/box4.svg"
                className="block rounded-md  w-[100%] h-[219px]  object-cover"
              />

              <div className="absolute top-0 flex flex-col items-start justify-center p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                  >
                    <Link href="/learn/electric-vehicles">
                      {" "}
                      <span className="hover:text-[#33c433] hover:no-underline">
                        Electric Vehicles
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.5rem] flex flex-col gap-1">
                    {learnGroups.electricVehicles.map((item, index) => (
                      <li key={index} className="cursor-pointer text-md">
                        <Link href={item.link} className="hover:text-[#33c433]">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px] overflow-hidden">
              <Image
                alt="image"
                src="/images/comp5/box5.svg"
                className="block rounded-md h-[219px] w-[100%] object-cover object-right-bottom"
              />

              <div className="absolute top-0 flex flex-col items-start justify-center p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                  >
                    <Link href="/learn/batteries">
                      {" "}
                      <span className="hover:text-[#33c433] hover:no-underline">
                        Batteries
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.5rem] flex flex-col gap-1">
                    {learnGroups.batteries.map((item, index) => (
                      <li key={index} className="cursor-pointer text-md">
                        <Link href={item.link} className="hover:text-[#33c433]">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative inline-block border-[0.8px] border-black rounded-md xl:h-[220px] overflow-hidden">
              <Image
                alt="image"
                src="/images/comp5/box6.svg"
                className="block rounded-md h-[220px] w-[100%] object-cover object-right-bottom"
              />

              <div className="absolute top-0 flex flex-col items-start justify-center p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#33c433]`}
                  >
                    <Link href="/learn/grid">
                      {" "}
                      <span className="hover:text-[#33c433] hover:no-underline">
                        Grid
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.5rem] flex flex-col gap-1">
                    {learnGroups.grid.map((item, index) => (
                      <li key={index} className="cursor-pointer text-md">
                        <Link href={item.link} className="hover:text-[#33c433]">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[7rem] mb-[6rem]"></div>

       
        {/* Options trading essentials */}
        <div className="">
          <div className="flex flex-col justify-center items-center gap-[1.4rem]">
            <div
              className={`text-[2.22rem] md:text-[2.8rem] text-center font-semibold ${styles.head1}`}
            >
              Energy Insights and Calculators
            </div>
            <div
              className={`${styles.head1} text-[0.8rem] md:text-[1.2rem] font-semibold text-center`}
            >
              Explore tools to calculate your energy usage, understand India's
              power distribution, <br></br>
              and assess solar energy benefits for a sustainable future.
            </div>
          </div>
          <div className="mt-[2.5rem] md:mt-[5rem] w-[85%] mx-auto sm:w-[90%] md:w-[85%] lg:[87%] xl:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.2rem] justify-items-center">
            <div className="relative cursor-pointer group h-[500px] w-[300px] sm:w-full sm:h-auto object-contain">
              <Link href="/learn/indian-solar-calculator">
                <Image
                  alt="image"
                  src="/images/comp4/box1.png"
                  className="block w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-start justify-center p-4">
                  <div className="p-4 rounded-md text-left">
                    <h2
                      className={`text-[1.7rem] font-semibold mb-2 ${styles.head1} leading-[45px] group-hover:text-white`}
                    >
                      Indian Solar
                      <br /> Calculator
                    </h2>
                    <p className="text-black text-md group-hover:text-white">
                      Estimate energy, savings, and CO₂ reduction with the
                      Indian Solar Calculator. Specify panels, sunlight hours,
                      and rates for a detailed view of your solar impact.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="relative cursor-pointer group h-[500px] w-[300px] sm:w-full sm:h-auto object-contain">
              <Link href="/learn/indian-energy-mix">
                <Image
                  alt="image"
                  src="/images/comp4/box2.png"
                  className="block w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-start justify-center p-4">
                  <div className="p-4 rounded-md text-left">
                    <h2
                      className={`text-[1.7rem] font-semibold mb-2 ${styles.head1} leading-[45px] group-hover:text-white`}
                    >
                      Indian <br /> Energy Mix
                    </h2>
                    <p className="text-black text-md group-hover:text-white">
                      Explore India’s power sources, from thermal and solar to
                      hydro and nuclear. Visualize the energy mix and capacity
                      to see how India meets its power needs.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="relative cursor-pointer group h-[500px] w-[300px] sm:w-full sm:h-auto object-contain">
              <Link href="/learn/energy-consumption-calculator">
                <Image
                  alt="image"
                  src="/images/comp4/box3.png"
                  className="block w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-start justify-center p-4">
                  <div className="p-4 rounded-md text-left">
                    <h2
                      className={`text-[1.7rem] font-semibold mb-2 ${styles.head1} leading-[45px] group-hover:text-white`}
                    >
                      Energy Consumption
                      <br /> Calculator
                    </h2>
                    <p className="text-black text-md group-hover:text-white">
                      Estimate your monthly energy use in kWh with our
                      calculator. Input wattage, daily hours, and days to
                      understand electricity needs and costs.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[8rem] mb-[7rem]"></div> */}

        {/* The library */}
        {/* <div className="">
        <div className="flex flex-col justify-center items-center gap-[1.4rem]">
          <div
            className={`text-[2.2rem] md:text-[3rem] text-center font-semibold ${styles.head1}`}
          >
            The library
          </div>
          <div
            className={`${styles.head1} text-[1.05rem] md:text-[1.28rem] font-semibold text-center`}
          >
            There’s always more to learn when it comes to <br></br>
            investing. Check out our entire library.
          </div>
        </div>
        <div className="mt-[5rem] w-[95%] md:w-[70%] mx-auto flex flex-wrap justify-center xl:justify-start items-center gap-[1.2rem]">
          <div className="relative inline-block cursor-pointer border-[0.8px] border-black rounded-md ">
            <Image
              alt="image"
              src="/images/comp5/box1.svg"
              className="block rounded-md"
            />

            <div className="absolute top-0 flex items-start justify-center p-4">
              <div className="p-4 rounded-md text-left">
                <h2
                  className={`text-[1.3rem] font-semibold mb-2 ${styles.head1} leading-[45px]`}
                >
                  What is a BMS?
                </h2>
              </div>
            </div>
          </div>
          <div className="relative inline-block cursor-pointer border-[0.8px] border-black rounded-md">
            <Image
              alt="image"
              src="/images/comp5/box2.svg"
              className="block rounded-md"
            />

            <div className="absolute top-0 flex items-start justify-center p-4">
              <div className="p-4 rounded-md text-left">
                <h2
                  className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px]`}
                >
                  What is a ES?
                </h2>
              </div>
            </div>
          </div>
          <div className="relative inline-block cursor-pointer border-[0.8px] border-black rounded-md">
            <Image
              alt="image"
              src="/images/comp5/box3.svg"
              className="block rounded-md"
            />

            <div className="absolute top-0 flex items-start justify-center p-4">
              <div className="p-4 rounded-md text-left">
                <h2
                  className={`text-[1.2rem] font-semibold mb-2 ${styles.head1} leading-[45px]`}
                >
                  What is Grid EMS?
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
      </div> */}

        <div className=" mt-[4rem] mb-[4rem]"></div>

        {/* <div className="flex flex-col gap-[1rem] w-[90%]  md:w-[60%] mx-auto mb-[3rem]">
          <div className="text-black opacity-[70%] text-center md:text-left text-[1.15rem]">
            Content is provided for informational purposes only, does not
            constitute tax or investment advice, and is not a recommendation for
            any security or trading strategy. All investments involve risk,
            including the possible loss of capital. Past performance does not
            guarantee future results.
          </div>
          <div className="text-black opacity-[70%] text-center md:text-left text-[1.15rem]">
            Options trading entails significant risk and is not appropriate for
            all customers. Customers must read and understand the{" "}
            <span>
              <Link href="/" className=" underline hover:text-green-600">
                Characteristics and Risks of Standardized Options
              </Link>
            </span>{" "}
            before engaging in any options trading strategies. Supporting
            documentation for any claims, if applicable, will be furnished upon
            request.
          </div>
        </div> */}

        {/* <CompleteSolarCalculator/> */}

        {/* <div className="bg-black h-[0.8px] w-[100%] mx-auto mt-[8rem] mb-[3rem]"></div> */}

        {/* footer */}

        {/* <div
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
                    <Link href="/learn/energy-storage">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Energy Storage
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    {energyStorage.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/renewable-energy">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Renewable Energy
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                  {renewableEnergy.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/electricity">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Electricity
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                  {electricity.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="/learn/electric-vehicles">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Electric Vehicles 
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                  {electricVehicles.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/batteries">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Batteries
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                  {batteries.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/grid">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Grid
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                  {grid.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
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
      </div> */}
      </div>
    </>
  );
}

export default LearnComp;
