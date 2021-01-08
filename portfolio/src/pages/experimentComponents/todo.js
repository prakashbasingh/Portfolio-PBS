import React from "react";

const Todo = ({ item, clearCompleted, id, toggleComplete }) => {
  //   console.log(item, "???????????????????????????????????????");
  //   console.log(completed, "?//////////?????????//////////////");
  //   console.log(id, "IDIDIDIIDIDIDIDIIDIDIDIDIDIDIDIDIDIDI");
  //   console.log(toggleCompleted, "kjahrfriaqopqhdajknbdvoiaugoqaigdeoakgdsoiu");

  return (
    <div
      className="individualTask"
      onClick={() => toggleComplete(id)}
      style={{
        textDecoration: clearCompleted ? "line-through" : "",
        color: clearCompleted ? "red" : "",
      }}
    >
      <div> {item}</div>
    </div>
  );
};
export default Todo;
