import React from 'react';
import styles from './ProductLoop.module.css';
import {Img, tables} from "../../temp/constants";

interface Measurements {
    measurements: string | undefined
}

const ProductLoop = ({measurements}: Measurements) => {
    return (
        <div className={styles.product_loop}>
            <div className={styles.measurements_info}>
                <p className={styles.measurements}>Measurements</p>
                <p className={styles.measurements_data}>{measurements}</p>
            </div>
            <div className={styles.swatches}>
                <div className={styles.color}>
                    <p>Choose Color</p>
                    <div className={styles.arrow}><img src={Img[2].img}/></div>
                </div>
                <p className={styles.color_name}>Black</p>
                <div className={styles.tables}>
                    {tables.map((e,index )=>
                        index === 0? <div className={styles.picked_table}> <img src={e.img}/></div>:
                            <div><img src={e.img}/></div>)}
                </div>
            </div>

        </div>
    );
};

export default ProductLoop;