import React, {useEffect, useState} from 'react';
import style from './ProductsGallery.module.css';
import ProductCard from "../product-card/ProductCard";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../general/redux/types";
import {ShopPageState} from "../../redux/types";


const ProductsGallery = () => {
    const {products, columns, error} = useSelector<AppStore, ShopPageState>(
        state => state.shopPage
    );

    const [gridStyles, setGridStyles] = useState({});
    useEffect(() => {
        const handleResize = () => {
            setGridStyles({
                gridTemplateColumns: `repeat(${window.innerWidth >= 768 ? columns.countDesktop : columns.countMobile}, 1fr)`,
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [columns]);

    return (
        <div className={style.productGallery} style={gridStyles}>
            {
                products ?
                    products.map((product, index) => (
                        <ProductCard product={product}
                                     columns={columns}
                                     key={`product_${index}_${product.name}`}
                        />
                    )) :
                    <p>{error}</p>
            }
        </div>
    );
};

export default ProductsGallery;