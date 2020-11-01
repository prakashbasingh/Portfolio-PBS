import React from "react";
import "../css/App2.css";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h2>To Contact Me:</h2>
        <p>Email: prakashbahadursingh2@gmail.com</p>
        <p>Phone No: 916-281-1576</p>
      </div>
      <div className="links">
        <a className="box" id="profile" href="">
          <div class="fa fa-user-circle"></div>
          <p className="ppp">Profile</p>
        </a>
        <a
          className="box"
          id="projectLink"
          href="https://prakashbasingh.github.io/portfolio-website/"
        >
          <div class="fa fa-tasks"></div>
          <p className="ppp">Projects</p>
        </a>
        <a className="box" id="gitHub" href="https://github.com/prakashbasingh">
          <div class="fa fa-github"></div>
          <p className="ppp">GitHub</p>
        </a>
        <a
          className="box"
          id="linkedIn"
          href="https://www.linkedin.com/in/prakash-singh-457100177/"
        >
          <div class="fa fa-linkedin"></div>
          <p className="ppp">Linkedin</p>
        </a>
        <a className="box" id="twitter" href="https://twitter.com/PraxBaS">
          <div class="fa fa-twitter"></div>
          <p className="ppp">Twitter</p>
        </a>
      </div>
    </div>
  );
}
export default Footer;
