import { stacks } from "../../../data/index";
import { useLocation } from "react-router";
import "./TechStack.css";

export default function TechStack() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const HeadingTag = isHome ? "h3" : "h2";

  const techStackEl = stacks.map(({ id, category, items }) => (
    <li key={id} className="tech-stack-category-item">
      <HeadingTag className="tech-stack-category">{category}</HeadingTag>

      <ul className="tech-stack-items">
        {items.map(({ id: itemId, icon: Icon, name, description }) => (
          <li key={itemId} className="tech-stack-item">
            <Icon />
            <div className="tech-stack-container">
              <HeadingTag className="tech-stack-subheading">{name}</HeadingTag>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="tech-stack-section">
      {isHome ? (
        <h2 className="style-heading secondary-heading">
          Tech <span className="accent-heading">Stacks</span>
        </h2>
      ) : (
        <h1 className="style-heading primary-heading">
          Tech <span className="accent-heading">Stacks</span>
        </h1>
      )}

      <div className="tech-stack-container">
        <ul className="tech-stack-list">{techStackEl}</ul>
      </div>
    </div>
  );
}
