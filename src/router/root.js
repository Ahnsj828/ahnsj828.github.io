import { Suspense, lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const Loading = <div>Loading</div>;
const Main = lazy(() => import("../pages/Main/MainPage"));
const About = lazy(() => import("../pages/About/AboutPage"));
const Project = lazy(() => import("../pages/Project/ProjectPage"));
const Example = lazy(() => import("../pages/Example/ExamplePage"));
const Contact = lazy(() => import("../pages/Contact/ContactPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "project",
    element: (
      <Suspense fallback={Loading}>
        <Project />
      </Suspense>
    ),
  },
  {
    path: "example",
    element: (
      <Suspense fallback={Loading}>
        <Example />
      </Suspense>
    ),
  },
  {
    path: "contact",
    element: (
      <Suspense fallback={Loading}>
        <Contact />
      </Suspense>
    ),
  },
]);

export default root;
