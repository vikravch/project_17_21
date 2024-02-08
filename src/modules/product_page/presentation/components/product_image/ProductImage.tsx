import React, {useEffect, useRef, useState} from 'react';
import styles from './ProductImage.module.css'
import {ProductProps} from "../Product";
import {useAppDispatch, useAppSelector} from "../../../../../general/redux/hooks";
import {getProductImagesAsyncAction} from "../../redux/asyncAction";

import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {firstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";


const ProductImage = (props: ProductProps) => {

    const dispatch = useAppDispatch();
    const productImages = useAppSelector(state => state.productPage.productImages?.imagesContainer)
    const [images, setImages] = useState(productImages as string[] | undefined);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        if (props.productId != null) {
            dispatch(getProductImagesAsyncAction(props.productId))
            setImages(productImages);
        }
    }, [])

    const clickHandler = (direction: string | undefined) => {
        switch (direction) {
            case 'left':
                if (currentIndex === 0 && images !== undefined) {
                    setCurrentIndex(images.length - 1)
                } else {
                    setCurrentIndex(prevState => prevState - 1)
                }
                break;
            case 'right':
                // @ts-ignore
                if(currentIndex === images.length - 1)
                    setCurrentIndex(0)
                else
                    setCurrentIndex(prevState => prevState + 1)

        }
    }


    return (
        <div className={styles.slide_elements}>
            <div className={styles.top_elements}>
                <div className={styles.iconLeft}>
                    <SlArrowLeft className={styles.icon} onClick={() => clickHandler('left')}></SlArrowLeft>
                </div>
                <img src={images?.at(currentIndex)} alt='MainImage' className={styles.mainImage}/>
                <div className={styles.iconRight}>
                    <SlArrowRight className={styles.icon} onClick={() => clickHandler('right')}></SlArrowRight>
                </div>
            </div>
            <div className={styles.bottom_elements}>
                {images?.map((e, index) => {
                    if (index === currentIndex)
                        return < div hidden={true}></div>;
                    return <img src={e} alt='restImages'/>
                })}
            </div>
        </div>


    );
};

export default ProductImage;