import React from 'react';
import '../styles/Login.scss';

const login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="./assets/logos/logo_yard_sale.svg" alt="logo de yard sale" className="logo" />
                <form action="/" className="form">
                    <label className="label" for="email">
                        Email
                    </label>
                    <input id="email" type="email" placeholder="geaglts@example.com" className="input input-email" required />
                    <label className="label" for="password">
                        Password
                    </label>
                    <input id="password" type="password" placeholder="*********" className="input input-password" required />
                    <input type="submit" value="Confirm" className="primary-button login-button" />
                    <a href="/">Forgot my password</a>
                </form>
                <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    );
};

export default login;
