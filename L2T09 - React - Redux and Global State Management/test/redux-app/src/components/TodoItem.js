// TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <div className={todo.completed ? "completed" : ""}>
      <span>{todo.content}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleComplete}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default TodoItem;
