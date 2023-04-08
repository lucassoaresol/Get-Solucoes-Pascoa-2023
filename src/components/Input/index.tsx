import {
    UseFormRegisterReturn,
    FieldErrors,
    FieldValues,
} from "react-hook-form";
import ErrorsMessage from "./ErrorsMessage";
import Text from "./Text";
import { StyledDiv } from "./styles";

interface iInputProps {
    id: string;
    name: string;
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    errors: FieldErrors<FieldValues>;
}

const Input = ({ id, name, placeholder, register, errors }: iInputProps) => {
    return (
        <StyledDiv>
            <label htmlFor={id}>{name}</label>
            <Text id={id} placeholder={placeholder} register={register} />
            <ErrorsMessage message={errors[id]?.message} />
        </StyledDiv>
    );
};

export default Input;
