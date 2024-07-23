// src/App.js
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import MouseEffect from "./features/MouseEffect"; // MouseEffect 컴포넌트 import
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Project from "./pages/Project";
import Example from "./pages/Example";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      {/* <MouseEffect />  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/project" element={<Project />} />
        <Route path="/example" element={<Example />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
