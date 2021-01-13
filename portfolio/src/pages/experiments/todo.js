import React from "react";

function Todo({ item, id, toggleCompleted, completed }) {
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
