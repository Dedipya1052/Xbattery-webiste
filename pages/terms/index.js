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
              <p className={classes.lastUpdated}>Last Updated: September 4, 2025</p>
              <p className={classes.bodyText}>
                Welcome to Xbattery Energy Private Limited ("Xbattery," "we," "us," or "our"), located at Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075. These Terms of Use ("Terms") govern your access to and use of our website ({""}
                <a href="https://xbattery.energy" className={classes.link} target="_blank" rel="noopener noreferrer">
                  https://xbattery.energy
                </a>
                ), mobile application ("App"), and our battery management systems and energy storage products ("Products"). By accessing or using our website, App, or Products, you ("you," "your," or "User") agree to be bound by these Terms. If you do not agree, please refrain from using our services.
              </p>
              <p className={classes.bodyText}>
                For information on how we handle personal data, please review our{" "}
                <Link href="/privacy" className={classes.link}>
                  Privacy Policy
                </Link>
                . For details on cookies and tracking technologies, see our{" "}
                <Link href="/cookies" className={classes.link}>
                  Cookie Policy
                </Link>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>1. Use of Our Services</h3>
            <ul className={classes.ulholder}>
              <p className={classes.subsectionHeading}>Eligibility</p>
              <p className={classes.bodyText}>
                You must be at least 18 years old or the age of majority in your jurisdiction to use our website, App, or Products. By using our services, you represent that you meet these eligibility requirements.
              </p>
              <p className={classes.subsectionHeading}>Permitted Use</p>
              <p className={classes.bodyText}>
                You may use our website, App, and Products for lawful, personal, or commercial purposes (as applicable) in accordance with these Terms. You agree not to:
              </p>
              <p className={classes.bulletPoint}>
                Use our services for illegal activities or to violate any laws.
              </p>
              <p className={classes.bulletPoint}>
                Attempt unauthorized access, reverse-engineer, or interfere with our systems.
              </p>
              <p className={classes.bulletPoint}>
                Engage in data scraping, hacking, or other activities that may harm our infrastructure.
              </p>
              <p className={classes.subsectionHeading}>Account Responsibilities</p>
              <p className={classes.bodyText}>
                If you create an account on our website or App, you are responsible for:
              </p>
              <p className={classes.bulletPoint}>
                Providing accurate and current information.
              </p>
              <p className={classes.bulletPoint}>
                Maintaining the confidentiality of your account credentials.
              </p>
              <p className={classes.bulletPoint} style={{ marginBottom: "0.5rem" }}>
                Notifying us immediately of any unauthorized use at{" "}
                <a href="mailto:support@xbattery.energy" className={classes.link}>
                  support@xbattery.energy
                </a>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>2. Product Warranties</h3>
            <ul className={classes.ulholder}>
              <p className={classes.bodyText}>
                We stand behind the quality of our Products, including our Battery Management Systems (BMS) and energy storage devices. The following warranties apply:
              </p>
              <p className={classes.subsectionHeading}>BMS Electronic Boards (PCB)</p>
              <p className={classes.bulletPoint}>
                <span className={classes.bulletLabel}>Warranty Period:</span> 5 years from the date of installation or delivery, whichever occurs first.
              </p>
              <p className={classes.bulletPoint}>
                <span className={classes.bulletLabel}>Coverage:</span> Defects in materials and workmanship under normal use.
              </p>
              <p className={classes.bulletPoint} style={{ marginBottom: "0.5rem" }}>
                <span className={classes.bulletLabel}>Exclusions:</span> Damage due to misuse, improper installation, unauthorized repairs, or external factors (e.g., power surges).
              </p>
              <p className={classes.subsectionHeading}>Energy Storage Devices (Battery Packs)</p>
              <p className={classes.bulletPoint}>
                <span className={classes.bulletLabel}>Warranty Period:</span> 10 years from the date of installation or delivery, whichever occurs first.
              </p>
              <p className={classes.bulletPoint}>
                <span className={classes.bulletLabel}>Performance Commitment:</span> Guaranteed retention of at least 80% of nominal capacity after 3,000 charge-discharge cycles under normal operating conditions.
              </p>
              <p className={classes.bulletPoint}>
                <span className={classes.bulletLabel}>Coverage:</span> Defects in materials and workmanship under normal use.
              </p>
              <p className={classes.bulletPoint} style={{ marginBottom: "0.5rem" }}>
                <span className={classes.bulletLabel}>Exclusions:</span> Damage due to misuse, improper maintenance, accidents, or non-compliance with our usage guidelines.
              </p>
              <p className={classes.subsectionHeading}>Warranty Claims</p>
              <p className={classes.bodyText}>
                To make a warranty claim, contact us at {" "}
                <a href="mailto:support@xbattery.energy" className={classes.link}>
                  support@xbattery.energy
                </a>
                {" "}with proof of purchase and details of the issue. We may repair, replace, or refund the Product at our discretion, subject to inspection. This warranty is non-transferable and applies only to the original purchaser.
              </p>
              <p className={classes.subsectionHeading}>Disclaimer</p>
              <p className={classes.bodyText}>
                Except as expressly stated above, our Products are provided "as is" without warranties, express or implied, including warranties of merchantability or fitness for a particular purpose. We do not guarantee that Products will be error-free or meet specific performance expectations beyond the stated commitments.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>3. Intellectual Property</h3>
            <ul className={classes.ulholder}>
              <p className={classes.subsectionHeading}>Ownership</p>
              <p className={classes.bodyText}>
                All content on our website and App, including text, images, logos, software, and technical documentation, is owned by Xbattery Energy Private Limited or its licensors and is protected by Indian and international copyright, trademark, and intellectual property laws. The "Xbattery" and "BharatBMS" names and logos are registered trademarks of Xbattery.
              </p>
              <p className={classes.subsectionHeading}>Permitted Use</p>
              <p className={classes.bodyText}>
                You may view, download, or print content for personal, non-commercial use, provided you retain all copyright and proprietary notices. Any other use, including reproduction, modification, distribution, or republication, requires prior written consent from Xbattery.
              </p>
              <p className={classes.subsectionHeading}>User-Generated Content</p>
              <p className={classes.bodyText}>
                If you submit content (e.g., reviews, feedback, or inquiries) to our website or App, you grant Xbattery a non-exclusive, royalty-free, worldwide license to use, modify, and display such content for business purposes. You warrant that your content is lawful, non-infringing, and complies with these Terms.
              </p>
              <p className={classes.subsectionHeading}>Third-Party Materials</p>
              <p className={classes.bodyText}>
                Our services may include third-party content (e.g., links or embedded media) used with permission. Such content is subject to the respective third-party's terms and conditions.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>4. Limitation of Liability</h3>
            <ul className={classes.ulholder}>
              <p className={classes.bodyText}>
                To the fullest extent permitted by law, Xbattery, its affiliates, officers, directors, and employees shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of our website, App, or Products, including but not limited to loss of data, profits, or business opportunities. Our total liability for any claim, whether in contract, tort, or otherwise, shall not exceed INR 10,000.
              </p>
              <p className={classes.bodyText}>
                We are not responsible for damages caused by:
              </p>
              <p className={classes.bulletPoint}>
                Misuse or improper installation of Products.
              </p>
              <p className={classes.bulletPoint}>
                Unauthorized modifications or repairs.
              </p>
              <p className={classes.bulletPoint} style={{ marginBottom: "0.5rem" }}>
                External factors, such as natural disasters or power failures.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>5. Dispute Resolution</h3>
            <ul className={classes.ulholder}>
              <p className={classes.subsectionHeading}>Governing Law</p>
              <p className={classes.bodyText}>
                These Terms and any disputes arising from your use of our website, App, or Products shall be governed by the laws of Telangana, India, without regard to conflict of law principles.
              </p>
              <p className={classes.subsectionHeading}>Arbitration</p>
              <p className={classes.bodyText}>
                Any disputes shall be resolved through binding arbitration in Hyderabad, India, conducted by a single arbitrator under the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English, and the decision shall be final and binding. You waive the right to participate in class action lawsuits or class-wide arbitration.
              </p>
              <p className={classes.subsectionHeading}>Jurisdiction</p>
              <p className={classes.bodyText}>
                If arbitration is not applicable, disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, India.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>6. Regulatory Compliance</h3>
            <ul className={classes.ulholder}>
              <p className={classes.bodyText}>
                Xbattery complies with applicable laws and regulations, including:
              </p>
              <p className={classes.bulletPoint}>
                <span className={classes.bulletLabel}>Information Technology Act, 2000</span> and its rules for data protection.
              </p>
              <p className={classes.bulletPoint}>
                <span className={classes.bulletLabel}>Consumer Protection Act, 2019</span> for consumer rights and warranties.
              </p>
              <p className={classes.bulletPoint}>
                <span className={classes.bulletLabel}>Bureau of Indian Standards (BIS)</span> requirements for battery management systems and lithium battery packs.
              </p>
              <p className={classes.bulletPoint}>
                <span className={classes.bulletLabel}>Battery Management and Handling Rules, 2001</span> for safe disposal and recycling of batteries.
              </p>
              <p className={classes.bulletPoint} style={{ marginBottom: "0.5rem" }}>
                <span className={classes.bulletLabel}>Foreign Trade Policy</span> and international export regulations for battery systems.
              </p>
              <p className={classes.bodyText}>
                We maintain certifications and conduct regular audits to ensure compliance with safety, environmental, and energy standards.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>7. User Obligations</h3>
            <ul className={classes.ulholder}>
              <p className={classes.bodyText}>
                You agree to:
              </p>
              <p className={classes.bulletPoint}>
                Use our website, App, and Products in compliance with these Terms and applicable laws.
              </p>
              <p className={classes.bulletPoint}>
                Not engage in activities that may harm our systems, such as hacking, data scraping, or distributing malware.
              </p>
              <p className={classes.bulletPoint}>
                Provide accurate information and promptly notify us of any issues with your account or Products.
              </p>
              <p className={classes.bulletPoint} style={{ marginBottom: "0.5rem" }}>
                Follow our Product usage and maintenance guidelines to ensure safety and performance.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>8. Termination</h3>
            <ul className={classes.ulholder}>
              <p className={classes.bodyText}>
                We may suspend or terminate your access to our website, App, or Products if you violate these Terms, engage in unlawful activities, or cause harm to our systems or other users. Termination does not affect your obligations under these Terms or any warranty claims, subject to the stated conditions.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>9. Grievance Redressal</h3>
            <ul className={classes.ulholder}>
              <p className={classes.bodyText}>
                For concerns or complaints about our services or these Terms, contact our Grievance Officer:
              </p>
              <p className={classes.bodyText}>
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:support@xbattery.energy" className={classes.link}>
                  support@xbattery.energy
                </a>
                <br />
                <span className="font-bold">Address:</span> Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075.
              </p>
              <p className={classes.bodyText}>
                We will respond within 30 days, as required by the <span className="font-bold">Information Technology Act, 2000</span>.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>10. Changes to These Terms</h3>
            <ul className={classes.ulholder}>
              <p className={classes.bodyText}>
                We may update these Terms to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated Terms on our website with a revised "Last Updated" date. Your continued use of our services constitutes acceptance of the updated Terms.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>11. Contact Us</h3>
            <ul className={classes.ulholder}>
              <p className={classes.bodyText}>
                For questions about these Terms, our services, or warranty claims, contact us at:
              </p>
              <p className={classes.bodyText}>
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:support@xbattery.energy" className={classes.link}>
                  support@xbattery.energy
                </a>
                <br />
                <span className="font-bold">Address:</span> Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <ul className={classes.ulholder}>
              <p className={classes.bodyText}>
                For information on data handling, see our{" "}
                <Link href="/privacy" className={classes.link}>
                  Privacy Policy
                </Link>
                {" "}and{" "}
                <Link href="/cookies" className={classes.link}>
                  Cookie Policy
                </Link>
                .
              </p>
              <p className={classes.bodyText}>
               
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;