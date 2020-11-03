import React from "react";
import "../css/App2.css";
import "../css/body.css";
import nasapicoftheday from "../images/nasapicoftheday.png";
import frontEndPotluck from "../images/frontEndPotluck.png";

function Body() {
  return (
    <div className="projectBody">
      <div className="eachBody">
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
            <li>Display picture of the day, its title & description</li>
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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <a href="">GitHub</a>
        </div>
      </div>
      <div className="eachBody">
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
      <div className="eachBody2">
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
      <div className="eachBody">
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
      <div className="eachBody2">
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
      <div className="eachBody">
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
  );
}
export default Body;
