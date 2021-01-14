export const initialState = {
  tasks: [
    {
      item: "build redux app",
      completed: false,
      id: Date.now(),
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(state, "this is in reducer addTodo case");
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return {
        ...state,
        tasks: [...state.tasks, newTodo],
      };

    case "TOGGLE_COMPLETED":
      console.log(state, "this is in reducer toggleComplete case");
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
