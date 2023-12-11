import React from 'react';
import "./SliderSection.css"
import "../../../../fonts/fonts.css"
import {
    sliderImgPlaceholderSmall, sliderImgTestArr
} from "../../../../general/utils/Constants";
import SliderArrowLeft from "../icons/SliderArrowLeft";
import SliderArrowRight from "../icons/SliderArrowRight";
import {useAppDispatch, useAppSelector} from "../../../../general/redux/hooks";
import {changePicture} from "../../../../general/redux/slices/changePictureSlice";
const SliderSection = () => {
    const dispatch = useAppDispatch();
    const pictureIndex = useAppSelector(state => state.changePicture.pictureIndex);
    return (
        <div className={'slider_section_wrapper'}>
            <div className={'slider_section'}>
                <div className={'image_slider'}>
                    <img className={'slider_img_big'} src={sliderImgTestArr[pictureIndex]} alt={"big slider image"}/>
                    <img className={'slider_img_small'} src={sliderImgPlaceholderSmall} alt={"small slider image"}/>
                    <button className={'img_slider_btn_left'} onClick={()=>dispatch(changePicture((pictureIndex > 0 ? pictureIndex-1 : sliderImgTestArr.length-1)))}>
                        <SliderArrowLeft />
                    </button>
                    <button className={'img_slider_btn_right'} onClick={()=>dispatch(changePicture((pictureIndex < sliderImgTestArr.length-1 ? pictureIndex+1 : 0)))}>
                        <SliderArrowRight/>
                    </button>
                    <div className={'navigation_dots'}>
                        {sliderImgTestArr.map((item, index) =>
                            index != pictureIndex? <div key={index} className={'dot'}></div>:<div  key={index} className={'current_dot'}></div>
                        )}
                    </div>
                </div>
                <div className={'slider_section_texts'}>
                    <h4 className={"slider_section_slogan"}>Simply Unique<span className={'slider_section_slogan_span'}>/</span> Simply Better<span className={'slider_section_slogan_span'}>.</span></h4>
                    <p className={'slider_section_gift_disclaimer'}><span>3legant</span> is a gift & decorations store
                        based
                        in HCMC, Vietnam. Est since 2019.</p>
                </div>
            </div>
        </div>
    );
};

export default SliderSection;