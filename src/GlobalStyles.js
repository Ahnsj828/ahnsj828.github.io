import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
  /* 추가한거 */
  body {
    width: 100vw;
    height:100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-family: "KCC-Ganpan";
  }

  .swiper-container,
  .swiper-slide {
    all: unset; 
    display: block;
  }
`;

export default GlobalStyles;
