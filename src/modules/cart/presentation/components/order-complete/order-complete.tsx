import React from 'react';
import HeaderComplete from "../header-complete/header-complete";
import OrderCompleteInfo from "../order-complete-info/order-complete_info";
import './order-complete.css'
const OrderComplete = () => {
  return (
    <div className="complete_page_container">
      <HeaderComplete/>
      <OrderCompleteInfo/>
    </div>
  );
};

export default OrderComplete;