import styled from "styled-components";

const StyledSuccessPage = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: var(--Color-background);
    & > div {
        width: 100%;
        height: 100%;
        position: absolute;
        & > img {
            object-fit: contain;
        }
    }
`;

export { StyledSuccessPage };
