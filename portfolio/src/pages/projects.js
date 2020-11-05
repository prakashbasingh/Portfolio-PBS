import React from "react";
import "../css/App2.css";
import "../css/project.css";
import nasapicoftheday from "../images/nasapicoftheday.png";
import frontEndPotluck from "../images/frontEndPotluck.png";
import backEndPotluck from "../images/backEndPotluck.png";
import EchoSoap from "../images/EchoSoap.png";

function Body() {
  return (
    <div className="projects">
      <div className="navigation">
        <h2 className="Welcome">Projects</h2>
        <div className="links">
          <a className="box" id="profile" href="/">
            <div className="fa fa-home"></div>
            <p className="p1 home">Home</p>
          </a>
          <a className="box" id="profile" href="/profile">
            <div className="fa fa-user-circle"></div>
            <p className="p1 profile">Profile</p>
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
        </div>
      </div>
      {/* <h2>Projects</h2> */}
      <div className="projectSection">
        <div className="eachProject">
          <div className="imageAndLivePage">
            <img
              className="img"
              src={nasapicoftheday}
              alt="nasa photo of the day"
            ></img>

            {/* <a>Live Page</a> */}
          </div>
          <div className="imgText">
            <p>Intro</p>
            <ul>
              <li>Build with ReactJS</li>
              <li>Hooks for state management</li>
              <li>
                Displays date, picture of the day, its title & description
              </li>
              <li>CSS/Styled Component</li>
            </ul>
            <a href="https://github.com/prakashbasingh/nasa-photo-of-the-day/tree/Prakash-Singh">
              GitHub
            </a>
          </div>
        </div>
        <div className="eachProject2">
          <div className="imageAndLivePage">
            <img
              className="img"
              src={frontEndPotluck}
              alt="Potluck Planner Front-end"
            ></img>
            <a href="">Live Page</a>
          </div>
          <div className="imgText">
            <p>Intro</p>
            <ul>
              <li>ReactJS(Front-End)</li>
              <li>Hooks for state management</li>
              <li>Custom authentication for register and login</li>
              <li>css/styled component</li>
            </ul>
            <a href="https://github.com/BW-Potluck-Planner-2/front-end/tree/Prakash-Singh">
              GitHub
            </a>
          </div>
        </div>
        <div className="eachProject">
          <div className="imageAndLivePage">
            <img
              className="img"
              src={backEndPotluck}
              alt="potluck planner back-end"
            ></img>
            <a href="https://potluckplanner1.herokuapp.com/">Live Page</a>
          </div>

          <div className="imgText">
            <p>Intro</p>
            <ul>
              <li>NodeJS</li>
              <li>Express</li>
              <li>Knex</li>
              <li>Data structure, migration, data seed, routing </li>
            </ul>
            <a href="https://github.com/Potlock-Planner-1/Backend/tree/Prakash-Singh">
              GitHub
            </a>
          </div>
        </div>
        <div className="eachProject2">
          <div className="imageAndLivePage">
            <img className="img" src={EchoSoap} alt="EchoSoap back-end"></img>
            <a href="https://27c.ecosoap.dev/login">Live Page</a>
          </div>

          <div className="imgText">
            <p>Intro</p>
            <ul>
              <li>Back-end with NodeJS/Express</li>
              <li>Data Structure</li>
              <li>Data Migration/Data seeding</li>
              <li>Build Router/Model</li>
            </ul>
            <a href="https://github.com/Lambda-School-Labs/Labs27-ecosoap-teamC-BE">
              GitHub
            </a>
          </div>
        </div>
        <div className="eachProject">
          <div className="imageAndLivePage">
            <img className="img" src="" alt=""></img>
            <a href="">Live Page</a>
          </div>

          <div className="imgText">
            <p>Intro</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <a href="">GitHub</a>
          </div>
        </div>
        <div className="eachProject2">
          <div className="imageAndLivePage">
            <img className="img" src="" alt=""></img>
            <a href="">Live Page</a>
          </div>

          <div className="imgText">
            <p>Intro</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <a href="">GitHub</a>
          </div>
        </div>
        <div className="eachProject">
          <div className="imageAndLivePage">
            <img className="img" src="" alt=""></img>
            <a href="">Live Page</a>
          </div>

          <div className="imgText">
            <p>Intro</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <a href="">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
