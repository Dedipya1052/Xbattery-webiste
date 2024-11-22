import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { MathJaxContext } from "better-react-mathjax";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage =
    router.pathname === "/" ||
    router.pathname === "/terms" ||
    router.pathname === "/about" ||
    router.pathname === "/privacy" ||
    router.pathname.includes("about") ||
    router.pathname.includes("careers") ||
    router.pathname.includes("bharat-bms"); 
    const currentURL = `https://xbattery.energy${router.pathname}`;
    const display = router.pathname.includes("learn/") || router.pathname.includes("blog/") || router.pathname.includes("whitepapers/") ;
   
  return (
    <div className={isHomePage ? "bg-[black] " : "bg-white text-black"}>
      <Head>
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        {!display && <link rel="canonical" href={currentURL} />}
      </Head>
      <Layout>
        <MathJaxContext>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </MathJaxContext>
      </Layout>
    </div>
  );
}
