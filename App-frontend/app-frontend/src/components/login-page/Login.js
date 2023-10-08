// Login.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../global-states/authSlice';
import classes from "../../styles/Login.module.css";
import {Encode} from '../helper-functions/Encode';
import { Decode } from "../helper-functions/Decode"
import Dashboard from '../dashboard/Dashboard';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log(Encode(`${username} ${password}`)); 
    console.log(Decode(Encode(`${username} ${password}`))); 
    
    // You should perform your authentication logic here

    
    // Fetch the list of questionnaires from the database


    // If authentication is successful, dispatch the login action
    dispatch(login({ username, password }));
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <div className={classes['login-page']}>
          <div className={classes['login-page-logo-image-box']}>
            <img src="" className={classes['login-page-logo-image']}/>
          </div>
          <div className={classes['login-box']}>
            <p className={classes['login-main-title']}>Bejelentkezés</p>
            <div className={classes['login-input-box']}>
              <input
                type="text"
                placeholder="Felhasználónév"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={classes['login-input-text']}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Jelszó"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={classes['login-input-text']}
              />
            </div>
            <div className={classes['login-button-box']}>
              <button className={classes['login-button-text']}
              onClick={handleLogin}>Bejelentkezés</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
