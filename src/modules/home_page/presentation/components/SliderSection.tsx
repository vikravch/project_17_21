import React from 'react';
import "../page/HomePage.css"
import "../../../../fonts/fonts.css"
import {
    sliderImgPlaceholderBig,
    sliderImgPlaceholderSmall
} from "../../../../general/utils/Constants";
const SliderSection = () => {
    return (
        <div className={'slider_section'}>
            <div className={'image_slider'}>
                <img className={'slider_img_big'}  src={sliderImgPlaceholderBig} alt="big slider image"/>
                <img className={'slider_img_small'} src={sliderImgPlaceholderSmall} alt="small slider image"/>
                <button className={'img_slider_btn_left'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M6.66669 16H25.3334" stroke="#6C7275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.66669 16L14.6667 24" stroke="#6C7275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.66669 16L14.6667 8" stroke="#6C7275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button className={'img_slider_btn_right'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M6.66666 16H25.3333" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.3333 24L25.3333 16" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.3333 8L25.3333 16" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div className={'navigation_dots'}>
                    <div className={'current_dot'}></div>
                    <div className={'dot'}></div>
                    <div className={'dot'}></div>
                </div>
            </div>
            <div className={'slider_section_texts'}>
                <h4 className={"slider_section_slogan"}>Simply Unique/ Simply Better.</h4>
                <p className={'slider_section_gift_disclaimer'}><span>3legant</span> is a gift & decorations store based
                    in HCMC, Vietnam. Est since 2019.</p>
            </div>

        </div>
    );
};

export default SliderSection;