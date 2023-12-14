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
                {/*<div className={'value_cards_top'}>*/}
                <div className={'card_start'}>
                    <div className={'value_card'} onClick={() => handleCardClick('Free Shipping')}>
                        <Shipping_icon color="#141718"/>
                        <p className={'value_name'}>Free Shipping</p>
                        <p className={'value_description'}>Order above $200</p>
                    </div>
                </div>
                <div className={'card_start'}>
                    <div className={'value_card'} onClick={() => handleCardClick('Money-back')}>
                        <Payment_icon color="#141718"/>
                        <p className={'value_name'}>Money-back</p>
                        <p className={'value_description'}>30 days guarantee</p>
                    </div>
                </div>
                {/*</div>*/}
                {/*<div className={'value_cards_bottom'}>*/}
                <div className={'card_start'}>
                    <div className={'value_card'} onClick={() => handleCardClick('Secure Payments')}>
                        <Lock_icon color="#141718"/>
                        <p className={'value_name'}>Secure Payments</p>
                        <p className={'value_description'}>Secured by Stripe</p>
                    </div>
                </div>
                <div className={'card_start'}>
                    <div className={'value_card'}>
                        <Call_icon color="#141718"/>
                        <p className={'value_name'}>24/7 Support</p>
                        <p className={'value_description'}>Phone and Email support</p>
                    </div>
                </div>
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Values;
