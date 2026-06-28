import { BrowserRouter, Routes, Route } from "react-router";
import Nasa from "../src/assets/components/Particles/Nasa/Nasa";
// import Greeting from "./assets/components/Greeting/Greeting";
import Header from "./assets/components/Header/Header";
import Home from "./assets/Pages/Home";
import Projects from "./assets/Pages/Projects";
import "./App.css";

function App() {
  return (
    <>
      {/* <Greeting /> */}
      <Nasa />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
