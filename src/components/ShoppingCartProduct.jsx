import React, { useContext } from 'react';
import '@styles/ShoppingCartProduct.scss';
import ShoppingCartOrder from '@components/ShoppingCartOrder';

import iconClose from '@icons/icon_close.png';

import AppContext from '@context/AppContext';

const ShoppingCartProduct = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (product) => {
        removeFromCart(product);
    };

    return (
        <div className="ShoppingCartProduct">
            <ShoppingCartOrder product={product} />
            <button className="delete-product-button" onClick={() => handleRemove(product)}>
                <img src={iconClose} alt="delete product" />
            </button>
        </div>
    );
};

export default ShoppingCartProduct;
