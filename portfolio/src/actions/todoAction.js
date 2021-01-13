export const addTodo = (newTodo) => {
  return { type: "ADD_TODO", payload: newTodo };
};

export const toggleCompleted = (id) => {
  return { type: "TOGGLE_COMPLETED", payload: id };
};

export const clearCompleted = () => {
  return { type: "CLEAR_COMPLETED" };
};
