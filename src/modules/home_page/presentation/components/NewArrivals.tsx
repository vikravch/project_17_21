import React, {useEffect, useRef, useState} from 'react';
import "./NewArrivals.css";
import SliderArrowRight from "../icons/SliderArrowRight";
import imageProduct from "../../presentation/page/images/productImage.png";

    const NewArrivals = () => {
        const [scrollIndicatorWidth, setScrollIndicatorWidth] = useState(0);
        const scrollRef = useRef<HTMLDivElement | null>(null);

        const handleScroll = () => {
            if (scrollRef.current) {
                const {scrollLeft, scrollWidth, clientWidth} = scrollRef.current;
                const newWidth = (scrollLeft / (scrollWidth - clientWidth)) * 100;
                setScrollIndicatorWidth(newWidth);
            }
        };

        useEffect(() => {
            if (scrollRef.current) {
                scrollRef.current.addEventListener('scroll', handleScroll);
            }
            return () => {
                if (scrollRef.current) {
                    scrollRef.current.removeEventListener('scroll', handleScroll);
                }
            };
        }, []);
        return (
            <div className={'new_arrivals_section'}>
                <div className={'new_arrivals_header'}>
                    <h5 className={'new_arrivals_title'}>New<br/>Arrivals</h5>
                    <button className={'btnMoreProducts button_desktop'}>More Products <SliderArrowRight/></button>
                </div>
                <div className="product_scrolling_bar" ref={scrollRef}>
                    <img src={imageProduct} alt={'Product image'}/>
                    <img src={imageProduct} alt={'Product image'}/>
                    <img src={imageProduct} alt={'Product image'}/>
                    <img src={imageProduct} alt={'Product image'}/>
                    <img src={imageProduct} alt={'Product image'}/>
                    <img src={imageProduct} alt={'Product image'}/>
                </div>
                <div className="scrollIndicator" style={{left: `${scrollIndicatorWidth}%`}}></div>
                <button className={'btnMoreProducts button_mobile'}>More Products <SliderArrowRight/></button>
            </div>
        );
    };

    export default NewArrivals;
