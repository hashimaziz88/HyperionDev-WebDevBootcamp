import React, { useState } from 'react';
import Navigation from './Navigation';
const Home = () => {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div>
      <Navigation />
      {isLoggedIn ? (
        <h1>Welcome, {userName}</h1>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Home;
