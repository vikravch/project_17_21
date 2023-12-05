import React from 'react';
import './cart.css'
import CartContain from "../cart-contain/cart-contain";
import BeforeCheckout from "../before-checkout/before-checkout";
import CartHeader from "../cart-header/cart-header";
import CartCoupon from "../cart-coupon/cart-coupon";
interface IProps {
  location: string
}
const Cart = ({location}: IProps) => {
  return (
    <>
      <CartHeader location={location}/>
      <main>
        <div className="cart_main_container">
          <CartContain/>
          <BeforeCheckout/>
        </div>
        <div className="isShow_wide">
          <CartCoupon/>
        </div>
      </main>

    </>
  );
};

export default Cart;
