import React from 'react';
import "./HomePage.css"
import "../../../../fonts/fonts.css"
import SliderSection from "../components/SliderSection";
import BannerGrid from "../components/BannerGrid";
import Values from "../components/Values";
import Articles from "../components/Articles/Articles";
import Discount from "../components/Discount";


const HomePage = () => {
    return (
        <div>
            <SliderSection/>
            <BannerGrid/>
            <Values/>
            <Discount/>
            <Articles/>
        </div>
    );
};

export default HomePage;