import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
         --black: #121214;
         --black-200: #201F24;
         --blue: #186BB2;
         --white: #FFFEFE;
         --gray: #C8C8C8;

        }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
        
    }
    a{
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }
    body{
       background-color: var(--black);
    input {
        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }   
    }
`;
