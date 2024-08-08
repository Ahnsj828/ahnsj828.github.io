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

/* reset.css */
.swiper-container,
.swiper-slide {
  all: unset; /* 모든 스타일 제거 */
  display: block;
}

/* .swiper-slide {
  background-color: none; 
  border: none; 
} */

`;

export default GlobalStyles;
