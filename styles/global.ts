import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  // Wait for designer to decide global layout

  * {
    box-sizing: border-box;
    outline:none;
    font-family: SF Pro Display;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
      cursor: pointer;
  }

`;
