import React, {useEffect} from 'react';
import styles from './Timer.module.css'

const Timer = () => {

    useEffect(()=>{
        let interval;
    })
    return (
        <div>
            <div>
                <label>Offer expires in: </label>
            </div>
            <div className={styles.offer}>
                <div className={styles.cart}>
                    <p className={styles.numbers}>02</p>
                    <p className={styles.text}>Days</p>
                </div>
                <div className={styles.cart}>
                    <p className={styles.numbers}>12</p>
                    <p className={styles.text}>Hours</p>
                </div>
                <div className={styles.cart}>
                    <p className={styles.numbers}>45</p>
                    <p className={styles.text}>Minutes</p>
                </div>
                <div className={styles.cart}>
                    <p className={styles.numbers}>05</p>
                    <p className={styles.text}>Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;