import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../css/experiments.css";

import TodoForm from "./experimentComponents/todoForm.js";
import TodoList from "./experimentComponents/todoList.js";

function Experiments() {
  return (
    <div className="mainDiv">
      <h1>Building ToDo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Experiments;
