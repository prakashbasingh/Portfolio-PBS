import React from "react";
import "../css/App2.css";
import "../css/profile.css";

function Profile() {
  return (
    <div className="profilePopUp">
      <div className="title">
        <h2 className="pro">Profile</h2>
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
        <h1>Profile</h1>
        <h3>Prakash Bahadur Singh</h3>
        <h4>Address: 10484 Investment Circle, rancho Cordova, Ca 95670</h4>
        <h4>Email Address: prakashbasingh162@gmail.com</h4>
        <h4>Phone No.: 916-281-1576</h4>
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
