import React, {useEffect, useRef, useState} from 'react';
import "./NewArrivals.css";
import {Link} from "react-router-dom";
import Product from "../../../shop-page/domain/model/product";
import ProductsFakeRepository from "../../../shop-page/data/repository/productsFakeRepository";
import GetAllProducts from "../../../shop-page/domain/use_case/getAllProducts";
import SliderArrowRight from "../icons/SliderArrowRight";


const NewArrivals = () =>
{
    const [newProducts, setNewProducts] = useState<Product[]>([]);
    // let ratingIcons: string[] = [];

    const [scrollIndicatorWidth, setScrollIndicatorWidth] = useState(0);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchNewProducts = async () => {
            const allProducts: Product[] = await GetAllProducts(new ProductsFakeRepository())();
            const newProducts: Product[] = allProducts.filter((product: Product) => product.isNew);
            setNewProducts(newProducts);
        };

        fetchNewProducts();
    }, []);

    const handleScroll = () => {
        if (scrollRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = scrollRef.current;
            const newWidth = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollIndicatorWidth(newWidth);
        }
    };
    // for (let i = 0; i < {product.rating}; i++) {
    //     ratingIcons.push('★');
    // }
    // for (let i = 4; i >= product.rating; i--) {
    //     ratingIcons.push('☆');
    // }

    return (
        <div className={'new_arrivals_section'}>
            {/*<div className={'new_arrivals_section_inner'}>*/}
                <div className={'new_arrivals_header'}>
                    <h5 className={'new_arrivals_title'}>New<br/>Arrivals</h5>
                    <div className={'shop_now_link  desktop_shop_now'}>
                        <Link to="/shop" className={'shop_now_btn'}>More Products</Link>
                        <SliderArrowRight/>
                    </div>
                </div>
                <div className="product_scrolling_bar" ref={scrollRef} onScroll={handleScroll}>
                    {newProducts.map((product, index) => (
                        <div className="product_card_element" key={index}>
                            <div className={'product_images'}>
                                <img className={'product_images_placeholder'} src={product.image} alt={product.name}/>
                                <div className={'new_and_discount_badge'}>
                                    <p className="badge_new">NEW</p>
                                    <p className="badge_sale">-{product.sale}%</p>
                                </div>
                                <div className="add_to_cart">
                                    <Link className={'link_add_to_cart'} to={"/cart"}>
                                        <span className={'text_add_to_cart'}>Add to cart</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={'text_and_price'}>
                            <span className="rating_group">
                            {'★'.repeat(product.rating)}
                            </span>
                                <span className="cart_product_name">{product.name}</span>
                                <div className={'product_prices'}>
                                    <span className="product_new_price">{product.actualPrice}</span>
                                    <span className="product_old_price">{product.fullPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="scrollIndicator" style={{left: `${scrollIndicatorWidth}%`}}></div>
                <div className={'shop_now_link mobil_shop_now'}>
                    <Link to="/shop" className={'shop_now_btn'}>More Products</Link>
                    <SliderArrowRight/>
                </div>
            </div>
        // </div>
    );
};

export default NewArrivals;