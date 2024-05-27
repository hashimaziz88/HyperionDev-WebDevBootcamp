// Home.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Home.css";
import NotAuthenticated from "./NotAuthenticated";

const Home = ({ token, user_id, isAuthenticated }) => {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState({});
  const [originalValues, setOriginalValues] = useState({});
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
  }, [token, user_id, isAuthenticated]);

  const handleAddTodo = async (values, actions) => {
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
      actions.resetForm();
      setSuccessMessage("Todo added successfully.");
      // Clear success message after 10 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error adding todo:", error);
      if (error.response) {
        // If the server responds with an error message
        setErrorMessage(error.response.data.message);
      } else {
        // If there's no response from the server
        setErrorMessage("An error occurred while adding the todo.");
      }
      // Clear error message after 10 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 10000);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/todos/delete-todo/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
      setSuccessMessage("Todo deleted successfully.");

      // Clear success message after 10 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 10000);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdateTodo = async (id) => {
    try {
      const updatedTodo = todos.find((todo) => todo.todo_id === id);
      if (
        !updatedTodo.todo_name.trim() ||
        !updatedTodo.todo_description.trim()
      ) {
        setErrorMessage("Todo name and description cannot be empty.");
        // Clear error message after 10 seconds
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
        return;
      }

      if (
        updatedTodo.todo_name.trim().length > 140 ||
        updatedTodo.todo_description.trim().length > 140
      ) {
        setErrorMessage(
          "Todo name or description cannot exceed 140 characters."
        );
        // Clear error message after 10 seconds
        setTimeout(() => {
          setErrorMessage("");
        }, 7000);
        return;
      }

      await axios.put(
        `http://localhost:8080/todos/update-todo/${id}`,
        updatedTodo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditMode({ ...editMode, [id]: false });
      setSuccessMessage("Todo updated successfully.");

      // Clear success message after 10 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 7000);
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
      .max(140, "Name must be at most 140 characters"),
    description: Yup.string()
      .required("Todo description is required")
      .max(140, "Description must be at most 140 characters"),
  });

  const handleEditClick = (todo) => {
    setOriginalValues({
      ...originalValues,
      [todo.todo_id]: { ...todo },
    });
    setEditMode({
      ...editMode,
      [todo.todo_id]: true,
    });
  };

  const handleCancelClick = (id) => {
    setTodos(
      todos.map((todo) => (todo.todo_id === id ? originalValues[id] : todo))
    );
    setEditMode({
      ...editMode,
      [id]: false,
    });
  };

  if (!isAuthenticated) {
    return <NotAuthenticated />;
  }

  return (
    <div className="home-container">
      <h1>Home</h1>

      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="todo-list-container">
        <h2>To-Do List</h2>
        <Formik
          initialValues={{ name: "", description: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            handleAddTodo(values, actions);
          }}
        >
          {({ errors, touched }) => (
            <>
              <Form className="todo-form">
                <div className="form-group">
                  <label htmlFor="name">Todo Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter a new todo name"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
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
                    className={`form-control ${
                      touched.description && errors.description
                        ? "is-invalid"
                        : ""
                    }`}
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
                {errorMessage && (
                  <div>
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </Form>
            </>
          )}
        </Formik>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.todo_id} className="todo-item">
              {editMode[todo.todo_id] ? (
                <>
                  <div className="edit-mode-container">
                    <div className="edit-mode-input">
                      <label htmlFor={`edit-name-${todo.todo_id}`}>
                        Todo Name:
                      </label>
                      <input
                        type="text"
                        id={`edit-name-${todo.todo_id}`}
                        value={todo.todo_name}
                        onChange={(e) =>
                          handleEditChange(
                            todo.todo_id,
                            "todo_name",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="edit-mode-input">
                      <label htmlFor={`edit-description-${todo.todo_id}`}>
                        Todo Description:
                      </label>
                      <input
                        type="text"
                        id={`edit-description-${todo.todo_id}`}
                        value={todo.todo_description}
                        onChange={(e) =>
                          handleEditChange(
                            todo.todo_id,
                            "todo_description",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="edit-mode-actions">
                      <button
                        onClick={() => handleUpdateTodo(todo.todo_id)}
                        className="todo-button"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => handleCancelClick(todo.todo_id)}
                        className="todo-button"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="todo-details">
                    <div>
                      <strong className="todo-name">Todo Name:</strong>{" "}
                      {todo.todo_name}
                    </div>
                    <div>
                      <strong className="todo-description">
                        Todo Description:
                      </strong>{" "}
                      {todo.todo_description}
                    </div>
                  </div>
                  <div className="todo-buttons">
                    <button
                      onClick={() => handleEditClick(todo)}
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
