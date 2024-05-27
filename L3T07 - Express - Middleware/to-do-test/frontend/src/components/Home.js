import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Home.css";
import NotAuthenticated from "./NotAuthenticated"; // Import the new component

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
      if (
        !updatedTodo.todo_name.trim() ||
        !updatedTodo.todo_description.trim()
      ) {
        setErrorMessage("Todo name and description cannot be empty.");
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
    return <NotAuthenticated />; // Render the NotAuthenticated component if the user is not authenticated
  }

  return (
    <div className="home-container">
      <h1>Home</h1>
      {errorMessage && (
        <div>
          <p className="error-message">{errorMessage}</p>
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
              </Form>
            </>
          )}
        </Formik>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.todo_id} className="todo-item">
              {editMode[todo.todo_id] ? (
                <>
                  <div>
                    <label htmlFor={`edit-name-${todo.todo_id}`}>
                      Todo Name
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
                  <div>
                    <label htmlFor={`edit-description-${todo.todo_id}`}>
                      Todo Description
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
                </>
              ) : (
                <>
                  <span>
                    {todo.todo_name} - {todo.todo_description}
                  </span>
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
