import React from 'react';
import Cart from "../presentation/components/cart/cart";
import {useLocation} from "react-router";
const CartPage = () => {
  const location = useLocation();
  return (
    <>
      <div>Here will be HeaderNavElement</div>
      <Cart location={location.pathname}/>
      <div>Here will be Footer</div>
    </>
  );
};

export default CartPage;