import React from 'react';
import './cart.css'
import CartContain from "../cart-contain/cart-contain";
import BeforeCheckout from "../before-checkout/before-checkout";
import percentIcon from "../../../../../icons/ticket-percent.png";
import CartHeader from "../cart-header/cart-header";
interface IProps {
  location: string
}
const Cart = ({location}: IProps) => {
  return (
    <>
      <CartHeader location={location}/>
      <div className="cart_main_container">
        <CartContain/>
        <BeforeCheckout/>
      </div>
      <div className="coupon_container_wide">
        <p className="coupon_header">Have a coupon?</p>
        <p className="coupon_subheader">Add your code for an instant cart discount</p>
        <div className="coupon_input">
          <div className="coupon_code_icon">
            <img src={percentIcon} alt="percent icon"/>
            <input type="text" placeholder={"Coupon Code"} className="code_input" />
          </div>
          <button type="submit" className="apply_button">Apply</button>
        </div>
      </div>
    </>
  );
};

export default Cart;