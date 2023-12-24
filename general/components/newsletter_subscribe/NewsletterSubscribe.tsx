import React from 'react';
import "./NewsletterSubscribe.css"
import "../../../fonts/fonts.css"
import LetterIcon from "./icon/LetterIcon";
const Newsletter = () => {
    return (
        <div className={'newsletter_bar_wrapper'}>
            <div className={'join_our_newsletter'}>
                <h2 className={'join_our_newsletter_text'}>Join Our Newsletter</h2>
                <h3 className={'sign_up_text'}>Sign up for details, new products and promotions</h3>
                <div className={'email_newsletter_submission'}>
                    <div className={'icon_and_input'}>
                        <LetterIcon/>
                        <input className={'newsletter_email_input'} type="email" placeholder={'Email address'}/>
                    </div>
                    <button className={'newsletter_signup_btn'}>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;