import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    overflow-x: hidden;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    background-color: rgb(10, 10, 10);
    color: #fff;
  }
  ::selection {
    background-color: #0077ee;
    color: black;
  }
`;

export default GlobalStyles;
