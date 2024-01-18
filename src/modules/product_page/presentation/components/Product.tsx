import React from 'react';
import ProductInfo from "./product_info/ProductInfo";
import ProductImage from './product_image/ProductImage';
import styles from './Product.module.css';
import {useParams} from "react-router";

export interface ProductProps{
    productId: string | undefined
}

const Product = () => {

    const {id} = useParams();

    return (
        <div>

            <div className={styles.container}>
              <div className={styles.one}> <ProductImage productId={id}/></div>
               <div className={styles.two}> <ProductInfo productId={id}/></div>


                <div className={styles.reviews}></div>
            </div>
        </div>
    );
};

export default Product;

