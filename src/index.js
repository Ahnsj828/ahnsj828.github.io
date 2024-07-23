// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import MouseEffect from "./features/MouseEffect"; // MouseEffect 컴포넌트 import

const Global = createGlobalStyle`
  @font-face {
    font-family: 'KCC-Ganpan';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  * {
    padding: 0;
    margin: 0;
  }
  ul, li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <MouseEffect /> {/* MouseEffect 컴포넌트를 전역으로 추가 */}
    </BrowserRouter>
  </React.StrictMode>
);
