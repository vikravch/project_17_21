import React from 'react';
import percentIcon from "../../../../../icons/ticket-percent.png";
import './cart-coupon.css'
const CartCoupon = () => {

  return (
    <div className="coupon_container ">
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
  );
};
export default CartCoupon;
