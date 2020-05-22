import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: sans-serif;
    background: #F1EFE1;
  }
  .loader {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    align-items: center;
    align-content: center;
  }
`;

export default GlobalStyles;
