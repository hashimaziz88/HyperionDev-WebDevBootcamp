import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Formik } from "formik";

const LoginForm = () => {
  return (
    <Container>
      {/* Display the Login form */}
      <h2>Login</h2>
      <Formik
        // Set initial form values for email and password
        initialValues={{ email: "", password: "" }}
        // Define validation rules for the form fields
        validate={(values) => {
          const errors = {};
          // Validate email field
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Invalid email address";
          }
          // Validate password field
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
          }
          return errors;
        }}
        // Handle form submission
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // Display form values in an alert (for demonstration)
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          // Use Formik's render prop pattern to render the form
          <Form onSubmit={formik.handleSubmit}>
            {/* Email field */}
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              {/* Display error message if email field is invalid */}
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password field */}
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
                isInvalid={formik.touched.password && formik.errors.password}
              />
              {/* Display error message if password field is invalid */}
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit button */}
            <Button
              variant="primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
