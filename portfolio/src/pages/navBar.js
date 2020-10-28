import React from "react";
import "../App2.css";

function NavBar() {
  return (
    <div className="nav">
      <h4>Please Select</h4>
      <a className="box" id="profile" href="">
        <div class="fa fa-user-circle"></div>
      </a>
      <a
        className="box"
        id="projectLink"
        href="https://prakashbasingh.github.io/portfolio-website/"
      >
        <div class="fa fa-tasks"></div>
      </a>
      <a className="box" id="gitHub" href="https://github.com/prakashbasingh">
        <div class="fa fa-github"></div>
      </a>
      <a
        className="box"
        id="linkedIn"
        href="https://www.linkedin.com/in/prakash-singh-457100177/"
      >
        <div class="fa fa-linkedin"></div>
      </a>
      <a className="box" id="twitter" href="https://twitter.com/PraxBaS">
        <div class="fa fa-twitter"></div>
      </a>
    </div>
  );
}
export default NavBar;
