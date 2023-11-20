import React from 'react';
import ProductCard from "../product-card/product-card";
import {mockOrder, TItem} from "../../mock-api/data";
import './cart-contain.css'
const CartContain = () => {
  const items: TItem[] = mockOrder.items;
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
          picture={el.picture}/>)}
    </section>
  );
};

export default CartContain;