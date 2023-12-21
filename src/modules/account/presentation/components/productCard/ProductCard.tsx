import React from 'react';
import {TItemWishList} from "../../mock-api/data";
import styles from "../productCard/productCard.module.css"
import closeIcon from '../../../images/close_icon.webp'

const ProductCard = ({id, name, color, price, picture}: TItemWishList) => {
    return (
        <article className={styles.productContainer}>
            <div className={styles.productInfo}>
                <div className={styles.cartItem}>
                    <img className={styles.icon} src={closeIcon} alt="close icon"/>
                    <div className={styles.content}>
                        <img className={styles.itemImage} src={picture} alt={name}/>
                        <div className={styles.itemInfo}>
                            <div className={styles.product}>
                                <p>{name}</p>
                                <p className={styles.colorTextProduct}> Color:{color}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.priceBox}>
                <div className={styles.price}>{price}</div>
            </div>
            <div className={styles.buttonBox}>
                <button className={styles.button}>Add to cart</button>
            </div>
        </article>
    );
};

export default ProductCard;