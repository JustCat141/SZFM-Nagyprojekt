import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleRegister = () => {
        // Add registration logic here
        // You can access username, email, password, and passwordConfirmation for registration.
    };

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
                <button onClick={handleRegister}>Regisztráció</button>
            </div>
        </div>
    );
};

export default Register;

/*
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
    */
    