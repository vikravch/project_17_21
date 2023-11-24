import React from 'react';
import minusIcon from "../../../../../icons/minus_icon.png";
import plusIcon from "../../../../../icons/plus_icon.png";
import {TItem} from "../../mock-api/data";
import './product-card-checkout.css'
const ProductCardCheckout = ({id, name, color, price, picture, quantity}: TItem) => {
  return (
    <div className="product_card_checkout">
      <img className="product_img" src={picture} alt="product"/>
      <div className="product_description">
        <div className="product_info">
          <p className="product_title">{name}</p>
          <p className="product_color">Color: {color}</p>
          <div className="product_counter">
            <img className="counter_icon" src={minusIcon} alt="minus icon"/>
            <p className="item_quantity">{quantity}</p>
            <img className="counter_icon" src={plusIcon} alt="plus icon"/>
          </div>
        </div>
      </div>
      <p className="product_price">{price}</p>
    </div>
  );
};

export default ProductCardCheckout;