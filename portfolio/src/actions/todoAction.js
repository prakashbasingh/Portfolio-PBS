export const addTodo = (item) => {
  console.log("addTodo function running");
  return { type: "ADD_TODO", payload: item };
};

export const toggleCompleted = (id) => {
  console.log("toggleComplete function running");
  return { type: "TOGGLE_COMPLETED", payload: id };
};

export const clearCompleted = () => {
  console.log("clearComplete function running");
  return { type: "CLEAR_COMPLETED" };
};
