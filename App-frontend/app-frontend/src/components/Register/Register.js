import React, { useState } from 'react';
import { Button } from '../helper-functions/Button';
import { SendNewuser } from '../helper-functions/SendNewUser';
import { CloseRegister } from '../global-states/authSlice';
import { useDispatch } from 'react-redux';
import classes from "../../styles/Register.module.css";
import Error from '../helper-functions/Error';


const Register = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = () => {
        if (username.length > 0 && email.length > 0 && password.length > 0) {

            if (email.includes('@')) {

                if (password === passwordConfirmation) {

                    setErrorMessage("");
                    const user = {username, email, password};
                    SendNewuser(user);
                    OpenLogin();
                }
                else {
                    setErrorMessage("A két jelszó nem egyezik meg");
                }

            }
            else {
                setErrorMessage("Kérlek valós email címet adj meg");
            }
        }
        else {  
            setErrorMessage("Kérlek tölts ki minden mezőt.");
        }
    };

    const OpenLogin = () => {
        dispatch(CloseRegister());
    }
    return (
        <div className={classes["register-page"]}>
            <div className={classes["register-header"]}>
                <img src alt="Logo" 
                 className={classes["register-header-logo"]}/>
            </div>
            <div className={classes["register-box"]}>
                <p className={classes["register-title"]}>Regisztráció</p>
                <div className={classes["register-input-box"]}>
                    <input
                        className={classes["register-input-text"]}
                        type="text"
                        placeholder="Felhasználónév"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={classes["register-input-box"]}>
                    <input
                        className={classes["register-input-text"]}
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={classes["register-input-box"]}>
                    <input
                        className={classes["register-input-text"]}
                        type="password"
                        placeholder="Jelszó"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={classes["register-input-box"]}>
                    <input
                        className={classes["register-input-text"]}
                        type="password"
                        placeholder="Jelszó megerősítése"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                    {errorMessage && <Error text={errorMessage}/>}
                <Button func={handleRegister} text={"Regisztráció"}/>
                <Button func={OpenLogin} text={"Bejelentkezés"}/>
            </div>
        </div>
    );
};

export default Register;
