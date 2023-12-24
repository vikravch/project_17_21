import React from 'react';
import percentIcon from "../../../../../icons/ticket-percent.png";
import styles from './cart-coupon.module.css'
const CartCoupon = () => {

  return (
    <div className={styles.coupon_container}>
      <p className={styles.coupon_header_item}>Have a coupon?</p>
      <p className={styles.coupon_subheader_item}>Add your code for an instant cart discount</p>
      <div className={styles.coupon_input}>
        <div className={styles.coupon_code_icon}>
          <img src={percentIcon} alt="percent icon"/>
          <input type="text" placeholder={"Coupon Code"} className={styles.code_input} />
        </div>
        <button type="submit" className={styles.apply_button}>Apply</button>
      </div>
    </div>
  );
};
export default CartCoupon;
