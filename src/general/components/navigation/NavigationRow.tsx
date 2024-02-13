import React, {useEffect} from 'react';
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
import {getAllCategoriesAsyncAction} from "../../../modules/shop-page/presentation/redux/asyncActions";
import {showSearchInput} from "../../redux/slices/showSearchInputSlice";



const Navigation = () => {
    const dispatch = useAppDispatch();
    const showFlyMenuFlag = useAppSelector(state => state.flyMenu.showFlyMenu);
    const itemsInCart = useAppSelector(state => state.cart.items);
    let currentQuantity:number = 0;
    for (let i = 0; i < itemsInCart.length; i++) {
        currentQuantity += itemsInCart[i].quantity;
    }
    const showSearchInputFlag = useAppSelector(state => state.showSearchInput.showSearchInput);


    useEffect(() => {
        if (window.location.pathname != "/shop")
            dispatch(getAllCategoriesAsyncAction());
    }, []);

    function handleSearchInput() {
        dispatch(showSearchInput(!showSearchInputFlag));
    }

    return (
        <div className={'navigation_bar_wrapper'}>
            {showFlyMenuFlag ? <FlyMobile/> : <></>}
            <div className={'navigation_width'}>
                <div className={'menu_btn'}>
                    <i className={'menu_btn_icon'} onClick={() => dispatch(openFlyMenu(true))}><FlyMenuBtnIcon/></i>
                    <Link to={"/home"}><p className={'title_text_small'}>3legant<span>.</span></p></Link>
                </div>
                <Link to={"/home"}><p className={'title_text_big'}>3legant<span>.</span></p></Link>
                <ul className={'header_navigation'}>
                    {navItems.map(item => <NavItem key={item.route} fly={false} item={item}/>)}
                </ul>
                <div className={'navigation_icons_section'}>
                    {showSearchInputFlag ? <input type="search" placeholder={'Search'}
                                                 className={'navigation_search_bar_desktop'}/> : <></>}
                    <div className={'account_and_search'}>
                        <span onClick={() => handleSearchInput()}><SearchIcon/></span>
                        <Link to={'/account'}><MyAccountIcon/></Link>
                    </div>
                    <Link to={"/cart"} className={'cart_navigation_section'}>
                        <CartIcon/>
                        <div className={'cart_count_circle'}>
                            <p className={'cart_count_text'}>{currentQuantity}</p>
                        </div>
                    </Link></div>
            </div>
        </div>
    );
};

export default Navigation;
