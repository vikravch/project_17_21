import React from 'react';
import styles from './order-complete-info.module.css'
import {mockOrder} from "../../mock-api/data";
import {useAppSelector} from "../../../../../general/redux/hooks";
const OrderCompleteInfo = () => {
  const {items} = useAppSelector(state => state.cart);
  const orderTotalPrice = items.reduce((acc: number, i) => {
    const price = +i.actualPrice * i.quantity
    return acc += price
  }, 0)
  return (
    <div className={styles.order_complete_container}>
      <div>
        <p className={styles.thanks_text}>Thank you! 🎉</p>
        <p className={styles.order_info_text}>Your order has been received</p>
      </div>
      <div className={styles.order_info_images}>
        {items.map((el) => {
          return (<div key={el.id} className={styles.img_wrapper}>
            <div className={styles.product_amount}>
              <p className={styles.el_quantity}>{el.quantity}</p>
            </div>
            <img className={styles.order_info_img} src={el.image} alt={el.name} />
          </div>)
        })}

      </div>
      <div className={styles.order_details}>
        <div className={styles.order_item}>
          <p className={styles.order_item_key}>Order code:</p>
          <p className={styles.order_item_value}>{mockOrder.orderNumber}</p>
        </div>
        <div className={styles.order_item}>
          <p className={styles.order_item_key}>Date</p>
          <p className={styles.order_item_value}>{mockOrder.date}</p>
        </div>
        <div className={styles.order_item}>
          <p className={styles.order_item_key}>Total</p>
          <p className={styles.order_item_value}>{orderTotalPrice}</p>
        </div>
        <div className={styles.order_item}>
          <p className={styles.order_item_key}>Payment method:</p>
          <p className={styles.order_item_value}>{mockOrder.payment_method}</p>
        </div>
      </div>

      <div className={styles.order_details_wide}>
        <div className={styles.order_list}>
          <p className={styles.order_item_key}>Order code:</p>
          <p className={styles.order_item_key}>Date</p>
          <p className={styles.order_item_key}>Total</p>
          <p className={styles.order_item_key}>Payment method:</p>
        </div>
        <div className={styles.order_list}>
          <p className={styles.order_item_value}>{mockOrder.orderNumber}</p>
          <p className={styles.order_item_value}>{mockOrder.date}</p>
          <p className={styles.order_item_value}>{orderTotalPrice}</p>
          <p className={styles.order_item_value}>{mockOrder.payment_method}</p>
        </div>
      </div>

      <div className={styles.button_history_container}>
        <button type="button" className={styles.button_history}>Purchase history</button>
      </div>
    </div>
  );
};

export default OrderCompleteInfo;