import React from 'react';
import styles from './Info.module.css';
import {Img} from "../../temp/constants";
import {useSelector} from "react-redux";
const Info = () => {
    const N = 5;
    // @ts-ignore
    let rating = Array.apply(null, {length: N}).map(Number.call, Number);
    //const infoData = useSelector(state => state.tableInfo)

    return (
        <div className={styles.info}>
            <div className={styles.rating}>
                <div className={styles.rating_group}>
                    {rating.map(e => <img src={Img[1].img}/>)}
                </div>
                <p className={styles.count_reviews}>11 Reviews</p>
            </div>
            <h1>Name</h1>
            <p className={styles.short_info}>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aliquam asperiores obcaecati quaerat. Adipisci alias,
                amet cupiditate id ipsum itaque iure mollitia nihil omnis praesentium quas, repudiandae sint, sit ut vero!</p>
            <div className={styles.price}>
                <p className={styles.price1}>$199.00</p>
                <p className={styles.price2}>$400.00</p>
            </div>
            <hr/>
            </div>
    );
};

export default Info;