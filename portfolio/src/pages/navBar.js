import React from "react";
import "../css/navBar.css";

function NavBar() {
  return (
    <div className="nav">
      <h4>Please Select</h4>
      <div className="navItems">
        <ul className="links">
          <li>
            <a className="navLink" id="profile" href="/profile" attr="Profile">
              <span class="icon">
                <i class="fa fa-user-circle"></i>
              </span>
              <span class="iconTitle profile">Profile</span>
            </a>
          </li>
          <li>
            <a className="navLink" id="projectLink" href="/projects">
              <span class="icon">
                <i class="fa fa-tasks"></i>
              </span>
              <span class="iconTitle project">Projects</span>
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

              <span class="iconTitle github">GitHub</span>
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
              <span class="iconTitle linkedin">Linkedin</span>
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
              <span class="iconTitle twitter">Twitter</span>
            </a>
          </li>
          <li>
            <a className="navLink" id="experiment" href="/experiments">
              <span class="icon">
                <i class="fa fa-flask"></i>
              </span>
              <span class="iconTitle experiment">Experiments</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
