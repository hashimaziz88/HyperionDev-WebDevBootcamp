// src/store.js
import { createStore } from "redux";

const initialTodoState = {
  list: [
    { id: 1, content: "Content1", completed: false },
    { id: 2, content: "Content2", completed: false },
  ],
};

const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    // Add cases for EDIT_TODO and TOGGLE_COMPLETED
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
