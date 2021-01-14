import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../css/experiments.css";

import TodoApp from "./todoApp/todoApp.js";

function Experiments() {
  return (
    <Router>
      <div className="mainDiv">
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
          <h1>This is Experiment Page</h1>
        </div>
        <div className="applications">
          <div className="todoApp">
            <a href="/todoApp">The Todo App</a>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Experiments;
