import React, {useState} from 'react';

import styles from './Cart.module.css'
import {Img} from "../../temp/constants";
import {useAppDispatch, useAppSelector} from "../../../../../../general/redux/hooks";
import {addItemCart} from "../../../../../cart/presentation/redux/cartSlice";
import Product_Page from "../../../../domain/model/product_Page";
import {Link} from "react-router-dom";


type product = {
    product: Product_Page | undefined
}

const Cart = ({product}: product) => {

    const [count, setCount] = useState(1);
    const [error, setError] = useState('');
    const color = useAppSelector(state => state.colorPage.color);
    const dispatch = useAppDispatch();

    const addHandler = () => {
        let productPage =
            {
                id: product?.id,
                name: product?.name,
                image: product?.image,
                actualPrice: product?.actualPrice,
                fullPrice: product?.fullPrice,
                sale: product?.sale,
                description: product?.description,
                isNew: product?.isNew,
                rating: product?.rating,
                color: color,
                amount: count
            }
        if (color === undefined) {
            setError('Required to pick the color');
        } else {
            dispatch(addItemCart({
                product: productPage,
                quantity: count
            }));
        }

    }

    return (
        <>
            <div className={styles.add_cart}>
                <div className={styles.wishlist}>
                    <div className={styles.counter}>
                        <button className={styles.onChange}
                                onClick={() => setCount(prevState => prevState === 1 ? prevState : prevState - 1)}>-
                        </button>
                        <p className={styles.count}>{count}</p>
                        <button className={styles.onChange} onClick={() => setCount(prevState => prevState + 1)}>+
                        </button>
                    </div>
                    <button className={styles.clicked_wish}><img src={Img[3].img}/> Wishlist</button>
                </div>
                <button className={styles.final_cart} onClick={addHandler}>Add to cart</button>
            </div>
            <hr/>
        </>
    );
};

export default Cart;