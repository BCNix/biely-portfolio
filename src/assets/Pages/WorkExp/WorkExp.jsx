import { experiences } from "../../../data/index";
import { useLocation } from "react-router";
import "./WorkExp.css";

export default function WorkExp() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const workExpEl = experiences.map(
    ({ id, role, location, startDate, endDate, summary }) => (
      <li key={id} className="work-exp-item">
        <a href="https://www.linkedin.com/in/bielynavarette/" target="_blank">
          {isHome ? (
            <h3 className="work-exp-subheading">{role}</h3>
          ) : (
            <h2 className="work-exp-subheading">{role}</h2>
          )}
          <p className="work-exp-date-location">{`${startDate} - ${endDate}, ${location}`}</p>
          {/* <p className="work-exp-location">{location}</p> */}
          <p className="work-exp-summary">{summary}</p>
          <svg
            className="work-exp-link-icon"
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
        </a>
      </li>
    ),
  );

  return (
    <div className="work-exp-section">
      {isHome ? (
        <h2 className="style-heading secondary-heading">
          Work <span className="accent-heading">Experience</span>
        </h2>
      ) : (
        <h1 className="style-heading primary-heading">
          Work <span className="accent-heading">Experience</span>
        </h1>
      )}

      <div className="work-exp-container">
        <ol>{workExpEl}</ol>
      </div>
    </div>
  );
}
