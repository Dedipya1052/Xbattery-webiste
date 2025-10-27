import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "./ui/Loading";

const Layout = ({ children }) => {
  const router = useRouter();
  const isHomePageMain = router.pathname === "/" || router.pathname === "/energy-storage";
  const isBharatBMSPage = router.pathname === "/bharatbms-ess" || router.pathname === "/bharatbms-ev" || router.pathname === "/BharatBMS-ESS" || router.pathname === "/BharatBMS-EV";
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
   
    const timer = setTimeout(() => setIsLoading(false), 300); 

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   setIsLoading(false); 
  // }, []);
  

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // Listen to route change events
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Xbattery™ - India's first unified BMS for Energy Storage & EVs | Advanced Battery Packs </title>
        <meta
          name="description"
          content="Xbattery builds lithium battery packs in India, integrating electronics and software to help businesses, EVs, and grids store and access energy affordably."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <meta name="robots" content="index, follow" />
      </Head>
     
     {!isHomePageMain && !isBharatBMSPage && <Navbar />}
     {isBharatBMSPage && <Navbar isBlackNav={true} />}
     
      <main className={`flex-grow ${isLoading ? "flex justify-center items-center" : isBharatBMSPage ? "mt-0" : "mt-[4rem]"}`}>
        {isLoading ? <Loading /> : children}
      </main>
      
      {!isBharatBMSPage && <Footer />}
    </div>
  );
};

export default Layout;
