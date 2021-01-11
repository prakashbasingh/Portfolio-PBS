import React, { useState } from "react";

import { connect } from "react-redux";

import {
  addTodo,
  toggleComplete,
  clearCompleted,
} from "../../actions/todoAction.js";

function TodoForm(props) {
  console.log(props, "props in todoForm.js");
  const [item, setItem] = useState("");
  console.log(item, "item in todoForm");

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

const mapStateToProps = (state) => {
  console.log(state, " mapStateToProps in todoForm.js");

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
})(TodoForm);

// addTodo={props.addTodo} clearCompleted={props.clearCompleted}
