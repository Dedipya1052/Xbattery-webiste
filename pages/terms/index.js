import React, { useState } from "react";
import classes from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import Head from "next/head";

const Terms = () => {
  const router=useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <Head>
        <title>Terms and Conditions | Xbattery</title>

        <meta property="og:image" content="/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta property="og:title" content="Terms and Conditions | Xbattery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xbattery.energy/terms" />

        <meta
          name="description"
          content="Read the terms and conditions of Xbattery and understand the legal agreements related to using our services."
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
          p={"8px"}
        >
          {" "}
          <IoArrowBack />
          <p>Back</p>
        </Button> */}
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
                1.1 These Terms and Conditions ("Terms") govern the sale, use,
                and service of battery energy storage products ("Products") by
                Xbattery Energy Private Limited ("Xbattery", "we", "us", or
                "our"), a company registered under the laws of India.
              </p>
              <p>
                1.2 By purchasing or using our Products, you ("Customer", "you",
                or "your") agree to these Terms.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>2. Definitions</h3>
            <ul className={classes.ulholder}>
              <p>
                2.1 "Product" refers to any battery energy storage system
                manufactured or sold by Xbattery Energy Private Limited.
              </p>
              <p>
                2.2 "Customer" refers to the individual, business, or entity
                purchasing or using the Product.
              </p>
              <p>2.3 "BESS" stands for Battery Energy Storage System.</p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>
              3. Product Use and Installation
            </h3>
            <ul className={classes.ulholder}>
              <p>
                3.1 The Product must be installed by certified professionals in
                compliance with local regulations.
              </p>
              <p>
                3.2 Customers agree to use the Product only for its intended
                purpose as specified in the user manual.
              </p>
              <p>
                3.3 Any modification to the Product without XBattery's written
                consent voids the warranty.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>4. Operational Efficiency</h3>
            <ul className={classes.ulholder}>
              <p>
                4.1 Xbattery guarantees the stated operational efficiency of the
                Product under normal use conditions.
              </p>
              <p>
                4.2 Efficiency may vary based on environmental factors and usage
                patterns.
              </p>
              <p>
                4.3 Customers are encouraged to follow best practices provided
                in the user manual to maximize efficiency.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>5. Annual Maintenance</h3>
            <ul className={classes.ulholder}>
              <p>
                5.1 Customers are required to perform annual maintenance as
                outlined in the product manual.
              </p>
              <p>
                5.2 Xbattery offers optional maintenance services for an
                additional fee.
              </p>
              <p>
                5.3 Failure to perform required maintenance may affect Product
                performance and warranty.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>6. Fair Use</h3>
            <ul className={classes.ulholder}>
              <p>
                6.1 Customers agree to use the Product in accordance with fair
                use principles.
              </p>
              <p>
                6.2 Excessive or abnormal use that strains the Product beyond
                its designed capabilities is prohibited.
              </p>
              <p>
                6.3 Xbattery reserves the right to void warranties in cases of
                unfair use.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>7. Liability</h3>
            <ul className={classes.ulholder}>
              <p>
                7.1 Xbattery is not liable for damages resulting from improper
                installation, use, or maintenance.
              </p>
              <p>
                7.2 XBattery's liability is limited to the purchase price of the
                Product.
              </p>
              <p>
                7.3 Xbattery is not responsible for indirect, incidental, or
                consequential damages.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>8. Warranty</h3>
            <ul className={classes.ulholder}>
              <p>
                8.1 The Product comes with a limited warranty as specified in
                the warranty document.
              </p>
              <p>
                8.2 The warranty does not cover damage from misuse, accidents,
                or unauthorized modifications.
              </p>
              <p>
                8.3 To the extent permitted by law, all other warranties,
                express or implied, are excluded.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>
              9. Data Collection and Privacy
            </h3>
            <ul className={classes.ulholder}>
              <p>
                9.1 The Product may collect usage data to improve performance
                and customer service.
              </p>
              <p>
                9.2 All data collection and use is subject to our Privacy
                Policy, which can be found at [Insert Privacy Policy URL].
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>
              10. Specific Terms for Different Customer Types
            </h3>
            <ul className={classes.ulholder}>
              <p>
                10.1 Residential Customers: Must comply with local residential
                energy storage regulations and are responsible for obtaining
                necessary permits.
              </p>
              <p>
                10.2 Commercial Establishments: Must ensure the Product complies
                with commercial building codes and have a designated person
                responsible for Product management.
              </p>
              <p>
                10.3 Factories: Must integrate the Product safely with existing
                industrial systems and have safety protocols for high-capacity
                energy storage.
              </p>
              <p>
                10.4 Energy Generation Companies: Must comply with grid
                connection regulations and ensure the Product's compatibility
                with their generation systems.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>11. Intellectual Property</h3>
            <ul className={classes.ulholder}>
              <p>
                11.1 All intellectual property related to the Product remains
                the property of Xbattery Energy Private Limited.
              </p>
              <p>
                11.2 Customers agree not to reverse engineer or attempt to
                derive source code from the Product.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>12. Termination</h3>
            <ul className={classes.ulholder}>
              <p>
                12.1 Xbattery reserves the right to terminate service for
                violation of these terms.
              </p>
              <p>
                12.2 Customers may terminate their use of the Product at any
                time, subject to any ongoing contractual obligations.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>13. Force Majeure</h3>
            <ul className={classes.ulholder}>
              <p>
                13.1 Xbattery shall not be liable for any failure or delay in
                performance due to circumstances beyond its reasonable control.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>14. Severability</h3>
            <ul className={classes.ulholder}>
              <p>
                14.1 If any provision of these Terms is found to be
                unenforceable, the remaining provisions will continue to be
                valid and enforceable.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>15. Assignment</h3>
            <ul className={classes.ulholder}>
              <p>
                15.1 Customers may not assign their rights or obligations under
                these Terms without XBattery's prior written consent.
              </p>
              <p>
                15.2 Xbattery may assign its rights and obligations under these
                Terms without Customer's consent.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>16. Entire Agreement</h3>
            <ul className={classes.ulholder}>
              <p>
                16.1 These Terms constitute the entire agreement between
                XBattery and the Customer regarding the Product.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>17. Waiver</h3>
            <ul className={classes.ulholder}>
              <p>
                17.1 XBattery's failure to enforce any right or provision of
                these Terms will not be considered a waiver of such right or
                provision.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>18. Notices</h3>
            <ul className={classes.ulholder}>
              <p>
                18.1 Any notices to Xbattery must be sent to our registered
                office address.
              </p>
              <p>
                18.2 We may provide notices to you via email or through the
                Product interface.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>
              19. Governing Law and Jurisdiction
            </h3>
            <ul className={classes.ulholder}>
              <p>19.1 These Terms are governed by the laws of India.</p>
              <p>
                19.2 Any disputes arising from these Terms shall be subject to
                the exclusive jurisdiction of the courts located in Hyderabad,
                Telangana.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>20. Changes to Terms</h3>
            <ul className={classes.ulholder}>
              <p>
                20.1 Xbattery Energy Private Limited reserves the right to
                modify these terms. Customers will be notified of significant
                changes.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>21. Export Control</h3>
            <ul className={classes.ulholder}>
              <p>
                21.1 Customers agree to comply with all applicable export and
                re-export control laws and regulations.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>22. Indemnification</h3>
            <ul className={classes.ulholder}>
              <p>
                22.1 Customers agree to indemnify and hold Xbattery Energy
                Private Limited harmless from any claims resulting from their
                use of the Product.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>23. Third-Party Rights</h3>
            <ul className={classes.ulholder}>
              <p>
                23.1 These Terms do not create any third-party beneficiary
                rights.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>24. Customer Support</h3>
            <ul className={classes.ulholder}>
              <p>
                24.1 For Product support, please contact our customer service
                department at{" "}
                <span style={{ fontWeight: "bold" }}>
                  <a href="mailto:help@getalter.ai">support@xbattery.energy</a>
                </span>{" "}
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>25. Feedback</h3>
            <ul className={classes.ulholder}>
              <p>
                25.1 Any feedback provided to Xbattery Energy Private Limited
                shall be deemed non-confidential and Xbattery shall be free to
                use such information on an unrestricted basis.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <ul className={classes.ulholder}>
              <p>
                By purchasing or using Xbattery Energy Private Limited Products,
                Customers agree to these terms and conditions. For detailed
                information about how we collect, use, and protect your data,
                please refer to our{" "}
                <span style={{ fontWeight: "bold" }}>
                  <Link href="/privacy">Privacy Policy</Link>
                </span>
                .
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
