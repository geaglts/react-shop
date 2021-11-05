import React from 'react';
import '@styles/Login.scss';

import logoYardSale from '@logos/logo_yard_sale.svg';

const login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logoYardSale} alt="logo de yard sale" className="logo" />
                <form action="/" className="form">
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="email" placeholder="geaglts@example.com" className="input input-email" required />
                    <label className="label" htmlFor="password">
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
