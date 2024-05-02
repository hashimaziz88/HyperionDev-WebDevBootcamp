// actions/todoActions.js
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes';

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
    completed: false,
  },
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: {
    index,
  },
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: {
    index,
  },
});
