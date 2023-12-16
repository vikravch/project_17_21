import {Item} from "../components/navigation/types";

export const sliderImgPlaceholderBig = require('../../modules/home_page/presentation/page/images/test1.webp');
export const sliderImgPlaceholderSmall = require('../../modules/home_page/presentation/page/images/paste-657c4244e0ff9.webp');
export const sliderBannerGrinImgPlaceholder = require('../../modules/home_page/presentation/page/images/sliderGridPlaceholder.webp');
export const sliderBannerCardImgPlaceholder1 = require('../../modules/home_page/presentation/page/images/cardPlaceholder1.webp');
export const sliderIBannerCardImgPlaceholder2 = require('../../modules/home_page/presentation/page/images/cardPlaceholder2.webp');

export const navItems:Item[] = [
    {title: 'Home', route: 'home'},
    {title: 'Shop', route: 'shop'},
    {title: 'Products', route: 'products'},
    {title: 'Blog', route: 'blog'},
    {title: 'Contact Us', route: 'contact_us'}
];

export const sliderImgTestArr =[
    require('../../modules/home_page/presentation/page/images/test1.webp'),
    require('../../modules/home_page/presentation/page/images/test2.webp'),
    require('../../modules/home_page/presentation/page/images/test3.webp'),
    require('../../modules/home_page/presentation/page/images/test4.webp')
] ;

export const bannerGridImgTestArr =[
    {
        image:  sliderBannerGrinImgPlaceholder,
        category: 'Living room'
    },
    {
        image:  sliderBannerCardImgPlaceholder1,
        category: 'Bedroom'
    },
    {
        image:  sliderIBannerCardImgPlaceholder2,
        category: 'Kitchen'
    }
] ;


