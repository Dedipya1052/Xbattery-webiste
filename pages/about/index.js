import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
  <div className={styles.head1}>
     <nav
        className={`fixed top-0 left-[0%] right-0 w-[100%] mx-auto flex items-center justify-between p-4 pt-[1rem] z-50 transition-colors duration-300 bg-[black]`}
      >
      <div  className={` w-[95%] mx-auto flex items-center justify-between z-50 }`}>
        <div>
          <Link href="/">
            <Image
              src="/images/logo1.png"
              width="160"
              height={"160"}
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex gap-7 ">
          <Link href="/">
            {" "}
            <button className="text-[#cacaca] text-lg font-medium hover:text-white">
              Product
            </button>
          </Link>

          <Link href={"/blog"}>
            <button className="text-[#cacaca] text-lg font-medium hover:text-white">
              Blog
            </button>
          </Link>

          <Link href={"/learn"}>
            <button className="text-[#cacaca] text-lg font-medium hover:text-white">
              Learn
            </button>
          </Link>

          <Link href={"/whitepapers"}>
            {" "}
            <button className="text-[#cacaca] text-lg font-medium hover:text-white">
              Whitepapers
            </button>
          </Link>

         
        </div>

        <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
          <Link href="/coming-soon">Coming Soon</Link>
        </button>
        </div>
      </nav>
  </div>
  );
};

export default About;
