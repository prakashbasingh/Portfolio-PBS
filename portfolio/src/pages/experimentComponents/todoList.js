import React from "react";

import Todo from "./todo.js";

const TodoList = (props) => {
  console.log(props, "SSSSSSSstate?????!!!??!?!");
  return (
    <div>
      {props.todos.map((todoTask) => {
        return (
          <Todo
            key={todoTask.id}
            item={todoTask.item}
            toggleComplete={todoTask.toggleComplete}
            clearCompleted={todoTask.clearCompleted}
            // id={todoTask.id}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
