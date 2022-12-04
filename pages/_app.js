import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/myChakraTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
