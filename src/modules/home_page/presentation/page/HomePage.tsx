import React from 'react';
import "./HomePage.css"
import "../../../../fonts/fonts.css"
import SliderSection from "../components/SliderSection";
import BannerGrid from "../components/BannerGrid";


const HomePage = () => {
    return (
        <div>
            <SliderSection/>
            <BannerGrid/>
        </div>
    );
};

export default HomePage;