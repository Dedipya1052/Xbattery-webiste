import React from 'react'
import styles from "./styles.module.css"
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/router';


const ComingSoon = () => {
  const router =useRouter()
  return (
    <div className={styles.container}>
    <div
      className={styles.affBackButton}
      onClick={() => router.push("/learn")}
    >
      {" "}
      <IoArrowBack /> <p>Back</p>
    </div>
      <div className="flex items-center justify-center text-center pt-[6rem] pb-[6rem]">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Coming Soon!</h1>
          <p className="text-xl text-gray-600 mt-4">
            We're working hard to bring you something awesome. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
