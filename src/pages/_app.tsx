import type { AppProps } from "next/app";
import { ContextProvider } from "../hooks/myUseContext";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}

export default MyApp;
