// Login.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, OpenRegister } from '../global-states/authSlice';
import classes from "../../styles/Login.module.css";
import {Encode} from '../helper-functions/Encode';
import { Decode } from "../helper-functions/Decode"
import Dashboard from '../dashboard/Dashboard';
import { Button } from '../helper-functions/Button';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log(Encode(`${username} ${password}`)); 
    console.log(Decode(Encode(`${username} ${password}`))); 
    
    // You should perform your authentication logic here
    
    //Note, you can do the fetch in the same request
    //so you are asking for list of questionnaires of the
    //user, and if there is no user the server will refuse
    //and then no login
    
    // Fetch the list of questionnaires from the database

    let user = { username, password};
    let questionnaireList = [{id: 1510, name: "Nyelvi tudás kérdőív"}, 
                            {id: 1500, name: "Milyen boltokban vásárolsz?"}, 
                            {id: 1610, name: "template 01"}, 
                            {id: 1700, name: "BL kérdőív"}];
    dispatch(login({ user, questionnaireList}));
  };

  const handleRegister = () => {
    dispatch(OpenRegister());
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
            <Button func={handleLogin} text={"Bejelentkezés"}/>
            <Button func={handleRegister} text={"Regisztráció"}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
