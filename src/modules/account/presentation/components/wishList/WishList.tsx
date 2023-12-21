import React from 'react';
import styles from "../wishList/wishList.module.css"
import {dataWishList} from "../../mock-api/data";
import ProductCard from "../productCard/ProductCard";

const WishList = () => {
    return (
        <section className={styles.contentWishList}>
            <h2 className={styles.header}>Your WishList</h2>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <p className={styles.title}>Product</p>
                    <p className={styles.title}>Price</p>
                    <p className={styles.title}>Action</p>
                </div>
                <ul>
                    {dataWishList.map(el =>
                        <li key={el.id}>
                            <ProductCard {...el}/>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default WishList;
