import React from "react";
import "../css/body.css";
import nasapicoftheday from "../images/nasapicoftheday.png";
import frontEndPotluck from "../images/frontEndPotluck.png";
import backEndPotluck from "../images/backEndPotluck.png";
import EchoSoap from "../images/EchoSoap.png";
import gameOfLife from "../images/gameOfLife.JPG";

function Body() {
  return (
    <div className="projectBody">
      <h4>Projects</h4>
      <div className="allBody">
        <div className="eachBody">
          <div className="imageAndLivePage">
            <img className="img" src={nasapicoftheday}></img>

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
            </ul>
            <a href="https://github.com/prakashbasingh/nasa-photo-of-the-day/tree/Prakash-Singh">
              GitHub
            </a>
          </div>
        </div>
        <div className="eachBody2">
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
        <div className="eachBody">
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
        <div className="eachBody2">
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
        <div className="eachBody">
          <div className="imageAndLivePage">
            <img className="img" src={gameOfLife} alt=""></img>
            <a href="https://conway-game-of-life-by-pbs.netlify.app">
              Live Page
            </a>
          </div>

          <div className="imgText">
            <p>Intro</p>
            <ul>
              <li>Build with ReactJS</li>
              <li>Class component for state management</li>
              <li>
                functionality such as play, pause, speed, clear grid and
                autofill grid
              </li>
              <li>CSS/Styled component</li>
            </ul>
            <a href="https://github.com/prakashbasingh/game-of-life">GitHub</a>
          </div>
        </div>
        {/* <div className="eachBody2">
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
        </div> */}
        {/* <div className="eachBody">
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
        </div> */}
      </div>
    </div>
  );
}
export default Body;
