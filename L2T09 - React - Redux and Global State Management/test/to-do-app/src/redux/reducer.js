// reducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, content: "Content1", completed: false },
    { id: 2, content: "Content2", completed: false },
  ],
};

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index].content = action.payload.content;
      }
    },
    toggleCompleted: (state, action) => {
      const index = state.list.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.list[index].completed = !state.list[index].completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleCompleted } =
  todoReducer.actions;
export default todoReducer.reducer;
