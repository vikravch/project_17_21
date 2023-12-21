import React from 'react';
import "./Discount.css"
import imageDiscount from "../page/images/imageDiscount.webp"
import SliderArrowRight from "../icons/SliderArrowRight";
import { Link } from 'react-router-dom';
const Discount = () =>
{
    return (
        <div className={'discount_wrapper'}>
            <div className={'discount_wrapper_inner'}>
                <img className={'image_placeholder_discount'} src={imageDiscount} alt="Discount Image"/>
                <div className={'discount_section'}>
                    <div className={'discount_section_padding'}>
                        <h5 className={'titleDiscount'}>HUNDREDS of <br/>New lower prices!</h5>
                        <p className={'textDiscount'}>It’s more affordable than ever to give every room in your home a
                            stylish makeover</p>
                        <div className={'shop_now_link'}>
                            <Link to="/shop" className={'shop_now_btn'}>Shop Now</Link>
                            <SliderArrowRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Discount;