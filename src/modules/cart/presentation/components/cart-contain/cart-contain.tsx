import React from 'react';
import CartProductCard from "../cart-product-card/cart-product-card";
import './cart-contain.css'
import {useAppSelector} from "../../../../../general/redux/hooks";
const CartContain = () => {
  const {items} = useAppSelector(state => state.cart);
  console.log(items)
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
      {items.length === 0 ? <p className={"cart_contain"}>Your cart is empty</p> :
        items.map(el =>
          <CartProductCard
            key={el.id}
            id={el.id}
            name={el.name}
            color={el.color}
            actualPrice={el.actualPrice}
            image={el.image}
            subtotal={el.subtotal}
            quantity={el.quantity}
            amount={el.amount}
            description={el.description}
            fullPrice={el.fullPrice}
            isNew={el.isNew}
            rating={el.rating}
            sale={el.sale}/>)
      }
    </section>
  );
};

export default CartContain;