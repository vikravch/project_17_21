import React from 'react';
import {TItem} from "../../mock-api/data";
import closeIcon from '../../../../../icons/close_icon.png'
import minusIcon from '../../../../../icons/minus_icon.png'
import plusIcon from '../../../../../icons/plus_icon.png'
import './product-card.css'

const ProductCard = ({id, name, color, price, picture, quantity}: TItem) => {

  return (
    <div className="product_card">
      <img className="item_img" src={picture} alt="product"/>
      <div className="item_description">
        <div className="item_info1">
          <p className="item_title">{name}</p>
          <p className="item_color">Color: {color}</p>
          <div className="item_counter">
            <img className="counter_icon" src={minusIcon} alt="minus icon"/>
            <p className="item_quantity">{quantity}</p>
            <img className="counter_icon" src={plusIcon} alt="plus icon"/>
          </div>
        </div>
        <div className="item_info2">
          <p className="item_price">{price}</p>
          <img className="item_closeIcon" src={closeIcon} alt="close icon"/>
        </div>
      </div>
      <div className="item_image_descr_wide">
        <img className="item_img_wide" src={picture} alt="product"/>
        <div className="item_info_wide">
          <p className="item_title_wide">{name}</p>
          <p className="item_color_wide">Color: {color}</p>
          <div className="item_remove">
            <img className="item_closeIcon" src={closeIcon} alt="close icon"/>
            <p className="text_remove">Remove</p>
          </div>
        </div>
      </div>
      <div className="item_info2_wide">
        <div className="item_counter">
          <img className="counter_icon" src={minusIcon} alt="minus icon"/>
          <p className="item_quantity">1</p>
          <img className="counter_icon" src={plusIcon} alt="plus icon"/>
        </div>
        <p className="price_wide">{price}</p>
        <p className="subtotal_wide">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

// <div className="product_card">
//   <img className="item_img" src={picture} alt="image of a product"/>
//   <div className="item_description">
//
//     <p className="item_title">{name}</p>
//     <p className="item_color">{color}</p>
//     <div className="item_counter">
//       <img className="counter_icon" src={minusIcon} alt="minus icon"/>
//       <p className="item_quantity">1</p>
//       <img className="counter_icon" src={plusIcon} alt="plus icon"/>
//     </div>
//     <p className="item_price">{price}</p>
//     <img src={closeIcon} alt="close icon"/>
//
//   </div>
// </div>