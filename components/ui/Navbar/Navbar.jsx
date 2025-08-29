import { useEffect, useRef, useState } from "react";
import NavLink from "../NavLink";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.css"
import Head from "next/head";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const isHomePage =
    router.pathname === "/terms" ||
    router.pathname === "/about" ||
    router.pathname === "/privacy" ||
    router.pathname === "/careers" ||
    router.pathname.includes("careers") ||
    router.pathname.includes("contact") ||
    router.pathname.includes("bharat-bms") ||
    router.pathname.includes("docs")  ;

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

  // Handle hash navigation on page load
  useEffect(() => {
    const scrollToSection = (hash) => {
      if (typeof window !== 'undefined' && hash) {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial page load with hash
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => scrollToSection(hash), 300);
    }

    // Handle route changes (when navigating from other pages)
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash.substring(1);
        setTimeout(() => scrollToSection(hash), 500);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Function to handle scroll to energy storage section
  const scrollToEnergyStorage = (event) => {
    event.preventDefault();
    
    // If we're not on the home page, navigate to home page first
    if (router.pathname !== "/") {
      router.push("/#energystorage");
      return;
    }
    
    // If we're already on the home page, scroll to the section
    const element = document.getElementById("energystorage");
    if (element) {
      const headerOffset = 80; // Adjust this value to match your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/images/logo1.webp" as="image" />
      </Head>
      {isHomePage ? (
        <div className={styles.head1}>
          <nav
            className={`fixed top-0 left-0 w-full mx-auto flex items-center justify-between p-4 z-50 transition-colors duration-300 bg-black`}
          >
            <div className="w-[95%] mx-auto flex items-center justify-between">
              <Link href="/">
                <Image
                  src="/images/logo1.webp"
                  width={160}
                  height={160}
                  alt="logo"
                  title="logo"
                  priority
                  className="opacity-100"
                />
              </Link>

              <div className="hidden lg:flex gap-7 items-center ml-auto mr-8">
                <button
                  onClick={scrollToEnergyStorage}
                  className={`text-lg font-medium transition-colors duration-300 space-grotesk-medium ${
                    currentPath === "/"
                      ? "text-white"
                      : "text-[#cacaca] hover:text-[#e6e6e6]"
                  }`}
                >
                  Energy Storage
                </button>
                {[
                  { href: "/bharat-bms", label: "BharatBMS" },
                  { href: "/about", label: "About" },
                  { href: "/blog", label: "Blog" },
                  { href: "/whitepapers", label: "Whitepapers" },
                ].map((item) => (
                  <Link href={item.href} key={item.href}>
                    <button
                      className={`text-lg font-medium transition-colors duration-300 space-grotesk-medium ${
                        currentPath === item.href
                          ? "text-white"
                          : "text-[#cacaca] hover:text-[#e6e6e6]"
                      }`}
                    >
                      {item.label}
                    </button>
                  </Link>
                ))}
              </div>

              <button className="text-white text-sm bg-transparent border border-white px-[15px] py-[9px] rounded-full hover:bg-white hover:text-black transition-colors duration-300 hidden lg:block space-grotesk-medium">
                <Link
                  href="https://customerappdev.xbattery.energy/"
                  target="_blank"
                >
                  Customer Portal
                </Link>
              </button>

              <button
                aria-label="menu"
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
                <button
                  onClick={(e) => {
                    scrollToEnergyStorage(e);
                    handleMenuItemClick();
                  }}
                  className={`text-lg font-medium transition-colors duration-300 space-grotesk-medium ${
                    currentPath === "/"
                      ? "text-white"
                      : "text-[#cacaca] hover:text-[#e6e6e6]"
                  }`}
                >
                  Energy Storage
                </button>
                {[
                  { href: "/bharat-bms", label: "BharatBMS" },
                  { href: "/about", label: "About" },
                  { href: "/blog", label: "Blog" },
                  { href: "/whitepapers", label: "Whitepapers" },
                ].map((item) => (
                  <Link href={item.href} key={item.href}>
                    <button
                      className={`text-lg font-medium transition-colors duration-300 space-grotesk-medium ${
                        currentPath === item.href
                          ? "text-white"
                          : "text-[#cacaca] hover:text-[#e6e6e6]"
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      {item.label}
                    </button>
                  </Link>
                ))}
               
                <Link
                  href="https://customerappdev.xbattery.energy/"
                  target="_blank"
                >
                  <button
                    className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 space-grotesk-medium"
                    onClick={handleMenuItemClick}
                  >
                     Customer Portal
                  </button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      ) : (
        <div className={styles.head1}>
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
                  <div
                    className={`text-[1rem] md:text-[1.2rem] transition-all duration-200 cursor-pointer space-grotesk-medium
                ${
                  currentPath === "/"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                    onClick={scrollToEnergyStorage}
                  >
                    Energy Storage
                  </div>
                  <div
                    className={`text-[1rem] md:text-[1.2rem] transition-all duration-200 space-grotesk-medium
                ${
                  currentPath === "/bharat-bms"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                  >
                    <Link href="/bharat-bms">BharatBMS</Link>
                  </div>
                  <div
                    className={`text-[1rem] md:text-[1.2rem] transition-all duration-200 space-grotesk-medium
                ${
                  currentPath === "/about"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                  >
                    <Link href="/about">About</Link>
                  </div>
                  <div
                    className={`text-[1rem] md:text-[1.2rem] transition-all duration-200 space-grotesk-medium
                ${
                  currentPath === "/blog"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                  >
                    <Link href="/blog">Blog</Link>
                  </div>
                  <div
                    className={`text-[1rem] md:text-[1.2rem] transition-all duration-200 space-grotesk-medium
                ${
                  currentPath === "/learn"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                  >
                    <Link href="/learn">Learn</Link>
                  </div>
                  <div
                    className={`text-[1rem] md:text-[1.2rem] transition-all duration-200 space-grotesk-medium
                ${
                  currentPath === "/whitepapers"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                  >
                    <Link href="/whitepapers">Whitepapers</Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex items-center">
                <NavLink
                  href="https://customerappdev.xbattery.energy/"
                  target="_blank"
                  className="flex items-center justify-center gap-x-1 text-sm text-black  custom-btn-bg border border-gray-500 active:bg-gray-100 px-[15px] py-[9px] font-semibold space-grotesk-semibold"
                >
                  Customer Portal
                </NavLink>
              </div>
              {/* Mobile menu toggle */}
              <div className="lg:hidden flex items-center ml-auto relative">
                <button
                  aria-label="menu"
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
                  <div
                    className={`block text-[1rem] transition-all duration-200 mb-2 cursor-pointer space-grotesk-medium
                ${
                  currentPath === "/"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                    onClick={(e) => {
                      scrollToEnergyStorage(e);
                      closeMenu();
                    }}
                  >
                    Energy Storage
                  </div>
                  <Link
                    href="/bharat-bms"
                    className={`block text-[1rem] transition-all duration-200 mb-2 space-grotesk-medium
                ${
                  currentPath === "/bharat-bms"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                    onClick={closeMenu}
                  >
                    BharatBMS
                  </Link>
                  <Link
                    href="/about"
                    className={`block text-[1rem] transition-all duration-200 mb-2 space-grotesk-medium
                ${
                  currentPath === "/about"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    className={`block text-[1rem] transition-all duration-200 mb-2 space-grotesk-medium
                ${
                  currentPath === "/blog"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/learn"
                    className={`block text-[1rem] transition-all duration-200 mb-2 space-grotesk-medium
                ${
                  currentPath === "/learn"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                    onClick={closeMenu}
                  >
                    Learn
                  </Link>
                  <Link
                    href="/whitepapers"
                    className={`block text-[1rem] transition-all duration-200 mb-2 space-grotesk-medium
                ${
                  currentPath === "/whitepapers"
                    ? "text-[#2faf2f]"
                    : "hover:text-[#45c945]"
                }`}
                    onClick={closeMenu}
                  >
                    Whitepapers
                  </Link>
                  <NavLink
                    href="https://customerappdev.xbattery.energy/"
                    target="_blank"
                    className="flex items-center justify-center gap-x-1 text-sm text-black px-[15px] py-[9px] custom-btn-bg border border-gray-500 active:bg-gray-100 mt-5 font-semibold space-grotesk-semibold"
                    onClick={closeMenu}
                  >
                   Customer Portal
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
