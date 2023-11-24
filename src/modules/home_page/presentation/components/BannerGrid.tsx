import React from 'react';
import "../page/HomePage.css"

const BannerGrid = () => {
    return (
        <div className={'banner_grid_wrapper'}>
            <div className={'banner_grid_img_placeholder'}>
                <div className={'banner_grid_texts'}>
                    <h6 className={'banner_grid_title'}>Living Room</h6>
                    <div className={'shop_now_link'}>
                        <button className={'shop_now_btn'}>Shop Now</button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3.33331 8H12.6666" stroke="#141718" stroke-width="1.25" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M8.66669 12L12.6667 8" stroke="#141718" stroke-width="1.25" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M8.66669 4L12.6667 8" stroke="#141718" stroke-width="1.25" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={'banner_grid_cards'}>
                <div className={'banner_grid_cards_card1'}>
                    <div className={'banner_grid_texts'}>
                        <h6 className={'banner_grid_title'}>Bedroom</h6>
                        <div className={'shop_now_link'}>
                            <button className={'shop_now_btn'}>Shop Now</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path d="M3.33331 8H12.6666" stroke="#141718" stroke-width="1.25" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M8.66669 12L12.6667 8" stroke="#141718" stroke-width="1.25"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M8.66669 4L12.6667 8" stroke="#141718" stroke-width="1.25"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={'banner_grid_cards_card2'}>
                    <div className={'banner_grid_texts'}>
                        <h6 className={'banner_grid_title'}>Kitchen</h6>
                        <div className={'shop_now_link'}>
                            <button className={'shop_now_btn'}>Shop Now</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path d="M3.33331 8H12.6666" stroke="#141718" stroke-width="1.25" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M8.66669 12L12.6667 8" stroke="#141718" stroke-width="1.25"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M8.66669 4L12.6667 8" stroke="#141718" stroke-width="1.25"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BannerGrid;