import React from 'react';
import "../page/HomePage.css"
import "./Values.css"
import Shipping_icon from "../icons/Values_icons/Shipping_icon";
import Payment_icon from "../icons/Values_icons/Payment_icon";
import Lock_icon from "../icons/Values_icons/Lock_icon";
import Call_icon from "../icons/Values_icons/Call_icon";

const Values = () => {
    return (
        <div className={'values_section'}>

            <div className={'value_card'}>
                <Shipping_icon color="#141718" />
                <span className={'value_name'}>Free Shipping</span>
                <span className={'value_description'}>Order<br />above $200</span>

            </div>
            <div className={'value_card'}>
                <Payment_icon color="#141718" />
                <span className={'value_name'}>Money-back</span>
                <span className={'value_description'}>30 days<br />guarantee</span>

            </div>
            <div className={'value_card'}>
                <Lock_icon color="#141718" />
                <span className={'value_name'}>Secure Payments</span>
                <span className={'value_description'}>Secured<br />by Stripe</span>

            </div>
            <div className={'value_card'}>
                <Call_icon color="#141718" />
                <span className={'value_name'}>24/7 Support</span>
                <span className={'value_description'}>Phone and<br />Email support</span>
            </div>
        </div>
    );
};

export default Values;