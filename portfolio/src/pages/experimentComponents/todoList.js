import React from "react";

import Todo from "./todo.js";

const TodoList = ({ state, toggleComplete }) => {
  console.log(state, "SSSSSSSstate?????!!!??!?!");
  return (
    <div>
      {state.todos.map((todoTask) => {
        return (
          <Todo
            key={todoTask.id}
            item={todoTask.item}
            toggleComplete={toggleComplete}
            clearCompleted={todoTask.clearCompleted}
            // id={todoTask.id}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
