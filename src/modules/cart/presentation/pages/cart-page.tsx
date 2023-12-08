import React from 'react';
import Cart from "../components/cart/cart";
import {useLocation} from "react-router";
const CartPage = () => {
  const location = useLocation();
  return (
    <>
      <Cart location={location.pathname}/>
    </>
  );
};

export default CartPage;