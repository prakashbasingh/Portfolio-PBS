import React from "react";
import "../css/experiments.css";

import { reducer, initialState } from "../reducers/todoReducer.js";

import TodoForm from "./experimentComponents/todoForm.js";
import TodoList from "./experimentComponents/todoList.js";

function Experiments({ state, addTodo, toggleComplete, clearCompleted }) {
  return (
    <div className="mainDiv">
      <h1>Let's built something</h1>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <TodoList state={state} toggleComplete={toggleComplete} />
    </div>
  );
}
export default Experiments;
