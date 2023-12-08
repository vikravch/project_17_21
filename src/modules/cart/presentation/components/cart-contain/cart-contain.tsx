import React from 'react';
import ProductCard from "../product-card/product-card";
import './cart-contain.css'
import {useAppSelector} from "../../../../../general/redux/hooks";
const CartContain = () => {
  const {items} = useAppSelector(state => state.cart);

  return (
    <section className="container">
      <div className="table_header">
        <p className="table_header_item">Product</p>
      </div>
      <div className="table_header_wide">
        <p className="table_header_item">Product</p>
        <div className="table_header_wide_additional">
          <p className="table_header_item">Quantity</p>
          <p className="table_header_item">Price</p>
          <p className="table_header_item">Subtotal</p>
        </div>
      </div>
      {items.map(el =>
        <ProductCard
          key={el.id}
          id={el.id}
          name={el.name}
          color={el.color}
          price={el.price}
          picture={el.picture}
          quantity={el.quantity}/>)}
    </section>
  );
};

export default CartContain;