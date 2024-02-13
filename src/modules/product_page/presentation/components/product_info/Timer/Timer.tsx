import React, {useEffect, useState} from 'react';
import styles from './Timer.module.css'

interface dateProps {
    timerDate: Date | undefined
}

const Timer = ({timerDate}: dateProps) => {

    const [timeRemaining, setTimeRemaining] = useState<number>(0);

    useEffect(() => {
        if (timerDate && timerDate.getTime() > Date.now()) {
            const interval = setInterval(() => {
                const timeDiff = Math.max(timerDate.getTime() - Date.now(), 0);
                setTimeRemaining(timeDiff);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timerDate]);

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return (
        <div>
            <div>
                <label>Offer expires in: </label>
            </div>
            <div className={styles.offer}>
                <div className={styles.cart}>
                    <p className={styles.numbers}>{days}</p>
                    <p className={styles.text}>Days</p>
                </div>
                <div className={styles.cart}>
                    <p className={styles.numbers}>{hours}</p>
                    <p className={styles.text}>Hours</p>
                </div>
                <div className={styles.cart}>
                    <p className={styles.numbers}>{minutes}</p>
                    <p className={styles.text}>Minutes</p>
                </div>
                <div className={styles.cart}>
                    <p className={styles.numbers}>{seconds}</p>
                    <p className={styles.text}>Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;