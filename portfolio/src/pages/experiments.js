import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../css/experiments.css";
import { connect } from "react-redux";

import {
  addTodo,
  toggleComplete,
  clearCompleted,
} from "../actions/todoAction.js";

import TodoForm from "./experimentComponents/todoForm.js";
import TodoList from "./experimentComponents/todoList.js";

const Experiments = (props) => {
  console.log(props, "props in EXPERIMENT.JS");
  return (
    <div className="mainDiv">
      <h1>Building ToDo List</h1>
      <TodoForm addTodo={props.addTodo} clearCompleted={props.clearCompleted} />
      <TodoList todos={props.todos} toggleComplete={props.toggleComplete} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.todos, " mapStateToProps in experiment.js");

  return {
    item: state.item,
    completed: state.completed,
    id: state.id,
  };
};

export default connect(mapStateToProps, {
  addTodo,
  toggleComplete,
  clearCompleted,
})(Experiments);
