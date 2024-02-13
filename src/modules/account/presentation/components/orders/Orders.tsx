import React from 'react';
import styles from "./oredrs.module.css";
import OrderItem from "../orderItem/OrderItem";
import {useAppSelector} from "../../../../../general/redux/hooks";
import {TItemOrder} from "../../../redux/types";

const Orders = () => {

    const {orders} = useAppSelector(state=>state.account)

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
                {orders.map((el:TItemOrder) =>
                    <OrderItem key={el.id} {...el}/>
                )}
                </tbody>
            </table>
        </section>
    );
};

export default Orders;

