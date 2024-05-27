// /src/components/SearchBar.js

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// SearchBar Component: Renders a search input field and a dropdown menu to select media type.
const SearchBar = ({ onSearch }) => {
  // Initial values for the search form
  const initialValues = {
    term: "",
    mediaType: "all",
  };

  // Validation function for form fields
  const validate = (values) => {
    const errors = {};
    if (!values.term.trim()) {
      errors.term = "Please enter a search term.";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true); // Set submitting state before making the API call
    await onSearch(values.term, values.mediaType); // Await the search action
    setSubmitting(false); // Reset submitting state
    resetForm(); // Reset the form after search is completed
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            {/* Search input field */}
            <Field type="text" name="term" placeholder="Search..." />
            {/* Display error message if search term is empty */}
            <ErrorMessage
              name="term"
              component="div"
              className="error-message"
            />
            {/* Media type dropdown */}
            <Field as="select" name="mediaType">
              <option value="all">All</option>
              <option value="movie">Movie</option>
              <option value="podcast">Podcast</option>
              <option value="music">Music</option>
              <option value="audiobook">Audiobook</option>
              <option value="shortFilm">Short Film</option>
              <option value="tvShow">TV Show</option>
              <option value="software">Software</option>
              <option value="ebook">eBook</option>
            </Field>
            {/* Submit button */}
            <button type="submit" disabled={isSubmitting}>
              {/* Show "Searching..." text when submitting */}
              {isSubmitting ? "Searching..." : "Search"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
