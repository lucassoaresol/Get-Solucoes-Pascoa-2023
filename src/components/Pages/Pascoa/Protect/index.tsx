/* eslint-disable react-hooks/exhaustive-deps */
import { useGlobalContext } from "../../../../contexts/GlobalContext";
import { useEffect } from "react";
import PascoaPage from "..";

interface iProtectPageProps {
    id: string;
}

const ProtectPage = ({ id }: iProtectPageProps) => {
    const { loadLocation, location } = useGlobalContext();

    useEffect(() => {
        loadLocation(id);
    }, []);

    return location && <PascoaPage />;
};

export default ProtectPage;
