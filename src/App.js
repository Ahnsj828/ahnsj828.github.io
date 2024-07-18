import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Project from "./pages/Project";
import Example from "./pages/Example";
import Contact from "./pages/Contact";
import styled from "styled-components";

const Body = styled.div`
  color: red;
`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/project" element={<Project />} />
      <Route path="/example" element={<Example />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
