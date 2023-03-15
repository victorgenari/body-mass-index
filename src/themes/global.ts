import { createGlobalStyle } from "styled-components";
import { black9 } from "./colors";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        text-decoration: none;
        outline: none;
        border: none;
        list-style: none;

        font-weight: 400;
        font-family: 'Poppins', 'Roboto', Arial, Helvetica, sans-serif;
    }

    html {

        scroll-behavior: smooth;
        background: rgba(0, 0, 0, 0.05);

        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    a {
        cursor: pointer;
        color: ${black9};
    }

    button {
        cursor: pointer;
    }
`