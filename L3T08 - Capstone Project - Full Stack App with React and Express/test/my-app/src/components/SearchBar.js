// /src/components/SearchBar.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SearchBar = ({ onSearch }) => {
  const initialValues = {
    term: "",
    mediaType: "all",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.term.trim()) {
      errors.term = "Please enter a search term.";
    }
    return errors;
  };

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
            <Field type="text" name="term" placeholder="Search..." />
            <ErrorMessage
              name="term"
              component="div"
              className="error-message"
            />
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
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Searching..." : "Search"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
