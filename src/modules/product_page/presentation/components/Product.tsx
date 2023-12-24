import React from 'react';
import ProductInfo from "./product_info/ProductInfo";
import ProductImage from './product_image/ProductImage';
import styles from './Product.module.css';

const Product = () => {
    return (
        <div>

            <div className={styles.container}>
              <div className={styles.one}> <ProductImage/></div>
               <div className={styles.two}> <ProductInfo/></div>


                <div className={styles.reviews}></div>
            </div>
        </div>
    );
};

export default Product;