import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

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
        
         {/* Google Tag (gtag.js) */}
         <script
          async
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-Y419512V0Q"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y419512V0Q');
            `,
          }}
          defer
        ></script>
        

        <link rel="icon" type="image/webp" href="/favicon.webp" />
        {!display && <link rel="canonical" href={currentURL} />}
      </Head>
      <Layout>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
      </Layout>
    </div>
  );
}
