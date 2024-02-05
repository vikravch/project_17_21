import React from 'react';
import ProductInfo from "./product_info/ProductInfo";
import ProductImage from './product_image/ProductImage';
import styles from './Product.module.css';
import {Navigate, useLocation, useParams} from "react-router";

export interface ProductProps {
    productId: string | undefined
}

const Product = () => {

    const {id} = useParams();
    const location = useLocation();

    const crumbs = location.pathname.split(/[/0-9]+/).filter(e => e !== '');
    console.log(location);
    console.log(crumbs);
    return (
        <div>
            <div style={{display: "flex", flexDirection: "row"}}>
                {crumbs.map((e, key) => <> {e}</>)}
            </div>
            <div className={styles.container}>
                <div className={styles.one}><ProductImage productId={id}/></div>
                <div className={styles.two}><ProductInfo productId={id}/></div>


                <div className={styles.reviews}></div>
            </div>
        </div>
    );
};

export default Product;

