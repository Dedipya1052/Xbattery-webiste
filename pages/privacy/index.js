import React, { useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";

const Privacy = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div className={classes.head1}>
       <nav
        className={`fixed top-0 left-0 w-full mx-auto flex items-center justify-between p-4 z-50 transition-colors duration-300 bg-black`}
      >
        <div className="w-[95%] mx-auto flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src="/images/logo1.png"
                width={160}
                height={160}
                alt="logo"
                className="opacity-100"
              />
            </Link>
          </div>

          <div className="hidden md:flex gap-7 items-center">
            <Link href="/">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                Product
              </button>
            </Link>

            <Link href="/blog">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                Blog
              </button>
            </Link>

            <Link href="/learn">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                Learn
              </button>
            </Link>

            <Link href="/whitepapers">
              <button className="text-[#cacaca] text-lg font-medium hover:text-white transition-colors duration-300">
                Whitepapers
              </button>
            </Link>
          </div>

          <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 hidden md:block">
            <Link href="/">Coming Soon</Link>
          </button>

          <button
            className="md:hidden flex items-center text-white"
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
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black text-white flex flex-col items-center p-4 space-y-4">
            <Link href="/">
              <button
                className="text-lg font-medium"
                onClick={handleMenuItemClick}
              >
                Product
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

            <Link href="/learn">
              <button
                className="text-lg font-medium"
                onClick={handleMenuItemClick}
              >
                Learn
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

            <Link href="/">
              <button
                className="text-white bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                onClick={handleMenuItemClick}
              >
                Coming Soon
              </button>
            </Link>
          </div>
        )}
      </nav>

      <div
        className={classes.affiliatewrapper}
        style={{ position: "relative" }}
      >
        {/* <Button
          className={classes.affBackButton}
          onClick={() => router.push("/")}
        >
          {" "}
          <IoArrowBack /> <p>Back</p>
        </Button> */}
        <div className={classes.affiliateheader}>
          <h1 className={classes.headername}>Privacy policy</h1>
        </div>
        {/* <div className={classes.affiliateholder}>
          
          <ul className={classes.ulholder}>
          By subscribing to Try-On, users agree to abide by the terms outlined in this refund policy. We are committed to providing a valuable and enjoyable experience for our users and welcome any feedback or inquiries regarding our services.    
          </ul>
        </div> */}

        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>1. Information We Collect</h3>
          <ul className={classes.ulholder}>
            <p>
              We may collect personal information such as your name, email
              address, shipping address, and payment information when you place
              an order or sign up for our services.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>
            2. How We Use Your Information
          </h3>
          <ul className={classes.ulholder}>
            <p>
              We use your personal information to:
              <ul>
                <li>Process your orders and payments</li>
                <li>Provide customer support</li>
                <li>Send updates and promotions (with your consent)</li>
                <li>Improve our services</li>
              </ul>
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>3. Sharing of Information</h3>
          <ul className={classes.ulholder}>
            <p>
              We do not share your personal information with third parties,
              except:
              <ul>
                <li>
                  To service providers assisting in order fulfillment and
                  payment processing
                </li>
                <li>When required by law</li>
              </ul>
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>4. Cookies</h3>
          <ul className={classes.ulholder}>
            <p>
              XBattery uses cookies to enhance your experience on our website.
              You can adjust your browser settings to refuse cookies, but this
              may limit your ability to use certain features.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>5. Data Security</h3>
          <ul className={classes.ulholder}>
            <p>
              We implement security measures to protect your personal data from
              unauthorized access, disclosure, alteration, or destruction.
              However, no online system can be 100% secure.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>6. Your Rights</h3>
          <ul className={classes.ulholder}>
            <p>
              You have the right to access, correct, or delete your personal
              information. To do so, please contact us at [Insert Contact
              Email].
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>
            7. Changes to Privacy Policy
          </h3>
          <ul className={classes.ulholder}>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>8. Contact Us</h3>
          <ul className={classes.ulholder}>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at <span style={{ fontWeight: "bold" }}>
                <a href="mailto:help@getalter.ai">support@xbattery.energy</a>
              </span> .
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
