import { projects } from "../../../data/projects";
import { NavLink, useLocation } from "react-router";
import "./Projects.css";

export default function Projects() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const projectsEl = projects.map(
    ({ id, title, shortDescription, thumbnailImgSrc }) => (
      <NavLink
        key={id}
        to={`/projects/${id}`}
        end
        aria-label={`${title} page`}
        className="projects-nav-item"
      >
        <img src={thumbnailImgSrc} className="projects-img" />

        <div className="projects-content-container">
          {isHome ? (
            <h3 className="projects-subheading">{title}</h3>
          ) : (
            <h2 className="projects-subheading">{title}</h2>
          )}
          <p>{shortDescription}</p>
        </div>
        <svg
          className="link-icon"
          width="10pt"
          height="10pt"
          version="1.1"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21.5 2.5h76v76l-19 19v-61.809l-61.809 61.809-14.191-14.27 61.73-61.73h-61.73z"
            fill="#ffd65b"
          />
        </svg>
      </NavLink>
    ),
  );

  return (
    <>
      <div className="projects-section">
        {isHome ? (
          <h2 className="style-heading secondary-heading">
            Recent <span className="accent-heading">Projects</span>
          </h2>
        ) : (
          <h1 className="style-heading primary-heading">
            Recent <span className="accent-heading">Projects</span>
          </h1>
        )}

        <div className="projects-container">{projectsEl}</div>
      </div>
    </>
  );
}
