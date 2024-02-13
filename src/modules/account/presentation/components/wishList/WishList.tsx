import React from 'react';
import styles from "./wishList.module.css"
import ProductCard from "../productCard/ProductCard";
import {useAppSelector} from "../../../../../general/redux/hooks";
import {TItemWishList} from "../../../redux/types";



const WishList = () => {
    const {wishList} = useAppSelector(state=>state.account);

    return (
        <section className={styles.contentWishList}>
            <h2 className={styles.header}>Your WishList</h2>
            <div className={styles.tableHeader}>
                <p className={styles.title}>Product</p>
                <p className={styles.title}>Price</p>
                <p className={styles.title}>Action</p>
            </div>
            <div className={styles.mobileHeader}>Product</div>
            <ul>
                {wishList.map((el:TItemWishList) =>
                    <li key={el.id}>
                        <ProductCard {...el}/>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default WishList;
