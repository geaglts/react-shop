import React from 'react';
import '@styles/ShoppingCart.scss';
import FormButton from '@components/FormButton';

import iconArrow from '@icons/flechita.svg';
import ShoppingCartProduct from '@components/ShoppingCartProduct';

const ShoppingCart = () => {
    return (
        <aside className="ShoppingCart">
            <div className="ShoppingCart-content">
                <div className="title-container">
                    <button className="close-shopping-cart">
                        <img src={iconArrow} alt="arrow" />
                    </button>
                    <h1 className="title">Shopping cart</h1>
                </div>
                <ShoppingCartProduct />
                <div className="shopping-total">
                    <p>Total</p>
                    <p>$560.00</p>
                </div>
                <FormButton label="Checkout" classes={['checkout-button']} />
            </div>
        </aside>
    );
};

export default ShoppingCart;
