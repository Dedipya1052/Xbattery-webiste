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
            <ul className={classes.ulholder}>
              <p style={{ fontWeight: "bold", marginBottom: "20px" }}>Last Updated: September 4, 2025</p>
              <p>
                Welcome to Xbattery Energy Private Limited ("Xbattery," "we," "us," or "our"), located at Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075. These Terms of Use ("Terms") govern your access to and use of our website ({" "}
                <a href="https://xbattery.energy" className="font-bold hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  https://xbattery.energy
                </a>
                ), mobile application ("App"), and our battery management systems and energy storage products ("Products"). By accessing or using our website, App, or Products, you ("you," "your," or "User") agree to be bound by these Terms. If you do not agree, please refrain from using our services.
              </p>
              <p>
                For information on how we handle personal data, please review our{" "}
                <Link href="/privacy" className="font-bold hover:opacity-80">
                  Privacy Policy
                </Link>
                . For details on cookies and tracking technologies, see our{" "}
                <Link href="/cookies" className="font-bold hover:opacity-80">
                  Cookie Policy
                </Link>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>1. Introduction</h3>
            <ul className={classes.ulholder}>
              <p>
                1.1 These Terms and Conditions ("Terms") govern the sale, use, and service of battery energy storage products ("Products") by Xbattery Energy Private Limited ("Xbattery", "we", "us", or "our"), a company registered under the laws of India.
              </p>
              <p>
                1.2 By purchasing or using our Products, you ("Customer", "you", or "your") agree to these Terms.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>2. Definitions</h3>
            <ul className={classes.ulholder}>
              <p>
                2.1 "Product" refers to any battery energy storage system manufactured or sold by Xbattery Energy Private Limited.
              </p>
              <p>
                2.2 "Customer" refers to the individual, business, or entity purchasing or using the Product.
              </p>
              <p>
                2.3 "BESS" stands for Battery Energy Storage System.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>3. Product Use and Installation</h3>
            <ul className={classes.ulholder}>
              <p>
                3.1 The Product must be installed by certified professionals in compliance with local regulations.
              </p>
              <p>
                3.2 Customers agree to use the Product only for its intended purpose as specified in the user manual.
              </p>
              <p>
                3.3 Any modification to the Product without XBattery's written consent voids the warranty.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>4. Operational Efficiency</h3>
            <ul className={classes.ulholder}>
              <p>
                4.1 Xbattery guarantees the stated operational efficiency of the Product under normal use conditions.
              </p>
              <p>
                4.2 Efficiency may vary based on environmental factors and usage patterns.
              </p>
              <p>
                4.3 Customers are encouraged to follow best practices provided in the user manual to maximize efficiency.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>5. Annual Maintenance</h3>
            <ul className={classes.ulholder}>
              <p>
                5.1 Customers are required to perform annual maintenance as outlined in the product manual.
              </p>
              <p>
                5.2 Xbattery offers optional maintenance services for an additional fee.
              </p>
              <p>
                5.3 Failure to perform required maintenance may affect Product performance and warranty.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>6. Fair Use</h3>
            <ul className={classes.ulholder}>
              <p>
                6.1 Customers agree to use the Product in accordance with fair use principles.
              </p>
              <p>
                6.2 Excessive or abnormal use that strains the Product beyond its designed capabilities is prohibited.
              </p>
              <p>
                6.3 Xbattery reserves the right to void warranties in cases of unfair use.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>7. Liability</h3>
            <ul className={classes.ulholder}>
              <p>
                7.1 Xbattery is not liable for damages resulting from improper installation, use, or maintenance.
              </p>
              <p>
                7.2 XBattery's liability is limited to the purchase price of the Product.
              </p>
              <p>
                7.3 Xbattery is not responsible for indirect, incidental, or consequential damages.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>8. Warranty</h3>
            <ul className={classes.ulholder}>
              <p>
                8.1 The Product comes with a limited warranty as specified in the warranty document.
              </p>
              <p>
                8.2 The warranty does not cover damage from misuse, accidents, or unauthorized modifications.
              </p>
              <p>
                8.3 To the extent permitted by law, all other warranties, express or implied, are excluded.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>9. Data Collection and Privacy</h3>
            <ul className={classes.ulholder}>
              <p>
                9.1 The Product may collect usage data to improve performance and customer service.
              </p>
              <p>
                9.2 All data collection and use is subject to our{" "}
                <Link href="/privacy" className="font-bold hover:opacity-80">
                  Privacy Policy
                </Link>
                , which can be found at our website.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>10. Specific Terms for Different Customer Types</h3>
            <ul className={classes.ulholder}>
              <p>
                10.1 Residential Customers: Must comply with local residential energy storage regulations and are responsible for obtaining necessary permits.
              </p>
              <p>
                10.2 Commercial Establishments: Must ensure the Product complies with commercial building codes and have a designated person responsible for Product management.
              </p>
              <p>
                10.3 Factories: Must integrate the Product safely with existing industrial systems and have safety protocols for high-capacity energy storage.
              </p>
              <p>
                10.4 Energy Generation Companies: Must comply with grid connection regulations and ensure the Product's compatibility with their generation systems.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>11. Intellectual Property</h3>
            <ul className={classes.ulholder}>
              <p>
                11.1 All intellectual property related to the Product remains the property of Xbattery Energy Private Limited.
              </p>
              <p>
                11.2 Customers agree not to reverse engineer or attempt to derive source code from the Product.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>12. Termination</h3>
            <ul className={classes.ulholder}>
              <p>
                12.1 Xbattery reserves the right to terminate service for violation of these terms.
              </p>
              <p>
                12.2 Customers may terminate their use of the Product at any time, subject to any ongoing contractual obligations.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>13. Force Majeure</h3>
            <ul className={classes.ulholder}>
              <p>
                13.1 Xbattery shall not be liable for any failure or delay in performance due to circumstances beyond its reasonable control.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>14. Severability</h3>
            <ul className={classes.ulholder}>
              <p>
                14.1 If any provision of these Terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>15. Assignment</h3>
            <ul className={classes.ulholder}>
              <p>
                15.1 Customers may not assign their rights or obligations under these Terms without XBattery's prior written consent.
              </p>
              <p>
                15.2 Xbattery may assign its rights and obligations under these Terms without Customer's consent.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>16. Entire Agreement</h3>
            <ul className={classes.ulholder}>
              <p>
                16.1 These Terms constitute the entire agreement between XBattery and the Customer regarding the Product.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>17. Waiver</h3>
            <ul className={classes.ulholder}>
              <p>
                17.1 XBattery's failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>18. Notices</h3>
            <ul className={classes.ulholder}>
              <p>
                18.1 Any notices to Xbattery must be sent to our registered office address.
              </p>
              <p>
                18.2 We may provide notices to you via email or through the Product interface.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>19. Governing Law and Jurisdiction</h3>
            <ul className={classes.ulholder}>
              <p>
                19.1 These Terms are governed by the laws of India.
              </p>
              <p>
                19.2 Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>20. Changes to Terms</h3>
            <ul className={classes.ulholder}>
              <p>
                20.1 Xbattery Energy Private Limited reserves the right to modify these terms. Customers will be notified of significant changes.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>21. Export Control</h3>
            <ul className={classes.ulholder}>
              <p>
                21.1 Customers agree to comply with all applicable export and re-export control laws and regulations.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>22. Indemnification</h3>
            <ul className={classes.ulholder}>
              <p>
                22.1 Customers agree to indemnify and hold Xbattery Energy Private Limited harmless from any claims resulting from their use of the Product.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>23. Third-Party Rights</h3>
            <ul className={classes.ulholder}>
              <p>
                23.1 These Terms do not create any third-party beneficiary rights.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>24. Customer Support</h3>
            <ul className={classes.ulholder}>
              <p>
                24.1 For Product support, please contact our customer service department at{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>25. Feedback</h3>
            <ul className={classes.ulholder}>
              <p>
                25.1 Any feedback provided to Xbattery Energy Private Limited shall be deemed non-confidential and Xbattery shall be free to use such information on an unrestricted basis.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <ul className={classes.ulholder}>
              <p>
                By purchasing or using Xbattery Energy Private Limited Products, Customers agree to these terms and conditions. For detailed information about how we collect, use, and protect your data, please refer to our{" "}
                <Link href="/privacy" className="font-bold hover:opacity-80">
                  Privacy Policy
                </Link>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>26. Use of Our Services</h3>
            <ul className={classes.ulholder}>
              <p>
                26.1 Eligibility: You must be at least 18 years old or the age of majority in your jurisdiction to use our website, App, or Products. By using our services, you represent that you meet these eligibility requirements.
              </p>
              <p>
                26.2 Permitted Use: You may use our website, App, and Products for lawful, personal, or commercial purposes (as applicable) in accordance with these Terms. You agree not to use our services for illegal activities or to violate any laws, attempt unauthorized access, reverse-engineer, or interfere with our systems, or engage in data scraping, hacking, or other activities that may harm our infrastructure.
              </p>
              <p>
                26.3 Account Responsibilities: If you create an account on our website or App, you are responsible for providing accurate and current information, maintaining the confidentiality of your account credentials, and notifying us immediately of any unauthorized use at{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>27. Product Warranties</h3>
            <ul className={classes.ulholder}>
              <p>
                27.1 We stand behind the quality of our Products, including our Battery Management Systems (BMS) and energy storage devices. The following warranties apply:
              </p>
              <p>
                27.2 BMS Electronic Boards (PCB): Warranty Period: 5 years from the date of installation or delivery, whichever occurs first. Coverage: Defects in materials and workmanship under normal use. Exclusions: Damage due to misuse, improper installation, unauthorized repairs, or external factors (e.g., power surges).
              </p>
              <p>
                27.3 Energy Storage Devices (Battery Packs): Warranty Period: 10 years from the date of installation or delivery, whichever occurs first. Performance Commitment: Guaranteed retention of at least 80% of nominal capacity after 3,000 charge-discharge cycles under normal operating conditions. Coverage: Defects in materials and workmanship under normal use. Exclusions: Damage due to misuse, improper maintenance, accidents, or non-compliance with our usage guidelines.
              </p>
              <p>
                27.4 Warranty Claims: To make a warranty claim, contact us at{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                {" "}with proof of purchase and details of the issue. We may repair, replace, or refund the Product at our discretion, subject to inspection. This warranty is non-transferable and applies only to the original purchaser.
              </p>
              <p>
                27.5 Disclaimer: Except as expressly stated above, our Products are provided "as is" without warranties, express or implied, including warranties of merchantability or fitness for a particular purpose. We do not guarantee that Products will be error-free or meet specific performance expectations beyond the stated commitments.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>28. Intellectual Property</h3>
            <ul className={classes.ulholder}>
              <p>
                28.1 Ownership: All content on our website and App, including text, images, logos, software, and technical documentation, is owned by Xbattery Energy Private Limited or its licensors and is protected by Indian and international copyright, trademark, and intellectual property laws. The "Xbattery" and "BharatBMS" names and logos are registered trademarks of Xbattery.
              </p>
              <p>
                28.2 Permitted Use: You may view, download, or print content for personal, non-commercial use, provided you retain all copyright and proprietary notices. Any other use, including reproduction, modification, distribution, or republication, requires prior written consent from Xbattery.
              </p>
              <p>
                28.3 User-Generated Content: If you submit content (e.g., reviews, feedback, or inquiries) to our website or App, you grant Xbattery a non-exclusive, royalty-free, worldwide license to use, modify, and display such content for business purposes. You warrant that your content is lawful, non-infringing, and complies with these Terms.
              </p>
              <p>
                28.4 Third-Party Materials: Our services may include third-party content (e.g., links or embedded media) used with permission. Such content is subject to the respective third-party's terms and conditions.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>29. Limitation of Liability</h3>
            <ul className={classes.ulholder}>
              <p>
                29.1 To the fullest extent permitted by law, Xbattery, its affiliates, officers, directors, and employees shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of our website, App, or Products, including but not limited to loss of data, profits, or business opportunities. Our total liability for any claim, whether in contract, tort, or otherwise, shall not exceed INR 10,000.
              </p>
              <p>
                29.2 We are not responsible for damages caused by misuse or improper installation of Products, unauthorized modifications or repairs, or external factors, such as natural disasters or power failures.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>30. Dispute Resolution</h3>
            <ul className={classes.ulholder}>
              <p>
                30.1 Governing Law: These Terms and any disputes arising from your use of our website, App, or Products shall be governed by the laws of Telangana, India, without regard to conflict of law principles.
              </p>
              <p>
                30.2 Arbitration: Any disputes shall be resolved through binding arbitration in Hyderabad, India, conducted by a single arbitrator under the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English, and the decision shall be final and binding. You waive the right to participate in class action lawsuits or class-wide arbitration.
              </p>
              <p>
                30.3 Jurisdiction: If arbitration is not applicable, disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, India.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>31. Regulatory Compliance</h3>
            <ul className={classes.ulholder}>
              <p>
                31.1 Xbattery complies with applicable laws and regulations, including Information Technology Act, 2000 and its rules for data protection, Consumer Protection Act, 2019 for consumer rights and warranties, Bureau of Indian Standards (BIS) requirements for battery management systems and lithium battery packs, Battery Management and Handling Rules, 2001 for safe disposal and recycling of batteries, and Foreign Trade Policy and international export regulations for battery systems.
              </p>
              <p>
                31.2 We maintain certifications and conduct regular audits to ensure compliance with safety, environmental, and energy standards.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>32. User Obligations</h3>
            <ul className={classes.ulholder}>
              <p>
                32.1 You agree to use our website, App, and Products in compliance with these Terms and applicable laws, not engage in activities that may harm our systems, such as hacking, data scraping, or distributing malware, provide accurate information and promptly notify us of any issues with your account or Products, and follow our Product usage and maintenance guidelines to ensure safety and performance.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>33. Termination</h3>
            <ul className={classes.ulholder}>
              <p>
                33.1 We may suspend or terminate your access to our website, App, or Products if you violate these Terms, engage in unlawful activities, or cause harm to our systems or other users. Termination does not affect your obligations under these Terms or any warranty claims, subject to the stated conditions.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>34. Grievance Redressal</h3>
            <ul className={classes.ulholder}>
              <p>
                34.1 For concerns or complaints about our services or these Terms, contact our Grievance Officer: Email:{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                , Address: Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075.
              </p>
              <p>
                34.2 We will respond within 30 days, as required by the Information Technology Act, 2000.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>35. Changes to These Terms</h3>
            <ul className={classes.ulholder}>
              <p>
                35.1 We may update these Terms to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated Terms on our website with a revised "Last Updated" date. Your continued use of our services constitutes acceptance of the updated Terms.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>36. Contact Us</h3>
            <ul className={classes.ulholder}>
              <p>
                36.1 For questions about these Terms, our services, or warranty claims, contact us at: Email:{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                , Address: Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <ul className={classes.ulholder}>
              <p>
                For information on data handling, see our{" "}
                <Link href="/privacy" className="font-bold hover:opacity-80">
                  Privacy Policy
                </Link>
                {" "}and{" "}
                <Link href="/cookies" className="font-bold hover:opacity-80">
                  Cookie Policy
                </Link>
                .
              </p>
              <p style={{ marginTop: "20px" }}>
                © 2025 Xbattery Energy Private Limited. All rights reserved.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;

