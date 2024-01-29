import React, {useEffect} from 'react';
import Info from "./info/Info";
import Timer from "./Timer/Timer";
import ProductLoop from "./productLoop/ProductLoop";
import Cart from "./cart/Cart";
import Meta from "./meta/Meta";
import {ProductProps} from "../Product";
import {useAppDispatch, useAppSelector} from "../../../../../general/redux/hooks";
import getProduct from "../../../domain/use_case/getProduct";
import {getProductAsyncAction} from "../../redux/asyncAction";


const ProductInfo = (props : ProductProps) => {

    const dispatch = useAppDispatch();
    const productInfo = useAppSelector(state => state.productPage.product);

    useEffect(()=>{
        if (props.productId != null) {
            dispatch(getProductAsyncAction(props.productId));
        }
    },[])

    return (<div>
        <Info ratingInfo={productInfo !== undefined  ? productInfo.rating : undefined} key={productInfo !== undefined  ? productInfo.id : undefined}
              productName={productInfo?.name} description={productInfo?.description}
              actualPrice={productInfo?.actualPrice} fullPrice={productInfo?.fullPrice}/>
        <Timer/>
        <hr/>
        <ProductLoop measurements={productInfo?.measurements}/>
        <Cart product={productInfo || undefined}/>
        <Meta/>
    </div>);
};

export default ProductInfo;