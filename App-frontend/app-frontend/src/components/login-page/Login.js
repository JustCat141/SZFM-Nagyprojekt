// Login.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './authSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // You should perform your authentication logic here
    // If authentication is successful, dispatch the login action
    dispatch(login({ username, password }));
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are already logged in!</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
