import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h2>Contact:</h2>
        <p>Email: prakashbahadursingh2@gmail.com</p>
        <p>Phone No: 916-281-1576</p>
      </div>
      <div className="links">
        <a className="box" id="gitHub" href="https://github.com/prakashbasingh">
          <div class="fa fa-github"></div>
          <p className="ppp github">GitHub</p>
        </a>
        <a
          className="box"
          id="linkedIn"
          href="https://www.linkedin.com/in/prakash-singh-457100177/"
        >
          <div class="fa fa-linkedin"></div>
          <p className="ppp linkedin">Linkedin</p>
        </a>
        <a className="box" id="twitter" href="https://twitter.com/PraxBaS">
          <div class="fa fa-twitter"></div>
          <p className="ppp twitter">Twitter</p>
        </a>
      </div>
    </div>
  );
}
export default Footer;
