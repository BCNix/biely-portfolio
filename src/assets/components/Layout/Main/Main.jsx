import { Outlet, useLocation } from "react-router";
import Hero from "../../Hero/Hero";
import "./Main.css";

export default function Main() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <main className="main-container">
      <Hero className={!isHome ? "hero-hidden-mobile" : ""} />
      <Outlet />
    </main>
  );
}
