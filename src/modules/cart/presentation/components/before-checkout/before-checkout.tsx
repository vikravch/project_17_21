import React, {useState} from 'react';
import styles from './before-checkout.module.css'
import {Link} from "react-router-dom";
import CartCoupon from "../cart-coupon/cart-coupon";
import {useAppSelector} from "../../../../../general/redux/hooks";

const BeforeCheckout = () => {
  const [selectedOption, setSelectedOption] = useState('free');
  const {totalPrice, subtotalPrice} = useAppSelector(state => state.cart);
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target) {
      setSelectedOption(event.target.value);
    }
  }

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

  }
  return (
    <section className={styles.container_before_checkout}>
      <div className={styles.isShow}>
        <CartCoupon/>
      </div>
      <form className={styles.cart_summary}>
        <p className={styles.cart_summary_header}>Cart summary</p>
       <div className={styles.cart_summary_delivery}>
         <div>
           <label htmlFor="free" className={styles.radio_descr}>
           <input
             className={styles.cart_input_radio}
             type="radio"
                  name="free"
                  id="free"
                  value="free"
                  checked={selectedOption === 'free'}
                  onChange={e => {handleOptionChange(e)}}/>
             <span className={styles.custom_radio}></span>
           Free shipping</label>
         </div>
         <p className={styles.radio_descr}>$0.00</p>
       </div>
        <div className={styles.cart_summary_delivery}>
          <div>
            <label htmlFor="express" className={styles.radio_descr}>
            <input
              className={styles.cart_input_radio}
              type="radio"
                   name="express"
                   id="express"
                   value="express"
                   checked={selectedOption === 'express'}
                   onChange={e => {handleOptionChange(e)}}/>
            <span className={styles.custom_radio}></span>
            Express shipping</label>
          </div>
          <p className={styles.radio_descr}>$15.00</p>
        </div >
        <div className={styles.cart_summary_delivery}>
          <div>
            <label htmlFor="pick" className={styles.radio_descr}>
            <input
              className={styles.cart_input_radio}
                  type="radio"
                   name="pick"
                   id="pick"
                   value="pick"
                   checked={selectedOption === 'pick'}
                   onChange={e => {handleOptionChange(e)}}/>
            <span className={styles.custom_radio}></span>
            Pick Up</label>
          </div>
          <p className={styles.radio_descr}>%21.00</p>
        </div>
        <div className={styles.cart_subtotal}>
          <p>Subtotal</p>
          <p className={styles.subtotal_price}>{`$${subtotalPrice}`}</p>
        </div>
        <div className={styles.cart_total}>
          <p>Total</p>
          <p>{`$${totalPrice}`}</p>
        </div>
        <Link to={"/cart/checkout"}>
          <div className={styles.cart_button_container} >
            <button className={styles.cart_button} type="submit" onSubmit={onSubmit}>Checkout</button>
          </div>
        </Link>
      </form>

    </section>

  );
};

export default BeforeCheckout;