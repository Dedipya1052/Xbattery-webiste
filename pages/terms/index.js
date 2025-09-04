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
                Welcome to Xbattery Energy Private Limited ("Xbattery," "we," "us," or "our"), located at Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075. These Terms of Use ("Terms") govern your access to and use of our website ({""}
                <a href="https://xbattery.energy" className="font-bold hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  https://xbattery.energy
                </a>
                ), mobile application ("App"), and our battery management systems and energy storage products ("Products"). By accessing or using our website, App, or Products, you ("you," "your," or "User") agree to be bound by these Terms. If you do not agree, please refrain from using our services.
              </p>
              <p style={{ marginTop: "20px" }}>
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
            <h3 className={classes.h3inaffiliate}>1. Use of Our Services</h3>
            <ul className={classes.ulholder}>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Eligibility</p>
              <p style={{ marginBottom: "20px" }}>
                You must be at least 18 years old or the age of majority in your jurisdiction to use our website, App, or Products. By using our services, you represent that you meet these eligibility requirements.
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Permitted Use</p>
              <p style={{ marginBottom: "20px" }}>
                You may use our website, App, and Products for lawful, personal, or commercial purposes (as applicable) in accordance with these Terms. You agree not to: - Use our services for illegal activities or to violate any laws. - Attempt unauthorized access, reverse-engineer, or interfere with our systems. - Engage in data scraping, hacking, or other activities that may harm our infrastructure.
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Account Responsibilities</p>
              <p style={{ marginBottom: "20px" }}>
                If you create an account on our website or App, you are responsible for: - Providing accurate and current information. - Maintaining the confidentiality of your account credentials. - Notifying us immediately of any unauthorized use at{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>2. Product Warranties</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "15px" }}>
                We stand behind the quality of our Products, including our Battery Management Systems (BMS) and energy storage devices. The following warranties apply:
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>BMS Electronic Boards (PCB)</p>
              <p style={{ marginLeft: "20px", marginBottom: "0px" }}>
                • <span className="font-bold" style={{ fontSize: "16px" }}>Warranty Period:</span> 5 years from the date of installation or delivery, whichever occurs first. Coverage: Defects in materials and workmanship under normal use. Exclusions: Damage due to misuse, improper installation, unauthorized repairs, or external factors (e.g., power surges).
              </p>
              <p style={{ marginLeft: "20px", marginBottom: "0px" }}>
                • <span className="font-bold" style={{ fontSize: "16px" }}>Coverage:</span> Defects in materials and workmanship under normal use.
              </p>
              <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
                • <span className="font-bold" style={{ fontSize: "16px" }}>Exclusions:</span> Damage due to misuse, improper installation, unauthorized repairs, or external factors (e.g., power surges).
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Energy Storage Devices (Battery Packs)</p>
              <p style={{ marginLeft: "20px", marginBottom: "0px" }}>
                • <span className="font-bold" style={{ fontSize: "16px" }}>Warranty Period:</span> 10 years from the date of installation or delivery, whichever occurs first.
              </p>
              <p style={{ marginLeft: "20px", marginBottom: "0px" }}>
                • <span className="font-bold" style={{ fontSize: "16px" }}>Performance Commitment:</span> Guaranteed retention of at least 80% of nominal capacity after 3,000 charge-discharge cycles under normal operating conditions.
              </p>
              <p style={{ marginLeft: "20px", marginBottom: "0px" }}>
                • <span className="font-bold" style={{ fontSize: "16px" }}>Coverage:</span> Defects in materials and workmanship under normal use.
              </p>
              <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
                • <span className="font-bold" style={{ fontSize: "16px" }}>Exclusions:</span> Damage due to misuse, improper maintenance, accidents, or non-compliance with our usage guidelines.
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Warranty Claims</p>
              <p style={{ marginBottom: "20px" }}>
                To make a warranty claim, contact us at{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                {" "}with proof of purchase and details of the issue. We may repair, replace, or refund the Product at our discretion, subject to inspection. This warranty is non-transferable and applies only to the original purchaser.
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Disclaimer</p>
              <p style={{ marginBottom: "20px" }}>
                Except as expressly stated above, our Products are provided "as is" without warranties, express or implied, including warranties of merchantability or fitness for a particular purpose. We do not guarantee that Products will be error-free or meet specific performance expectations beyond the stated commitments.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>3. Intellectual Property</h3>
            <ul className={classes.ulholder}>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Ownership</p>
              <p style={{ marginBottom: "20px" }}>
                All content on our website and App, including text, images, logos, software, and technical documentation, is owned by Xbattery Energy Private Limited or its licensors and is protected by Indian and international copyright, trademark, and intellectual property laws. The "Xbattery" and "BharatBMS" names and logos are registered trademarks of Xbattery.
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Permitted Use</p>
              <p style={{ marginBottom: "20px" }}>
                You may view, download, or print content for personal, non-commercial use, provided you retain all copyright and proprietary notices. Any other use, including reproduction, modification, distribution, or republication, requires prior written consent from Xbattery.
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>User-Generated Content</p>
              <p style={{ marginBottom: "20px" }}>
                If you submit content (e.g., reviews, feedback, or inquiries) to our website or App, you grant Xbattery a non-exclusive, royalty-free, worldwide license to use, modify, and display such content for business purposes. You warrant that your content is lawful, non-infringing, and complies with these Terms.
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Third-Party Materials</p>
              <p style={{ marginBottom: "20px" }}>
                Our services may include third-party content (e.g., links or embedded media) used with permission. Such content is subject to the respective third-party's terms and conditions.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>4. Limitation of Liability</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                To the fullest extent permitted by law, Xbattery, its affiliates, officers, directors, and employees shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of our website, App, or Products, including but not limited to loss of data, profits, or business opportunities. Our total liability for any claim, whether in contract, tort, or otherwise, shall not exceed INR 10,000.
              </p>
              <p style={{ marginBottom: "20px" }}>
                We are not responsible for damages caused by: - Misuse or improper installation of Products. - Unauthorized modifications or repairs. - External factors, such as natural disasters or power failures.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>5. Dispute Resolution</h3>
            <ul className={classes.ulholder}>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Governing Law</p>
              <p style={{ marginBottom: "20px" }}>
                These Terms and any disputes arising from your use of our website, App, or Products shall be governed by the laws of Telangana, India, without regard to conflict of law principles.
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Arbitration</p>
              <p style={{ marginBottom: "20px" }}>
                Any disputes shall be resolved through binding arbitration in Hyderabad, India, conducted by a single arbitrator under the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English, and the decision shall be final and binding. You waive the right to participate in class action lawsuits or class-wide arbitration.
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Jurisdiction</p>
              <p style={{ marginBottom: "20px" }}>
                If arbitration is not applicable, disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, India.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>6. Regulatory Compliance</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                Xbattery complies with applicable laws and regulations, including: -{" "}
                <span className="font-bold">Information Technology Act, 2000</span> and its rules for data protection. -{" "}
                <span className="font-bold">Consumer Protection Act, 2019</span> for consumer rights and warranties. -{" "}
                <span className="font-bold">Bureau of Indian Standards (BIS)</span> requirements for battery management systems and lithium battery packs. -{" "}
                <span className="font-bold">Battery Management and Handling Rules, 2001</span> for safe disposal and recycling of batteries. -{" "}
                <span className="font-bold">Foreign Trade Policy</span> and international export regulations for battery systems.
              </p>
              <p style={{ marginBottom: "20px" }}>
                We maintain certifications and conduct regular audits to ensure compliance with safety, environmental, and energy standards.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>7. User Obligations</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                You agree to: - Use our website, App, and Products in compliance with these Terms and applicable laws. - Not engage in activities that may harm our systems, such as hacking, data scraping, or distributing malware. - Provide accurate information and promptly notify us of any issues with your account or Products. - Follow our Product usage and maintenance guidelines to ensure safety and performance.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>8. Termination</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                We may suspend or terminate your access to our website, App, or Products if you violate these Terms, engage in unlawful activities, or cause harm to our systems or other users. Termination does not affect your obligations under these Terms or any warranty claims, subject to the stated conditions.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>9. Grievance Redressal</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                For concerns or complaints about our services or these Terms, contact our Grievance Officer: -{" "}
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                {" "}-{" "}
                <span className="font-bold">Address:</span> Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075.
              </p>
              <p style={{ marginBottom: "20px" }}>
                We will respond within 30 days, as required by the Information Technology Act, 2000.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>10. Changes to These Terms</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                We may update these Terms to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated Terms on our website with a revised "Last Updated" date. Your continued use of our services constitutes acceptance of the updated Terms.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>11. Contact Us</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                For questions about these Terms, our services, or warranty claims, contact us at: -{" "}
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                {" "}-{" "}
                <span className="font-bold">Address:</span> Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075.
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