import React, { useState } from 'react';
import { Button } from '../helper-functions/Button';
import { SendNewuser } from '../helper-functions/SendNewUser';
import { CloseRegister } from '../global-states/authSlice';
import { useDispatch } from 'react-redux';

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
        <div>
            <div>
                <img src="" alt="Logo" />
            </div>
            <div>
                <p>Regisztráció</p>
                <input
                    type="text"
                    placeholder="Felhasználónév"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Jelszó"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Jelszó megerősítése"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <p>{errorMessage}</p>
                <Button func={handleRegister} text={"Regisztráció"}/>
                <Button func={OpenLogin} text={"Bejelentkezés"}/>
            </div>
        </div>
    );
};

export default Register;
