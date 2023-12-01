import React from 'react';
import "./Discount.css"
//import imageDiscount from "../../presentation/page/images/imageDiscpunt.png"
import SliderArrowRight from "../icons/SliderArrowRight";

const Discount = () => {
    return (
        <div className={'discount_wrapper'}>
            {/*<div className={'image_placeholder_discount'}>*/}
                {/*<img className={'image_placeholder_discount'} src={imageDiscount} alt="Discount Image" />*/}
            {/*</div>*/}
            <div className={'discount_section'}>

                <span className={'sale_discount'}>SALE UP TO 35% OFF</span>
                <h5 className={'titleDiscount'}>HUNDREDS of <br/>New lower prices!</h5>
                <p className={'textDiscount'}>It’s more affordable than ever to give every room in your home a stylish makeover</p>
                <button className={'shop_now_button'}>Shop Now<SliderArrowRight/>
                </button>
            </div>

        </div>
    );
};

export default Discount;
