import React, {useState} from 'react';
import percentIcon from "../../../../../icons/ticket-percent.png";
import {codes, mockOrder} from "../../mock-api/data";
import "./order-summary.css";
import ProductCard from "../product-card/product-card";

const OrderSummary = () => {

  const items = mockOrder.items;
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
      <div className="order_summary">
        <p className="summary_header">Order summary</p>
        <div className="order_summary_cards">
          {items.map(el => <ProductCard
            key={el.id}
            id={el.id}
            name={el.name}
            color={el.color}
            price={el.price}
            picture={el.picture}
            amount={el.amount}/>)}
        </div>
        <div className="promo_input">
          <input className="promo_code_text"
                 type="text"
                 placeholder="Input code"
                 value={discountCode}
                 onChange={(e) => (setDiscountCode(e.target.value))}/>
          <div className="button_container discount_button">
            <button type="button" className="promo_button button" onClick={handleApply}>Apply</button>
          </div>
        </div>
        {errorBonus && <div className='errors_coupon'>{errorBonus}</div>}
        <div className="order_info_container">
          <div className="discount_info_group">
            <img src={percentIcon} className="percent_icon" alt="percent icon"/>
            <p className="discount_code_text">{bonusToRender}</p>
          </div>
          <div className="discount_info_group ">
            <p className="discount_amount_text discount_typography">{bonus}</p>
            <button className="remove_discount discount_typography" onClick={handleRemoveBonus}>[Remove]</button>
          </div>
        </div>
        <div className="order_info_container">
          <p className="order_contain_info">Shipping</p>
          <p className="order_contain_price">Free</p>
        </div>
        <div className="order_info_container">
          <p className="order_contain_info">Subtotal</p>
          <p className="order_contain_price">$99.00</p>
        </div>
        <div className="order_info_container total_price">
          <p className="order_total">Total</p>
          <p className="order_total">$234.00</p>
        </div>
      </div>
  );
};

export default OrderSummary;