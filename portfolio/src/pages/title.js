import React from "react";
import "../css/title.css";

function Title() {
  return (
    <div className="title">
      <div className="links">
        <a className="box" id="profile" href="/profile">
          <div className="fa fa-user-circle"></div>
          <p className="p1 profile">Profile</p>
        </a>
        <a className="box" id="projectLink" href="/projects">
          <div className="fa fa-tasks"></div>
          <p className="p1 project">Projects</p>
        </a>
        <a className="box" id="gitHub" href="https://github.com/prakashbasingh">
          <div className="fa fa-github"></div>
          <p className="p1 github">GitHub</p>
        </a>
        <a
          className="box"
          id="linkedIn"
          href="https://www.linkedin.com/in/prakash-singh-457100177/"
        >
          <div className="fa fa-linkedin"></div>
          <p className="p1 linkedin">Linkedin</p>
        </a>
        <a className="box" id="twitter" href="https://twitter.com/PraxBaS">
          <div className="fa fa-twitter"></div>
          <p className="p1 twitter">Twitter</p>
        </a>
        <a className="box" id="experiment" href="/experiments">
          <div className="fa fa-flask"></div>
          <p className="p1 experiment">Experiments</p>
        </a>
      </div>
      <div>
        <h3 className="Welcome">Welcome to My Portfolio✨</h3>
      </div>
    </div>
  );
}
export default Title;
