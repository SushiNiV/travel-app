import React, { useState } from 'react';
import { useAuth } from '../../context/auth/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👁️‍🗨️ toggle state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setError('');
        login();
        navigate('/');
      } else {
        setError(data.message);
        setSuccess('');
      }
    } catch (err) {
      setError('Unable to reach the server.');
      setSuccess('');
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
              onClick={togglePasswordVisibility}
            ></i>
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <input type="submit" value="Login" className="btn solid" />
        </form>
      </div>
    </div>
  );
};

export default Login;