import React from 'react';
import styles from "../accountDetailsForm/accountDetailsForm.module.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormDataAccount} from "../../mock-api/data";


const AccountDetailsForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm<FormDataAccount>({
        mode: 'onTouched',
    });
    const newPassword = watch('newPassword');


    const onSubmit: SubmitHandler<FormDataAccount> = data => {
        console.log(data)
    }
    return (
        <section className={styles.accountDetailsForm}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.titleForm}>Account Details</h2>
                <fieldset className={styles.inputContainer}>
                    <label>FIRST NAME*</label>
                    <input {...register('firstName')}
                           type={"text"}
                           id="firstName"
                           placeholder="First name"/>
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>LAST NAME*</label>
                    <input {...register('lastName')}
                           type="text"
                           id="lastName"
                           placeholder="Last name"/>
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>DISPLAY NAME*</label>
                    <input placeholder="Display name"
                           {...register('displayName')}
                           type="text"
                           id="displayName"/>
                    <p>This will be how your name will be displayed in the account section and in reviews</p>
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>EMAIL*</label>
                    <input placeholder="Email"
                           {...register('email')}
                           type="email"
                           id="email"
                    />
                </fieldset>
                <h2 className={styles.titleForm}>Password</h2>
                <fieldset className={styles.inputContainer}>
                    <label>OLD PASSWORD</label>
                    <input placeholder="Old password"
                           {...register('oldPassword', {
                               required: newPassword ? 'Old password is required when setting a new password' : false
                           })}
                           type="password"
                           id="oldPassword"
                    />
                    {errors.oldPassword && <p>{errors.oldPassword.message}</p>}
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>NEW PASSWORD</label>
                    <input placeholder="New password"
                           {...register('newPassword', {
                               minLength: {
                                   value: 8,
                                   message: 'Password must have at least 8 characters'
                               }
                           })}
                           type="password"
                           id="newPassword"/>
                </fieldset>
                <fieldset className={styles.inputContainer}>
                    <label>REPEAT NEW PASSWORD</label>
                    <input placeholder="Repeat new password"
                           {...register('confirmPassword', {
                               validate: value =>
                                   value === newPassword || 'The passwords do not match'
                           })}
                           type="password"
                           id="confirmPassword"/>
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </fieldset>
                <button type={"submit"}>Save changes</button>
            </form>
        </section>
    );
};

export default AccountDetailsForm;