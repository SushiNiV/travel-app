// components/Login/Login.js
import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with", { username, password });

    // Send login request to the server
    try {
      const response = await fetch('http://localhost:5000/login', { // Correct backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
      } else {
        setError(data.message || 'An error occurred during login.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Unable to reach the server.');
    }
  };

  return (
    <div className="login-container">
      <div className="signin-signup">
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <input type="submit" value="Login" className="btn solid" />
        </form>
      </div>
    </div>
  );
};

export default Login;