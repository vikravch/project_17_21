import React from 'react';
import styles from "../orderItem/orderItem.module.css";
import {TItemOrder} from "../../mock-api/data";


const OrderItem = ({id, dateOrder, status, price}: TItemOrder) => {
    return (
        <tr className={styles.orderContainer}>
            <td className={styles.sectionOrdersDetail}>
                <div className={styles.mobileHeader}>Number ID</div>
                <div className={styles.item}>#{id}</div>
            </td>
            <td className={styles.item}>
                <div className={styles.mobileHeader}>Dates</div>
                <div>{dateOrder}</div>
            </td>
            <td className={styles.item}>
                <div className={styles.mobileHeader}>Status</div>
                <div>{status}</div>
            </td>
            <td className={styles.item}>
                <div className={styles.mobileHeader}>Price</div>
                <div>${price}</div>
            </td>
        </tr>
    );
};

export default OrderItem;

// <div className={styles.orderContainer}>
//     <div className={styles.itemBox}>
//         <div className={styles.sectionHeader}>
//             <div className={styles.mobileHeader}>Number ID</div>
//             <div className={styles.mobileHeader}>Dates</div>
//             <div className={styles.mobileHeader}>Status</div>
//             <div className={styles.mobileHeader}>Price</div>
//         </div>
//         <div className={styles.sectionOrdersDetail}>
//             <div className={styles.item}>#{id}</div>
//             <div className={styles.item}>{dateOrder}</div>
//             <div className={styles.item}>{status}</div>
//             <div className={styles.item}>${price}</div>
//         </div>
//     </div>
// </div>
