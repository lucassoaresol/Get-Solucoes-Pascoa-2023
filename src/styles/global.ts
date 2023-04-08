import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
            --Color-background: ${({ theme }) => theme.background};
            --Color-background-hero: ${({ theme }) => theme.background_hero};
            --Color-background-depoimentos:  ${({ theme }) =>
                theme.background_depoimentos};
            --Color-text-primary: ${({ theme }) => theme.text_primary};
            --Color-text-secondary: #99df0cff;
            --Color-button-menu: ${({ theme }) => theme.button_menu};
            --Color-button-menu-hover: ${({ theme }) =>
                theme.button_menu_hover};
            --Color-primary: #FF577F;
            --Color-primary-Focus: #FF427F;
            --Color-primary-Negative: #59323F;
            --Color-grey-4: #121214;
            --Color-grey-3: #212529;
            --Color-grey-2: #343B41;
            --Color-grey-1: #868E96;
            --Color-grey-0: #F8F9FA;
    }
    a, article, body, button, div, footer, h1, h2, h3, h4, h5, h6, header, html, img, input, li, main, nav, p, section, ul {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
        border: none;
    }
    html {
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
    }
    body, button, a, input {
        font-family: "Montserrat", sans-serif;
        color: $text-color;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: "Raleway", sans-serif;
    }
    p {
        line-height: 1.4;
    }
    button{
        display: inline-flex;
        align-items: center;
        justify-content: center;

        background: transparent;
        border: transparent;

        cursor: pointer;
    }

    .container {
    width: 85%;
    max-width: $max-width;
    padding: 2.5rem 0;
    margin: 0 auto;

    @media (min-width: 1024px) {
        padding: 4.5rem 0;
    }
    }
    .hidden {
    display: none;
    }
    .flex {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    }

    .active {
    color: $brand-color;
    }

    .alice-carousel__prev-btn-item,
    .alice-carousel__next-btn-item {
    position: absolute;
    display: block;
    width: fit-content;
    top: 50%;
    z-index: 2;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 9px 12px;
    background-color: rgba(0, 30, 50, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
    text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);

    transition: border 300ms ease-in-out;
    transform: translateY(-50%);
    line-height: 1;

    &:hover,
    &:focus {
        border-color: white;
        color: white;
    }
    }

    .alice-carousel__next-btn-item {
    right: 0;
    }

    ul.alice-carousel__dots li.alice-carousel__dots-item {
    background-color: transparent;
    border: thin solid $brand-color;
    transition: all 0.2s linear;
    }

    ul.alice-carousel__dots .alice-carousel__dots-item.__active {
    width: 31px;
    background-color: $brand-color;
    border-radius: 8px;
    }

    @media (max-width: 1023px) {
    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
        display: none;
    }
    }

    @media (min-width: 1024px) {
    .alice-carousel__dots {
        display: none;
    }
    }
    body{
        background-color: var(--Color-background);
        color: var(--Color-grey-0);
        font-family: 'Inter', sans-serif;
    }

    input,select{
        background: transparent;
        border: transparent;
    }


`;

export default GlobalStyle;
