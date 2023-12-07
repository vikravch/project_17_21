import React from 'react';
import {useLocation} from "react-router";
import CartHeader from "../presentation/components/cart-header/cart-header";
import OrderCompleteInfo from "../presentation/components/order-complete-info/order-complete_info";
import styles from './pages_style.module.css'

const CompletePage = () => {
  const location = useLocation()
  return (
    <div className={styles.complete_page_container}>
      <CartHeader location={location.pathname}/>
      <OrderCompleteInfo/>
    </div>
  );
};

export default CompletePage;