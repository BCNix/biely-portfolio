// import github from "../../images/icons/socials/github.svg";
import bielyPortrait from "../../images/bly-portrait.png";
import topLeftLine from "../../images/portrait-border-lines/top-left-line.png";
import topRightLine from "../../images/portrait-border-lines/top-right-line.png";
import bottomLeftLine from "../../images/portrait-border-lines/bottom-left-line.png";
import bottomRightLine from "../../images/portrait-border-lines/bottom-right-line.png";
import "./Hero.css";

export default function Hero({ className }) {
  return (
    <>
      <div className={`hero-container ${className ?? ""}`}>
        <div className="img-container">
          <img
            className="top-left border-line"
            src={topLeftLine}
            aria-hidden="true"
          ></img>
          <img
            className="top-right border-line"
            src={topRightLine}
            aria-hidden="true"
          ></img>
          <img
            src={bielyPortrait}
            alt="biely's portrait"
            className="portrait"
          ></img>
          <img
            className="bottom-left border-line"
            src={bottomLeftLine}
            aria-hidden="true"
          ></img>
          <img
            className="bottom-right border-line"
            src={bottomRightLine}
            aria-hidden="true"
          ></img>
        </div>
        <div className="hero-bio">
          <h1>Biely Navarette</h1>
          <div className="hero-text">
            <p>
              A frontend developer crafting pixel-perfect experiences from
              concept to deployment.
            </p>
            <div className="hero-socials">
              <ul>
                <li>{/* <img src={github} alt="" /> */}</li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
