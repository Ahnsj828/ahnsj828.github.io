import { RouterProvider } from "react-router-dom";
import router from "./router/router"; // root.js에서 라우터를 가져옵니다.
import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
