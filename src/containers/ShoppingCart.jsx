import React, { useContext } from 'react';
import '@styles/ShoppingCart.scss';
import FormButton from '@components/FormButton';

import iconArrow from '@icons/flechita.svg';
import ShoppingCartProduct from '@components/ShoppingCartProduct';

import AppContext from '@context/AppContext';

const ShoppingCart = ({ close }) => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <aside className="ShoppingCart">
            <div className="ShoppingCart-content">
                <div className="title-container">
                    <button className="close-shopping-cart" onClick={close}>
                        <img src={iconArrow} alt="arrow" />
                    </button>
                    <h1 className="title">Shopping cart</h1>
                </div>
                {state.cart.map((product, key) => (
                    <ShoppingCartProduct product={product} key={`ShoppingCartProduct-${key}`} />
                ))}
                <div className="shopping-total">
                    <p>Total</p>
                    <p>${sumTotal()}</p>
                </div>
                <FormButton label="Checkout" classes={['checkout-button']} />
            </div>
        </aside>
    );
};

export default ShoppingCart;
