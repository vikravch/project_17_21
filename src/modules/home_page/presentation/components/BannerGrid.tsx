import React from 'react';
import "./BannerGrid.css"
import ShopNowArrow from "../icons/ShopNowArrow";
import {
    sliderBannerCardImgPlaceholder1,
    sliderBannerGrinImgPlaceholder,
    sliderIBannerCardImgPlaceholder2
} from "../../../../general/utils/Constants";

const BannerGrid = () => {
    return (
        <div className={'banner_grid_wrapper'}>
            <div className={'banner_grid_section'}>
                <div className={'banner_grid_img_placeholder'}>
                    <img src={sliderBannerGrinImgPlaceholder} alt="Banner_Img_Placeholder"/>
                    <div className={'banner_grid_texts'}>
                        <h6 className={'banner_grid_title'}>Living Room</h6>
                        <div className={'shop_now_link'}>
                            <button className={'shop_now_btn'}>Shop Now</button>
                            <ShopNowArrow color="#141718"/>
                        </div>
                    </div>
                </div>
                <div className={'banner_grid_cards'}>
                    <div className={'banner_grid_cards_card1'}>
                        <img src={sliderBannerCardImgPlaceholder1} alt="Banner_card"/>
                        <div className={'banner_grid_texts_cards'}>
                            <h6 className={'banner_grid_title'}>Bedroom</h6>
                            <div className={'shop_now_link'}>
                                <button className={'shop_now_btn'}>Shop Now</button>
                                <ShopNowArrow color="#141718"/>
                            </div>
                        </div>
                    </div>
                    <div className={'banner_grid_cards_card2'}>
                        <img src={sliderIBannerCardImgPlaceholder2} alt="Banner_card"/>
                        <div className={'banner_grid_texts_cards'}>
                            <h6 className={'banner_grid_title'}>Kitchen</h6>
                            <div className={'shop_now_link'}>
                                <button className={'shop_now_btn'}>Shop Now</button>
                                <ShopNowArrow color="#141718"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BannerGrid;
