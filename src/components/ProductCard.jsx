import React from 'react';
import '@styles/ProductCart.scss';

import iconAddToCart from '@icons/bt_add_to_cart.svg';
const dummyImageUrl = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const ProductCard = () => {
    return (
        <div className="ProductCard">
            <img src={dummyImageUrl} alt="dummy product" className="ProductCard-img" />
            <div className="ProductCard-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src={iconAddToCart} alt="add to cart button" />
                </figure>
            </div>
        </div>
    );
};

export default ProductCard;
