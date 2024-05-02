// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Ensure this import is correct
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import InfoPopup from './components/InfoPopup';
import TodoCounter from './components/TodoCounter';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="app-title">Todo App</h1>
        <TodoCounter />
        <TodoList />
        <TodoForm />
        <InfoPopup />
      </div>
    </Provider>
  );
}

export default App;
