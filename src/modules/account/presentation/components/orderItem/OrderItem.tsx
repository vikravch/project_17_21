import React from 'react';
import styles from "./orderItem.module.css";
import {TItemOrder} from "../../mock-api/data";


const OrderItem = ({id, dateOrder, status, price}: TItemOrder) => {
    return (
        <tr className={styles.orderContainer}>
            <td className={styles.sectionOrdersDetail}>
                <div className={styles.mobileHeader}>Number ID</div>
                <div className={styles.item}>#{id}</div>
            </td>
            <td className={styles.sectionOrdersDetail}>
                <div className={styles.mobileHeader}>Dates</div>
                <div className={styles.item}>{dateOrder}</div>
            </td>
            <td className={styles.sectionOrdersDetail}>
                <div className={styles.mobileHeader}>Status</div>
                <div className={styles.item}>{status}</div>
            </td>
            <td className={styles.sectionOrdersDetail}>
                <div className={styles.mobileHeader}>Price</div>
                <div className={styles.item}>${price}</div>
            </td>
        </tr>
    );
};

export default OrderItem;

