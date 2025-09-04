import React, { useState } from "react";
import classes from "../privacy/styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button ,} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import Head from "next/head";
import { UnorderedList, ListItem } from "@chakra-ui/react";

const Cookies = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <Head>
        <title>Cookie Policy | Xbattery</title>
        <meta property="og:image" content="/favicon.webp" />
        <meta property="og:site_name" content="Xbattery" />
        <meta property="og:title" content="Cookie Policy | Xbattery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xbattery.energy/cookies" />
        <meta
          name="description"
          content="Read the cookie policy of Xbattery Energy Private Limited to learn how we use cookies and similar technologies."
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
            <h1 className={classes.headername}>Cookie Policy</h1>
          </div>

          <div className={classes.affiliateholder}>
            <ul className={classes.ulholder}>
              <p style={{ fontWeight: "bold", marginBottom: "20px" }}>Last Updated: September 4, 2025</p>
              <p>
                Xbattery Energy Private Limited ("Xbattery," "we," "us," or "our") uses cookies and similar tracking technologies on our website ({""}
                <a href="https://xbattery.energy" className="font-bold hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  https://xbattery.energy
                </a>
                ) and related portals to enhance user experience, analyze performance, and manage user data. This Cookie Policy explains what cookies are, how we use them, how we manage user data in our databases and portals, and your choices regarding cookies. This policy complements our{" "}
                <Link href="/privacy" className="font-bold hover:opacity-80">
                  Privacy Policy
                </Link>
                {" "}and{" "}
                <Link href="/terms" className="font-bold hover:opacity-80">
                  Terms of Use
                </Link>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>1. What Are Cookies?</h3>
            <ul className={classes.ulholder}>
              <p>
                Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit our website or interact with our portals. These files store information to help us recognize your device, remember preferences, and improve functionality. We also use similar technologies, such as web beacons, pixels, and local storage, for comparable purposes.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>2. Types of Cookies We Use</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "15px" }}>
                We use the following categories of cookies:
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Essential Cookies</p>
              <div style={{ marginLeft: "20px", marginBottom: "0px" }}>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Purpose:</span> Enable core website functionality, such as navigation, secure access to portals, and form submissions.
                </p>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Examples:</span> Session cookies for user authentication, cookies to maintain portal session states.
                </p>
                <p style={{ marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Necessity:</span> These cookies are strictly necessary and cannot be disabled without affecting website or portal functionality.
                </p>
              </div>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Analytics Cookies</p>
              <div style={{ marginLeft: "20px", marginBottom: "0px" }}>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Purpose:</span> Collect anonymized data to analyze website and portal usage, such as page views, time spent, and user journeys.
                </p>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Examples:</span> Google Analytics cookies (_ga, _gid) to track visitor behavior and site performance.
                </p>
                <p style={{ marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Necessity:</span> Optional; can be disabled via cookie settings.
                </p>
              </div>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Marketing Cookies</p>
              <div style={{ marginLeft: "20px", marginBottom: "0px" }}>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Purpose:</span> Deliver personalized content and advertisements based on your interests and browsing behavior.
                </p>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Examples:</span> Cookies for targeted ads or tracking interactions with marketing campaigns.
                </p>
                <p style={{ marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Necessity:</span> Optional; requires your explicit consent.
                </p>
              </div>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Functional Cookies</p>
              <div style={{ marginLeft: "20px", marginBottom: "0px" }}>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Purpose:</span> Enhance user experience by remembering preferences, such as language settings or portal customization.
                </p>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Examples:</span> Cookies storing your preferred currency or display settings for our product configurator portal.
                </p>
                <p style={{ marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Necessity:</span> Optional; can be disabled via cookie settings.
                </p>
              </div>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>3. User Consent for Cookies</h3>
            <ul className={classes.ulholder}>
              <div style={{ marginLeft: "20px", marginBottom: "0px" }}>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Consent Process:</span> On your first visit to our website or portal, a cookie consent banner will prompt you to accept or decline non-essential cookies (analytics, marketing, and functional). You can customize your preferences or decline all non-essential cookies.
                </p>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Managing Preferences:</span> You can update your cookie preferences at any time through the "Cookie Settings" link in our website footer or portal settings.
                </p>
                <p style={{ marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Withdrawing Consent:</span> To withdraw consent, adjust your preferences in the cookie settings or contact us at{" "}
                  <a href="mailto:privacy@xbattery.energy" className="font-bold hover:opacity-80">
                    privacy@xbattery.energy
                  </a>
                  . Withdrawing consent will not affect the lawfulness of prior data processing.
                </p>
              </div>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>4. User Data Management in Databases and Portals</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "15px" }}>
                We collect and manage data from cookies to provide seamless experiences across our website and portals (e.g., customer support portal, product configurator, or partner dashboards). Below is how we handle this data:
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Data Collection</p>
              <div style={{ marginLeft: "20px", marginBottom: "0px" }}>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Cookies and Portals:</span> When you interact with our portals (e.g., submitting a support ticket or configuring a battery system), cookies may collect data such as session IDs, user preferences, and interaction logs.
                </p>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Personal Data:</span> If you log into a portal, cookies may link to your account information (e.g., email or username) to personalize your experience.
                </p>
                <p style={{ marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Analytics Data:</span> Cookies track anonymized metrics (e.g., click patterns, time spent) to improve portal functionality.
                </p>
              </div>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Data Storage in Databases</p>
              <div style={{ marginLeft: "20px", marginBottom: "0px" }}>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Database Usage:</span> Data collected via cookies is stored in secure, encrypted databases hosted on servers compliant with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                </p>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Data Categories:</span> We store cookie-related data such as:
                </p>
                <p style={{ marginLeft: "40px", marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  o Unique identifiers (e.g., cookie IDs, device IDs).
                </p>
                <p style={{ marginLeft: "40px", marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  o Anonymized usage statistics (e.g., page visits, session duration).
                </p>
                <p style={{ marginLeft: "40px", marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                  o User preferences (e.g., language or portal settings).
                </p>
              </div>
              <p style={{ marginLeft: "20px", marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                • <span className="font-bold" style={{ fontSize: "16px" }}>Retention:</span> Cookie data is retained only as long as necessary for the purposes outlined (e.g., session cookies expire at the end of your session; analytics data is retained for up to 26 months per Google Analytics defaults). Data linked to user accounts is retained as described in our{" "}
                <Link href="/privacy" className="font-bold hover:opacity-80">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Data Processing in Portals</p>
              <div style={{ marginLeft: "20px", marginBottom: "0px" }}>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Personalization:</span> Cookie data enables personalized portal experiences, such as pre-filling forms with your saved preferences or recommending relevant battery system configurations.
                </p>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Security:</span> Cookies help maintain secure sessions, preventing unauthorized access to your portal account.
                </p>
                <p style={{ marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • <span className="font-bold" style={{ fontSize: "16px" }}>Analytics:</span> Aggregated cookie data helps us optimize portal performance, identify usability issues, and enhance features.
                </p>
              </div>
              <p className="font-bold" style={{ fontSize: "18px", marginBottom: "15px" }}>Data Security</p>
              <div style={{ marginLeft: "20px", marginBottom: "0px" }}>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • We use industry-standard encryption (e.g., AES-256) for data stored in our databases.
                </p>
                <p style={{ marginBottom: "0px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • Access to cookie-related data is restricted to authorized personnel and third-party service providers (e.g., analytics platforms) under strict confidentiality agreements.
                </p>
                <p style={{ marginBottom: "20px", textIndent: "-20px", paddingLeft: "20px" }}>
                  • Regular security audits ensure compliance with Indian data protection laws and international best practices.
                </p>
              </div>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>5. Third-Party Cookies</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                We may use third-party services that set their own cookies, such as: -{" "}
                <span className="font-bold">Google Analytics:</span> Tracks website and portal usage for performance insights. -{" "}
                <span className="font-bold">Advertising Partners:</span> Serve targeted ads (with your consent). -{" "}
                <span className="font-bold">Cloudflare:</span> Enhances website security and performance. These third parties are responsible for their cookie practices, and we encourage you to review their privacy policies. We ensure all third-party providers comply with applicable data protection laws.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>6. Managing Cookies and Your Choices</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "15px" }}>
                You can control cookies in the following ways: -{" "}
                <span className="font-bold">Cookie Consent Banner:</span> Accept or decline non-essential cookies on your first visit or adjust settings later. -{" "}
                <span className="font-bold">Browser Settings:</span> Configure your browser to block cookies or alert you when cookies are set. Note that disabling essential cookies may impair website or portal functionality. -{" "}
                <span className="font-bold">Do Not Track (DNT):</span> Our website respects DNT signals if enabled in your browser, though some third-party services may not. -{" "}
                <span className="font-bold">Portal Settings:</span> If you have a portal account, you can manage cookie preferences specific to your account via the portal dashboard.
              </p>
              <p style={{ marginBottom: "20px" }}>
                To opt out of specific third-party cookies: - Google Analytics: Use the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" className="font-bold hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  Google Analytics Opt-Out Browser Add-On
                </a>
                . - Advertising Cookies: Opt out via the{" "}
                <a href="https://www.networkadvertising.org/choices/" className="font-bold hover:opacity-80" target="_blank" rel="noopener noreferrer">
                  Network Advertising Initiative
                </a>
                .
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>7. Regulatory Compliance</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                Our cookie practices comply with: -{" "}
                <span className="font-bold">Information Technology Act, 2000</span> and its rules, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. -{" "}
                <span className="font-bold">Digital Personal Data Protection Act, 2023</span> (if applicable, based on implementation status as of September 2025). We regularly review our cookie and data management practices to ensure compliance with Indian and international data protection standards.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>8. Contact Us</h3>
            <ul className={classes.ulholder}>
              <p style={{ marginBottom: "20px" }}>
                For questions about this Cookie Policy, our data practices, or to exercise your rights, contact us at: -{" "}
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:privacy@xbattery.energy" className="font-bold hover:opacity-80">
                  privacy@xbattery.energy
                </a>
                {" "}-{" "}
                <span className="font-bold">Address:</span> Villa No AE-140, Mantri Euphoria, Gandipet, Rajendra Nagar, K.V. Rangareddy, Telangana, India, 500075
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <h3 className={classes.h3inaffiliate}>9. Changes to This Policy</h3>
            <ul className={classes.ulholder}>
              <p>
                We may update this Cookie Policy to reflect changes in our practices, technologies, or legal requirements. We will notify you of material changes by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of our website or portals constitutes acceptance of the updated policy.
              </p>
            </ul>
          </div>

          <div className={classes.affiliateholder}>
            <ul className={classes.ulholder}>
              <p>
                For additional details, please review our{" "}
                <Link href="/privacy" className="font-bold hover:opacity-80">
                  Privacy Policy
                </Link>
                {" "}and{" "}
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

export default Cookies;


