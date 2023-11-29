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

    const [device, setDevice] = useState<Devices>();
    const [rows, setRows] = useState(3);
    const [gridStyles, setGridStyles] = useState({});
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

    return (
        <div className={style.wrapper}>
            <div className={style.productGallery} style={gridStyles}>
                {
                    products ?
                        products.slice(0, device === 'desktop' ? columns.countDesktop * rows : columns.countMobile * rows)
                            .map((product, index) => (
                            <ProductCard product={product}
                                         columns={columns}
                                         key={`product_${index}_${product.name}`}
                            />
                        )) :
                        <p>{error}</p>
                }
            </div>
            {products && products.length > (device === 'desktop' ? columns.countDesktop * rows : columns.countMobile * rows)
                && <button className={style.showMore} onClick={()=>{setRows(prevState => prevState + 3)}}>Show more</button>}
        </div>
    );
};

export default ProductsGallery;