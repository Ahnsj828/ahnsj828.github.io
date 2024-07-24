import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Introduce from "./pages/Introduce/Introduce";
import Project from "./pages/Project/Project";
import Example from "./pages/Example/Example";
import Contact from "./pages/Contact/Contact";

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
