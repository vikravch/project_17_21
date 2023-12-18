import styles from "./account.module.css"
import image from '../images/Image.webp';
import chevronRight from "../images/chevronRight.webp";
import {NavLink} from "react-router-dom";
import Address from "../presentation/components/address/Address";
import Orders from "../presentation/components/orders/Orders";
import WishList from "../presentation/components/wishList/WishList";
import LogOut from "../presentation/components/logOut/LogOut";
import AccountDetailsForm from "../presentation/components/accountDetailsForm/AccountDetailsForm";
import {Route, Routes} from "react-router";
import React from "react";

const Account = () => {

    return (
        <section className={styles.accountContent}>
            <header className={styles.header}>
                <button className={styles.backButton}><img src={chevronRight} alt="chevronRight"/>Back</button>
                <h1 className={styles.title}>
                    My Account
                </h1>
            </header>
            <section className={styles.accountMainContainer}>
                <nav className={styles.profileSection}>
                    <figure className={styles.avatar}>
                        <img src={image} alt="Sofia Havertz"/>
                        <figcaption>Sofia Havertz</figcaption>
                    </figure>
                    <nav className={styles.sideMenu}>
                        <NavLink to="/account" className={styles.navLink}>Account</NavLink>
                        <NavLink to="address" className={styles.sideMenuEl}>Address</NavLink>
                        <NavLink to="orders" className={styles.sideMenuEl}>Orders</NavLink>
                        <NavLink to="wishList" className={styles.sideMenuEl}>WishList</NavLink>
                        <NavLink to="logout" className={styles.sideMenuEl}>Logout</NavLink>
                    </nav>
                </nav>
                <Routes>
                    <Route index element={<AccountDetailsForm/>}/>
                    <Route path="address" element={<Address/>}/>
                    <Route path="orders" element={<Orders/>}/>
                    <Route path="wishList" element={<WishList/>}/>
                    <Route path="logOut" element={<LogOut/>}/>
                </Routes>
            </section>
        </section>
    );
};

export default Account;