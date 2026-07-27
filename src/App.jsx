import { BrowserRouter, Routes, Route } from "react-router";
import Nasa from "../src/assets/components/Particles/Nasa/Nasa";
// import Greeting from "./assets/components/Greeting/Greeting";
import Layout from "./assets/components/Layout/Layout";
import Home from "./assets/Pages/Home/Home";
import Projects from "./assets/Pages/Projects/Projects";
import ProjectsItem from "./assets/components/ProjectsItem/ProjectsItem";
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
          <Route path="projects/:id" element={<ProjectsItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
