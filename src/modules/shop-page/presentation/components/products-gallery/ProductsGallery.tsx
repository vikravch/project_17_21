import React, {useEffect, useState} from 'react';
import style from './ProductsGallery.module.css';
import ShopProductCard from "../product-card/ShopProductCard";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../general/redux/types";
import {Columns, RequestSearchProducts, RequestShopProducts, ShopPageState} from "../../redux/types";

type Props = {
    setRequestObject: React.Dispatch<React.SetStateAction<RequestSearchProducts>> | React.Dispatch<React.SetStateAction<RequestShopProducts>>
}

const ProductsGallery = ({setRequestObject}: Props) => {
    //styles
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const [gridStyles, setGridStyles] = useState({});

    const {products, error, expectedCountOfProducts} = useSelector<AppStore, ShopPageState>(
        state => state.shopPage
    );

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
        <div className={style.wrapper + " " + style['desktop' + columns.countDesktop]}>
            <div className={style.productGallery} style={gridStyles}>
                {
                    products ?
                        products.map((product, index) => (
                            <ShopProductCard product={product}
                                             columns={columns}
                                             key={`product_${index}_${product.name}`}
                            />
                        )) :
                        <p>{error}</p>
                }
            </div>
            {products && expectedCountOfProducts > products.length &&
                <button className={style.showMore} onClick={() => {
                    setRequestObject((prevState: any) => ({...prevState, page: ++prevState.page}))
                }}>Show more
                </button>}
        </div>
    );
};

export default ProductsGallery;