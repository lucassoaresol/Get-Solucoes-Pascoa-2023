import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "../contexts/GlobalContext";
import GlobalStyle from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllLocationIds, getLocation } from "../lib/locations";
import ProtectPage from "../components/Pages/Pascoa/Protect";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import { iLocation } from "../interfaces";

interface iPascoaProps {
    location: iLocation;
}

export default function Pascoa({ location }: iPascoaProps) {
    const { theme } = useGlobalContext();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <ProtectPage id={location?.id} />
            <Modal isDelete />
            <Loading />
        </ThemeProvider>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllLocationIds();
    return {
        paths,
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
