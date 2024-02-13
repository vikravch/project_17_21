import styles from "./account.module.css"
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import React from "react";
import {useAppSelector} from "../../../../../general/redux/hooks";


interface IProps {
    location: string
}
const Account = ({location}: IProps) => {
  const navigate = useNavigate();
  const user = useAppSelector(state=>state.account.user)

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        navigate(event.target.value);
    };

    return (
        <section className={styles.accountContent}>
            <header className={styles.headerAccount}>
                <button className={styles.backButton} onClick={() => navigate(-1)}>
                    <span className="chevron">&lt;</span> back
                </button>
                <h1 className={styles.title}>
                    My Account
                </h1>
            </header>
            <section className={styles.accountMainContainer}>
                <nav className={styles.profileSection}>
                    <figure className={styles.avatar}>
                        <img src={user.photo} alt={user.firstName}/>
                        <figcaption className={styles.accountName}>{user.displayName || `${user.firstName} ${user.lastName}`}</figcaption>
                    </figure>
                    <select className={styles.dropMenu} onChange={handleSelectChange}>
                        <option value="/account" className={styles.optionName}>Account</option>
                        <option value="address" className={styles.optionName}>Address</option>
                        <option value="orders" className={styles.optionName}>Orders</option>
                        <option value="wishList" className={styles.optionName}>WishList</option>
                        <option value="logout" className={styles.optionName}>Logout</option>
                    </select>
                    <aside className={styles.sideMenu}>
                        <NavLink to="/account" className={styles.navLink}>Account</NavLink>
                        <NavLink to="address" className={styles.sideMenuEl}>Address</NavLink>
                        <NavLink to="orders" className={styles.sideMenuEl}>Orders</NavLink>
                        <NavLink to="wishList" className={styles.sideMenuEl}>WishList</NavLink>
                        <NavLink to="logout" className={styles.sideMenuEl}>Logout</NavLink>
                    </aside>
                </nav>
                <Outlet/>
            </section>
        </section>
    );
};

export default Account;