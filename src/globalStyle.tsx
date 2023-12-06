import { css, createGlobalStyle } from "styled-components";

const ResetsCSS = css`
  // resets
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  // variables
  :root {
  }
`;

const BaseStyle = createGlobalStyle`
    ${ResetsCSS}
`;

export const GlobalStyle = () => <BaseStyle />;
