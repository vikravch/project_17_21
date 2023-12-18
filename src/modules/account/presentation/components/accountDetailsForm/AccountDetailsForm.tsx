import React from 'react';
import styles from "../accountDetailsForm/accountDetailsForm.module.css";


const AccountDetailsForm = () => {
    return (
        <section className={styles.accountDetailsForm}>
            <form className={styles.form}>
                <h2 className={styles.titleForm}>Account Details</h2>
                <fieldset className={styles.inputContainer}>
                    <label>FIRST NAME*</label>
                    <input placeholder="First name"/>
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>LAST NAME*</label>
                    <input placeholder="Last name"/>
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>DISPLAY NAME*</label>
                    <input placeholder="Display name"/>
                    <p>This will be how your name will be displayed in the account section and in reviews</p>
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>EMAIL*</label>
                    <input placeholder="Email"/>
                </fieldset>

                <h2 className={styles.titleForm}>Password</h2>
                <fieldset className={styles.inputContainer}>
                    <label>OLD PASSWORD</label>
                    <input placeholder="Old password"/>
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>NEW PASSWORD</label>
                    <input placeholder="New password"/>
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>REPEAT NEW PASSWORD</label>
                    <input placeholder="Repeat new password"/>
                </fieldset>
                <button type={"submit"}>Save changes</button>
            </form>
        </section>
    );
};

export default AccountDetailsForm;