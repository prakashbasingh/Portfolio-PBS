import React from "react";
import "../css/profile.css";

function Profile() {
  return (
    <div className="profilePopUp">
      <div className="title">
        <div className="links">
          <a className="box" id="profile" href="/">
            <div className="fa fa-home"></div>
            <p className="p1 home">Home</p>
          </a>
          <a className="box" id="projectLink" href="/projects">
            <div className="fa fa-tasks"></div>
            <p className="p1 project">Projects</p>
          </a>
          <a
            className="box"
            id="gitHub"
            href="https://github.com/prakashbasingh"
          >
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
      </div>
      <div className="profileInfo">
        <h1 className="pro" style={{ textAlign: "center" }}>
          Profile
        </h1>
        <br />
        <h2>Prakash Bahadur Singh</h2>
        <h5>Address: 10484 Investment Circle, rancho Cordova, Ca 95670</h5>
        <h5>Email Address: prakashbasingh162@gmail.com</h5>
        <h5>Phone No.: 916-281-1576</h5>
        <p>
          Education:
          <li>Lambda School: Full Stack Web Development</li>
          <li>
            California State University, Sacramento: Bachelors in Clinical
            Laboratory Science
          </li>
          <li>
            Delaware Technical Community College: Medical Laboratory Science
          </li>
          {/* <li></li> */}
        </p>
        {/* <p>Projects: </p>
        <p>Experience:</p> */}
      </div>
    </div>
  );
}

export default Profile;
