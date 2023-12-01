import React from 'react';
import InstagramIcon from "../../../../general/components/footer/icons/InstagramIcon";
import FacebookIcon from "../../../../general/components/footer/icons/FacebookIcon";
import YouTubeIcon from "../../../../general/components/footer/icons/YouTubeIcon";
import CrossIcon from "../../../../general/components/footer/icons/CrossIcon";
import "./FlyMobile.css"
import CartIcon from "../../../../general/components/navigation/icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import {useAppDispatch} from "../../../../general/redux/hooks";
import {openFlyMenu} from "../../../../general/redux/slices/openFlyMenuSlice";
import {Link} from "react-router-dom";
import {navItems} from "../../../../general/utils/Constants";
import NavItem from "../../../../general/components/navigation/NavItem";

const FlyMobile = () => {
    const dispatch = useAppDispatch();
    return (
        <div className={'fly_mobile_wrapper'}>
            <div className={'fly_mobile_section'}>
                <div className={'fly_mobile_top'}>
                    <div className={'fly_header_and_cross'}>
                        <p className={'title_text_small'}>3legant<span>.</span></p>
                        <div onClick={() => dispatch(openFlyMenu(false))}><CrossIcon/></div>
                    </div>
                    <input className={'fly_mobile_search_input'} type="search" placeholder="Search"/>
                    <ul className={'fly_mobile_navigation'}>
                        {navItems.map(item => <NavItem key={item.route} fly={true} item={item}/>)}
                    </ul>
                </div>
                <div className={'fly_mobile_bottom'}>
                    <ul className={'fly_mobile_navigation'}>
                        <li>
                            Cart
                            <Link to={"/cart"} onClick={() => dispatch(openFlyMenu(false))}>
                                <div className={'fly_mobile_icons'}>
                                    <CartIcon/>
                                    <div className={'fly_mobile_count_circle'}>
                                        <p className={'fly_mobile_count_text'}>2</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            Wishlist
                            <div className={'fly_mobile_icons'}>
                                <HeartIcon/>
                                <div className={'fly_mobile_count_circle'}>
                                    <p className={'fly_mobile_count_text'}>2</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button className={'Fly_Mobile_SignIn_Btn'}>Sign In</button>
                    <div className={'fly_mobile_contacts_icons'}>
                        <InstagramIcon color={"#141718"}/>
                        <FacebookIcon color={"#141718"}/>
                        <YouTubeIcon color={"#141718"}/>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default FlyMobile;