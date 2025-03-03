import React from 'react'
import styles from "./styles.module.css"
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/router';
import CompleteSolarCalculator from '@/components/ui/SolarCal';
import Head from 'next/head';

const SolarCalculator = () => {
    const router = useRouter();
  return (
    <>
      <Head>
        <title>{`Indian Solar Calculator | Learn | Xbattery`}</title>
        <meta
          name="description"
          content="Calculate solar energy potential in India based on sunlight hours, location, and panel efficiency to estimate savings and environmental impact."
        />

        <meta property="og:image" content={`/favicon.webp`} />
        <meta property="og:site_name" content="Xbattery" />
        <meta property="og:title" content="Indian Solar Calculator" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://xbattery.energy/learn/indian-solar-calculator`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://xbattery.energy/learn/indian-solar-calculator`}
        />
      </Head>

      <div className={styles.head1}>
        <div className={styles.container}>
          {/* <div
          className={styles.affBackButton}
          onClick={() => router.push("/learn")}
        >
          {" "}
          <IoArrowBack /> <p>Back</p>
        </div> */}
          <h1 className={styles.title}>Indian Solar Calculator</h1>
          <div className=" text-lg text-center mt-[2rem] mb-[2rem]">
            The Indian Solar Calculator estimates solar panel energy generation,
            savings, and CO₂ reduction based on panel count, sunlight hours, and
            energy rates, offering an efficient overview of solar benefits.
          </div>
          <div className="mt-[2rem]">
            <CompleteSolarCalculator />
          </div>
        </div>
      </div>
    </>
  );
}

export default SolarCalculator;
