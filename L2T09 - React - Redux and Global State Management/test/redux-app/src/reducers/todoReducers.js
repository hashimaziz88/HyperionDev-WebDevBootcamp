// reducers/todoReducer.js
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/actionTypes";

const initialState = {
  list: [
    { content: "Content1", completed: false },
    { content: "Content2", completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.payload.index),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo, index) =>
          index === action.payload.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
