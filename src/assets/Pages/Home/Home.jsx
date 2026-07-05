import Projects from "../Projects/Projects.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-section">
        <h1 className="primary-heading">
          Frontend <span className="accent-heading">Developer</span>
        </h1>
        <p className="hero-message">
          Passionate about creating intuitive and engaging user experiences.
          Coming from a background in tech support, I bring a sharp eye for how
          real people struggle with technology — and what makes an interface
          truly click.
        </p>
        <div className="stats-container">
          <div className="stats-item">
            <p className="stats-value">+5</p>
            <p className="stats-label">Years in tech</p>
          </div>
          <div className="stats-item">
            <p className="stats-value">+5</p>
            <p className="stats-label">Core skills</p>
          </div>
          <div className="stats-item">
            <p className="stats-value">+5</p>
            <p className="stats-label">Project built</p>
          </div>
        </div>
      </div>
      <div className="projects-section">
        <Projects />
      </div>
    </>
  );
}
