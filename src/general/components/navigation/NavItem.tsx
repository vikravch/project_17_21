import React from 'react';
import {Link} from "react-router-dom";
import {Item} from "./types";
import {useAppDispatch} from "../../redux/hooks";
import {openFlyMenu} from "../../redux/slices/openFlyMenuSlice";
import '../../../modules/home_page/presentation/components/FlyMobile.css'
interface Props {
    item: Item
    fly: boolean
}

const NavItem = ({item, fly}: Props) => {
    const dispatch = useAppDispatch();
    return (!fly ?
            <li onClick={() => dispatch(openFlyMenu(false))}>
                <Link to={`/${item.route}`}>
                    {item.title}
                </Link>
            </li> : (item.route == 'shop' || item.route == 'products') ?
                <li >
                    {/*<Link to={`/${item.route}`}>*/}
                        <select className={'fly_mobile_select'}>
                            <option value={item.title} selected={true} disabled={true}>{item.title}</option>
                            <option><Link to={'http://localhost:3000/shop/?category=living_room'}>Living room</Link></option>
                            <option><Link to={'http://localhost:3000/shop/?category=bedroom'}>Bedroom</Link></option>
                            <option><Link to={'http://localhost:3000/shop/?category=kitchen'}>Kitchen</Link></option>
                            <option><Link to={'http://localhost:3000/shop/?category=bathroom'}>Bathroom</Link></option>
                            <option><Link to={'http://localhost:3000/shop/?category=dining'}>Dining</Link></option>
                            <option><Link to={'http://localhost:3000/shop/?category=outdoor'}>Outdoor</Link></option>
                        </select>
                    {/*</Link>*/}
                </li> :
                <li onClick={() => dispatch(openFlyMenu(false))}>
                    <Link to={`/${item.route}`}>
                        {item.title}
                    </Link>
                </li>
    );
};

export default NavItem;