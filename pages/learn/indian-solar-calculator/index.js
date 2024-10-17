import React from 'react'
import styles from "./styles.module.css"
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/router';
import CompleteSolarCalculator from '@/components/ui/SolarCal';

const SolarCalculator = () => {
    const router=useRouter();
  return (
    <div className={styles.head1}>
      <div className={styles.container}>
        {/* <div
          className={styles.affBackButton}
          onClick={() => router.push("/learn")}
        >
          {" "}
          <IoArrowBack /> <p>Back</p>
        </div> */}
        <h2 className={styles.title}>Indian Solar Calculator</h2>
        <div className=' text-lg text-center mt-[2rem] mb-[2rem]'>The Indian Solar Calculator estimates solar panel energy generation, savings, and CO₂ reduction based on panel count, sunlight hours, and energy rates, offering an efficient overview of solar benefits.</div>
        <div className='mt-[2rem]'>
        <CompleteSolarCalculator/>

        </div>
      </div>
    </div>
  );
}

export default SolarCalculator;
