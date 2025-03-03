import { Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Loading = () => {
  const router = useRouter();
  const Blackbg =
    router.pathname === "/" ||
    router.pathname === "/terms" ||
    router.pathname === "/about" ||
    router.pathname === "/privacy" ||
    router.pathname.includes("about") ||
    router.pathname.includes("careers") ||
    router.pathname.includes("contact") ||
    router.pathname.includes("bharat-bms") ||
    router.pathname.includes("docs")  ||
    router.pathname.includes("support");

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      bg={Blackbg ? "black" : "white"}
      width="100%"
      height="100vh"
    >
     
      <Spinner
        boxSize="40px" 
        color="gray.400"
        speed="0.6s"
        thickness="4px" 
      />
    </Flex>
  );
};

export default Loading;
