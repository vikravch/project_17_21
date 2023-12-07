import React, {useEffect, useState} from 'react';
import style from './ProductsGallery.module.css';
import ProductCard from "../product-card/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../../general/redux/types";
import {Columns, ShopPageState} from "../../redux/types";
import {useLocation} from "react-router-dom";
import {getProductsAsyncAction} from "../../redux/asyncActions";
import {AppDispatch} from "../../../../../general/redux/store";
import RequestProducts from "../../../domain/model/requestProducts";

const ProductsGallery = () => {
    //hooks
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    //styles
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const [gridStyles, setGridStyles] = useState({});
    //products
    const countProducts = 12;
    const [requestObject, setRequestObject]= useState<RequestProducts>({
        category: null,
        price: null,
        sorting: null,
        page: 1
    });
    const {products, error} = useSelector<AppStore, ShopPageState>(
        state => state.shopPage
    );
    //link
    const searchParams = new URLSearchParams(location.search);

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

    useEffect(() => {
        let updatedRequestObject: RequestProducts = { ...requestObject };
        searchParams.forEach((value, key) => {
            if (Object.prototype.hasOwnProperty.call(requestObject, key)) {
                if (updatedRequestObject[key as keyof RequestProducts] !== value) {
                    (updatedRequestObject as any)[key] = value;
                    setRequestObject(updatedRequestObject);
                }
            }
        });
        console.log(updatedRequestObject);
        dispatch(getProductsAsyncAction(updatedRequestObject));
    }, [location]);

    useEffect(()=>{
        if (requestObject.page !== 1){
            console.log(requestObject);
            dispatch(getProductsAsyncAction(requestObject));
        }
    }, [requestObject.page])

    return (
        <div className={style.wrapper + " " + style['desktop' + columns.countDesktop]}>
            <div className={style.productGallery} style={gridStyles}>
                {
                    products ?
                        products.slice(0, requestObject.page * countProducts)
                            .map((product, index) => (
                                <ProductCard product={product}
                                             columns={columns}
                                             key={`product_${index}_${product.name}`}
                                />
                            )) :
                        <p>{error}</p>
                }
            </div>
            {products && products.length > requestObject.page * countProducts
                && <button className={style.showMore} onClick={() => {
                    setRequestObject(prevState => ({...prevState, page: ++requestObject.page}))
                }}>Show more</button>}
        </div>
    );
};

export default ProductsGallery;