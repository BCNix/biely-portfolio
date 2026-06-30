import { Outlet, useLocation } from "react-router";
import Hero from "../../Hero/Hero";
import "./Main.css";

export default function Main() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <main className="main-container">
      <div className="main-wrapper">
        <Hero className={!isHome ? "hero-hidden-mobile" : ""} />
        <div key={pathname} className="outlet-wrapper">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
