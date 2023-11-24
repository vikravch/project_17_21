import React from 'react';
import arrowBack from "../../../../../icons/chevron_right.png";
import './header-complete.css'
import checkIcon from "../../../../../icons/check_icon.png";
const HeaderComplete = () => {
  return (
    <div className="complete_container">
      <div className="back_home_arrow">
        <img className="arrow_img" src={arrowBack} alt="arrow back"/>
        <p className="back_home_arrow_text">back to home</p>
      </div>
      <p className="header_complete_heading">Complete!</p>
      <div className="complete_step_container">
        <div className="step_box_cart step1">
          <div className="complete_circle header_circle">
            <img src={checkIcon} alt="Check"/>
          </div>
          <p className="complete_subheader">Shopping cart</p>
        </div>
        <div className="step_box_cart step2">
          <div className="complete_circle header_circle">
            <img src={checkIcon} alt="Check"/>
          </div>
          <p className="complete_subheader">Checkout details</p>
        </div>
        <div className="step_box_cart_active">
          <div className="active_complete_circle header_circle">
            <p>3</p>
          </div>
          <p className="subheader_step3_complete">Order complete</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComplete;