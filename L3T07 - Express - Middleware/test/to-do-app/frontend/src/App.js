import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/todos"
          element={
            token ? <TodoList token={token} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/"
          element={<Navigate to={token ? "/todos" : "/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
