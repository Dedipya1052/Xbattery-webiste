
import { useEffect, useRef, useState } from "react";
import NavLink from "../NavLink";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
 
   

  return (
   
    <div className=" bg-white h-[4rem] border-[1px] border-black fixed top-0 left-0 right-0 z-50  flex gap-[2rem]">
      <div className="w-[98%] mx-auto flex justify-between items-center">
      <div className="flex gap-[2rem] justify-center items-center">
        <div className="w-[170px] h-[63px]  border-r-[1px] border-black flex justify-center items-center">
        <Link  href="/">
          <Image src="/images/logo.webp"  className=" ml-[-10px] scale-[1.3]" width={"180"} height={"180"} alt="logo"/>
          </Link>
        </div>
        <div className="flex gap-[2rem]">
        <div className=" text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200"><Link href={"/blog"}>Blog</Link></div>
        <div className=" text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200"><Link href={"/learn"}>Learn</Link></div>
        <div className=" text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200"><Link href={"/whitepapers"}>Whitepapers</Link></div>
        </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 ">
            <NavLink
              href="/"
              className="flex items-center justify-center gap-x-1 text-sm text-black font-bold custom-btn-bg border border-gray-500 active:bg-gray-900 md:inline-flex"
            >
              Coming soon
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
