import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {!isHomePage && <Navbar />}
      <main className="flex-grow mt-[4rem]">{children}</main>
      {!isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
