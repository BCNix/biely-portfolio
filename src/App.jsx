import { BrowserRouter, Routes, Route } from "react-router";
import Nasa from "../src/assets/components/Particles/Nasa/Nasa";
// import Greeting from "./assets/components/Greeting/Greeting";
import Layout from "./assets/components/Layout/Layout";
import Home from "./assets/Pages/Home";
import Projects from "./assets/Pages/Projects";
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
