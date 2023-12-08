import React, {useState} from 'react';
import './before-checkout.css'
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
    <section className="container_before_checkout">
      <div className="isShow">
        <CartCoupon/>
      </div>
      <form className="cart_summary">
        <p className="cart_summary_header">Cart summary</p>
       <div className="cart_summary_delivery">
         <div>
           <label htmlFor="free" className="radio_descr">
           <input type="radio"
                  name="free"
                  id="free"
                  value="free"
                  checked={selectedOption === 'free'}
                  onChange={e => {handleOptionChange(e)}}/>
             <span className="custom_radio"></span>
           Free shipping</label>
         </div>
         <p className="radio_descr">$0.00</p>
       </div>
        <div className="cart_summary_delivery">
          <div>
            <label htmlFor="express" className="radio_descr">
            <input type="radio"
                   name="express"
                   id="express"
                   value="express"
                   checked={selectedOption === 'express'}
                   onChange={e => {handleOptionChange(e)}}/>
            <span className="custom_radio"></span>
            Express shipping</label>
          </div>
          <p className="radio_descr">$15.00</p>
        </div >
        <div className="cart_summary_delivery">
          <div>
            <label htmlFor="pick" className="radio_descr">
            <input type="radio"
                   name="pick"
                   id="pick"
                   value="pick"
                   checked={selectedOption === 'pick'}
                   onChange={e => {handleOptionChange(e)}}/>
            <span className="custom_radio"></span>
            Pick Up</label>
          </div>
          <p className="radio_descr">%21.00</p>
        </div>
        <div className="cart_subtotal">
          <p>Subtotal</p>
          <p className="subtotal_price">{`$${subtotalPrice}`}</p>
        </div>
        <div className="cart_total">
          <p>Total</p>
          <p>{`$${totalPrice}`}</p>
        </div>
        <Link to={"/cart/checkout"}>
          <div className="button_container" >
            <button className="button" type="submit" onSubmit={onSubmit}>Checkout</button>
          </div>
        </Link>
      </form>

    </section>

  );
};

export default BeforeCheckout;