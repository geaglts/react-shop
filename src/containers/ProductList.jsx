import React from 'react';
import '@styles/ProductList.scss';
import ProductCard from '@components/ProductCard';
import DesktopMenu from '../components/DesktopMenu';

const ProductList = () => {
    return (
        <div class="ProductList">
            <ProductCard />
        </div>
    );
};

export default ProductList;
