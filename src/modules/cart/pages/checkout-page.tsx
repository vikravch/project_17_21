import React from 'react';
import {useLocation} from "react-router";
import CheckoutForm from "../presentation/components/checkout-form/checkout-form";
import CartHeader from "../presentation/components/cart-header/cart-header";

const CheckoutPage = () => {
  const location = useLocation();
  return (
    <>
      <CartHeader location={location.pathname}/>
      <CheckoutForm/>
    </>
  );
};

export default CheckoutPage;