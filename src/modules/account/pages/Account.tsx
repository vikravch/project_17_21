import styles from "./account.module.css"
import image from '../images/Image.jpg';
import {NavLink} from "react-router-dom";
import Address from "../presentation/components/address/Address";
import Orders from "../presentation/components/orders/Orders";
import WishList from "../presentation/components/wishList/WishList";
import LogOut from "../presentation/components/logOut/LogOut";
import AccountDetailsForm from "../presentation/components/accountDetailsForm/AccountDetailsForm";
import {Route, Routes} from "react-router";

const Account = () => {

    return (
       <div className={styles.content}>
           <div className={styles.title}>
               My Account
           </div>
           <div className={styles.accountSection}>
               <div className={styles.profileSection}>
                       <div className={styles.avatar}>
                           <div className={styles.avatarElements}>
                               <div>
                                   <img src={image} alt={"sofia"}/>
                               </div>
                               <p>Sofia Havertz</p>
                           </div>
                           <div className={styles.sideMenu}>
                               <NavLink to="/account" className={styles.navLink}>Account</NavLink>
                               <NavLink to="address" className={styles.sideMenuEl}>Address</NavLink>
                               <NavLink to="orders" className={styles.sideMenuEl}>Orders</NavLink>
                               <NavLink  to="wishList" className={styles.sideMenuEl}>WishList</NavLink>
                               <NavLink to="logout" className={styles.sideMenuEl}>Logout</NavLink>
                           </div>
                       </div>
               </div>
               <div className={styles.detail}>
                   <Routes>
                       <Route index element={<AccountDetailsForm/>}/>
                       <Route path="address" element={<Address/>}/>
                       <Route path="orders" element={<Orders/>}/>
                       <Route path="wishList" element={<WishList/>}/>
                       <Route path="logOut" element={<LogOut/>}/>
                   </Routes>
               </div>
           </div>
       </div>

    );
};

export default Account;