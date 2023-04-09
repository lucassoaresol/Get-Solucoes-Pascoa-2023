import Image from "next/image";
import { StyledSuccessPage } from "./styles";
import { useGlobalContext } from "../../../../contexts/GlobalContext";

const SuccessPage = () => {
    const { isSuccess } = useGlobalContext();
    return (
        <>
            {isSuccess && (
                <StyledSuccessPage>
                    <div>
                        <Image
                            src="/pascoa.jpg"
                            alt="Pascoa Get"
                            fill
                            priority
                        />
                    </div>
                </StyledSuccessPage>
            )}
        </>
    );
};

export default SuccessPage;
