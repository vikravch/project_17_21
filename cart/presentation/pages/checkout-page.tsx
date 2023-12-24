import React from 'react';
import {useLocation} from "react-router";
import CheckoutForm from "../components/checkout-form/checkout-form";
import CartHeader from "../components/cart-header/cart-header";
import styles from './pages_style.module.css'

const CheckoutPage = () => {
  const location = useLocation();
  return (
    <div className={styles.main_wrapper}>
      <CartHeader location={location.pathname}/>
      <CheckoutForm/>
    </div>
  );
};

export default CheckoutPage;