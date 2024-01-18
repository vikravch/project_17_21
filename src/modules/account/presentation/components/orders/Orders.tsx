import React from 'react';
import styles from "./oredrs.module.css";
import OrderItem from "../orderItem/OrderItem";
import {dataOrders} from "../../mock-api/data";

const Orders = () => {

    return (
        <section className={styles.ordersContent}>
            <h2 className={styles.header}>Orders History</h2>
            <table className={styles.table}>
                <thead>
                <tr className={styles.tableHeader}>
                    <th className={styles.title}>Number ID</th>
                    <th className={styles.title}>Dates</th>
                    <th className={styles.title}>Status</th>
                    <th className={styles.title}>Price</th>
                </tr>
                </thead>
                <tbody>
                {dataOrders.map(el =>
                    <OrderItem key={el.id} {...el}/>
                )}
                </tbody>
            </table>
        </section>
    );
};

export default Orders;

