// TodoCounter.js
import React from "react";
import { connect } from "react-redux";

const TodoCounter = ({ count }) => {
  return (
    <div className="todo-counter">
      <p>Total Todos: {count}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.todos.list.length,
  };
};

export default connect(mapStateToProps)(TodoCounter);
