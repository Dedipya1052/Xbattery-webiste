
import { useEffect, useRef, useState } from "react";
import NavLink from "../NavLink";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
   
    // <div className=" bg-white h-[4rem] border-[1px] border-black fixed top-0 left-0 right-0 z-50  flex gap-[2rem]">
    //   <div className="w-[98%] mx-auto flex justify-between items-center">
    //   <div className="flex gap-[2rem] justify-center items-center">
    //     <div className="w-[170px] h-[63px]  border-r-[1px] border-black flex justify-center items-center">
    //     <Link  href="/">
    //       <Image src="/images/logo.webp"  className=" ml-[-10px] scale-[1.3]" width={"180"} height={"180"} alt="logo"/>
    //       </Link>
    //     </div>
    //     <div className="flex gap-[2rem]">
    //     <div className=" text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200"><Link href={"/blog"}>Blog</Link></div>
    //     <div className=" text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200"><Link href={"/learn"}>Learn</Link></div>
    //     <div className=" text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200"><Link href={"/whitepapers"}>Whitepapers</Link></div>
    //     </div>
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 ">
    //         <NavLink
    //           href="/"
    //           className="flex items-center justify-center gap-x-1 text-sm text-black font-bold custom-btn-bg border border-gray-500 active:bg-gray-900 md:inline-flex"
    //         >
    //           Coming soon
    //         </NavLink>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    
    <div className="bg-white h-[4rem] border-[1px] border-black fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center p-2 md:p-4">
      <div className="w-full flex justify-between items-center relative">
        <div className="flex items-center gap-[1rem] md:gap-[2rem]">
          <div className="w-[120px] h-[45px] md:w-[170px] md:h-[63px] md:border-r-[1px] md:border-black flex items-center justify-center">
            <Link href="/">
              <Image
                src="/images/logo.webp"
                className="scale-[1.3] md:ml-[-10px]"
                width={180}
                height={180}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-col md:flex-row gap-[1rem] md:gap-[2rem] text-center md:text-left">
            <div className="text-[1rem] md:text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200">
              <Link href="/blog">Blog</Link>
            </div>
            <div className="text-[1rem] md:text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200">
              <Link href="/learn">Learn</Link>
            </div>
            <div className="text-[1rem] md:text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200">
              <Link href="/whitepapers">Whitepapers</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <NavLink
            href="/"
            className="flex items-center justify-center gap-x-1 text-sm text-black font-bold custom-btn-bg border border-gray-500 active:bg-gray-900"
          >
            Coming soon
          </NavLink>
        </div>
        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center ml-auto relative">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none rounded-full  p-2 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {/* Mobile menu overlay */}
          <div
            ref={menuRef}
            className={`absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}`}
          >
            <Link href="/blog" className="block text-[1rem] hover:text-[#2faf2f] transition-all duration-200 mb-2" onClick={closeMenu}>Blog</Link>
            <Link href="/learn" className="block text-[1rem] hover:text-[#2faf2f] transition-all duration-200 mb-2" onClick={closeMenu}>Learn</Link>
            <Link href="/whitepapers" className="block text-[1rem] hover:text-[#2faf2f] transition-all duration-200 mb-2" onClick={closeMenu}>Whitepapers</Link>
            <NavLink
              href="/"
              className="flex items-center justify-center gap-x-1 text-sm text-black font-bold custom-btn-bg border border-gray-500 active:bg-gray-900 mt-5"
              onClick={closeMenu}
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
