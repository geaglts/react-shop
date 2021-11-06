import React from 'react';
import '@styles/ProfileMenu.scss';

const ProfileMenu = () => {
    return (
        <div className="ProfileMenu">
            <ul>
                <li>
                    <a href="/" className="title">
                        My orders
                    </a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;
