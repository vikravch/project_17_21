import React from 'react';
import Info from "./info/Info";
import Timer from "./Timer/Timer";
import ProductLoop from "./productLoop/ProductLoop";
import Cart from "./cart/Cart";
import Meta from "./meta/Meta";


const ProductInfo = () => {
    return (<div>
        <Info/>
        <Timer/>
        <hr/>
        <ProductLoop/>
        <Cart/>
        <Meta/>
    </div>);
};

export default ProductInfo;