import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo, clearCompleted } from "../../actions/todoAction.js";

function TodoForm(props) {
  console.log(props, "props in TODOFORM ");

  const [item, setItem] = useState("");
  console.log(item, "this is in todoform ITEM");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(item);
    setItem("");
  };

  return (
    <div>
      <h1> its todo Form </h1>
      <div onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="item" value={item} />
        <button onClick={() => addTodo(item)}>ADD TODO</button>
        <button onClick={props.clearCompleted}>Clear Completed Todos</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state, " this is state of mapStateToProps in todoForm.js");
  return {
    todo: state.tasks.todo,
    completed: state.tasks.completed,
    id: state.tasks.id,
  };
};

// export default connect(
//   (state) => {
//     console.log(
//       state.tasks,
//       " this is state of mapStateToProps in todoForm.js............."
//     );
//     return {
//       todo: state.tasks.todo,
//       completed: state.tasks.completed,
//       id: state.tasks.id,
//     };
//   },
//   { addTodo, toggleCompleted }
// )(TodoForm);

export default connect(mapStateToProps, { addTodo, clearCompleted })(TodoForm);
