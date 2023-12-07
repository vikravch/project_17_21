import React from 'react';
import "../../../../fonts/fonts.css"
import SliderSection from "../components/SliderSection";
import BannerGrid from "../components/BannerGrid";
import Values from "../components/Values";
import Articles from "../components/articles/Articles";
import Discount from "../components/Discount";
import NewArrivals from "../components/NewArrivals";


const HomePage = () => {
    return (
        <div>
            <SliderSection/>
            <BannerGrid/>
            <NewArrivals/>
            <Values/>
            <Discount/>
            <Articles/>
        </div>
    );
};

export default HomePage;