import Link from "next/link";
import DarkMode from "./DarkMode";
import { StyledHeader } from "./styles";
import Image from "next/image";
import { useGlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
    const { theme } = useGlobalContext();
    return (
        <StyledHeader>
            <Link href="/">
                <Image
                    src={theme === "light" ? "/get_ligth.svg" : "/get_dark.svg"}
                    alt="Get Soluções"
                    width={125}
                    height={55}
                />
            </Link>
            <div>
                <DarkMode />
            </div>
        </StyledHeader>
    );
};

export default Header;
