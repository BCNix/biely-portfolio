import { BrowserRouter, Routes, Route } from "react-router";
import Nasa from "../src/assets/components/Particles/Nasa/Nasa";
// import Greeting from "./assets/components/Greeting/Greeting";
import Layout from "./assets/components/Layout/Layout";
import Home from "./assets/pages/Home/Home.jsx";
import Projects from "./assets/pages/Projects/Projects.jsx";
import "./App.css";

function App() {
  return (
    <>
      {/* <Greeting /> */}
      <Nasa />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
