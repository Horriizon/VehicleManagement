// LoginPage.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Add authentication logic here
    // For simplicity, we're just checking if both fields are non-empty
    if (username && password) {
      setLoggedIn(true);
      history.push('/dashboard');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
