import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../css/experiments.css";

import TodoApp from "./todoApp/todoApp.js";

function Experiments() {
  return (
    <Router>
      <div className="mainDiv">
        <h1>This is Experiment Page</h1>
        <a href="/todoApp">The Todo App</a>
        <Switch>
          <Route path="/todoApp" component={TodoApp} />
        </Switch>
      </div>
    </Router>
  );
}

export default Experiments;
