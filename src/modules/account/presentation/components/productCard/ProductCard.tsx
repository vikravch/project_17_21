import React from 'react';
import styles from "./productCard.module.css"
import closeIcon from '../../../images/close_icon.webp'
import {useDispatch} from "react-redux";
import {removeFromWishList} from "../../../redux/accountSlice";
import {addItemCart} from "../../../../cart/presentation/redux/cartSlice";
import {TItemWishList} from "../../../redux/types";
import Button from "../button/Button";



const ProductCard = ({id, name, color, actualPrice, image, fullPrice, sale, description, isNew, rating, quantity}: TItemWishList) => {
    const dispatch = useDispatch();
    const handleRemoveFromWishList = () => {
        dispatch(removeFromWishList(id));
    };

    const addToCart = () => {
        const subtotal = parseFloat((actualPrice * quantity).toFixed(2));
        const productForCart = {
            id,
            name,
            image,
            actualPrice,
            fullPrice,
            sale,
            description,
            isNew,
            rating,
            color,
            amount: 1,
            quantity: 1,
            subtotal
        };

        dispatch(addItemCart({
            product: productForCart,
            quantity: 1
        }));
    };

    return (
        <article className={styles.productContainer}>
            <div className={styles.cartItem}>
                <div>
                    <img onClick={handleRemoveFromWishList} className={styles.icon} src={closeIcon} alt="close icon"/>
                </div>
                <div className={styles.content}>
                    <img className={styles.itemImage} src={image} alt={name}/>
                </div>
                <div className={styles.itemInfo}>
                    <p className={styles.nameProduct}>{name}</p>
                    <p className={styles.colorTextProduct}> Color:{color}</p>
                    <p className={styles.priceMobile}>{actualPrice}</p>
                </div>
            </div>
            <div className={styles.price}>
                <p>{actualPrice}</p>
            </div>
            <Button type={"button"} onClick={addToCart} >Add to cart</Button>
        </article>
    );
};

export default ProductCard;