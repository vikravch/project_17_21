import React from 'react';
import styles from './cart-header.module.css'
import arrowBack from "../../../../../icons/chevron_right.png";
import checkIcon from "../../../../../icons/check_icon.png";
import {Link} from "react-router-dom";
interface IProps {
  location: string
}
const CartHeader = ({location}: IProps) => {
  const cartHeader = <header className={styles.header_container}>
    <div className={styles.back_arrow}>
      <img className={styles.arrow_img} src={arrowBack} alt="arrow back"/>
      <p className={styles.back_arrow_text}>back</p>
    </div>
    <h1 className={styles.header_cart}>Cart</h1>
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
  </header>

  const checkoutHeader = <header className={styles.header_container}>
    <Link to={"/cart"} className={styles.link_style}>
      <div className={styles.back_arrow}>
        <img className={styles.arrow_img} src={arrowBack} alt="arrow back"/>
        <p className={styles.back_arrow_text}>back</p>
      </div>
    </Link>
    <h1 className={styles.header_cart}>Check Out</h1>
    <div className={styles.subheader_container}>
      <div className={styles.step_box_finished}>
        <div className={`${styles.step_circle} ${styles.finished_circle}`}>
          <img src={checkIcon} alt="Check"/>
        </div>
        <Link to={"/cart"}><p className={`${styles.finished_subheader} ${styles.subheader_order_complete}`}>Shopping cart</p></Link>
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
  </header>

  const completeHeader = <header className={styles.header_container}>
    <div className={`${styles.back_arrow} ${styles.back_arrow_complete}`}>
      <img className={styles.arrow_img} src={arrowBack} alt="arrow back"/>
      <p className={styles.back_arrow_text}>back to home</p>
    </div>
    <h1 className={styles.header_cart}>Complete!</h1>
    <div className={`${styles.subheader_container} ${styles.subheader_container_complete}`}>
      <div className={styles.step_box_finished}>
        <div className={`${styles.step_circle} ${styles.finished_circle}`}>
          <img src={checkIcon} alt="Check"/>
        </div>
        <p className={`${styles.finished_subheader} ${styles.subheader_order_complete}`}>Shopping cart</p>
      </div>
      <div className={`${styles.step_box_finished} ${styles.is_active}`}>
        <div className={`${styles.step_circle} ${styles.finished_circle}`}>
          <img src={checkIcon} alt="Check"/>
        </div>
        <p className={`${styles.finished_subheader} ${styles.subheader_order_complete}`}>Checkout details</p>
      </div>
      <div className={styles.subheader_box}>
        <div className={`${styles.step_circle} ${styles.active_circle}`}>
          <p>3</p>
        </div>
        <p className={styles.subheader_step1}>Order complete</p>
      </div>
    </div>
  </header>
  if(location === '/cart')
    return cartHeader;
  else if(location === '/cart/checkout')
    return checkoutHeader
  else if(location === '/cart/checkout/complete')
    return completeHeader
  else
    return null
};

export default CartHeader;