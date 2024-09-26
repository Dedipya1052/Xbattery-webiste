import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { MathJaxContext } from "better-react-mathjax";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage =
    router.pathname === "/" ||
    router.pathname === "/terms" ||
    router.pathname === "/about" ||
    router.pathname === "/privacy" ||
    router.pathname === "/careers" ||
    router.pathname.includes("careers");
  return (
    <div className={isHomePage ? "bg-[black] " : "bg-white text-black"}>
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
