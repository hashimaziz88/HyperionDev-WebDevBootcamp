import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ token }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: "", description: "" });
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/todos/getTodos", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [token]);

  const handleAddTodo = async () => {
    try {
      const newTodoData = {
        todo_id: crypto.randomUUID(),
        todo_name: newTodo.name,
        todo_description: newTodo.description,
      };

      const response = await axios.post("http://localhost:8080/todos/add", newTodoData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTodos([...todos, response.data]);
      setNewTodo({ name: "", description: "" });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/todos/delete-todo/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdateTodo = async (id) => {
    try {
      const updatedTodo = todos.find((todo) => todo.todo_id === id);
      await axios.put(`http://localhost:8080/todos/update-todo/${id}`, updatedTodo, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditMode({ ...editMode, [id]: false });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleEditChange = (id, field, value) => {
    setTodos(todos.map((todo) => (todo.todo_id === id ? { ...todo, [field]: value } : todo)));
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>To-Do List</h2>
        <input
          type="text"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
          placeholder="Enter a new todo name"
        />
        <input
          type="text"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          placeholder="Enter a new todo description"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.todo_id}>
              {editMode[todo.todo_id] ? (
                <>
                  <input
                    type="text"
                    value={todo.todo_name}
                    onChange={(e) => handleEditChange(todo.todo_id, "todo_name", e.target.value)}
                  />
                  <input
                    type="text"
                    value={todo.todo_description}
                    onChange={(e) => handleEditChange(todo.todo_id, "todo_description", e.target.value)}
                  />
                  <button onClick={() => handleUpdateTodo(todo.todo_id)}>Save</button>
                  <button onClick={() => setEditMode({ ...editMode, [todo.todo_id]: false })}>Cancel</button>
                </>
              ) : (
                <>
                  {todo.todo_name} - {todo.todo_description}
                  <button onClick={() => setEditMode({ ...editMode, [todo.todo_id]: true })}>Edit</button>
                  <button onClick={() => handleDeleteTodo(todo.todo_id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
