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

function Experiments(props) {
  console.log(props, "this is in EXPERIMENT.JS");
  return (
    <div className="mainDiv">
      <h1>Building ToDo List</h1>
      <TodoForm addTodo={props.addTodo} clearCompleted={props.clearCompleted} />
      <TodoList toggleComplete={props.toggleComplete} />
    </div>
  );
}
// export default Experiments;
// mSTP returns an object - each property on that object is added to the props of the connected component
// the connect function will call mSTP  and pass in the entire redux store as an argument!
const mapStateToProps = (state) => {
  console.log({ state }, " What We Have Now?????!!!!! in experiment.js");
  //so the state has props of additionalFeatures, additionalPrice, car(features: [image, name, price])
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
//////....[{"second", need to connect App component ti the redux store then using mapStateToProps function to ...map the state(from the redux store) to props (of the connected component) }]....////// follow below---->

//here connect is called twice
//1st call is passing in the mSTP(Map State To Props) and an object
// 2nd call is passing in the component we want to connect to the Redux store.
