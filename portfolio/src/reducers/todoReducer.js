import {
  ADD_TODO,
  TOGGLE_COMPLETE,
  CLEAR_COMPLETED,
} from "../actions/todoAction.js";

export const initialState = {
  todos: [
    {
      item: "Need to Learn Reducers",
      completed: false,
      id: Date.now(),
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  //  console.log(state, "state :>:>:>:>:>:>:>:>:>:>:>:>:>:>:>:>:>:>:>");
  //  console.log(action, "action :>:>:>:>:>:>:>:>:>:>:>:>:>:>:>:>:>:>:>");

  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todoTask) => {
          if (todoTask.id === action.payload) {
            return { ...todoTask, completed: !todoTask.completed };
          } else {
            return todoTask;
          }
        }),
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todoTask) => !todoTask.completed),
      };

    default:
      return state;
  }
};
