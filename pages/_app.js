import Layout from "@/components/Layout";
import { ChakraProvider } from '@chakra-ui/react'
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
        <ChakraProvider>
        <Component {...pageProps} />
        </ChakraProvider>
    </Layout>
  );
}
