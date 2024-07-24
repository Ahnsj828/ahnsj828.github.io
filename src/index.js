import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import MouseEffect from "./features/MouseEffect";
import App from "./App";

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
`;

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
    <MouseEffect />
  </React.StrictMode>
);
