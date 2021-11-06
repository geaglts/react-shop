import React from 'react';
import '@styles/ShoppingCartProduct.scss';
import ShoppingCartOrder from '@components/ShoppingCartOrder';

import iconClose from '@icons/icon_close.png';

const ShoppingCartProduct = ({ product }) => {
    return (
        <div className="ShoppingCartProduct">
            <ShoppingCartOrder product={product} />
            <button className="delete-product-button">
                <img src={iconClose} alt="delete product" />
            </button>
        </div>
    );
};

export default ShoppingCartProduct;
