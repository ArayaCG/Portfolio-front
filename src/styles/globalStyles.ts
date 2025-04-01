import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    margin: 0;
    padding: 0;
    min-width: 320px;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyle;
