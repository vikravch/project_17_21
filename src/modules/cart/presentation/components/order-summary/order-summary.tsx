import React, {useState} from 'react';
import percentIcon from "../../../../../icons/ticket-percent.png";
import {codes} from "../../mock-api/data";
import styles from "./order-summary.module.css";
import CartProductCard from "../cart-product-card/cart-product-card";
import {useAppSelector} from "../../../../../general/redux/hooks";

const OrderSummary = () => {

  const {items, totalPrice, subtotalPrice} = useAppSelector(state => state.cart);
  const [discountCode, setDiscountCode] = useState('');
  const [bonus, setBonus] = useState('');
  const [bonusToRender, setBonusToRender] = useState('')
  const[errorBonus, setErrorBonus] = useState('')

  const handleApply = () => {
    if(Object.keys(codes).includes(discountCode)) {
      setErrorBonus('')
      let value = codes[discountCode];
      setBonus(value);
      setBonusToRender(discountCode);
      setDiscountCode('');
    }
    else {
      setErrorBonus("The code is expired or doesn't exist")
    }
  }
  const handleRemoveBonus = () => {
    setBonus('');
    setBonusToRender('');
  }
  return (
      <div className={styles.order_summary}>
        <p className={styles.summary_header}>Order summary</p>
        <div className={styles.order_summary_cards}>
          {items.map(el => <CartProductCard
            key={el.id}
            {...el}/>)}
        </div>
        <div className={styles.promo_input}>
          <input className={styles.promo_code_text}
                 type="text"
                 placeholder="Input code"
                 value={discountCode}
                 onChange={(e) => (setDiscountCode(e.target.value))}/>
          <div className={`${styles.button_container} ${styles.discount_button}`}>
            <button type="button" className={`${styles.promo_button} ${styles.code_input_button}`} onClick={handleApply}>Apply</button>
          </div>
        </div>
        {errorBonus && <div className={styles.errors_coupon}>{errorBonus}</div>}
        <div className={styles.order_info_container}>
          <div className={styles.discount_info_group}>
            <img src={percentIcon} className={styles.percent_icon} alt="percent icon"/>
            <p className={styles.discount_code_text}>{bonusToRender}</p>
          </div>
          <div className={styles.discount_info_group}>
            <p className={`${styles.discount_amount_text} ${styles.discount_typography}`}>{bonus}</p>
            <button className={`${styles.remove_discount} ${styles.discount_typography}`} onClick={handleRemoveBonus}>[Remove]</button>
          </div>
        </div>
        <div className={styles.order_info_container}>
          <p className={styles.order_contain_info}>Shipping</p>
          <p className={styles.order_contain_price}>Free</p>
        </div>
        <div className={styles.order_info_container}>
          <p className={styles.order_contain_info}>Subtotal</p>
          <p className={styles.order_contain_price}>{`$${subtotalPrice}`}</p>
        </div>
        <div className={`${styles.order_info_container} ${styles.total_price}`}>
          <p className={styles.order_total}>Total</p>
          <p className={styles.order_total}>{`$${totalPrice}`}</p>
        </div>
      </div>
  );
};

export default OrderSummary;