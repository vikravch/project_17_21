import React from 'react';
import "./Values.css"
import Shipping_icon from "../icons/Values_icons/Shipping_icon";
import Payment_icon from "../icons/Values_icons/Payment_icon";
import Lock_icon from "../icons/Values_icons/Lock_icon";
import Call_icon from "../icons/Values_icons/Call_icon";

const Values = () =>
{
    const handleCardClick = (valueName: string) => {
        switch (valueName) {
            case 'Free Shipping':
                window.open('https://example.com/free-shipping', '_blank');
                break;
            case 'Money-back':
                window.open('https://example.com/money-back', '_blank');
                break;
            case 'Secure Payments':
                window.open('https://example.com/secure_payments', '_blank');
                break;
            case '24/7 Support':
                window.open('https://example.com/24_7_support', '_blank');
                break;
            default:
                break;
        }
    };
    return (
        <div className={'values_section'}>
            <div className={'values_section_inner'}>
                <div className={'value_card'} onClick={() => handleCardClick('Free Shipping')}>
                    <Shipping_icon color="#141718"/>
                    <span className={'value_name'}>Free Shipping</span>
                    <span className={'value_description'}>Order<br/>above $200</span>
                </div>
                <div className={'value_card'} onClick={() => handleCardClick('Money-back')}>
                    <Payment_icon color="#141718"/>
                    <span className={'value_name'}>Money-back</span>
                    <span className={'value_description'}>30 days<br/>guarantee</span>
                </div>
                <div className={'value_card'} onClick={() => handleCardClick('Secure Payments')}>
                    <Lock_icon color="#141718"/>
                    <span className={'value_name'}>Secure Payments</span>
                    <span className={'value_description'}>Secured<br/>by Stripe</span>
                </div>
                <div className={'value_card'}>
                    <Call_icon color="#141718"/>
                    <span className={'value_name'}>24/7 Support</span>
                    <span className={'value_description'}>Phone and<br/>Email support</span>
                </div>
            </div>
        </div>
    );
};

export default Values;
