import React, {useEffect, useState} from 'react';
import style from './ProductsGallery.module.css';
import ProductCard from "../product-card/ProductCard";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../general/redux/types";
import {Columns, ShopPageState} from "../../redux/types";

type Devices = 'desktop' | 'mobile';

const ProductsGallery = () => {
    const {products, error} = useSelector<AppStore, ShopPageState>(
        state => state.shopPage
    );
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const rows = 4;
    const [device, setDevice] = useState<Devices>();
    const [gridStyles, setGridStyles] = useState({});
    const [visibleProducts, setVisibleProducts] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setGridStyles({
                gridTemplateColumns: `repeat(${window.innerWidth >= 768 ? columns.countDesktop : columns.countMobile}, 1fr)`,
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        window.innerWidth >= 768 ? setDevice('desktop') : setDevice('mobile');
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [columns]);
    useEffect(()=>{
        setVisibleProducts(prevState => prevState + rows * (device === 'desktop' ? columns.countDesktop : columns.countMobile))
    },[null])

    return (
        <div className={style.wrapper}>
            <div className={style.productGallery} style={gridStyles}>
                {
                    products ?
                        products.slice(0, visibleProducts)
                            .map((product, index) => (
                            <ProductCard product={product}
                                         columns={columns}
                                         key={`product_${index}_${product.name}`}
                            />
                        )) :
                        <p>{error}</p>
                }
            </div>
            {products && products.length > visibleProducts
                && <button className={style.showMore} onClick={()=>{setVisibleProducts(prevState => prevState + rows * (device === 'desktop' ? columns.countDesktop : columns.countMobile))}}>Show more</button>}
        </div>
    );
};

export default ProductsGallery;