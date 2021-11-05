import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return (
        <nav className="navbar">
            <img src="./assets/icons/icon_menu.svg" alt="menu" className="menu" />
            <section className="navbar-left">
                <img src="./assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />
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
                    <li className="navbar-email">geaglts@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src="./assets/icons/icon_shopping_cart.svg" alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Header;
