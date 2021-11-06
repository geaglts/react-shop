import React, { useState } from 'react';
import '@styles/Header.scss';

import ProfileMenu from '@components/ProfileMenu';

import iconMenu from '@icons/icon_menu.svg';
import logoYardSale from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className="navbar">
            <img src={iconMenu} alt="menu" className="menu" />
            <section className="navbar-left">
                <img src={logoYardSale} alt="logo" className="navbar-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </section>
            <section className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        geaglts@example.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={iconShoppingCart} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </section>
            {toggle && <ProfileMenu />}
        </nav>
    );
};

export default Header;
