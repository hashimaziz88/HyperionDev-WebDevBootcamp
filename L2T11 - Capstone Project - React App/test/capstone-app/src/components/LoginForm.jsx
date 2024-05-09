import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const users = useSelector((state) => state.auth.users);

  if (loggedInUser) {
    return <Navigate to="/logged-in" />;
  }

  return (
    <Container>
      {/* Display the Login form */}
      <h2>Login</h2>
      <Formik
        // Set initial form values for username
        initialValues={{ username: "" }}
        // Define validation rules for the form fields
        validate={(values) => {
          const errors = {};
          // Validate username field
          if (!values.username) {
            errors.username = "Required";
          } else if (!users.find((user) => user.username === values.username)) {
            errors.username = "Invalid username";
          }
          return errors;
        }}
        // Handle form submission
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // Dispatch login action with the username
            dispatch(login(values.username));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          // Use Formik's render prop pattern to render the form
          <Form onSubmit={formik.handleSubmit}>
            {/* Username field */}
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                {...formik.getFieldProps("username")}
                isInvalid={formik.touched.username && formik.errors.username}
              />
              {/* Display error message if username field is invalid */}
              <Form.Control.Feedback type="invalid">
                {formik.errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit button */}
            <Button
              variant="primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
