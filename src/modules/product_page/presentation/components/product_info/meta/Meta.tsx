import React from 'react';
import styles from './Meta.module.css';

const Meta = () => {
    return (
        <div className={styles.meta}>
            <div className={styles.category}>
                <p className={styles.static}>SKU</p>

                <p className={styles.static}>Category</p>
            </div>
            <div className={styles.category}>
                <p className={styles.active}>1117</p>
                <p className={styles.active}>Living Room,Bedroom</p>
            </div>
        </div>
    );
};

export default Meta;