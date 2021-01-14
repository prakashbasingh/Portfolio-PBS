import React from "react";
import { connect } from "react-redux";

import { toggleCompleted } from "../../../actions/todoAction.js";
import Todo from "./todo.js";

function TodoList(props) {
  console.log(props, "this is props in todoList.js");
  return (
    <div>
      <h1> its todo List </h1>
      {props.tasks.map((todoTask) => {
        console.log(todoTask, "this is mapping task and storing to todoTask");
        return (
          <Todo
            key={todoTask.id}
            item={todoTask.item}
            toggleCompleted={props.toggleCompleted}
            completed={props.completed}
            id={todoTask.id}
          />
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "state of mapStateToProps in todoList.js");
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { toggleCompleted })(TodoList);
