import React from 'react';
import styles from "../accountDetailsForm/accountDetailsForm.module.css";


const AccountDetailsForm = () => {
    return (
        <div className={styles.details}>
            <form className={styles.form}>
                <div className={styles.titleForm}>Account Details</div>
                <div className={styles.inputContainer}>
                    <label>FIRST NAME*</label>
                    <input placeholder="First name"/>
                </div>
                <div className={styles.inputContainer}>
                    <label>LAST NAME*</label>
                    <input placeholder="Last name"/>
                </div>
                <div className={styles.inputContainer}>
                    <label>DISPLAY NAME*</label>
                    <input placeholder="Display name"/>
                    <p>This will be how your name will be displayed in the account section and in reviews</p>
                </div>
                <div className={styles.inputContainer}>
                    <label>EMAIL*</label>
                    <input placeholder="Email"/>
                </div>

                <div className={styles.titleForm}>Password</div>
                <div className={styles.inputContainer}>
                    <label>OLD PASSWORD</label>
                    <input placeholder="Old password"/>
                </div>
                <div className={styles.inputContainer}>
                    <label>NEW PASSWORD</label>
                    <input placeholder="New password"/>
                </div>
                <div className={styles.inputContainer}>
                    <label>REPEAT NEW PASSWORD</label>
                    <input placeholder="Repeat new password"/>
                </div>
                <button>Save changes</button>
            </form>

        </div>
    );
};

export default AccountDetailsForm;