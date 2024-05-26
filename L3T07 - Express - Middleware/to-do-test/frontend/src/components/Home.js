import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "./Modal";
import NoUserMessage from "./NoUserMessage"; // Import the new component
import "./Home.css";

const Home = ({ token, user_id, isAuthenticated }) => {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState({});
  const [currentTodo, setCurrentTodo] = useState(null);
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

  const handleUpdateTodo = async () => {
    try {
      const updatedTodo = todos.find(
        (todo) => todo.todo_id === currentTodo.todo_id
      );
      await axios.put(
        `http://localhost:8080/todos/update-todo/${currentTodo.todo_id}`,
        updatedTodo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditMode({ ...editMode, [currentTodo.todo_id]: false });
      setCurrentTodo(null);
      setSuccessMessage("Todo updated successfully.");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleEditChange = (field, value) => {
    setCurrentTodo({
      ...currentTodo,
      [field]: value,
    });
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
      {!isAuthenticated && <NoUserMessage />}{" "}
      {/* Conditionally render the message */}
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
      {isAuthenticated /* Only show the todo list if user is authenticated */ && (
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
                    as="textarea"
                    id="name"
                    name="name"
                    placeholder="Enter a new todo name"
                    rows="2"
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
                    as="textarea"
                    id="description"
                    name="description"
                    placeholder="Enter a new todo description"
                    rows="4"
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
          <div className="todo-list">
            {todos.map((todo) => (
              <div key={todo.todo_id} className="todo-box">
                <div>
                  <strong>Name:</strong> {todo.todo_name}
                </div>
                <div>
                  <strong>Description:</strong> {todo.todo_description}
                </div>
                <div className="todo-actions">
                  <button
                    onClick={() => {
                      setEditMode({ ...editMode, [todo.todo_id]: true });
                      setCurrentTodo(todo);
                    }}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {currentTodo && (
        <Modal
          isOpen={Boolean(currentTodo)}
          onClose={() => setCurrentTodo(null)}
        >
          <div className="modal-content">
            <h2>Edit Todo</h2>
            <div className="form-group">
              <label htmlFor="edit-name">Todo Name</label>
              <textarea
                id="edit-name"
                value={currentTodo.todo_name}
                onChange={(e) => handleEditChange("todo_name", e.target.value)}
                rows="2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-description">Todo Description</label>
              <textarea
                id="edit-description"
                value={currentTodo.todo_description}
                onChange={(e) =>
                  handleEditChange("todo_description", e.target.value)
                }
                rows="4"
              />
            </div>
            <button onClick={handleUpdateTodo} className="todo-button">
              Save
            </button>
            <button
              onClick={() => setCurrentTodo(null)}
              className="todo-button"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
