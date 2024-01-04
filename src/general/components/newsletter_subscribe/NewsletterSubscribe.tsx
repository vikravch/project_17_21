import React from 'react';
import "./NewsletterSubscribe.css"
import "../../../fonts/fonts.css"
import LetterIcon from "./icon/LetterIcon";
import {sendEmail} from "./sendEmailFetch";

const Newsletter = () => {
    function handleEmailSubmit(e: HTMLInputElement) {
        let regex = new RegExp(/^(.[^\s,()\[\]]+)@[\w-]+(\.[a-zA-Z]{2,4})+$/);
        let match = regex.test(e.value);
        if (match)
           sendEmail();
        else
            alert("This e-mail is not allowed. Please enter a valid e-mail");
            }


    return (
        <div className={'newsletter_bar_wrapper'}>
            <div className={'join_our_newsletter'}>
                <h2 className={'join_our_newsletter_text'}>Join Our Newsletter</h2>
                <h3 className={'sign_up_text'}>Sign up for details, new products and promotions</h3>
                <div className={'email_newsletter_submission'}>
                    {/*<div className={'icon_and_input'}>*/}
                    <LetterIcon/>
                    <input className={'newsletter_email_input'} type="email" placeholder={'Email address'}/>
                    <button className={'newsletter_signup_btn'}
                            onClick={(e) => handleEmailSubmit(e.currentTarget.previousElementSibling as HTMLInputElement)}>Signup
                    </button>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Newsletter;