import React from 'react';
import "./NewsletterSubscribe.css"
import "../../../fonts/fonts.css"
const Newsletter = () => {
    return (
        <div className={'newsletter_bar_wrapper'}>
            <div className={'join_our_newsletter'}>
                <h2 className={'join_our_newsletter_text'}>Join Our Newsletter</h2>
                <h3 className={'sign_up_text'}>Sign up for details, new products and promotions</h3>
                <div className={'email_newsletter_submission'}>
                    <div className={'icon_and_input'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M4.07669 6.53075C4.23293 6.01858 4.70919 5.646 5.27248 5.646H19.2725C19.8358 5.646 20.312 6.01858 20.4683 6.53075L12.2725 11.9946L4.07669 6.53075ZM2.52251 6.88226C2.52237 6.89026 2.52236 6.89826 2.52248 6.90625V16.896C2.52248 18.4148 3.7537 19.646 5.27248 19.646H19.2725C20.7913 19.646 22.0225 18.4148 22.0225 16.896V6.90622M20.5225 8.29738V16.896C20.5225 17.5864 19.9628 18.146 19.2725 18.146H5.27248C4.58212 18.146 4.02248 17.5864 4.02248 16.896V8.29738L11.8565 13.52C12.1084 13.688 12.4366 13.688 12.6885 13.52L20.5225 8.29738ZM22.0224 6.88229C22.0151 5.36981 20.7867 4.146 19.2725 4.146H5.27248C3.75828 4.146 2.52991 5.3698 2.52251 6.88226"
                                  fill="#141718"/>
                        </svg>
                        <input className={'newsletter_email_input'} type="email" placeholder={'Email address'}/>
                    </div>
                    <button className={'newsletter_signup_btn'}>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;