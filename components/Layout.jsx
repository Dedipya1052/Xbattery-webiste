import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { useRouter } from "next/router";


const Layout = ({ children }) => {
  const router = useRouter();
  const isHomePageMain= router.pathname === "/" 
  //const isHomePage =  router.pathname === "/terms" || router.pathname === "/about" || router.pathname === "/privacy" || router.pathname.includes("about") || router.pathname.includes("careers") ||  router.pathname.includes("bharat-bms");
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Large-Scale Battery Storage Systems in India | Xbattery</title>
        <meta
          name="description"
          content="Xbattery builds lithium battery packs in India, integrating electronics and software to help businesses, EVs, and grids store and access energy affordably."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <meta name="robots" content="index, follow" />
      </Head>
      {!isHomePageMain && <Navbar />}
      <main className="flex-grow mt-[4rem]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
