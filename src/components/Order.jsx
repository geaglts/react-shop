import React from 'react';
import '@styles/Order.scss';

import iconArrow from '@icons/flechita.svg';

const Order = () => {
    return (
        <div className="Order">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={iconArrow} alt="arrow" />
        </div>
    );
};

export default Order;
