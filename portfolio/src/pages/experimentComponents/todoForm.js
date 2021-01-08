import React, { useState } from "react";

function TodoList(props) {
  const [item, setItem] = useState("");
  console.log(item, "??itemssssssss???????");

  const { addTodo, clearCompleted } = props;

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(item);
    setItem("");
  };
  return (
    <div className="toDos">
      <h4>To Do List</h4>
      <div onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="item" value={item} />
        <button onClick={() => addTodo(item)}> Add Task </button>
        <button onClick={clearCompleted}>Clear Completed Task(s)</button>
      </div>
    </div>
  );
}
export default TodoList;
