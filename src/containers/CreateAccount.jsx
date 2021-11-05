import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="createAccount">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <form action="/" className="form">
                    <label className="label" for="name">
                        Name
                    </label>
                    <input id="name" type="text" placeholder="geaglts" className="input input-name" />
                    <label className="label" for="email">
                        Email
                    </label>
                    <input id="email" type="email" placeholder="geaglts@example.com" className="input input-email" />
                    <label className="label" for="password">
                        Password
                    </label>
                    <input id="password" type="password" placeholder="*********" className="input input-password" />
                    <input type="submit" value="Create" className="primary-button create-button" />
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
