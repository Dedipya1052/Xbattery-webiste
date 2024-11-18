import { useEffect, useRef, useState } from "react";
import NavLink from "../NavLink";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isHomePage =
    router.pathname === "/terms" ||
    router.pathname === "/about" ||
    router.pathname === "/privacy" ||
    router.pathname === "/careers" ||
    router.pathname.includes("careers") ||
    router.pathname.includes("bharat-bms");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isHomePage ? (
        <nav
          className={`fixed top-0 left-0 w-full mx-auto flex items-center justify-between p-4 z-50 transition-colors duration-300 bg-black`}
        >
          <div className="w-[95%] mx-auto flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/logo1.png"
                width={160}
                height={160}
                alt="logo"
                className="opacity-100"
              />
            </Link>

            <div className="hidden lg:flex gap-7 items-center">
              <Link href="/">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                  Energy Storage
                </button>
              </Link>

              <Link href="/bharat-bms">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                  BharatBMS
                </button>
              </Link>

              <Link href="/about">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                  About
                </button>
              </Link>

              <Link href="/blog">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                  Blog
                </button>
              </Link>

              <Link href="/whitepapers">
                <button className="text-[#cacaca] text-lg font-medium hover:text-white">
                  Whitepapers
                </button>
              </Link>
            </div>

            <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 hidden lg:block">
              <Link href="/#registerEmail">Get Notified</Link>
            </button>

            <button
              className="lg:hidden flex items-center text-white"
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
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-black text-white flex flex-col items-center p-4 space-y-4">
              <Link href="/">
                <button
                  className="text-lg font-medium"
                  onClick={handleMenuItemClick}
                >
                  Energy Storage
                </button>
              </Link>

              <Link href="/bharat-bms">
                <button
                  className="text-lg font-medium"
                  onClick={handleMenuItemClick}
                >
                  BharatBMS
                </button>
              </Link>

              <Link href="/about">
                <button
                  className="text-lg font-medium"
                  onClick={handleMenuItemClick}
                >
                  About
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

              <Link href="/whitepapers">
                <button
                  className="text-lg font-medium"
                  onClick={handleMenuItemClick}
                >
                  Whitepapers
                </button>
              </Link>

              <Link href="/#registerEmail">
                <button
                  className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                  onClick={handleMenuItemClick}
                >
                  Get Notified
                </button>
              </Link>
            </div>
          )}
        </nav>
      ) : (
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
              <div className="hidden lg:flex flex-col md:flex-row gap-[1rem] md:gap-[2rem] text-center md:text-left">
                <div className="text-[1rem] md:text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200">
                  <Link href="/">Energy Storage</Link>
                </div>
                <div className="text-[1rem] md:text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200">
                  <Link href="/bharat-bms">BharatBMS</Link>
                </div>
                <div className="text-[1rem] md:text-[1.2rem] hover:text-[#2faf2f] transition-all duration-200">
                  <Link href="/about">About</Link>
                </div>
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
            <div className="hidden lg:flex items-center">
              <NavLink
                href="/#registerEmail"
                className="flex items-center justify-center gap-x-1 text-sm text-black font-bold custom-btn-bg border border-gray-500 active:bg-gray-900"
              >
                Get Notified
              </NavLink>
            </div>
            {/* Mobile menu toggle */}
            <div className="lg:hidden flex items-center ml-auto relative">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none rounded-full p-2 transition-all duration-300"
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              {/* Mobile menu overlay */}
              <div
                ref={menuRef}
                className={`absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg p-4 transition-transform duration-300 ease-in-out transform ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[-20px] opacity-0"
                }`}
              >
                <Link
                  href="/"
                  className="block text-[1rem] hover:text-[#2faf2f] transition-all duration-200 mb-2"
                  onClick={closeMenu}
                >
                  Energy Storage
                </Link>
                <Link
                  href="/bharat-bms"
                  className="block text-[1rem] hover:text-[#2faf2f] transition-all duration-200 mb-2"
                  onClick={closeMenu}
                >
                  BharatBMS
                </Link>
                <Link
                  href="/about"
                  className="block text-[1rem] hover:text-[#2faf2f] transition-all duration-200 mb-2"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="block text-[1rem] hover:text-[#2faf2f] transition-all duration-200 mb-2"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                <Link
                  href="/learn"
                  className="block text-[1rem] hover:text-[#2faf2f] transition-all duration-200 mb-2"
                  onClick={closeMenu}
                >
                  Learn
                </Link>
                <Link
                  href="/whitepapers"
                  className="block text-[1rem] hover:text-[#2faf2f] transition-all duration-200 mb-2"
                  onClick={closeMenu}
                >
                  Whitepapers
                </Link>
                <NavLink
                  href="/#registerEmail"
                  className="flex items-center justify-center gap-x-1 text-sm text-black font-bold custom-btn-bg border border-gray-500 active:bg-gray-900 mt-5"
                  onClick={closeMenu}
                >
                  Get Notified
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
