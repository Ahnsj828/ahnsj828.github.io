import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import MouseEffect from "./features/MouseEffect";
import App from "./App";

const Global = createGlobalStyle`
  @font-face {
    font-family: 'KCC-Ganpan';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
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

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
    <MouseEffect />
  </React.StrictMode>
);
