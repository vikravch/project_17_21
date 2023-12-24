import React from 'react';
import styles from './ProductImage.module.css'
import {Img, slideElements} from "../temp/constants";


const ProductImage = () => {
    return (
        <div className={styles.slide_elements}>
            <div className={styles.top_elemen}>
                <img src={Img[0].img}/>
            </div>
            <div className={styles.bottom_elements}>
                {slideElements.map(e => <img src={e.img}/>)}
            </div>
        </div>
    );
};

export default ProductImage;