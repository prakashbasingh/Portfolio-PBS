import React from "react";

import Todo from "./todo.js";

import { connect } from "react-redux";

import {
  addTodo,
  toggleComplete,
  clearCompleted,
} from "../../actions/todoAction.js";

const TodoList = (props) => {
  console.log(props, "......props in toDoList.......");
  return (
    <div>
      {props.tasks.map((todoTask) => {
        return (
          <Todo
            key={todoTask.id}
            item={todoTask.item}
            toggleComplete={todoTask.toggleComplete}
            completed={todoTask.completed}
            id={todoTask.id}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, " mapStateToProps in todoList.js");

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
})(TodoList);
