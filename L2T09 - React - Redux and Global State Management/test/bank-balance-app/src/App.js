// App.js
import React from "react";
import "./App.css";
import BalanceManager from "./components/BalanceManager";

function App() {
  return (
    <div className="app">
      <h1 className="text-center">Cash Balance Manager</h1>
      <BalanceManager />
    </div>
  );
}

export default App;
