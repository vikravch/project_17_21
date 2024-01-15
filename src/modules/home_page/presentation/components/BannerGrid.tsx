import React, {useEffect} from 'react';
import "./BannerGrid.css"
import ShopNowArrow from "../icons/ShopNowArrow";
import {
    sliderBannerCardImgPlaceholder1,
    sliderBannerGrinImgPlaceholder,
    sliderIBannerCardImgPlaceholder2
} from "../../../../general/utils/Constants";
import {getAllBannerGridImagesAsyncAction} from "../redux/asyncActions";
import {useAppDispatch, useAppSelector} from "../../../../general/redux/hooks";
import {Link} from "react-router-dom";

const BannerGrid = () => {
    const dispatch = useAppDispatch();
    const pictures = useAppSelector(state => state.bannerGridImagesGallery.bannerGridImages);

    useEffect(()=>{
        dispatch(getAllBannerGridImagesAsyncAction());
    },[]);


    return (
        <div className={'banner_grid_wrapper'}>
            <div className={'banner_grid_section'}>
                <div className={'banner_grid_img_placeholder'}>
                    <img src={ pictures !== undefined ? pictures[0].image:sliderBannerGrinImgPlaceholder} alt={pictures !== undefined ? pictures[0].alt: "Initial state image"}/>
                    <div className={'banner_grid_texts'}>
                        <h6 className={'banner_grid_title'}>{pictures !== undefined ? pictures[0].name:"Living Room"}</h6>
                        <div className={'shop_now_link'}>
                            <Link to={`/shop?category=${pictures !== undefined ? pictures[0].category:"Living Room"}`}>
                                <button className={'shop_now_btn'}>Shop Now</button>
                            </Link>
                            <ShopNowArrow color="#141718"/>
                        </div>
                    </div>
                </div>
                <div className={'banner_grid_cards'}>
                    <div className={'banner_grid_cards_card1'}>
                        <img src={pictures !== undefined ? pictures[1].image:sliderBannerCardImgPlaceholder1} alt={pictures !== undefined ? pictures[1].alt: "Initial state image"}/>
                        <div className={'banner_grid_texts_cards'}>
                            <h6 className={'banner_grid_title'}>{pictures !== undefined ? pictures[1].name:'Bedroom'}</h6>
                            <div className={'shop_now_link'}>
                                <Link to={`/shop?category=${pictures !== undefined ? pictures[1].category:"Living Room"}`}>
                                    <button className={'shop_now_btn'}>Shop Now</button>
                                </Link>
                                <ShopNowArrow color="#141718"/>
                            </div>
                        </div>
                    </div>
                    <div className={'banner_grid_cards_card2'}>
                        <img src={pictures !== undefined ? pictures[2].image:sliderIBannerCardImgPlaceholder2} alt={pictures !== undefined ? pictures[2].alt: "Initial state image"}/>
                        <div className={'banner_grid_texts_cards'}>
                            <h6 className={'banner_grid_title'}>{pictures !== undefined ? pictures[2].name:'Kitchen'}</h6>
                            <div className={'shop_now_link'}>
                                <Link to={`/shop?category=${pictures !== undefined ? pictures[2].category:"Living Room"}`}>
                                    <button className={'shop_now_btn'}>Shop Now</button>
                                </Link>
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
