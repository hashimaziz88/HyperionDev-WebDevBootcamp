// src/components/users/Register.js

import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Auth.css";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/todos/register",
        {
          username: values.username,
          password: values.password,
        }
      );
      console.log("Registration successful:", response.data);
      setSuccessMessage("Registration successful. You can now log in.");
      resetForm();
    } catch (error) {
      console.error("Error registering:", error.response);
      if (error.response.status === 403) {
        setErrorMessage("Error: Email must end with '@gmail.com'");
      } else {
        setErrorMessage(
          "An error occurred during registration. Please try again."
        );
      }
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Invalid email format")
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <Formik
        initialValues={{ username: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username (Email):</label>
              <Field
                type="text"
                id="username"
                name="username"
                className={errors.username && touched.username ? "error" : ""}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                className={errors.password && touched.password ? "error" : ""}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "error"
                    : ""
                }
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
