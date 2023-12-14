import React from 'react';
import closeIcon from '../../../../../icons/close_icon.png'
import minusIcon from '../../../../../icons/minus_icon.png'
import plusIcon from '../../../../../icons/plus_icon.png'
import './cart-product-card.css'
import {useLocation} from "react-router";
import {TItem} from "../../types";
import {useAppDispatch} from "../../../../../general/redux/hooks";
import {decreaseAmount, deleteItemCart, increaseAmount} from "../../redux/cartSlice";

const CartProductCard:React.FC<TItem> = ({id, name, color, actualPrice, image, quantity, subtotal}: TItem) => {
const location = useLocation();
const dispatch = useAppDispatch();
const removeItem = () => {
  dispatch(deleteItemCart(id));
}
const plusItem = () => {
  dispatch(increaseAmount(id));
}
const minusItem = () => {
  dispatch(decreaseAmount(id));
}

const productCard = <div className="product_card">
  <img className="item_img item_hide_900" src={image} alt="product"/>
  <div className="item_description item_hide_900">
    <div className="item_info1">
      <p className="item_title">{name}</p>
      <p className="item_color">Color: {color}</p>
      <div className="item_counter">
        <img onClick={minusItem} className="counter_icon" src={minusIcon} alt="minus icon"/>
        <p className="item_quantity">{quantity}</p>
        <img onClick={plusItem} className="counter_icon" src={plusIcon} alt="plus icon"/>
      </div>
    </div>
    <div className="item_info2">
      <p className="item_price">{`$${actualPrice}`}</p>
      <img onClick={removeItem} className="item_closeIcon" src={closeIcon} alt="close icon"/>
    </div>
  </div>
  <div className="item_image_descr_wide">
    <img className="item_img_wide" src={image} alt="product"/>
    <div className="item_info_wide">
      <p className="item_title_wide">{name}</p>
      <p className="item_color_wide">Color: {color}</p>
      <div onClick={removeItem} className="item_remove">
        <img className="item_closeIcon" src={closeIcon} alt="close icon"/>
        <p className="text_remove">Remove</p>
      </div>
    </div>
  </div>
  <div className="item_info2_wide">
    <div className="item_counter">
      <img onClick={minusItem} className="counter_icon" src={minusIcon} alt="minus icon"/>
      <p className="item_quantity">{quantity}</p>
      <img onClick={plusItem} className="counter_icon" src={plusIcon} alt="plus icon"/>
    </div>
    <p className="price_wide">{`$${actualPrice}`}</p>
    <p className="subtotal_wide">{`$${subtotal}`}</p>
  </div>
</div>

  const productCardCheckout = <div className="product_card">
    <img className="item_img" src={image} alt="product"/>
    <div className="item_description">
      <div className="item_info1">
        <p className="item_title">{name}</p>
        <p className="item_color">Color: {color}</p>
        <div className="item_counter">
          <img onClick={minusItem} className="counter_icon" src={minusIcon} alt="minus icon"/>
          <p className="item_quantity">{quantity}</p>
          <img onClick={plusItem} className="counter_icon" src={plusIcon} alt="plus icon"/>
        </div>
      </div>
    </div>
    <p className="product_price">{`$${actualPrice}`}</p>
  </div>

  if(location.pathname === '/cart')
    return productCard;
  else if(location.pathname === '/cart/checkout')
    return productCardCheckout;
  else
    return null;
};

export default CartProductCard;

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
