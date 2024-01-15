import React, {useEffect} from 'react';
import styles from './ProductImage.module.css'
import {Img, slideElements} from "../temp/constants";
import {ProductProps} from "../Product";
import {useAppDispatch, useAppSelector} from "../../../../../general/redux/hooks";
import {getProductImagesAsyncAction} from "../../redux/asyncAction";


const ProductImage = (props : ProductProps) => {

    const dispatch = useAppDispatch();
    const productImages = useAppSelector(state => state.productPage.productImages)

    useEffect(()=>{
        if (props.productId != null) {
            dispatch(getProductImagesAsyncAction(props.productId))
        }
    },[props.productId])

    return (
        <div className={styles.slide_elements}>
            <div className={styles.top_element}>
                <img src={productImages?.mainImage}/>
            </div>
            <div className={styles.bottom_elements}>
                {productImages?.restImages.map(e => <img src={e}/>)}
            </div>
        </div>
    );
};

export default ProductImage;