import React from 'react';
import styles from "../wishList/wishList.module.css"
import {data, TItemWishList} from "../../mock-api/data";
import ProductCard from "../productCard/ProductCard";

const WishList = () => {
    const items:TItemWishList[] = data;
    return (
        <div className={styles.details}>
            <div className={styles.header}>Your WishList</div>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <p className={styles.title}>Product</p>
                    <p className={styles.title}>Price</p>
                    <p className={styles.title}>Action</p>
                </div>
                {items.map(el=>
                    <ProductCard
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        color={el.color}
                        price={el.price}
                        picture={el.picture}/>
                )}
            </div>
        </div>
    );
};

export default WishList;
