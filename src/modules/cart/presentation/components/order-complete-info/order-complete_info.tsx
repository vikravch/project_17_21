import React from 'react';
import './order-complete-info.css'
import {mockOrder} from "../../mock-api/data";
const OrderCompleteInfo = () => {
  const items = mockOrder.items
  const orderTotalPrice = items.reduce((acc: number, i) => {
    const price = +i.price * i.quantity
    return acc += price
  }, 0)
  return (
    <div className="order_complete_container">
      <div>
        <p className="thanks_text">Thank you! 🎉</p>
        <p className="order_info_text">Your order has been received</p>
      </div>
      <div className="order_info_images">
        {items.map((el) => {
          return (<div key={el.id} className="img_wrapper">
            <div className="product_amount">
              <p className="el_quantity">{el.quantity}</p>
            </div>
            <img className="order_info_img" src={el.picture} alt={el.name} />
          </div>)
        })}

      </div>
      <div className="order_details">
        <div className="order_item">
          <p className="order_item_key">Order code:</p>
          <p className="order_item_value">{mockOrder.orderNumber}</p>
        </div>
        <div className="order_item">
          <p className="order_item_key">Date</p>
          <p className="order_item_value">{mockOrder.date}</p>
        </div>
        <div className="order_item">
          <p className="order_item_key">Total</p>
          <p className="order_item_value">{orderTotalPrice}</p>
        </div>
        <div className="order_item">
          <p className="order_item_key">Payment method:</p>
          <p className="order_item_value">{mockOrder.payment_method}</p>
        </div>
      </div>

      <div className="order_details_wide">
        <div className="order_list">
          <p className="order_item_key">Order code:</p>
          <p className="order_item_key">Date</p>
          <p className="order_item_key">Total</p>
          <p className="order_item_key">Payment method:</p>
        </div>
        <div className="order_list">
          <p className="order_item_value">{mockOrder.orderNumber}</p>
          <p className="order_item_value">{mockOrder.date}</p>
          <p className="order_item_value">{orderTotalPrice}</p>
          <p className="order_item_value">{mockOrder.payment_method}</p>
        </div>
      </div>

      <div className="button_history_container">
        <button type="button" className="button_history">Purchase history</button>
      </div>
    </div>
  );
};

export default OrderCompleteInfo;