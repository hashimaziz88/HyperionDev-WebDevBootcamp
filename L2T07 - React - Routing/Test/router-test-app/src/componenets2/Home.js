import React, { useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (userName.trim() !== "") {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName("");
  };

  return (
    <div>
      {loggedIn ? (
        <h1>Welcome {userName}!</h1>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {loggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Home;
