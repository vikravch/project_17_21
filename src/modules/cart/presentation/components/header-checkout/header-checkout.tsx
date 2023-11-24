import React from 'react';
import arrowBack from "../../../../../icons/chevron_right.png";
import checkIcon from "../../../../../icons/check_icon.png";
import "./header-checkout.css"

const HeaderCheckout = () => {
  return (
    <div className="header_container">
      <div className="back_arrow">
        <img className="arrow_img" src={arrowBack} alt="arrow back"/>
        <p className="back_arrow_text">back</p>
      </div>
      <p className="header_heading">Check Out</p>

      <div className="step_container">
        <div className="step_box_finished">
          <div className="finished_circle circle">
            <img src={checkIcon} alt="Check"/>
          </div>
          <p className="finished_subheader subheader_order_complete">Shopping cart</p>
        </div>
        <div className="step_box">
          <div className="active_circle circle">
            <p>2</p>
          </div>
          <p className="subheader_step1">Checkout details</p>
        </div>
        <div className="step_box_inactive">
          <div className="inactive_circle circle">
            <p>3</p>
          </div>
          <p className="subheader_complete subheader_order_complete">Order complete</p>
        </div>

      </div>
    </div>
  );
};

export default HeaderCheckout;