import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = ({ token }) => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTodos();
  }, [token]);

  const addTodo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tasks",
        { task: newTask },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos([...todos, response.data]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
