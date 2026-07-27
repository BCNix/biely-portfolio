import { useParams, Link } from "react-router";
import { projects } from "../../../data/projects";
// import "./ProjectsItem.css";

export default function ProjectsItem() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="project-not-found">
        <p>Project not found.</p>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  const { title, coverImgSrc, gallery, features, challenges } = project;

  return (
    <div className="project-detail">
      <Link to="/projects" aria-label="Back to all projects">
        &larr; Back to Projects
      </Link>
      <h1>{title}</h1>
      <img src={coverImgSrc} alt={`${title} cover`} />
      {/* render gallery, features, challenges as needed */}
    </div>
  );
}
