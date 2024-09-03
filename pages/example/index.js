import React from "react";
import styles from "./ex.module.css";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// import { useGSAP } from '@gsap/react';
import { Image } from "@chakra-ui/react";

gsap.registerPlugin(ScrollTrigger);





const Example = () => {
//     const imgRef = useRef(null);
//   const nextSectionRef = useRef(null);

//   useEffect(() => {
//     const animation = gsap.to(imgRef.current, {
//         rotate: 360, // Complete one full rotation
//         duration: 0.1,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: imgRef.current,
//         start: 'top bottom', // Start when the top of the image reaches the bottom of the viewport
//         endTrigger: nextSectionRef.current,
//         end: 'top top', // End when the top of the next section reaches the top of the viewport
//         scrub: true, // Smoothly animate as you scroll
//         //markers: true, // Optionally add markers to visualize start/end points
//       },
//     });

//     return () => {
//       if (animation.scrollTrigger) animation.scrollTrigger.kill();
//       animation.kill();
//     };
//   }, []);

const imgRef = useRef(null);
const nextSectionRef = useRef(null);

useEffect(() => {
    // Create the animation
    const animation = gsap.to(imgRef.current, {
      rotate: 360, // Complete one full rotation
      duration: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top bottom', // Start when the top of the image reaches the bottom of the viewport
        endTrigger: nextSectionRef.current,
        end: 'top top', // End when the top of the next section reaches the top of the viewport
        scrub: true, // Smoothly animate as you scroll
        // markers: true, // Optionally add markers to visualize start/end points
      },
    });

    // Cleanup function to kill animation and ScrollTrigger instance
    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, []);


  return (
    <>
      <div className={`bg-[#E1EBDC] w-[100%] border-b-[1px] border-black`}>
        <div className={`${styles.head1} border-b-[1px] border-black`}>
          <div className=" w-[96%] mx-auto pt-[1rem] pb-[1rem] text-[2.1rem]">
            Investing basics
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-[-2rem] pb-[2rem] flex justify-center items-center gap-[3rem]">
          <div className={`${styles.head1} flex flex-col w-[40%]`}>
            <div className=" text-[3rem] font-semibold leading-[58px]">
              The building <br></br> blocks of your financial journey
            </div>
            <div className="mt-[1.5rem] text-[1.5rem]">
              What you need to know about investing from the get-go.
            </div>
          </div>
          <div className="w-[60%]">
            {" "}
            <Image src="/images/hero1.svg" width={"80%"} alt="hero" />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-[4rem] flex min-h-[60rem] relative ">
        <div className="w-[60%] h-[100%] align-middle self-center">
          When you make an investment, you trade resources (like money or
          credit) for assets (like stocks or real estate) in an attempt to gain
          future benefits. For example, an investor might purchase stocks
          believing that they’ll appreciate in value or pay a dividend. A
          student might invest in their education by pursuing a college degree.
          Investments are often thought of in terms of money, but you can also
          pay for them using other resources, like time and labor. An investment
          can produce losses if the acquired asset’s value decreases or if other
          expected benefits (think of rent payments for a rental property) don’t
          pan out. Where there’s a potential for reward, there’s also risk.
          EXAMPLE Imagine that as the 2014 holiday season approached, you
          noticed that most of your friends and family were buying gifts online.
          You became convinced that e-commerce was the future, so on Jan. 6,
          2015, you bought 10 shares of Amazon at $300 per share. Fast forward
          to Feb. 11, 2020 and Amazon stock is trading at a much higher price of
          $2,150 per share. You decide to sell yours. The 10 shares bought for
          $3,000 are now worth $21,150 — Netting you a profit of roughly
          $18,000—not accounting for taxes, trading fees, and other costs. Of
          course, hindsight is 20/20; many investments don’t pan out. For
          instance, if you had bought stock in J.C. Penny on Jan. 6, 2015 at
          $7.90 per share, your investment might have declined. Each share would
          have been worth only about 73 cents on February 11, 2020.
        </div>
        <div className="w-[35%] h-[100%] flex justify-center sticky top-[5rem] ">
        <Image ref={imgRef} src="/images/rotate.png" width="200px" alt="Rotating Windmill" />;
        </div>
      </div>

      <div ref={nextSectionRef} className="w-[90%] mx-auto mt-[4rem] flex min-h-[80rem] relative ">
        <div className="w-[60%] h-[100%] align-middle self-center">
          When you make an investment, you trade resources (like money or
          credit) for assets (like stocks or real estate) in an attempt to gain
          future benefits. For example, an investor might purchase stocks
          believing that they’ll appreciate in value or pay a dividend. A
          student might invest in their education by pursuing a college degree.
          Investments are often thought of in terms of money, but you can also
          pay for them using other resources, like time and labor. An investment
          can produce losses if the acquired asset’s value decreases or if other
          expected benefits (think of rent payments for a rental property) don’t
          pan out. Where there’s a potential for reward, there’s also risk.
          EXAMPLE Imagine that as the 2014 holiday season approached, you
          noticed that most of your friends and family were buying gifts online.
          You became convinced that e-commerce was the future, so on Jan. 6,
          2015, you bought 10 shares of Amazon at $300 per share. Fast forward
          to Feb. 11, 2020 and Amazon stock is trading at a much higher price of
          $2,150 per share. You decide to sell yours. The 10 shares bought for
          $3,000 are now worth $21,150 — Netting you a profit of roughly
          $18,000—not accounting for taxes, trading fees, and other costs. Of
          course, hindsight is 20/20; many investments don’t pan out. For
          instance, if you had bought stock in J.C. Penny on Jan. 6, 2015 at
          $7.90 per share, your investment might have declined. Each share would
          have been worth only about 73 cents on February 11, 2020.
        </div>
       
      </div>
    </>
  );
};

export default Example;
