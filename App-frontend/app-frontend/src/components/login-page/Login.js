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

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState(false);
  const [QestionnaireList, setQuestionnaireList] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log(Encode(`${username} ${password}`)); 
    console.log(Decode(Encode(`${username} ${password}`))); 
    let questionnaireList;
    try {
      const data = await LoadForLogin(1551);
       questionnaireList = data;
       let user = { username, password};
      dispatch(login({ user, questionnaireList }));
    } catch (error) {
      console.error('Error during login:', error);
    }
    console.log(questionnaireList);
  };

  const handleRegister = () => {
    dispatch(OpenRegister());
  };

  return (
    <div>
      {!error ? (
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
            <Button func={handleLogin} text={"Bejelentkezés"}/>
            <Button func={handleRegister} text={"Regisztráció"}/>
          </div>
        </div>
      ) : (
        <Error text={"Hibás email cím vagy jelszó"}/>
        )
      }
    </div>
  );
}

export default Login;
