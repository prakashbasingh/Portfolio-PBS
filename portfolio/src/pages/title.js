import React from "react";
// import "../css/App2.css";
import "../css/title.css";

function Title() {
  return (
    <div className="title">
      <h2>Welcome to My Portfolio Page</h2>
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
