import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GlobalStyles from "./GlobalStyles";
import MouseEffect from "./features/MouseEffect";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <MouseEffect />
  </React.StrictMode>
);
