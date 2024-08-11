import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./App.css";
import LoadingAnimation from "./components/LoadingAnimation";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 3초

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return <RouterProvider router={router} />;
}

export default App;
