import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import MouseEffect from "./features/MouseEffect";
import App from "./App";
import GlobalStyles from "./GlobalStyles";

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
