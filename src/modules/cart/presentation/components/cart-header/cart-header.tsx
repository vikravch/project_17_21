import React from 'react';
import styles from './cart-header.module.css'
import arrowBack from "../../../../../icons/chevron_right.png";
import checkIcon from "../../../../../icons/check_icon.png";
interface IProps {
  location: string
}
const CartHeader = ({location}: IProps) => {
  // if(location === '/cart')
  const cartHeader = <div>
    <div className={styles.back_arrow}>
      <img className={styles.arrow_img} src={arrowBack} alt="arrow back"/>
      <p className={styles.back_arrow_text}>back</p>
    </div>
    <p className={styles.header_cart}>Cart</p>

    <div className={styles.subheader_container}>
      <div className={styles.subheader_box}>
        <div className={styles.first_step_circle}>
          <p>1</p>
        </div>
        <p className={styles.subheader_step1}>Shopping cart</p>
      </div>
      <div className={styles.subheader_box_inactive}>
        <div className={`${styles.step_circle} ${styles.inactive_circle}`}>
          <p>2</p>
        </div>
        <p className={`${styles.subheader_step2} ${styles.subheader2}`}>Checkout details</p>
      </div>
      <div className={styles.subheader_box_inactive}>
        <div className={`${styles.step_circle} ${styles.inactive_circle} ${styles.circle3}`}>
          <p>3</p>
        </div>
        <p className={`${styles.subheader_step2} ${styles.subheader3}`}>Order complete</p>
      </div>
    </div>
  </div>
  const checkoutHeader = <div className={styles.header_container}>
    <div className={styles.back_arrow}>
      <img className={styles.arrow_img} src={arrowBack} alt="arrow back"/>
      <p className={styles.back_arrow_text}>back</p>
    </div>
    <p className={styles.header_cart}>Check Out</p>

    <div className={styles.subheader_container}>
      <div className={styles.step_box_finished}>
        <div className={`${styles.step_circle} ${styles.finished_circle}`}>
          <img src={checkIcon} alt="Check"/>
        </div>
        <p className={`${styles.finished_subheader} ${styles.subheader_order_complete}`}>Shopping cart</p>
      </div>
      <div className={styles.subheader_box}>
        <div className={`${styles.step_circle} ${styles.active_circle}`}>
          <p>2</p>
        </div>
        <p className={styles.subheader_step1}>Checkout details</p>
      </div>
      <div className={styles.subheader_box_inactive}>
        <div className={`${styles.step_circle} ${styles.inactive_circle}`}>
          <p>3</p>
        </div>
        <p className={`${styles.subheader_complete} ${styles.subheader_order_complete}`}>Order complete</p>
      </div>

    </div>
  </div>
  if(location === '/cart')
  return cartHeader;
  else if(location === '/cart/checkout')
    return checkoutHeader
  else
    return null
};

export default CartHeader;