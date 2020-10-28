import React from "react";
import "../App2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Profileicon from "../images/profileicon.png";
// import projecticon from "../images/projecticon.png";
// import githubicon from "../images/githubicon.png";
// import linkedinicon from "../images/linkedinicon.png";
// import twittericon from "../images/twittericon.png";

function Title() {
  return (
    <div className="title">
      <a className="box" id="profile" href="">
        <div className="fa fa-user-circle"></div>
      </a>
      <a
        className="box"
        id="projectLink"
        href="https://prakashbasingh.github.io/portfolio-website/"
      >
        <div className="fa fa-tasks"></div>
      </a>
      <a className="box" id="gitHub" href="https://github.com/prakashbasingh">
        <div className="fa fa-github"></div>
      </a>
      <a
        className="box"
        id="linkedIn"
        href="https://www.linkedin.com/in/prakash-singh-457100177/"
      >
        <div className="fa fa-linkedin"></div>
      </a>
      <a className="box" id="twitter" href="https://twitter.com/PraxBaS">
        <div className="fa fa-twitter"></div>
      </a>
    </div>
  );
}
export default Title;
