import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const Home = ({ token, user_id, isAuthenticated }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: "", description: "" });
  const [editMode, setEditMode] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/todos/getTodos/${user_id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    if (isAuthenticated) {
      fetchTodos();
    }
  }, [token, user_id, isAuthenticated, setTodos]);

  const handleAddTodo = async () => {
    // Check if the user is authenticated
    if (!isAuthenticated) {
      setErrorMessage("You need to be logged in to add a todo.");
      return;
    }

    try {
      const newTodoData = {
        todo_id: crypto.randomUUID(),
        todo_name: newTodo.name,
        todo_description: newTodo.description,
        user_id: user_id,
      };

      const response = await axios.post(
        "http://localhost:8080/todos/add",
        newTodoData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update local state immediately
      setTodos([...todos, response.data]);
      setNewTodo({ name: "", description: "" });
      setSuccessMessage("Todo added successfully.");
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
      setSuccessMessage("Todo deleted successfully.");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdateTodo = async (id) => {
    try {
      const updatedTodo = todos.find((todo) => todo.todo_id === id);
      await axios.put(
        `http://localhost:8080/todos/update-todo/${id}`,
        updatedTodo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditMode({ ...editMode, [id]: false });
      setSuccessMessage("Todo updated successfully.");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleEditChange = (id, field, value) => {
    setTodos(
      todos.map((todo) =>
        todo.todo_id === id ? { ...todo, [field]: value } : todo
      )
    );
  };

  return (
    <div>
      <h1>Home</h1>
      {errorMessage && (
        <div>
          <p style={{ color: "red" }}>{errorMessage}</p>
          {/* Option to proceed to login */}
          <Link to="/login">Proceed to Login</Link>
          {/* Option to proceed to create an account */}
          <Link to="/register">Create an Account</Link>
        </div>
      )}
      {successMessage && (
        <div>
          <p style={{ color: "green" }}>{successMessage}</p>
        </div>
      )}
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
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
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
                    onChange={(e) =>
                      handleEditChange(
                        todo.todo_id,
                        "todo_name",
                        e.target.value
                      )
                    }
                  />
                  <input
                    type="text"
                    value={todo.todo_description}
                    onChange={(e) =>
                      handleEditChange(
                        todo.todo_id,
                        "todo_description",
                        e.target.value
                      )
                    }
                  />
                  <button onClick={() => handleUpdateTodo(todo.todo_id)}>
                    Save
                  </button>
                  <button
                    onClick={() =>
                      setEditMode({ ...editMode, [todo.todo_id]: false })
                    }
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {todo.todo_name} - {todo.todo_description}
                  <button
                    onClick={() =>
                      setEditMode({ ...editMode, [todo.todo_id]: true })
                    }
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteTodo(todo.todo_id)}>
                    Delete
                  </button>
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
