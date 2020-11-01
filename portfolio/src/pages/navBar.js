import React from "react";
import "../css/App2.css";
import "../css/navBar.css";

function NavBar() {
  return (
    <div className="nav">
      <h4>Please Select</h4>
      <ul className="links">
        <li>
          <a className="navLink" id="profile" href="" attr="Profile">
            <span class="icon">
              <i class="fa fa-user-circle"></i>
            </span>
            <span class="iconTitle">Profile</span>
          </a>
        </li>
        <li>
          <a
            className="navLink"
            id="projectLink"
            href="https://prakashbasingh.github.io/portfolio-website/"
          >
            <span class="icon">
              <i class="fa fa-tasks"></i>
            </span>
            <span class="iconTitle">Projects</span>
          </a>
        </li>
        <li>
          <a
            className="navLink"
            id="gitHub"
            href="https://github.com/prakashbasingh"
          >
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>

            <span class="iconTitle">GitHub</span>
          </a>
        </li>
        <li>
          <a
            className="navLink"
            id="linkedIn"
            href="https://www.linkedin.com/in/prakash-singh-457100177/"
          >
            <span class="icon">
              <i class="fa fa-linkedin"></i>
            </span>
            <span class="iconTitle">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            className="navLink"
            id="twitter"
            href="https://twitter.com/PraxBaS"
          >
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
            <span class="iconTitle">Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
