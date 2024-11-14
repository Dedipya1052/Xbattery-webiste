import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { useRouter } from "next/router";


const Layout = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/" || router.pathname === "/terms" || router.pathname === "/about" || router.pathname === "/privacy" || router.pathname.includes("about") || router.pathname.includes("careers") ||  router.pathname.includes("bharat-bms");
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Xbattery</title>
        <meta
          name="description"
          content="Xbattery is building giant batteries to transform energy storage in India using advanced BMS, IoT, Digital Twins, and AI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isHomePage && <Navbar />}
      <main className="flex-grow mt-[4rem]">{children}</main>
       <Footer />
    </div>
  );
};

export default Layout;
