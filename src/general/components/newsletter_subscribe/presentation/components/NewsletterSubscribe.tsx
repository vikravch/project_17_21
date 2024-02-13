import React from 'react';
import "./NewsletterSubscribe.css"
import "../../../../../fonts/fonts.css"
import LetterIcon from "../../icon/LetterIcon";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {sendEmailAsyncAction} from "../redux/asyncActions";

const Newsletter = () => {
    const dispatch = useAppDispatch();
    const sendEmailResult = useAppSelector(state => state.sendEmail.sendEmailResult);

    function handleEmailSubmit(e: HTMLInputElement) {
        let regex = new RegExp(/^(.[^\s,()\[\]]+)@[\w-]+(\.[a-zA-Z]{2,4})+$/);
        let match = regex.test(e.value);
        if (match){
            dispatch(sendEmailAsyncAction(e.value));
            if(sendEmailResult)
                alert("Your email is now subscribed to our newsletter. To unsubscribe click 'unsubscribe' button inside our email");
        }else
            alert("This e-mail is not allowed. Please enter a valid e-mail");
            }


    return (
        <div className={'newsletter_bar_wrapper'}>
            <div className={'join_our_newsletter'}>
                <h2 className={'join_our_newsletter_text'}>Join Our Newsletter</h2>
                <h3 className={'sign_up_text'}>Sign up for details, new products and promotions</h3>
                <div className={'email_newsletter_submission'}>
                    <LetterIcon/>
                    <input className={'newsletter_email_input'} type="email" placeholder={'Email address'}/>
                    <button className={'newsletter_signup_btn'}
                            onClick={(e) => handleEmailSubmit(e.currentTarget.previousElementSibling as HTMLInputElement)}>Signup
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Newsletter;