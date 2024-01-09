import React from 'react';
import styles from "./adress.module.css";
import edit from "../../../../account/images/edit.webp";


const Address = () => {
    return (
        <section className={styles.addressContent}>
            <h2 className={styles.addressTitle}>Address</h2>
            <div className={styles.boxAddress}>
                <div className={styles.contentBox}>
                    <header className={styles.headerContent}>
                        <h3 className={styles.cardTitle}>Billing Address</h3>
                        <button><img src={edit} alt="icon-edit"/>Edit</button>
                    </header>
                    <address className={styles.contentAddress}>
                        <div>Sofia Havertz</div>
                        <div>+1 23445 6777</div>
                        <div>345 Long Island, NewYork, United States</div>
                    </address>
                </div>
                <div className={styles.contentBox}>
                    <header className={styles.headerContent}>
                        <h3 className={styles.cardTitle}>Shipping Address</h3>
                        <button><img src={edit} alt="icon-edit"/>Edit</button>
                    </header>
                    <address className={styles.contentAddress}>
                        <div>Sofia Havertz</div>
                        <div>+1 23445 6777</div>
                        <div>345 Long Island, NewYork, United States</div>
                    </address>
                </div>
            </div>
        </section>

    );
};

export default Address;