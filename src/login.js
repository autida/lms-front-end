import React, { useState } from 'react';
import axios from 'axios';
function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to the login endpoint
      const response = await axios.post('http://localhost:8080/api/auth/login', 
      
      {
        "username" : username,
        "password" : password
      }
     );
      // Check if the login was successful
      if (response.status === 200) {
        setLoggedIn(true);
        alert('Login successful!');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.log('Error during login:', error);
      alert('An error occurred during login');
    }
  };

  if (loggedIn) {
    return <div>You are logged in!</div>;
  }
  return (
    <div >
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  );
}

export default Login