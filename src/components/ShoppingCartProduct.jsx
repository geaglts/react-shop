import React from 'react';
import '@styles/ShoppingCartProduct.scss';
import ShoppingCartOrder from '@components/ShoppingCartOrder';

import iconClose from '@icons/icon_close.png';

const ShoppingCartProduct = () => {
    return (
        <div className="ShoppingCartProduct">
            <ShoppingCartOrder />
            <button className="delete-product-button">
                <img src={iconClose} alt="delete product" />
            </button>
        </div>
    );
};

export default ShoppingCartProduct;