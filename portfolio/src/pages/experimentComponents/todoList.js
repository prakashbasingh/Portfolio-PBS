import React from "react";

import Todo from "./todo.js";

const TodoList = ({ state, toggleCompleted }) => {
  console.log(state, "SSSSSSSstate?????!!!??!?!");
  return (
    <div>
      {state.todos.map((todoTask) => {
        return (
          <Todo
            key={todoTask.id}
            item={todoTask.item}
            toggleCompleted={toggleCompleted}
            completed={todoTask.completed}
            id={todoTask.id}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
