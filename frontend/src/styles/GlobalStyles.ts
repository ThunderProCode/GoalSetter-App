import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&family=Roboto:wght@300;400;500&display=swap');
    html{
        box-sizing: border-box;
    }

    ul, li, h1, h2, h3, p, button { margin: 0; padding:0; }
    ul { list-style: none; }
    button { border:0; outline:0 }

    body{
        height: 100vh;
        margin: 0 auto;
        /* max-width: 500px; */
        overscroll-behavior: none;
        width: 100%;
        font-family: 'Poppins', sans-serif;
    }

    #root {
        margin:0 auto;
        padding: 8px;
    }

`


