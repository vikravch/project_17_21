import React from 'react';
import styles from "../orders/orders.module.css";

const Orders = () => {
    return (
        <div className={styles.detail}>
            <div className={styles.header}>Orders</div>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                <p className={styles.title}>Number ID</p>
                <p className={styles.title}>Dates</p>
                <p className={styles.title}>Status</p>
                <p className={styles.title}>Price</p>
            </div>
                <div className={styles.itemBox}>
                    <div className={styles.item}>#12345</div>
                    <div className={styles.item}>October 17,2023</div>
                    <div className={styles.item}>Delivered</div>
                    <div className={styles.item}>$1234.00</div>
                </div>
                <div className={styles.itemBox}>
                    <div className={styles.item}>#12345</div>
                    <div className={styles.item}>October 17,2023</div>
                    <div className={styles.item}>Delivered</div>
                    <div className={styles.item}>$1234.00</div>
                </div>
                <div className={styles.itemBox}>
                    <div className={styles.item}>#12345</div>
                    <div className={styles.item}>October 17,2023</div>
                    <div className={styles.item}>Delivered</div>
                    <div className={styles.item}>$1234.00</div>
                </div>
                <div className={styles.itemBox}>
                    <div className={styles.item}>#12345</div>
                    <div className={styles.item}>October 17,2023</div>
                    <div className={styles.item}>Delivered</div>
                    <div className={styles.item}>$1234.00</div>
                </div>
            </div>
        </div>
    );
};

export default Orders;