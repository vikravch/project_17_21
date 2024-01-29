import React from 'react';
import {TItemWishList} from "../../mock-api/data";
import styles from "./productCard.module.css"
import closeIcon from '../../../images/close_icon.webp'

const ProductCard = ({id, name, color, price, picture}: TItemWishList) => {
    return (
        <article className={styles.productContainer}>
            <div className={styles.cartItem}>
                <div>
                    <img className={styles.icon} src={closeIcon} alt="close icon"/>
                </div>
                <div className={styles.content}>
                    <img className={styles.itemImage} src={picture} alt={name}/>
                </div>
                <div className={styles.itemInfo}>
                    <p className={styles.nameProduct}>{name}</p>
                    <p className={styles.colorTextProduct}> Color:{color}</p>
                    <p className={styles.priceMobile}>{price}</p>
                </div>
            </div>
            <div className={styles.price}>
                <p>{price}</p>
            </div>
            <button className={styles.button}>Add to cart</button>
        </article>
    );
};

export default ProductCard;