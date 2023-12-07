import React, {useEffect, useState} from 'react';
import style from './ProductsGallery.module.css';
import ProductCard from "../product-card/ProductCard";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../general/redux/types";
import {Columns, ShopPageState} from "../../redux/types";

const ProductsGallery = () => {
    const {products, error} = useSelector<AppStore, ShopPageState>(
        state => state.shopPage
    );
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const [gridStyles, setGridStyles] = useState({});
    const countProducts = 12;
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const handleResize = () => {
            setGridStyles({
                gridTemplateColumns: `repeat(${window.innerWidth >= 768 ? columns.countDesktop : columns.countMobile}, 1fr)`,
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [columns]);

    return (
        <div className={style.wrapper  + " " + style['desktop' + columns.countDesktop]}>
            <div className={style.productGallery} style={gridStyles}>
                {
                    products ?
                        products.slice(0, page * countProducts)
                            .map((product, index) => (
                            <ProductCard product={product}
                                         columns={columns}
                                         key={`product_${index}_${product.name}`}
                            />
                        )) :
                        <p>{error}</p>
                }
            </div>
            {products && products.length > page * countProducts
                && <button className={style.showMore} onClick={()=>{setPage(prevState => ++prevState)}}>Show more</button>}
        </div>
    );
};

export default ProductsGallery;