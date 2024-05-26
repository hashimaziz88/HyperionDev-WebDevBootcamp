import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Home.css";

const Home = ({ token, user_id, isAuthenticated }) => {
  const [todos, setTodos] = useState([]);
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

  const handleAddTodo = async (values, { resetForm }) => {
    try {
      const newTodoData = {
        todo_id: crypto.randomUUID(),
        todo_name: values.name,
        todo_description: values.description,
        user_id: user_id,
      };

      const response = await axios.post(
        "http://localhost:8080/todos/add",
        newTodoData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setTodos([...todos, response.data]);
      resetForm();
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

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Todo name is required")
      .max(140, "Name is too long"),
    description: Yup.string()
      .required("Todo description is required")
      .max(140, "Description is too long"),
  });

  return (
    <div className="home-container">
      <h1>Home</h1>
      {errorMessage && (
        <div>
          <p className="error-message">{errorMessage}</p>
          <Link to="/login" className="nav-link">
            Proceed to Login
          </Link>
          <Link to="/register" className="nav-link">
            Create an Account
          </Link>
        </div>
      )}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="todo-list-container">
        <h2>To-Do List</h2>
        <Formik
          initialValues={{ name: "", description: "" }}
          validationSchema={validationSchema}
          onSubmit={handleAddTodo}
        >
          {({ errors, touched }) => (
            <Form className="todo-form">
              <div className="form-group">
                <label htmlFor="name">Todo Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter a new todo name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Todo Description</label>
                <Field
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Enter a new todo description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error-message"
                />
              </div>
              <button type="submit" className="todo-button">
                Add Todo
              </button>
            </Form>
          )}
        </Formik>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.todo_id} className="todo-item">
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
                  <button
                    onClick={() => handleUpdateTodo(todo.todo_id)}
                    className="todo-button"
                  >
                    Save
                  </button>
                  <button
                    onClick={() =>
                      setEditMode({ ...editMode, [todo.todo_id]: false })
                    }
                    className="todo-button"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span>
                    {todo.todo_name} - {todo.todo_description}
                  </span>
                  <button
                    onClick={() =>
                      setEditMode({ ...editMode, [todo.todo_id]: true })
                    }
                    className="todo-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.todo_id)}
                    className="todo-button"
                  >
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
