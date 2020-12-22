import React from "react";
import "../css/experiments.css";

import { reducer, initialState } from "../reducers/todoReducer.js";

import TodoForm from "./experimentComponents/todoForm.js";
import TodoList from "./experimentComponents/todoList.js";

function Experiments() {
  return (
    <div className="mainDiv">
      <h1>Let's built something</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
export default Experiments;
