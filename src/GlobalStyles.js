import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'KCC-Ganpan';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Road Rage';
    src: url('https://fonts.googleapis.com/css2?family=Road+Rage&display=swap') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @import url("https://fonts.googleapis.com/css2?family=Road+Rage&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
