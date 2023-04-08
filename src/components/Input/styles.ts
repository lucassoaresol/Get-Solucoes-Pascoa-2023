import styled from "styled-components";

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    & > label {
        font-weight: 400;
        font-size: 10px;
        color: #fff;
        @media (min-width: 768px) {
            font-size: 12px;
        }
    }
`;

const StyledInput = styled.input`
    width: 100%;
    height: 38.5px;
    padding: 0 13px;
    color: var(--Color-text-primary);
    font-weight: 400;
    font-size: 13px;
    background-color: var(--Color-background-hero);
    border: 1px solid var(--Color-background-hero);
    border-radius: 3px;
    @media (min-width: 768px) {
        height: 48px;
        padding: 0 16px;
        font-size: 16px;
    }
`;

export { StyledDiv, StyledInput };
