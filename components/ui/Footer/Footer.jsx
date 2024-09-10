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
  const isHomePage = router.pathname === "/" || router.pathname === "/terms" || router.pathname === "/about" || router.pathname === "/privacy";
 

  const energyStorage=[
    {name:"ES Systems",link:"/learn/what-are-energy-storage-systems"},
    {name:"ES Technologies",link:"/learn/what-are-energy-storage-technologies"},
    {name:"Digital twin for ES",link:"/learn/digital-twin-technology-for-energy-storage"},
    {name:"Battery Management System",link:"/learn/what-are-battery-management-systems"},
    {name:"Future Trends",link:"/learn/future-trends-in-energy-storage"}
  ]
  const renewableEnergy=[
    {name:"Hydro and tidal power",link:"/learn/what-are-energy-storage-systems"},
    {name:"Fuel cells",link:"/learn/what-are-energy-storage-technologies"},
    {name:"Biomass power",link:"/learn/digital-twin-technology-for-energy-storage"},
    {name:"Carbon Footprint",link:"/learn/what-are-battery-management-systems"},
    {name:"Biodiversity",link:"/learn/future-trends-in-energy-storage"}
  ]
  const electricity=[
    {name:"Power systems",link:"/learn/what-are-energy-storage-systems"},
    {name:"Power consumption",link:"/learn/what-are-energy-storage-technologies"},
    {name:"Renewable Electricity",link:"/learn/digital-twin-technology-for-energy-storage"},
    {name:"Electricity in Everyday Life",link:"/learn/what-are-battery-management-systems"},
    {name:"Load Balancing in Power Grids",link:"/learn/future-trends-in-energy-storage"}
  ]
  const electricVehicles=[
    {name:"Charging Infrastructure",link:"/learn/what-are-energy-storage-systems"},
    {name:"EV Maintenance",link:"/learn/what-are-energy-storage-technologies"},
    {name:"EV Market and Trends",link:"/learn/digital-twin-technology-for-energy-storage"},
    {name:"EV Lifetime Costs",link:"/learn/what-are-battery-management-systems"},
    {name:"Battery Swapping Technology",link:"/learn/future-trends-in-energy-storage"}
  ]
  const batteries=[
    {name:"Battery economics",link:"/learn/what-are-energy-storage-systems"},
    {name:"Battery Applications",link:"/learn/what-are-energy-storage-technologies"},
    {name:"Battery charge and discharge",link:"/learn/digital-twin-technology-for-energy-storage"},
    {name:"Battery Software & Analytics",link:"/learn/what-are-battery-management-systems"},
    {name:"Battery & IoT",link:"/learn/future-trends-in-energy-storage"}
  ]
  const grid=[
    {name:"Grid Technologies",link:"/learn/what-are-energy-storage-systems"},
    {name:"Grid balancing",link:"/learn/what-are-energy-storage-technologies"},
    {name:"Smart Meters",link:"/learn/digital-twin-technology-for-energy-storage"},
    {name:"Sensors and Automation",link:"/learn/what-are-battery-management-systems"},
    {name:"Grid EMS",link:"/learn/future-trends-in-energy-storage"}
  ]

  return (
    <>
    {isHomePage?
    <div className={styles.head1}>
    <div className={styles.Footer_root__HZhgG}>
        <div className={styles.Footer_content__4wtov}>
          <div className={styles.footerHeader}>
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
            </div>
           
          </div>

          <div className={styles.footerElementDesktop}>
            <div className={styles.footerDescription}>
            XBattery is a reliable EV battery built for better performance and
            longer life. It charges quickly and provides consistent power,
            helping electric vehicles run smoothly while supporting a cleaner
            future.
              <br />
            </div>

            <div className={styles.Footer_navigation__GbeEa}>
              <h3 className={styles.footerSubheading}>Product</h3>
              <Link href="/" className={styles.footerElements}>
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
                </div>
              </div>
             
            </div>
          </div>
          <div className={styles.footerDescription1}>
            XBattery is a reliable EV battery built for better performance and
            longer life. It charges quickly and provides consistent power,
            helping electric vehicles run smoothly while supporting a cleaner
            future.
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
          © {new Date().getFullYear()} XBattery. All rights reserved.
        </p>
      </div>
    </div> :
    <>
      {/* <div
        className={`w-[100%] mt-[3rem] mb-1 mx-auto ${styles.head1} flex xl:flex-row  justify-between border-t-[0.8px] border-b-[0.8px] border-black`}
      >
        <div className="w-[65%] border-r-[0.8px] border-black">
          <div className=" text-[1.2rem] pb-[0.8rem] pl-[2rem]  pt-[1rem] border-b-[0.8px] border-black font-semibold">
            Learn
          </div>
          <div className=" flex flex-col gap-[1rem] pl-8 pb-[1.5rem]">
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
                    <Link href="/learn/renewable-energy">
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
                    <Link href="/learn/electricity">
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
                        Electric Vehicles (EV's)
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
                    <Link href="/learn/batteries">
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
                    <Link href="/learn/grid">
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
            <div className=" text-[1.2rem] pb-[0.8rem] pl-[0.8rem] border-b-[0.8px] border-t-[0.8px] pt-3 border-black font-semibold">
              Join us
            </div>
            <div className="flex items-center gap-[1.5rem] pl-[0.8rem]">
              <BsTwitterX
                size={"1.1rem"}
                className="cursor-pointer hover:text-green-500"
              />
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
          <div className="">
            <p className="text-gray-400 text-left font-sans pl-[0.8rem] mt-1 text-[0.85rem]">
              © {new Date().getFullYear()} XBattery. All rights reserved.
            </p>
          </div>
        </div>
      </div> */}
      
      <div className={`w-full mt-[3rem] mb-1 mx-auto ${styles.head1} flex flex-col xl:flex-row justify-between border-t-[0.8px] border-b-[0.8px] border-black`}>
  <div className="w-full xl:w-[65%] border-b-[0.8px] xl:border-r-[0.8px] border-black">
    <div className="text-[1.2rem] pb-[0.8rem] pl-[2rem] pt-[1rem] border-b-[0.8px] border-black font-semibold">
      Learn
    </div>
    <div className="flex flex-col gap-[1rem] pl-8 pb-[1.5rem]">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[1rem]">
        <div className="flex flex-col items-start p-4 md:justify-start justify-center">
          <div className="p-0.5 rounded-md text-left">
            <h2 className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}>
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
                <li key={index} className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}>
                  <Link href={item.link} className="hover:text-[#27b633] opacity-[70%]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start p-4">
          <div className="p-0.5 rounded-md text-left">
            <h2 className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}>
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
                <li key={index} className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}>
                  <Link href={item.link} className="hover:text-[#27b633] opacity-[70%]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start p-4">
          <div className="p-0.5 rounded-md text-left">
            <h2 className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}>
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
                <li key={index} className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}>
                  <Link href={item.link} className="hover:text-[#27b633] opacity-[70%]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start p-4">
          <div className="p-0.5 rounded-md text-left">
            <h2 className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}>
              <Link href="/learn/electric-vehicles">
                <span className="hover:text-[#27b633] hover:no-underline">
                  Electric Vehicles (EV's)
                </span>
              </Link>
            </h2>
          </div>
          <div className="flex flex-col justify-start mt-[-0.5rem]">
            <ul className="pl-[0.4rem] flex flex-col gap-1">
              {electricVehicles.map((item, index) => (
                <li key={index} className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}>
                  <Link href={item.link} className="hover:text-[#27b633] opacity-[70%]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start p-4">
          <div className="p-0.5 rounded-md text-left">
            <h2 className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}>
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
                <li key={index} className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}>
                  <Link href={item.link} className="hover:text-[#27b633] opacity-[70%]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start p-4">
          <div className="p-0.5 rounded-md text-left">
            <h2 className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}>
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
                <li key={index} className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}>
                  <Link href={item.link} className="hover:text-[#27b633] opacity-[70%]">
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
        This information is educational, and is not an offer to sell or a solicitation of an offer to buy any security. This information is not a recommendation to buy, hold, or sell an investment or financial product, or take any action. This information is neither individualized nor a research report, and must not serve as the basis for any investment decision. All investments involve risk, including the possible loss of capital. Past performance does not guarantee future results or returns. Before making decisions with legal, tax, or accounting effects, you should consult appropriate professionals.
      </div>
    </div>
    <div className="flex flex-col gap-[1.5rem]">
      <div className="text-[1.2rem] pb-[0.8rem] pl-[0.8rem] border-b-[0.8px] border-t-[0.8px] pt-3 border-black font-semibold">
        Join us
      </div>
      <div className="flex items-center gap-[1.5rem] pl-[0.8rem]">
        <BsTwitterX size={"1.1rem"} className="cursor-pointer hover:text-green-500" />
        <a href="https://www.linkedin.com/company/xbattery/" target="_blank" rel="noreferrer">
          <FaLinkedin size={"1.4rem"} className="cursor-pointer hover:text-green-500" />
        </a>
        <a href="mailto:support@XBattery.energy" target="_blank" rel="noreferrer" aria-label="email">
          <MdEmail size={"1.4rem"} className="cursor-pointer hover:text-green-500" />
        </a>
      </div>
    </div>
    <div>
      <p className="text-gray-400 text-left font-sans pl-[0.8rem] mt-1 text-[0.85rem]">
        © {new Date().getFullYear()} XBattery. All rights reserved.
      </p>
    </div>
  </div>
</div>


    </>
    }
    </>
  );
};

export default Footer;
