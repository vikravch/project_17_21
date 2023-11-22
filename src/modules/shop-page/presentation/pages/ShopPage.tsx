import React from 'react';
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import style from './ShopPage.module.css';
import ViewSelector from "../components/view-selector/ViewSelector";

const ShopPage = () => {
    return (
        <div className={style.shopPage}>
            <ViewSelector/>
            <ProductsGallery/>
        </div>
    );
};

export default ShopPage;