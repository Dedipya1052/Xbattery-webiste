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
            <ul className={classes.ulholder}>
              <p style={{ fontWeight: "bold", marginBottom: "20px" }}>Last Updated: September 4, 2025</p>
              <p>
                Xbattery Energy Private Limited ("Xbattery," "we," "us," or "our"), with its registered office at Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075, is committed to safeguarding the privacy of our users ("you," "your") while you access our website ({" "}
                <a href="https://xbattery.energy" className="font-bold hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  https://xbattery.energy
                </a>
                ), mobile application ("App"), or battery management system products and services ("Products"). This Privacy Policy explains how we collect, use, process, disclose, and protect your personal information, in compliance with applicable laws in India, including the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. For details on our use of cookies and tracking technologies, please refer to our{" "}
                <Link href="/cookies" className="font-bold hover:opacity-80">
                  Cookie Policy
                </Link>
                .
              </p>
              <p>
                By using our website, App, or Products, you consent to the collection and use of your information as described in this policy. If you do not agree with this policy, please refrain from using our services.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>1. Information We Collect</h3>
            <ul className={classes.ulholder}>
              <p>
                1.1 We collect information to provide, improve, and personalize our Products and services. The types of information we may collect include:
              </p>
              <p>
                1.2 Personal Information: Contact Details: Name, email address, phone number, company name, and address provided during inquiries, registrations, or purchases. Account Information: Username, password, and preferences if you create an account on our website or App. Transaction Information: Payment details, billing information, and purchase history related to our Products.
              </p>
              <p>
                1.3 Telematics and Device Data: Product Usage Data: Information from our battery management systems, such as battery performance, charge cycles, usage patterns, and diagnostic data, which may include identifiers like serial numbers. Location Data: If you use location-based features in our App (e.g., for service requests), we may collect GPS coordinates or addresses with your consent.
              </p>
              <p>
                1.4 Usage and Technical Data: Information about your interaction with our website or App, such as IP address, browser type, device type, operating system, and pages visited. For more details, see our{" "}
                <Link href="/cookies" className="font-bold hover:opacity-80">
                  Cookie Policy
                </Link>
                .
              </p>
              <p>
                1.5 Information from Other Sources: Data from affiliates, subsidiaries, or third parties (e.g., service partners) when you interact with us through their platforms or during service appointments.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>2. How We Collect Information</h3>
            <ul className={classes.ulholder}>
              <p>
                2.1 We collect information: - Directly from You: When you submit forms, create accounts, request support, or purchase Products. - Automatically: Through cookies, web beacons, and telematics devices embedded in our Products. See our{" "}
                <Link href="/cookies" className="font-bold hover:opacity-80">
                  Cookie Policy
                </Link>
                {" "}for details. - From Third Parties: From service providers, business partners, or affiliates with your consent or as permitted by law.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>3. How We Use Your Information</h3>
            <ul className={classes.ulholder}>
              <p>
                3.1 We use your information to: - Provide, maintain, and improve our Products and services, including troubleshooting and diagnostics. - Process transactions and deliver customer support. - Send communications, such as order confirmations, service updates, or marketing messages (with your consent). - Analyze usage patterns to enhance website, App, and Product performance. - Ensure the security of our systems and prevent fraud. - Comply with legal obligations or protect our legitimate interests.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>4. Data Sharing and Disclosure</h3>
            <ul className={classes.ulholder}>
              <p>
                4.1 We may share your information in the following circumstances: - Service Providers: With trusted third parties (e.g., hosting providers, analytics services, or payment processors) under strict confidentiality agreements. - Affiliates and Subsidiaries: With Xbattery-related entities for business purposes, such as product development or customer service. - Legal Requirements: When required by law, court order, or government authority, or to protect our rights, resolve disputes, or investigate fraud. - Business Transfers: In connection with a merger, acquisition, or sale of assets, with appropriate safeguards for your data.
              </p>
              <p>
                4.2 We do not sell or rent your personal information to third parties for marketing purposes without your explicit consent.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>5. Your Rights</h3>
            <ul className={classes.ulholder}>
              <p>
                5.1 Under applicable Indian laws, you have the following rights regarding your personal information: - Access: Request a copy of your personal information in a structured, commonly used, and machine-readable format. - Correction: Request correction of inaccurate or incomplete data. - Erasure: Request deletion of your data, subject to legal retention requirements. - Objection: Object to processing for direct marketing or automated decision-making. - Portability: Request transfer of your data to another provider. - Restriction: Request restriction of data processing in certain cases.
              </p>
              <p>
                5.2 To exercise these rights, contact our Data Protection Officer at{" "}
                <a href="mailto:privacy@xbattery.energy" className="font-bold hover:opacity-80">
                  privacy@xbattery.energy
                </a>
                . We will verify your identity and respond within 30 days, except in exceptional circumstances. A nominal fee may apply to cover administrative costs, which we will communicate in advance.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>6. Data Retention and Security</h3>
            <ul className={classes.ulholder}>
              <p>
                6.1 Retention: We retain personal information only as long as necessary for the purposes outlined in this policy or as required by law (e.g., tax or regulatory obligations). Telematics data is retained for product improvement and diagnostics, typically for up to 3 years, unless otherwise required.
              </p>
              <p>
                6.2 Security: We use industry-standard measures, such as AES-256 encryption, secure servers, and access controls, to protect your data. However, no system is entirely secure, and we cannot guarantee absolute security.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>7. Regulatory Compliance</h3>
            <ul className={classes.ulholder}>
              <p>
                7.1 Xbattery complies with applicable laws and regulations, including: - Information Technology Act, 2000 and its rules for data protection. - Consumer Protection Act, 2019 for consumer rights and warranties. - Bureau of Indian Standards (BIS) for battery management systems and lithium battery packs. - Battery Management and Handling Rules, 2001 for environmentally safe disposal and recycling of batteries. - Foreign Trade Policy and international export regulations for battery systems.
              </p>
              <p>
                7.2 We conduct regular audits and maintain certifications to ensure compliance with safety, environmental, and energy standards.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>8. Liability Exposure</h3>
            <ul className={classes.ulholder}>
              <p>
                8.1 Warranty Disclaimer: Our website, App, and Products are provided "as is" without warranties, express or implied, including warranties of accuracy, completeness, or fitness for a particular purpose. Xbattery does not guarantee uninterrupted or error-free operation.
              </p>
              <p>
                8.2 Limitation of Liability: To the fullest extent permitted by law, Xbattery, its affiliates, officers, directors, and employees shall not be liable for indirect, incidental, consequential, or punitive damages arising from your use of our website, App, or Products, including loss of data, profits, or opportunities. Our total liability for any claim shall not exceed INR 10,000.
              </p>
              <p>
                8.3 Dispute Resolution: Disputes arising from this policy or your use of our services shall be governed by the laws of Telangana, India. You agree to resolve disputes through binding arbitration in Hyderabad, India, under the Arbitration and Conciliation Act, 1996, with a single arbitrator. You waive the right to participate in class action lawsuits.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>9. Intellectual Property & Content Use</h3>
            <ul className={classes.ulholder}>
              <p>
                9.1 Ownership: All content on our website and App, including text, images, logos, and software, is owned by Xbattery or its licensors and is protected by Indian and international copyright, trademark, and intellectual property laws. The "Xbattery" and "BharatBMS" names and logos are registered trademarks of Xbattery.
              </p>
              <p>
                9.2 Permitted Use: You may view, download, or print content for personal, non-commercial use, retaining all copyright notices. Other uses, such as reproduction or distribution, require our prior written consent.
              </p>
              <p>
                9.3 User-Generated Content: If you submit content (e.g., reviews, inquiries) to our website or App, you grant Xbattery a non-exclusive, royalty-free, worldwide license to use, modify, and display it for business purposes. You are responsible for ensuring your content is lawful and non-infringing.
              </p>
              <p>
                9.4 Third-Party Materials: Third-party content (e.g., links or embedded media) is used with permission and subject to the respective third-party's terms.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>10. User Obligations</h3>
            <ul className={classes.ulholder}>
              <p>
                10.1 You agree to: - Use our website, App, and Products lawfully and in accordance with our{" "}
                <Link href="/terms" className="font-bold hover:opacity-80">
                  Terms of Use
                </Link>
                . - Avoid unauthorized access, data scraping, or activities that may harm our systems. - Provide accurate information when interacting with our services.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>11. Grievance Redressal</h3>
            <ul className={classes.ulholder}>
              <p>
                11.1 For concerns or complaints about this policy or our data practices, contact our Grievance Officer: - Email:{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                {" "}- Address: Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075
              </p>
              <p>
                11.2 We will address your query within 30 days, as required by the Information Technology Act, 2000.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>12. Changes to This Policy</h3>
            <ul className={classes.ulholder}>
              <p>
                12.1 We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of our website, App, or Products constitutes acceptance of the updated policy.
              </p>
                </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>13. Contact Us</h3>
            <ul className={classes.ulholder}>
              <p>
                13.1 For questions about this Privacy Policy or to exercise your rights, contact our Data Protection Officer: - Email:{" "}
                <a href="mailto:privacy@xbattery.energy" className="font-bold hover:opacity-80">
                  privacy@xbattery.energy
                </a>
                {" "}- Address: Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075
              </p>
              <p>
                13.2 For information on cookies and tracking technologies, please review our{" "}
                <Link href="/cookies" className="font-bold hover:opacity-80">
                  Cookie Policy
                </Link>
                . For additional details, see our{" "}
                <Link href="/terms" className="font-bold hover:opacity-80">
                  Terms of Use
                </Link>
                .
              </p>
            </ul>
            </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>14. Information We Collect</h3>
            <ul className={classes.ulholder}>
              <p>
                14.1 We may collect personal information such as your name, email address, shipping address, and payment information when you place an order or sign up for our services.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>15. How We Use Your Information</h3>
            <ul className={classes.ulholder}>
              <p>
                15.1 We use your personal information to: - Process your orders and payments - Provide customer support - Send updates and promotions (with your consent) - Improve our services
              </p>
                </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>16. Sharing of Information</h3>
            <ul className={classes.ulholder}>
              <p>
                16.1 We do not share your personal information with third parties, except: - To service providers assisting in order fulfillment and payment processing - When required by law
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>17. Cookies</h3>
            <ul className={classes.ulholder}>
              <p>
                17.1 Xbattery uses cookies to enhance your experience on our website. You can adjust your browser settings to refuse cookies, but this may limit your ability to use certain features.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>18. Data Security</h3>
            <ul className={classes.ulholder}>
              <p>
                18.1 We implement security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, no online system can be 100% secure.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>19. Your Rights</h3>
            <ul className={classes.ulholder}>
              <p>
                19.1 You have the right to access, correct, or delete your personal information. To do so, please contact us at{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>20. Changes to Privacy Policy</h3>
            <ul className={classes.ulholder}>
              <p>
                20.1 We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>21. Contact Us</h3>
            <ul className={classes.ulholder}>
              <p>
                21.1 If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@xbattery.energy" className="font-bold hover:opacity-80">
                  support@xbattery.energy
                </a>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <ul className={classes.ulholder}>
              <p>
                For information on cookies and tracking technologies, please review our{" "}
                <Link href="/cookies" className="font-bold hover:opacity-80">
                  Cookie Policy
                </Link>
                . For additional details, see our{" "}
                <Link href="/terms" className="font-bold hover:opacity-80">
                  Terms of Use
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

export default Privacy;
