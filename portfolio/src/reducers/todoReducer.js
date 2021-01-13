export const initialState = {
  tasks: {
    todo: "build redux app",
    completed: false,
    id: Date.now(),
  },
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        todo: action.payload,
        completed: false,
        id: Date.now(),
      };
      return {
        ...state,
        tasks: [...state.tasks, newTodo],
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map((todoTask) => {
          if (todoTask.id === action.payload) {
            return { ...todoTask, completed: !todoTask.completed };
          } else {
            return todoTask;
          }
        }),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter((filteredTask) => !filteredTask.completed),
      };

    default:
      return state;
  }
};
