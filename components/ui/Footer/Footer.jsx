import Link from "next/link";
import styles from "./styles.module.css";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

import { BsTwitterX } from "react-icons/bs";
import { useRouter } from "next/router";

import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  const isHomePage =
    router.pathname === "/" ||
    router.pathname === "/terms" ||
    router.pathname === "/about" ||
    router.pathname === "/privacy" ||
    router.pathname === "/careers" ||
    router.pathname.includes("careers") ||
    router.pathname.includes("contact") ||
    router.pathname.includes("bharat-bms") ||
    router.pathname.includes("docs")  ||
    router.pathname.includes("support");



const energyStorage = [
  { name: "Battery Energy Storage System", link: "/learn/battery-energy-storage-systems" },
  { name: "Emerging LDES Technologies", link: "/learn/emerging-ldes-technologies" }
];

const renewableEnergy = [
  { name: "Solar Energy", link: "/learn/solar-energy" },
  { name: "Wind Energy", link: "/learn/wind-energy" }, 
  { name: "Geothermal Energy", link: "/learn/geothermal-energy" },
];

const electricVehicles = [
  { name: "EV vs ICE Costs", link: "/learn/ev-vs-ice-costs" },
  { name: "EV Charging", link: "/learn/ev-charging" },
  { name: "Indian EV Market", link: "/learn/indian-ev-market" },
];

const electricity = [
  { name: "India’s Electricity Sector", link: "/learn/indias-electricity-sector" },
  { name: "Power Purchase Agreement", link: "/learn/power-purchase-agreement" },
];

const grid = [
  { name: "Renewable Integration", link: "/learn/renewable-integration" }, 
  { name: "Smart Grid", link: "/learn/smart-grid" },
  { name:"Understanding Smart Meters", link: "/learn/understanding-smart-meters"  }
];

const batteries = [
  { name: "Understanding Lithium", link: "/learn/understanding-lithium" }, 
  { name: "Emerging Battery Technologies", link: "/learn/emerging-battery-technologies" },
  { name:"Understanding LFP Batteries", link:"/learn/understanding-lfp-batteries"}
];


const products = [
  { name: "Xbattery 5kWh", link: "/#xbattery5kwh" },
  { name: "Xbattery 50kWh", link: "/#xbattery50kwh" },
  { name: "BharatBMS", link: "/bharat-bms" }, 
];


const company = [
  { name: "About", link: "/about" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" }, 
  { name: "Support", link: "/support" }, 
];

const resources = [
  { name: "Blog", link: "/blog" },
  { name: "Whitepapers", link: "/whitepapers" },
  { name: "Learn", link: "/learn" }, 
  { name: "API", link: "/docs/api" },
];


  return (
    <>
      {isHomePage ? (
        <div className={styles.head1}>
          <div className={styles.Footer_root__HZhgG}>
            <div className={styles.Footer_content__4wtov}>
              <div className={`${styles.footerHeader} ${styles.footerHeader1}`}>
                <div className={styles.footerLogo} aria-label="Go to homepage">
                  <Link href={"/"}>
                    <Image
                      src="/images/logo1.webp"
                      width="160"
                      height={"160"}
                      alt="logo"
                    />
                  </Link>
                  <div className={`${styles.Footer_social__XfgO0} mr-[2rem]`}>
                    <div className={styles.linksFot1}>
                      <a
                        href="mailto:support@xbattery.energy"
                        target="_blank"
                        aria-label="Xbattery support email"
                        className={styles.footerElements}
                        rel="noreferrer"
                      >
                        <MdEmail size={"30.5px"} />
                      </a>
                      <a
                        href="https://x.com/Xbattery_"
                        aria-label="Xbattery twitter"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.footerElements}
                      >
                        <FaSquareXTwitter size={"26px"} />
                      </a>

                      <a
                        href="https://www.linkedin.com/company/xbattery/"
                        aria-label="Xbattery Linkedin"
                        className={styles.footerElements}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin size={"26px"} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.footerElementDesktop}>
                <div className={styles.footerDescription}>
                  Xbattery™ is building lithium battery packs in India,
                  including electronics and software, to help businesses, EVs
                  and grids store energy affordably and access it on demand.
                  <br />
                </div>

                <div className={styles.Footer_navigation__GbeEa}>
                  <h3 className={styles.footerSubheading}>Products</h3>
                  <Link href="/#xbattery5kwh" className={styles.footerElements}>
                    Xbattery 5kWh
                  </Link>
                  <Link
                    href="/#xbattery50kwh"
                    className={styles.footerElements}
                  >
                    Xbattery 50kWh
                  </Link>
                  <Link href="/bharat-bms" className={styles.footerElements}>
                    BharatBMS
                  </Link>
                </div>
                <div className={styles.Footer_navigation__GbeEa}>
                  <h3 className={styles.footerSubheading}>Resources</h3>
                  <Link href="/blog" className={styles.footerElements}>
                    Blog
                  </Link>

                  <Link href="/whitepapers" className={styles.footerElements}>
                    Whitepapers
                  </Link>
                  <Link href="/learn" className={styles.footerElements}>
                    Learn
                  </Link>
                  <Link href="/docs/api" className={styles.footerElements}>
                    API
                  </Link>
                </div>

                <div className={styles.contactAndComp}>
                  <div className={styles.Footer_legal__4A0DG}>
                    <h3 className={styles.footerSubheading}>Company</h3>
                    <div className={styles.linksFot}>
                      <Link href="/about" className={styles.footerElements}>
                        About
                      </Link>
                      <Link href="/careers" className={styles.footerElements}>
                        Careers
                      </Link>
                      <Link href="/contact" className={styles.footerElements}>
                        Contact
                      </Link>
                      <Link href="/support" className={styles.footerElements}>
                        Support
                      </Link>
                      {/* <Link href="/terms" className={styles.footerElements}>
                        Terms
                      </Link>
                      <Link href="/privacy" className={styles.footerElements}>
                        Privacy
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footerDescription1}>
                Xbattery™ is building lithium battery packs in India, including
                electronics and software, to help businesses, EVs and grids
                store energy affordably and access it on demand.
                <br />
              </div>
              <div className={styles.linksFot2}>
                <a
                  href="mailto:support@xbattery.energy"
                  aria-label="Xbattery support email"
                  target="_blank"
                  className={styles.footerElements}
                  rel="noreferrer"
                >
                  <MdEmail size={"30.5px"} />
                </a>
                <a
                  href="https://x.com/Xbattery_"
                  aria-label="Xbattery twitter"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.footerElements}
                >
                  <FaSquareXTwitter size={"26px"} />
                </a>

                <a
                  href="https://www.linkedin.com/company/xbattery/"
                  aria-label="Xbattery Linkedin"
                  className={styles.footerElements}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={"26px"} />
                </a>
              </div>
            </div>

            {/* <p
              style={{
                fontSize: "12px",
                opacity: "45%",
                marginBottom: "7px",
                marginTop: "25px",
                textAlign: "center",
              }}
            >
              © {new Date().getFullYear()} Xbattery Energy Private Limited. All
              rights reserved.{" "}
              <span>
                <Link href={"/terms"} className=" hover:underline ">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href={"/privacy"} className=" hover:underline ">
                  Privacy.
                </Link>
              </span>
            </p> */}

            <div className="w-[95%] mx-auto">
              <p
                style={{
                  fontSize: "12px",
                  color: "#6c757d", // Sufficient contrast color for the entire text
                  marginBottom: "7px",
                  marginTop: "25px",
                  textAlign: "center",
                }}
              >
                © {new Date().getFullYear()} Xbattery Energy Private Limited.
                All rights reserved.{" "}
                <span>
                  <Link href={"/terms"} className="hover:underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href={"/privacy"} className="hover:underline">
                    Privacy.
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`w-full mt-[3rem] mx-auto ${styles.head1} flex flex-col xl:flex-row justify-between border-t-[0.8px] border-b-[0.8px] border-black`}
          >
            <div className="w-full xl:w-[65%] border-b-[0.8px] xl:border-r-[0.8px] border-black">
              <div className="text-[1.2rem] pb-[0.8rem] pl-[2rem] pt-[1rem] border-b-[0.8px] border-black font-semibold">
                Learn
              </div>
              <div className="flex flex-col gap-[1rem] pl-8 pb-[1.5rem]">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[1rem]">
                  <div className="flex flex-col items-start p-4 md:justify-start justify-center">
                    <div className="p-0.5 rounded-md text-left">
                      <h2
                        className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                      >
                        <Link href="/learn/energy-storage">
                          <span className="hover:text-[#27b633] hover:no-underline">
                            Energy Storage
                          </span>
                        </Link>
                      </h2>
                    </div>
                    <div className="flex flex-col justify-start mt-[-0.5rem]">
                      <ul className="pl-[0.4rem] flex flex-col gap-1">
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

                  <div className="flex flex-col items-start p-4">
                    <div className="p-0.5 rounded-md text-left">
                      <h2
                        className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                      >
                        <Link href="/learn/renewable-energy">
                          <span className="hover:text-[#27b633] hover:no-underline">
                            Renewable Energy
                          </span>
                        </Link>
                      </h2>
                    </div>
                    <div className="flex flex-col justify-start mt-[-0.5rem]">
                      <ul className="pl-[0.4rem] flex flex-col gap-1">
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

                  <div className="flex flex-col items-start p-4">
                    <div className="p-0.5 rounded-md text-left">
                      <h2
                        className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                      >
                        <Link href="/learn/electricity">
                          <span className="hover:text-[#27b633] hover:no-underline">
                            Electricity
                          </span>
                        </Link>
                      </h2>
                    </div>
                    <div className="flex flex-col justify-start mt-[-0.5rem]">
                      <ul className="pl-[0.4rem] flex flex-col gap-1">
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

                  <div className="flex flex-col items-start p-4">
                    <div className="p-0.5 rounded-md text-left">
                      <h2
                        className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                      >
                        <Link href="/learn/electric-vehicles">
                          <span className="hover:text-[#27b633] hover:no-underline">
                            Electric Vehicles
                          </span>
                        </Link>
                      </h2>
                    </div>
                    <div className="flex flex-col justify-start mt-[-0.5rem]">
                      <ul className="pl-[0.4rem] flex flex-col gap-1">
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

                  <div className="flex flex-col items-start p-4">
                    <div className="p-0.5 rounded-md text-left">
                      <h2
                        className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                      >
                        <Link href="/learn/batteries">
                          <span className="hover:text-[#27b633] hover:no-underline">
                            Batteries
                          </span>
                        </Link>
                      </h2>
                    </div>
                    <div className="flex flex-col justify-start mt-[-0.5rem]">
                      <ul className="pl-[0.4rem] flex flex-col gap-1">
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

                  <div className="flex flex-col items-start p-4">
                    <div className="p-0.5 rounded-md text-left">
                      <h2
                        className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                      >
                        <Link href="/learn/grid">
                          <span className="hover:text-[#27b633] hover:no-underline">
                            Grid
                          </span>
                        </Link>
                      </h2>
                    </div>
                    <div className="flex flex-col justify-start mt-[-0.5rem]">
                      <ul className="pl-[0.4rem] flex flex-col gap-1">
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
            <div className="w-full xl:w-[35%] flex flex-col gap-[2rem]">
              <div className="flex flex-col gap-[1.5rem]">
                <div className="text-[1.2rem] pb-[0.8rem] pl-[0.8rem] pt-[1rem] border-b-[0.8px] border-black font-semibold">
                  Xbattery™
                </div>
                <div className="text-[1rem] pl-[0.8rem] pr-[0.8rem] text-[#4d4d4d] opacity-[85%]">
                  Xbattery is building lithium battery packs in India, including
                  electronics and software, to help businesses, EVs and grids
                  store energy affordably and access it on demand.
                </div>
              </div>
              <div className="flex justify-between md:w-[60%] xl:w-full">
               
              <div className="flex flex-col items-start mt-[-1rem] pl-[0.8rem] ">
                  <div className="p-0.5 rounded-md text-left">
                    <h2
                      className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] `}
                    >
                     Products
                    </h2>
                  </div>
                  <div className="flex flex-col justify-start mt-[-0.7rem]">
                    <ul className="pl-[0.4rem] flex flex-col gap-1">
                      {products.map((item, index) => (
                        <li
                          key={index}
                          className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                        >
                          <Link
                            href={item.link}
                            className="hover:text-[#27b633] opacity-[70%] text-[#4d4d4d]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-start mt-[-1rem] ">
                  <div className="p-0.5 rounded-md text-left">
                    <h2
                      className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] ]`}
                    >
                      Resources
                    </h2>
                  </div>
                  <div className="flex flex-col justify-start mt-[-0.7rem] pl-[0.4rem]">
                    <ul className="pl-[0.4rem] flex flex-col gap-1">
                      {resources.map((item, index) => (
                        <li
                          key={index}
                          className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                        >
                          <Link
                            href={item.link}
                            className="hover:text-[#27b633] opacity-[70%] text-[#4d4d4d]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-start mt-[-1rem] pr-[0.7rem] ">
                  <div className="p-0.5 rounded-md text-left">
                    <h2
                      className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] ]`}
                    >
                      Company
                    </h2>
                  </div>
                  <div className="flex flex-col justify-start mt-[-0.7rem]">
                    <ul className="pl-[0.4rem] flex flex-col gap-1">
                      {company.map((item, index) => (
                        <li
                          key={index}
                          className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                        >
                          <Link
                            href={item.link}
                            className="hover:text-[#27b633] opacity-[70%] text-[#4d4d4d]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[1.5rem] pl-2 mb-[-1rem]">
                {/* <div className="text-[1.2rem] pb-[0.8rem] pl-[0.8rem] border-b-[0.8px] border-t-[0.8px] pt-3 border-black font-semibold">
                  Join us
                </div> */}
                <div className="flex items-center gap-[1.5rem] pl-[0.8rem]">
                  <a
                    href=" https://x.com/Xbattery_"
                    target="_blank"
                    aria-label="Xbattery twitter"
                    rel="noreferrer"
                  >
                    <BsTwitterX
                      size={"1.1rem"}
                      className="cursor-pointer hover:text-green-500"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/xbattery/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Xbattery Linkedin"
                  >
                    <FaLinkedin
                      size={"1.4rem"}
                      className="cursor-pointer hover:text-green-500"
                    />
                  </a>
                  <a
                    href="mailto:support@XBattery.energy"
                    aria-label="Xbattery support email"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MdEmail
                      size={"1.4rem"}
                      className="cursor-pointer hover:text-green-500"
                    />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-left font-sans pl-[0.8rem] mt-1 mb-1 text-[0.75rem]">
                  © {new Date().getFullYear()} Xbattery Energy Private Limited.
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
