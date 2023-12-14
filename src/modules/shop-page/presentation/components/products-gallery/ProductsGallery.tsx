import React, {useEffect, useState} from 'react';
import style from './ProductsGallery.module.css';
import ShopProductCard from "../product-card/ShopProductCard";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../general/redux/types";
import {Columns, RequestProducts, ShopPageState} from "../../redux/types";

interface Props {
    requestObject: RequestProducts,
    setRequestObject: React.Dispatch<React.SetStateAction<RequestProducts>>
}

const ProductsGallery = ({requestObject, setRequestObject}: Props) => {

    //styles
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const [gridStyles, setGridStyles] = useState({});
    //products
    const countProducts = 12;

    const {products, error} = useSelector<AppStore, ShopPageState>(
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
                        products.slice(0, requestObject.page * countProducts) //mb remove countProducts!
                            .map((product, index) => (
                                <ShopProductCard product={product}
                                                 columns={columns}
                                                 key={`product_${index}_${product.name}`}
                                />
                            )) :
                        <p>{error}</p>
                }
            </div>
            <button className={style.showMore} onClick={() => {
                setRequestObject(prevState => ({...prevState, page: ++requestObject.page}))
            }}>Show more
            </button>
        </div>
    );
};

export default ProductsGallery;