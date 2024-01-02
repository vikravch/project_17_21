import React, {useEffect, useState} from 'react';
import styles from './before-checkout.module.css'
import {Link} from "react-router-dom";
import CartCoupon from "../cart-coupon/cart-coupon";
import {useAppDispatch, useAppSelector} from "../../../../../general/redux/hooks";
import {setShipping} from "../../redux/cartSlice";
import {shippingOptions} from "../../../utils";

const BeforeCheckout = () => {
  const [selectedOption, setSelectedOption] = useState('Free');
  const {totalPrice, subtotalPrice, shipping} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target) {
      dispatch(setShipping(event.target.value));
    }
  }
  useEffect(() => {
    setSelectedOption(shipping);
  }, [shipping])

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
           <label htmlFor="Free" className={styles.radio_descr}>
           <input
             className={styles.cart_input_radio}
             type="radio"
                  name="Free"
                  id="Free"
                  value="Free"
                  checked={selectedOption === 'Free'}
                  onChange={e => {handleOptionChange(e)}}/>
             <span className={styles.custom_radio}></span>
           Free shipping</label>
         </div>
         <p className={styles.radio_descr}>{`$${shippingOptions.free}.00`}</p>
       </div>
        <div className={styles.cart_summary_delivery}>
          <div>
            <label htmlFor="Express" className={styles.radio_descr}>
            <input
              className={styles.cart_input_radio}
              type="radio"
                   name="Express"
                   id="Express"
                   value="Express"
                   checked={selectedOption === 'Express'}
                   onChange={e => {handleOptionChange(e)}}/>
            <span className={styles.custom_radio}></span>
            Express shipping</label>
          </div>
          <p className={styles.radio_descr}>{`$${shippingOptions.express}.00`}</p>
        </div >
        <div className={styles.cart_summary_delivery}>
          <div>
            <label htmlFor="Pick Up" className={styles.radio_descr}>
            <input
              className={styles.cart_input_radio}
                  type="radio"
                   name="Pick Up"
                   id="Pick Up"
                   value="Pick Up"
                   checked={selectedOption === 'Pick Up'}
                   onChange={e => {handleOptionChange(e)}}/>
            <span className={styles.custom_radio}></span>
            Pick Up</label>
          </div>
          <p className={styles.radio_descr}>{`${shippingOptions.pick}%`}</p>
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