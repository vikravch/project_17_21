import React from 'react';
import CartProductCard from "../cart-product-card/cart-product-card";
import styles from './cart-contain.module.css'
import {useAppSelector} from "../../../../../general/redux/hooks";
const CartContain = () => {
  const {items} = useAppSelector(state => state.cart);
  console.log(items)
  return (
    <section className={styles.contain_container}>
      <div className={styles.table_header}>
        <p className={styles.table_header_item}>Product</p>
      </div>
      <div className={styles.table_header_wide}>
        <p className={styles.table_header_item}>Product</p>
        <div className={styles.table_header_wide_additional}>
          <p className={styles.table_header_item}>Quantity</p>
          <p className={styles.table_header_item}>Price</p>
          <p className={styles.table_header_item}>Subtotal</p>
        </div>
      </div>
      {items.length === 0 ? <p className={styles.cart_contain}>Your cart is empty</p> :
        items.map(el =>
          <CartProductCard key={el.id} {...el}/>)
      }
    </section>
  );
};
export default CartContain;
