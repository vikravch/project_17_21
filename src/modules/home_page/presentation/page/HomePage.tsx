import React from 'react';
import "../../../../fonts/fonts.css"
import SliderSection from "../components/SliderSection";
import BannerGrid from "../components/BannerGrid";
import Values from "../components/Values";
import Discount from "../components/Discount";
import NewArrivals from "../components/NewArrivals";
// import Articles from "../../presentation/components/articles/ArticleCard";
import "././images/HomePage.css"
import BlogAlso from "../../../blog/presentation/components/BlogAlso/BlogAlso";


const HomePage = () => {
    return (
        <div className={'home_page_wrapper'}>
            <SliderSection/>
            <BannerGrid/>
            <NewArrivals/>
            <Values/>
            <Discount/>
            <BlogAlso/>
            {/*<Articles/>*/}
        </div>
    );
};

export default HomePage;