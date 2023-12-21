import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Item} from "./types";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {openFlyMenu} from "../../redux/slices/openFlyMenuSlice";
import '../../../modules/home_page/presentation/components/FlyMobile.css'




interface Props {
    item: Item
    fly: boolean
}

const NavItem = ({item, fly}: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const categories = useAppSelector(state => state.shopPage.categories);



    const handleCategorySelector = () => {
        const select = document.querySelector('.fly_mobile_select') as HTMLSelectElement;
        const opt = select.options[select.selectedIndex];
        const currValue = opt.value;
        dispatch(openFlyMenu(false));
        navigate(`/shop?category=${currValue}`);
    }

    return (!fly ?
            <li onClick={() => dispatch(openFlyMenu(false))}>
                <Link to={`/${item.route}`}>
                    {item.title}
                </Link>
            </li> : (item.route == 'shop') ?
                <li className={'qwert'} >
                        <select className={'fly_mobile_select'} onChange={()=>handleCategorySelector()}>
                            <option selected={true} disabled={true}>{item.title}</option>
                            {categories == undefined? <></>: categories.map((cat, index) => <option key={index} value={cat.title.toLowerCase().replaceAll(' ', "")} >{cat.title}</option>)}
                        </select>
                </li> :
                <li onClick={() => dispatch(openFlyMenu(false))}>
                    <Link to={`/${item.route}`}>
                        {item.title}
                    </Link>
                </li>
    );
};

export default NavItem;