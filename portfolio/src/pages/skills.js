import React from "react";
import "../css/skills.css";

function Skills() {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="frontBackEnd">
        <h2>Front-End</h2>
        <div className="frontBack">
          <div className="frontBackDiv">
            <div class="fab fa-html5"></div>
            <p> HTML</p>
          </div>
          <div className="frontBackDiv">
            <div class="fab fa-css3-alt"></div>
            <p>CSS</p>
          </div>
          <div className="frontBackDiv">
            <div class="fab fa-js"></div>
            <p>JavaScript</p>
          </div>
          <div className="frontBackDiv">
            <div class="fab fa-react"></div>
            <p>ReactJS</p>
          </div>
          <div className="frontBackDiv">
            <div class="fab fa-python"></div>
            <p>Python</p>
          </div>
        </div>
      </div>
      <div className="frontBackEnd">
        <h2>Back-End</h2>
        <div className="frontBack">
          <div className="frontBackDiv">
            <div class="fab fa-node"></div>
            <p>NodeJS/Express</p>
          </div>
          <div className="frontBackDiv">
            {/* <div className="logo"></div> */}
            <p>PGAdmin</p>
          </div>
          <div className="frontBackDiv">
            {/* <div className="logo"></div> */}
            <p>SQLite</p>
          </div>
          <div className="frontBackDiv">
            {/* <div></div> */}
            <p></p>
          </div>
          <div className="frontBackDiv">
            {/* <div></div> */}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
