import React from 'react';
import '@styles/ShoppingCartOrder.scss';

const ShoppingCartOrder = ({ product }) => {
    return (
        <div className="ShoppingCartOrder">
            <figure>
                <img src={product.images[0]} alt="Imagen de el producto" />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ShoppingCartOrder;
