import React from "react";

function Todo({ item, id, toggleCompleted, completed }) {
  console.log(item, " this is in todo.js");
  return (
    <div
      onClick={() => toggleCompleted(id)}
      style={{
        textDecoration: completed ? "line-through" : "",
        color: completed ? "red" : "",
      }}
    >
      <div> {item}</div>
    </div>
  );
}

export default Todo;
