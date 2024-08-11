// src/router/router.js
import { Suspense, lazy, useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LoadingAnimation from "../components/LoadingAnimation";

const Main = lazy(() => import("../pages/Main/MainPage"));
const About = lazy(() => import("../pages/About/AboutPage"));
const Project = lazy(() => import("../pages/Project/ProjectPage"));
const Example = lazy(() => import("../pages/Example/ExamplePage"));
const Contact = lazy(() => import("../pages/Contact/ContactPage"));

const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100vh;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense
        fallback={<LoadingAnimation onFinish={() => console.log("Finished")} />}
      >
        <Header />
        <Contain>
          <Outlet />
        </Contain>
        <Footer />
      </Suspense>
    ),
    children: [
      { index: true, element: <Main /> },
      { path: "about", element: <About /> },
      { path: "project", element: <Project /> },
      { path: "example", element: <Example /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
