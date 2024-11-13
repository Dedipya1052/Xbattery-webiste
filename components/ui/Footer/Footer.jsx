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
  const isHomePage = router.pathname === "/" || router.pathname === "/terms" || router.pathname === "/about" || router.pathname === "/privacy" || router.pathname==="/careers" || router.pathname.includes("careers");
 

  const energyStorage = [
    { name: "Battery Energy Storage System", link: "/learn/battery-energy-storage-systems" },
    { name: "Types of Energy Storage Systems", link: "/learn/types-of-energy-storage-systems" },
   // { name: "Emerging and Innovative Energy Storage Technologies", link: "/learn/emerging-innovative-energy-storage-technologies" },
    { name: "Energy Storage Applications", link: "/learn/understanding-energy-storage-applications" }
  ];
  
  const renewableEnergy = [
    { name: "Solar Energy", link: "/learn/solar-energy" },
    { name: "Wind Energy", link: "/learn/wind-energy" },
    { name: "Geothermal Energy", link: "/learn/geothermal-energy" },
    { name: "Biomass Energy", link: "/learn/biomass-energy" }
  ];
  
  const electricVehicles = [
    { name: "Charging Infrastructure", link: "/learn/ev-charging-infrastructure" },
    { name: "Economics of EV Ownership", link: "/learn/economics-of-ev-ownership" }
  ];
  
  const electricity = [
    { name: "Electric Utilities", link: "/learn/electric-utilities" },
    { name: "Tariffs and PPA’s", link: "/learn/tariffs-ppas" }
  ];
  
  const grid = [
    { name: "Renewable Integration", link: "/learn/renewable-integration" },
    { name: "Smart Grid", link: "/learn/smart-grid" }
  ];
  
  const batteries = [
    { name: "Lithium and its Significance", link: "/learn/lithium-significance" },
    { name: "Emerging Battery Technologies", link: "/learn/emerging-battery-technologies" }
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
                      src="/images/logo1.png"
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
                        className={styles.footerElements}
                        rel="noreferrer"
                      >
                        <MdEmail size={"30.5px"} />
                      </a>
                      <a
                        href="https://x.com/Xbattery_"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.footerElements}
                      >
                        <FaSquareXTwitter size={"26px"} />
                      </a>

                      <a
                        href="https://www.linkedin.com/company/xbattery/"
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
                Xbattery builds large battery packs that help businesses and grids store energy affordably and access it on demand.
                  <br />
                </div>

                <div className={styles.Footer_navigation__GbeEa}>
                  <h3 className={styles.footerSubheading}>Product</h3>
                  <Link href="/#features" className={styles.footerElements}>
                    Features
                  </Link>
                  <Link href="/" className={styles.footerElements}>
                    FAQs
                  </Link>
                  <Link href="/" className={styles.footerElements}>
                    Pricing
                  </Link>
                </div>
                <div className={styles.Footer_navigation__GbeEa}>
                  <h3 className={styles.footerSubheading}>Resources</h3>
                  <Link href="/blog" className={styles.footerElements}>
                    Blog
                  </Link>
                  <Link href="/learn" className={styles.footerElements}>
                    Learn
                  </Link>
                  <Link href="/whitepapers" className={styles.footerElements}>
                    Whitepapers
                  </Link>
                </div>

                <div className={styles.contactAndComp}>
                  <div className={styles.Footer_legal__4A0DG}>
                    <h3 className={styles.footerSubheading}>Company</h3>
                    <div className={styles.linksFot}>
                      <Link href="/about" className={styles.footerElements}>
                        About us
                      </Link>
                      <Link href="/terms" className={styles.footerElements}>
                        Terms
                      </Link>
                      <Link href="/privacy" className={styles.footerElements}>
                        Privacy
                      </Link>
                      <Link href="/careers" className={styles.footerElements}>
                        Careers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footerDescription1}>
              Xbattery builds large battery packs that help businesses and grids store energy affordably and access it on demand.
                <br />
              </div>
              <div className={styles.linksFot2}>
                <a
                  href="mailto:support@xbattery.energy"
                  target="_blank"
                  className={styles.footerElements}
                  rel="noreferrer"
                >
                  <MdEmail size={"30.5px"} />
                </a>
                <a
                  href="https://twitter.com/getalterai"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.footerElements}
                >
                  <FaSquareXTwitter size={"26px"} />
                </a>

                <a
                  href="https://www.linkedin.com/company/xbattery/"
                  className={styles.footerElements}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={"26px"} />
                </a>
              </div>
            </div>

            <p
              style={{
                fontSize: "12px",
                opacity: "45%",
                marginBottom: "7px",
                marginTop: "25px",
              }}
            >
              © {new Date().getFullYear()} XBattery Energy Private Limited. All
              rights reserved.
            </p>
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
                  Company
                </div>
                <div className="text-[0.9rem] pl-[0.8rem] pr-[0.8rem]">
                  This information is educational, and is not an offer to sell
                  or a solicitation of an offer to buy any security. This
                  information is not a recommendation to buy, hold, or sell an
                  investment or financial product, or take any action. This
                  information is neither individualized nor a research report,
                  and must not serve as the basis for any investment decision.
                  All investments involve risk, including the possible loss of
                  capital.
                </div>
              </div>
              <div className="flex flex-col gap-[1.5rem]">
                <div className="text-[1.2rem] pb-[0.8rem] pl-[0.8rem] border-b-[0.8px] border-t-[0.8px] pt-3 border-black font-semibold">
                  Join us
                </div>
                <div className="flex items-center gap-[1.5rem] pl-[0.8rem]">
                  <a
                    href=" https://x.com/Xbattery_"
                    target="_blank"
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
                  >
                    <FaLinkedin
                      size={"1.4rem"}
                      className="cursor-pointer hover:text-green-500"
                    />
                  </a>
                  <a
                    href="mailto:support@XBattery.energy"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="email"
                  >
                    <MdEmail
                      size={"1.4rem"}
                      className="cursor-pointer hover:text-green-500"
                    />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-left font-sans pl-[0.8rem] mt-1 text-[0.75rem]">
                  © {new Date().getFullYear()} XBattery Energy Private Limited.
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
