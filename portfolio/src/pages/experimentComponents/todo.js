import React from "react";

const Todo = ({ item, completed, id, toggleCompleted }) => {
  //   console.log(item, "???????????????????????????????????????");
  //   console.log(completed, "?//////////?????????//////////////");
  //   console.log(id, "IDIDIDIIDIDIDIDIIDIDIDIDIDIDIDIDIDIDI");
  //   console.log(toggleCompleted, "kjahrfriaqopqhdajknbdvoiaugoqaigdeoakgdsoiu");

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
};
export default Todo;
