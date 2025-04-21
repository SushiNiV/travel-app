import React, { useState } from 'react';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.text();

      if (response.ok) {
        setMessage('User registered successfully');
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        setMessage(data.includes("Duplicate entry") ? "User already registered." : 'Error: ' + data);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="signin-signup">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2 className="title">Sign up</h2>

          <div className="input-field">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
              onClick={() => setShowPassword(prev => !prev)}
            ></i>
          </div>

          {message && (
            <p className={message.startsWith('Error') ? 'error' : 'success'}>
              {message}
            </p>
          )}

          <input type="submit" value="Sign up" className="btn solid" />
        </form>
      </div>
    </div>
  );
};

export default Register;