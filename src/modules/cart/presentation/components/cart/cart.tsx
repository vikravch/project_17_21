import React from 'react';
import './cart.css'
import arrowBack from '../../../../../icons/chevron_right.png'
import CartContain from "../cart-contain/cart-contain";
import BeforeCheckout from "../before-checkout/before-checkout";
import percentIcon from "../../../../../icons/ticket-percent.png";
const Cart = () => {
  return (
    <>
      <div className="back_arrow">
        <img className="arrow_img" src={arrowBack} alt="arrow back"/>
          <p className="back_arrow_text">back</p>
      </div>
      <p className="header_cart">Cart</p>
      <div className="subheader_container">
        <div className="subheader_box">
          <div className="first_step_circle">
            <p>1</p>
          </div>
          <p className="subheader_step1">Shopping cart</p>
        </div>
        <div className="subheader_box_inactive1">
          <div className="step_circle circle2">
            <p>2</p>
          </div>
          <p className="subheader_step2 subheader2">Checkout details</p>
        </div>
        <div className="subheader_box_inactive2">
          <div className="step_circle circle3">
            <p>3</p>
          </div>
          <p className="subheader_step2 subheader3">Order complete</p>
        </div>
      </div>
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