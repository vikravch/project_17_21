import React from 'react';
import "./Footer.css"
import "../../../fonts/fonts.css"
const Contacts = () => {
    return (
        <div className={'contacts_wrapper'}>
            <div className={'contacts'}>
                <div className={'icon_and_navigation'}>
                    <div className={'contacts_top'}>
                        <h2 className={'contacts_icon_title'}>3legant<span>.</span></h2>
                        <div className={'rectangle'}></div>
                        <h3 className={'contacts_subtitle'}>Gift & Decoration Store</h3>
                    </div>
                    <ul className={'contacts_navigation'}>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>Contact US</li>
                    </ul>
                </div>
                <div className={'contacts_bottom'}>
                    <div className={'contacts_icons'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <rect x="2.5" y="2" width="20" height="20" rx="4" stroke="#FEFEFE" stroke-width="1.5"/>
                            <circle cx="18.5" cy="6" r="1" fill="#FEFEFE"/>
                            <circle cx="12.5" cy="12" r="5" stroke="#FEFEFE" stroke-width="1.5"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M18.5 3H15.5C12.7386 3 10.5 5.23858 10.5 8V10H6.5V14H10.5V21H14.5V14H18.5V10H14.5V8C14.5 7.44772 14.9477 7 15.5 7H18.5V3Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <rect x="2.5" y="3" width="20" height="18" rx="4" stroke="#FEFEFE" stroke-width="1.5"/>
                            <path d="M10.9472 8.72361L15.7111 11.1056C16.4482 11.4741 16.4482 12.5259 15.7111 12.8944L10.9472 15.2764C10.2823 15.6088 9.5 15.1253 9.5 14.382V9.61803C9.5 8.87465 10.2823 8.39116 10.9472 8.72361Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
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
    );
};

export default Contacts;