import React, { useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button ,} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import Head from "next/head";
import { UnorderedList, ListItem } from "@chakra-ui/react";

const Privacy = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <Head>
        <title>Privacy Policy | Xbattery</title>

        <meta property="og:image" content="/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta property="og:title" content="Privacy Policy | Xbattery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xbattery.energy/privacy" />

        <meta
          name="description"
          content="Read the privacy policy of Xbattery and learn how we handle your data and protect your privacy."
        />
      </Head>

      <div className={classes.head1}>

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
                address, shipping address, and payment information when you
                place an order or sign up for our services.
              </p>
            </ul>
          </div>
          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>
              2. How We Use Your Information
            </h3>
            <div className={classes.ulholder}>
              <p>
                We use your personal information to:
                <ul>
                  <li>1. Process your orders and payments</li>
                  <li>2. Provide customer support</li>
                  <li>3. Send updates and promotions (with your consent)</li>
                  <li>4. Improve our services</li>
                </ul>
              </p>
            </div>
          </div>
          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>3. Sharing of Information</h3>
            <ul className={classes.ulholder}>
              <p>
                We do not share your personal information with third parties,
                except:
                <ul>
                  <li>
                    1. To service providers assisting in order fulfillment and
                    payment processing
                  </li>
                  <li>2. When required by law</li>
                </ul>
              </p>
            </ul>
          </div>
          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>4. Cookies</h3>
            <ul className={classes.ulholder}>
              <p>
                Xbattery uses cookies to enhance your experience on our website.
                You can adjust your browser settings to refuse cookies, but this
                may limit your ability to use certain features.
              </p>
            </ul>
          </div>
          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>5. Data Security</h3>
            <ul className={classes.ulholder}>
              <p>
                We implement security measures to protect your personal data
                from unauthorized access, disclosure, alteration, or
                destruction. However, no online system can be 100% secure.
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
                contact us at{" "}
                <span style={{ fontWeight: "bold" }}>
                  <a href="mailto:help@getalter.ai">support@xbattery.energy</a>
                </span>{" "}
                .
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
