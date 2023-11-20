import React from 'react';
import arrowBack from "../../../../../icons/chevron_right.png";
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
          {/*<p className="subheader_step2 subheader2">Checkout details</p>*/}
        </div>
        {/*<div className="subheader_box_inactive2">*/}
        {/*  <div className="step_circle circle3">*/}
        {/*    <p>3</p>*/}
        {/*  </div>*/}
        {/*  <p className="subheader_step2 subheader3">Order complete</p>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default HeaderCheckout;