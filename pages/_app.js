import Layout from "@/components/Layout";
import { ChakraProvider } from '@chakra-ui/react'
import "@/styles/globals.css";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  return (
    <div className={isHomePage ? 'bg-black ' : 'bg-white text-black'}>
    <Layout>
        <ChakraProvider>
        <Component {...pageProps} />
        </ChakraProvider>
    </Layout>
    </div>
  );
}
