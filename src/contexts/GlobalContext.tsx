import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import { iLocation } from "../interfaces";
import { api } from "../services/api";

interface iGlobalContextProps {
    children: ReactNode;
}

interface iGlobalContext {
    theme: string;
    toggleTheme: () => void;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    location: iLocation;
    loadLocation: (id: string) => Promise<void>;
    modal: iModal;
    setModal: Dispatch<SetStateAction<iModal>>;
}

interface iModal {
    isView: boolean;
    name?: string;
}

const GlobalContext = createContext({} as iGlobalContext);

function GlobalWrapper({ children }: iGlobalContextProps) {
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState<iLocation>({
        id: "",
        name: "",
        expiredAt: "",
    });
    const [modal, setModal] = useState<iModal>({ isView: false });

    const toggleTheme = () => {
        if (theme === "light") {
            localStorage.setItem("@ThemeGetSoluções", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("@ThemeGetSoluções", "light");
            setTheme("light");
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem("@ThemeGetSoluções");
        localTheme && setTheme(localTheme);
    }, []);

    const loadLocation = async (id: string) => {
        try {
            setLoading(true);
            const response = await api.patch(`locations/${id}/user`);
            setLocation(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setModal({ isView: true, name: "Link Expirado" });
        }
    };

    let sharedState = {
        theme,
        toggleTheme,
        loading,
        setLoading,
        location,
        loadLocation,
        modal,
        setModal,
    };

    return (
        <GlobalContext.Provider value={sharedState}>
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalWrapper, useGlobalContext };
