//need action, action creator, and action objects

//exporting action functions
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

//action functions
export const addTodo = (item) => {
  return { type: "ADD_TODO", payload: item };
};

export const toggleComplete = (id) => {
  return { type: "TOGGLE_COMPLETE", payload: id };
};

export const clearComplete = () => {
  return { type: "CLEAR_COMPLETED" };
};
