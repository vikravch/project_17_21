import React from 'react';
import closeIcon from '../../../../../icons/close_icon.png'
import minusIcon from '../../../../../icons/minus_icon.png'
import plusIcon from '../../../../../icons/plus_icon.png'
import styles from './cart-product-card.module.css'
import {useLocation} from "react-router";
import {TItem} from "../../types";
import {useAppDispatch} from "../../../../../general/redux/hooks";
import {decreaseAmount, deleteItemCart, increaseAmount} from "../../redux/cartSlice";

const CartProductCard:React.FC<TItem> = ({id, name, color, actualPrice, image, quantity, subtotal}: TItem) => {
const location = useLocation();
const dispatch = useAppDispatch();
const removeItem = () => {
  dispatch(deleteItemCart(id));
}
const plusItem = () => {
  dispatch(increaseAmount(id));
}
const minusItem = () => {
  dispatch(decreaseAmount(id));
}

const productCard = <div className={styles.product_card}>
  <img className={`${styles.item_img} ${styles.item_hide_900}`} src={image} alt="product"/>
  <div className={`${styles.item_description} ${styles.item_hide_900}`}>
    <div className={styles.item_info1}>
      <p className={styles.item_title}>{name}</p>
      <p className={styles.item_color}>Color: {color}</p>
      <div className={styles.item_counter}>
        <img onClick={minusItem} className={styles.counter_icon} src={minusIcon} alt="minus icon"/>
        <p className={styles.item_quantity}>{quantity}</p>
        <img onClick={plusItem} className={styles.counter_icon} src={plusIcon} alt="plus icon"/>
      </div>
    </div>
    <div className={styles.item_info2}>
      <p className={styles.item_price}>{`$${actualPrice}`}</p>
      <img onClick={removeItem} className={styles.item_closeIcon} src={closeIcon} alt="close icon"/>
    </div>
  </div>
  <div className={styles.item_image_descr_wide}>
    <img className={styles.item_img_wide} src={image} alt="product"/>
    <div className={styles.item_info_wide}>
      <p className={styles.item_title_wide}>{name}</p>
      <p className={styles.item_color_wide}>Color: {color}</p>
      <div onClick={removeItem} className={styles.item_remove}>
        <img className={styles.item_closeIcon} src={closeIcon} alt="close icon"/>
        <p className={styles.text_remove}>Remove</p>
      </div>
    </div>
  </div>
  <div className={styles.item_info2_wide}>
    <div className={styles.item_counter}>
      <img onClick={minusItem} className={styles.counter_icon} src={minusIcon} alt="minus icon"/>
      <p className={styles.item_quantity}>{quantity}</p>
      <img onClick={plusItem} className={styles.counter_icon} src={plusIcon} alt="plus icon"/>
    </div>
    <p className={styles.price_wide}>{`$${actualPrice}`}</p>
    <p className={styles.subtotal_wide}>{`$${subtotal}`}</p>
  </div>
</div>

  const productCardCheckout = <div className={styles.product_card}>
    <img className={styles.item_img} src={image} alt="product"/>
    <div className={styles.item_description}>
      <div className={styles.item_info1}>
        <p className={styles.item_title}>{name}</p>
        <p className={styles.item_color}>Color: {color}</p>
        <div className={styles.item_counter}>
          <img onClick={minusItem} className={styles.counter_icon} src={minusIcon} alt="minus icon"/>
          <p className={styles.item_quantity}>{quantity}</p>
          <img onClick={plusItem} className={styles.counter_icon} src={plusIcon} alt="plus icon"/>
        </div>
      </div>
    </div>
    <p className={styles.product_price}>{`$${actualPrice}`}</p>
  </div>

  if(location.pathname === '/cart')
    return productCard;
  else if(location.pathname === '/cart/checkout')
    return productCardCheckout;
  else
    return null;
};
export default CartProductCard;
