/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "../contexts/GlobalContext";
import GlobalStyle from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import { GetStaticProps } from "next";
import { getLocation } from "../lib/locations";
import PascoaPage from "../components/Pages/Pascoa";
import { useEffect } from "react";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

interface iPascoaProps {
    location: {
        id: string;
        name: string;
        expiredAt: string;
    };
}

export default function Pascoa({ location }: iPascoaProps) {
    const { theme, loadLocation } = useGlobalContext();

    useEffect(() => {
        loadLocation(location?.id);
    }, []);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <PascoaPage />
            <Loading />
            <Modal isDelete />
        </ThemeProvider>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { id: "1" } },
            { params: { id: "640456ce-d264-48ea-824d-3a29a22a1b02" } },
            { params: { id: "9c328118-348f-4482-85e7-40bc8e58dddb" } },
        ],
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const id = ctx.params!.id;
    if (typeof id === "string") {
        const location = await getLocation(id);
        return { props: { location } };
    }
};
