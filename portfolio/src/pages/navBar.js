import React from "react";
import "../css/App2.css";
import "../css/navBar.css";

function NavBar() {
  return (
    <div className="nav">
      <h4>Please Select</h4>
      <div className="links">
        <a className="navLink" id="profile" href="" attr="Profile">
          <div class="fa fa-user-circle"></div>
          <p class="iconTitle">Profile</p>
        </a>
        <a
          className="navLink"
          id="projectLink"
          href="https://prakashbasingh.github.io/portfolio-website/"
        >
          <div class="fa fa-tasks"></div>
          <p class="iconTitle">Projects</p>
        </a>
        <a
          className="navLink"
          id="gitHub"
          href="https://github.com/prakashbasingh"
        >
          <div class="fa fa-github"></div>
          <p class="iconTitle">GitHub</p>
        </a>
        <a
          className="navLink"
          id="linkedIn"
          href="https://www.linkedin.com/in/prakash-singh-457100177/"
        >
          <div class="fa fa-linkedin"></div>
          <p class="iconTitle">Linkedin</p>
        </a>
        <a className="navLink" id="twitter" href="https://twitter.com/PraxBaS">
          <div class="fa fa-twitter"></div>
          <p class="iconTitle">Twitter</p>
        </a>
      </div>
    </div>
  );
}
export default NavBar;
