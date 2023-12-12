import React from 'react';
import styles from "../address/address.module.css";
import edit from "../../../../account/images/edit.png";


const Address = () => {
    return (
        <div className={styles.detail}>
            <div className={styles.addressTitle}>Address</div>
            <div className={styles.boxAddress}>
                <div className={styles.contentBox}>
                    <div className={styles.content}>
                        <p>Billing Address</p>
                        <button> <img src={edit} alt="icon-edit"/> Edit</button>
                    </div>
                    <div className={styles.profileBillingAddress}>
                        <div>Sofia Havertz</div>
                        <div>+1 23445 6777</div>
                        <div>345 Long Island, NewYork, United States</div>
                    </div>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.content}>
                        <p>Shopping Address</p>
                        <button> <img src={edit} alt="icon-edit"/>Edit</button>
                    </div>
                    <div className={styles.profileBillingAddress}>
                        <div>Sofia Havertz</div>
                        <div>+1 23445 6777</div>
                        <div>345 Long Island, NewYork, United States</div>
                    </div>
                </div>
            </div>
            </div>

    );
};

export default Address;