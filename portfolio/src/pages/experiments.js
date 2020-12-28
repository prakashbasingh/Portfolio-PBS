import React from "react";
import "../css/experiments.css";

import { reducer, initialState } from "../reducers/todoReducer.js";

import TodoForm from "./experimentComponents/todoForm.js";
import TodoList from "./experimentComponents/todoList.js";

function Experiments(state) {
  console.log(state, "this is in EXPERIMENT.JS");
  return (
    <div className="mainDiv">
      <h1>Let's built something</h1>
      <TodoForm addTodo={state.addTodo} clearCompleted={state.clearCompleted} />
      <TodoList state={state} toggleComplete={state.toggleComplete} />
    </div>
  );
}
export default Experiments;
