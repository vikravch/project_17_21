import React from 'react';
import "./Navigation.css"
import "../../../fonts/fonts.css"
import FlyMenuBtnIcon from "./icons/FlyMenuBtnIcon";
import SearchIcon from "./icons/SearchIcon";
import MyAccountIcon from "./icons/MyAccountIcon";
import CartIcon from "./icons/CartIcon";
import FlyMobile from "../../../modules/home_page/presentation/components/FlyMobile";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {openFlyMenu} from "../../redux/slices/openFlyMenuSlice";
import {navItems} from "../../utils/Constants";
import NavItem from "./NavItem";
import {Link} from "react-router-dom";



const Navigation = () => {
    const dispatch = useAppDispatch();
    const flag = useAppSelector(state => state.flyMenu.showFlyMenu);

    function handleSearchInput() {
        const input = document.querySelector('.navigation_search_bar_desktop');
        input?.classList.toggle('navigation_visibility');
    }

    return (
        <div className={'navigation_bar_wrapper'}>
            {flag ? <FlyMobile/> : <></>}
            <div className={'navigation_width'}>
                <div className={'menu_btn'}>
                    <i className={'menu_btn_icon'} onClick={() => dispatch(openFlyMenu(true))}><FlyMenuBtnIcon/></i>
                    <p className={'title_text_small'}>3legant<span>.</span></p>
                </div>
                <p className={'title_text_big'}>3legant<span>.</span></p>
                <ul className={'header_navigation'}>
                    {navItems.map(item => <NavItem key={item.route} fly={false} item={item} />)}
                </ul>
                <div className={'navigation_icons_section'}>
                    <input type="search" placeholder={'Search'} className={'navigation_search_bar_desktop'}/>
                    <div className={'account_and_search'}>
                        <span onClick={()=>handleSearchInput()}><SearchIcon/></span>
                        <Link to={'/account'}><MyAccountIcon/></Link>
                    </div>
                    <Link to={"/cart"} className={'cart_navigation_section'}>
                        <CartIcon/>
                        <div className={'cart_count_circle'}>
                            <p className={'cart_count_text'}>2</p>
                        </div>
                    </Link></div>
            </div>
        </div>
    );
};

export default Navigation;
