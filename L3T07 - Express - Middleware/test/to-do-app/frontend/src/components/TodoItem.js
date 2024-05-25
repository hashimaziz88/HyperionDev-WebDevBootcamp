import React, { useState } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleUpdate = () => {
    updateTodo({
      _id: todo._id,
      task,
      completed: todo.completed,
    });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.task}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          <button
            onClick={() =>
              updateTodo({
                ...todo,
                completed: !todo.completed,
              })
            }
          >
            {todo.completed ? "Undo" : "Complete"}
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
