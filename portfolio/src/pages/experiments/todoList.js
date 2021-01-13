import React from "react";
import { connect } from "react-redux";

import { toggleCompleted } from "../../actions/todoAction.js";
import Todo from "./todo.js";

function TodoList(props) {
  console.log(props, "this is props in todoList.js");
  return (
    <div>
      <h1> its todo List </h1>
      {props.map((todoTasks) => {
        return (
          <Todo
            key={todoTasks.id}
            item={todoTasks.item}
            toggleCompleted={todoTasks.toggleCompleted}
            completed={todoTasks.completed}
            id={todoTasks.id}
          />
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "state of mapStateToProps in todoList.js");
  return {
    todo: state.tasks.todo,
    completed: state.tasks.completed,
    id: state.tasks.id,
  };
};
export default connect(mapStateToProps, { toggleCompleted })(TodoList);
