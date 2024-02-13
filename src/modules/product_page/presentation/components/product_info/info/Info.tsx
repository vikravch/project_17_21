import React from 'react';
import styles from './Info.module.css';
import {Img} from "../../temp/constants";

interface productInfo {
    ratingInfo: number | undefined ,
    productName: string | undefined,
    description: string | undefined,
    actualPrice: number | undefined | null,
    fullPrice: number | undefined,

}


const Info = ({ratingInfo, productName, description, actualPrice, fullPrice}: productInfo) => {


    // @ts-ignore
    let rating = Array.apply(null, {length: ratingInfo}).map(Number.call, Number);


    return (
        <div className={styles.info}>
            <div className={styles.rating}>
                <div className={styles.rating_group}>
                    {rating.map((e, index) => <img key={index} src={Img[1].img}/>)}
                </div>
                <p className={styles.count_reviews}>11 Reviews </p>
            </div>
            <h1 className={styles.title}>{productName}</h1>
            <p className={styles.short_info}>
                {description}</p>
            <div className={styles.price}>
                <p className={styles.price1}>${fullPrice}</p>
                <p className={styles.price2}>${actualPrice}</p>
            </div>
            <hr/>
        </div>

    );
};

export default Info;