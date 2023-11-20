import React, {useState} from 'react';
import percentIcon from '../../../../../icons/ticket-percent.png'
import {mockOrder} from "../../mock-api/data";
import './before-checkout.css'
const BeforeCheckout = () => {
  const [selectedOption, setSelectedOption] = useState('free');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target) {
      setSelectedOption(event.target.value);
    }
  }
  const orderItems = mockOrder.items;
  const orderTotalPrice = orderItems.reduce((acc: number, i) => {
    const price = +i.price.replace('$', '')
    return acc += price
  }, 0)
  return (
    <section className="container_before_checkout">
      <div className="coupon_container">
        <p className="coupon_header_item">Have a coupon?</p>
        <p className="coupon_subheader_item">Add your code for an instant cart discount</p>
        <div className="coupon_input">
          <div className="coupon_code_icon">
            <img src={percentIcon} alt="percent icon"/>
            <input type="text" placeholder={"Coupon Code"} className="code_input" />
          </div>
          <button type="submit" className="apply_button">Apply</button>
        </div>
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
          <p className="radio_descr">+$15.00</p>
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
          <p className="subtotal_price">${orderTotalPrice}</p>
        </div>
        <div className="cart_total">
          <p>Total</p>
          <p>${orderTotalPrice}</p>
        </div>
        <div className="checkout_button_container">
          <button className="checkout_button" type="submit">Checkout</button>
        </div>
      </form>
    </section>
  );
};

export default BeforeCheckout;