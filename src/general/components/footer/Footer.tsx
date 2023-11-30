import React from 'react';
import "./Footer.css"
import "../../../fonts/fonts.css"
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import YouTubeIcon from "./icons/YouTubeIcon";
import {navItems} from "../../utils/Constants";
import NavItem from "../navigation/NavItem";
import {Link} from "react-router-dom";

const Contacts = () => {
    return (
        <div className={'contacts_wrapper'}>
            {/*<div className={'contacts_wrapper_padding'}>*/}
                <div className={'contacts'}>
                    <div className={'icon_and_navigation'}>
                        <div className={'contacts_top'}>
                            <Link to={"/home"}>
                                <h2 className={'contacts_icon_title'}>3legant<span>.</span></h2>
                            </Link>
                            <div className={'rectangle'}></div>
                            <h3 className={'contacts_subtitle'}>Gift & Decoration Store</h3>
                        </div>
                        <ul className={'contacts_navigation'}>
                            {navItems.map(item => <NavItem key={item.route} fly={false} item={item}/>)}
                        </ul>
                    </div>
                    <div className={'contacts_bottom'}>
                        <div className={'contacts_icons'}>
                            <InstagramIcon color={'#FEFEFE'}/>
                            <FacebookIcon color={'#FEFEFE'}/>
                            <YouTubeIcon color={'#FEFEFE'}/>
                        </div>
                        <div className={'policy_copyright'}>
                            <div className={'policy'}>
                                <p>Privacy policy</p>
                                <p>Terms of Use</p>
                            </div>
                            <p className={'copyright'}>Copyright © 2023 3legant. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Contacts;