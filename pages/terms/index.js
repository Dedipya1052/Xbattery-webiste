import React from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";

const Terms = () => {
  const router=useRouter();
  return (
    <div className={classes.head1}>
      <nav
        className={`fixed top-0 left-[0%] right-0 w-[100%] mx-auto flex items-center justify-between p-4 pt-[1rem] z-50 transition-colors duration-300 bg-black`}
      >
        <div
          className={` w-[95%] mx-auto flex items-center justify-between z-50 }`}
        >
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

      <div
        className={classes.affiliatewrapper}
        style={{ position: "relative" }}
      >
        <Button
          className={classes.affBackButton}
          onClick={() => router.push("/")}
        >
          {" "}
          <IoArrowBack /> <p>Back</p>
        </Button>
        <div className={classes.affiliateheader}>
          <h1 className={classes.headername}>Terms and Conditions</h1>
        </div>
        {/* <div className={classes.affiliateholder}>
          
          <ul className={classes.ulholder}>
          By subscribing to Try-On, users agree to abide by the terms outlined in this refund policy. We are committed to providing a valuable and enjoyable experience for our users and welcome any feedback or inquiries regarding our services.    
          </ul>
        </div> */}
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>1. Introduction</h3>
          <ul className={classes.ulholder}>
            <p>
              These Terms and Conditions govern your use of the XBattery
              website, products, and services. By accessing or using our
              website, you agree to these terms.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>2. Use of Our Services</h3>
          <ul className={classes.ulholder}>
            <p>
              You agree to use our services only for lawful purposes and in a
              way that does not infringe the rights of others. XBattery reserves
              the right to restrict or terminate access to the website for any
              user violating these terms.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>3. Intellectual Property</h3>
          <ul className={classes.ulholder}>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of XBattery or its licensors. Unauthorized
              use of any content may violate copyright, trademark, and other
              laws.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>4. Product Information</h3>
          <ul className={classes.ulholder}>
            <p>
              XBattery makes every effort to display accurate information on
              products and services. However, we do not warrant that product
              descriptions or other content are complete, accurate, or
              error-free.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>5. Liability Limitation</h3>
          <ul className={classes.ulholder}>
            <p>
              XBattery will not be liable for any damages arising from the use
              or inability to use the website or our products, including
              incidental, indirect, or consequential damages.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>6. Governing Law</h3>
          <ul className={classes.ulholder}>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of [Insert Jurisdiction].
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <h3 className={classes.h3inaffiliate}>7. Changes to Terms</h3>
          <ul className={classes.ulholder}>
            <p>
              We may update these Terms and Conditions at any time. Your
              continued use of the website constitutes acceptance of any
              changes.
            </p>
          </ul>
        </div>
        <div className={classes.affiliateholder}>
          <ul className={classes.ulholder}>
            <p>
              For further assistance or inquiries, please contact our customer
              support team at{" "}
              <span style={{ fontWeight: "bold" }}>
                <a href="mailto:help@getalter.ai">support@xbattery.energy</a>
              </span>
              . Thank you for choosing XBattery.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
