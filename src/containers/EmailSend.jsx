import React from 'react';
import '@styles/RecoveryPassword.scss';

import logoYardSale from '@logos/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg';

const RecoveryPassword = () => {
    return (
        <div className="emailSend">
            <div className="container">
                <img src={logoYardSale} alt="logo de yard sale" className="logo" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
                <div className="email-image">
                    <img src={iconEmail} alt="correo de yard sale" />
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="resend">
                    Didn't receive the email? <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default RecoveryPassword;
