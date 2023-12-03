import React from 'react';
import "../../../../fonts/fonts.css"
import SliderSection from "../components/SliderSection";
import BannerGrid from "../components/BannerGrid";
import Values from "../components/Values";
import Discount from "../components/Discount";


const HomePage = () => {
    return (
        <div>
            <SliderSection/>
            <BannerGrid/>
            <Values/>
            <Discount/>
        </div>
    );
};

export default HomePage;
