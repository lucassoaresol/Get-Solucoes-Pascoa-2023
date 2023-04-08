import { StyledModal, StyledTitle } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { FaSadCry } from "react-icons/fa";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useRouter } from "next/router";

interface iModalProps {
    isDelete?: boolean;
}

const Modal = ({ isDelete }: iModalProps) => {
    const { modal, setModal } = useGlobalContext();
    const router = useRouter();
    return (
        <>
            {modal.isView && (
                <StyledModal isDelete={isDelete}>
                    <div>
                        <StyledTitle style={{ marginBottom: "20px" }}>
                            <h2>{modal.name}</h2>
                            <button
                                onClick={() => {
                                    setModal({ isView: false });
                                    router.replace(
                                        "https://www.instagram.com/getsolucoes/"
                                    );
                                }}
                            >
                                <AiOutlineClose />
                            </button>
                        </StyledTitle>
                        <h3>
                            Não foi dessa vez <FaSadCry />
                        </h3>
                        <button
                            onClick={() => {
                                setModal({ isView: false });
                                router.replace(
                                    "https://www.instagram.com/getsolucoes/"
                                );
                            }}
                        >
                            Sair
                        </button>
                    </div>
                </StyledModal>
            )}
        </>
    );
};

export default Modal;
