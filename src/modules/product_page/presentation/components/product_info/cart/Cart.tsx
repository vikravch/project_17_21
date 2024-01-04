import React from 'react';

import styles from './Cart.module.css'
import {Img} from "../../temp/constants";


const Cart = () => {
    return (
        <>
            <div className={styles.add_cart}>
                <div className={styles.wishlist}>
                    <div className={styles.counter}>
                        <button className={styles.onChange}>-</button>
                        <p className={styles.count}>1</p>
                        <button className={styles.onChange}>+</button>
                    </div>
                    <button className={styles.clicked_wish}><img src={Img[3].img}/> <span>Wishlist</span> </button>
                </div>
                <button className={styles.final_cart}>Add to cart</button>
            </div>
            <hr/>
        </>
    );
};

export default Cart;