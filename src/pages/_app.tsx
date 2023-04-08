import type { AppProps } from "next/app";
import { GlobalWrapper } from "../contexts/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalWrapper>
            <Component {...pageProps} />
        </GlobalWrapper>
    );
}
