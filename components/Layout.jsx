import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { useRouter } from "next/router";


const Layout = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/" || router.pathname === "/terms" || router.pathname === "/about" || router.pathname === "/privacy" || router.pathname==="/careers" || router.pathname.includes("careers");
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>XBattery</title>
        <meta
          name="description"
          content="Gain control of your business's growth with Mailgo's comprehensive marketing, automation, and email marketing platform."
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
