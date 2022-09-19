import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme.styles";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    min-height: 100vh;
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${({ theme }: { theme: Theme }) => theme.background}
  }
`;

export default GlobalStyles;
