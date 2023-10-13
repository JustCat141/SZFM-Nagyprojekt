// Login.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, OpenRegister } from '../global-states/authSlice';
import classes from "../../styles/Login.module.css";
import {Encode} from '../helper-functions/Encode';
import { Decode } from "../helper-functions/Decode"
import Dashboard from '../dashboard/Dashboard';
import { Button } from '../helper-functions/Button';
import { LoadForLogin } from '../helper-functions/LoadForLogin';
import  Error  from "../helper-functions/Error"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [QestionnaireList, setQuestionnaireList] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log(Encode(`${username} ${password}`)); 
    console.log(Decode(Encode(`${username} ${password}`))); 
  
    try {
      const response = await LoadForLogin(1551);
      if (response.status === 200) {
        const data = await response.json();
        let user = { username, password };
        dispatch(login({ user, questionnaireList: data }));
      } else {
        // Handle the error here
        console.error('Failed to fetch data');
        setError(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(true);
    }
  };

  const handleRegister = () => {
    dispatch(OpenRegister());
  };

  return (
    <div>
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
      {error && <Error text={"Hibás email cím vagy jelszó"}/>}

            <Button func={handleLogin} text={"Bejelentkezés"}/>
            <Button func={handleRegister} text={"Regisztráció"}/>
          </div>
        </div>
      
    </div>
  );
}

export default Login;
