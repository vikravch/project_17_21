import styles from "./accountPage.module.css"
import image from '../images/Image.webp';
import arrowDown from '../images/arrowDown.webp'
import {NavLink, useNavigate} from "react-router-dom";
import Address from "../presentation/components/address/Address";
import Orders from "../presentation/components/orders/Orders";
import WishList from "../presentation/components/wishList/WishList";
import LogOut from "../presentation/components/logOut/LogOut";
import AccountDetailsForm from "../presentation/components/accountDetailsForm/AccountDetailsForm";
import {Route, Routes} from "react-router";
import React from "react";


const Account = () => {
  const navigate = useNavigate();
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        navigate(event.target.value);
    };

    return (
        <section className={styles.accountContent}>
            <header className={styles.headerAccount}>
                <button className={styles.backButton}>
                    <span className="chevron">&lt;</span> back
                </button>
                <h1 className={styles.title}>
                    My Account
                </h1>
            </header>
            <section className={styles.accountMainContainer}>
                <nav className={styles.profileSection}>
                    <figure className={styles.avatar}>
                        <img src={image} alt="Sofia Havertz"/>
                        <figcaption className={styles.accountName}>Sofia Havertz</figcaption>
                    </figure>
                    <select className={styles.dropMenu} onChange={handleSelectChange}>
                        <option value="/account" className={styles.optionName}>Account</option>
                        <option value="address" className={styles.optionName}>Address</option>
                        <option value="orders" className={styles.optionName}>Orders</option>
                        <option value="wishList" className={styles.optionName}>WishList</option>
                        <option value="logout" className={styles.optionName}>Logout</option>
                    </select>
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