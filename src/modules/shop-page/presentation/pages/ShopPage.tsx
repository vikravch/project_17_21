import React, {useEffect, useState} from 'react';
import style from './shopPage.module.css';
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import FilterTypes from "../components/filtres/filter-types/FilterTypes";
import FilterTypesDesktop from "../components/filtres/filter-types-desktop/FilterTypesDesktop";
import {Columns} from "../redux/types";
import FilterTitle from "../components/filtres/filter-title/FilterTitle";
import Sorting from "../components/sorting/Sorting";
import {Link, useLocation} from "react-router-dom";
import {AppDispatch} from "../../../../general/redux/store";
import RequestProducts from "../../domain/model/requestProducts";
import {getProductsAsyncAction} from "../redux/asyncActions";
import arrow from '../../../../images/shop_page/breadCrumbs.svg';
import {closeClickFunction} from "./utils/const";
import {priceArray} from "../components/filtres/utils/filterConst";

const ShopPage = () => {
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    //hooks
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const [requestObject, setRequestObject] = useState<RequestProducts>({
        category: "All rooms",
        price: priceArray[0].title as string,
        sorting: "Default",
        page: 1
    });

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
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

    useEffect(() => {
        document.addEventListener('click', closeClickFunction);
        return () => document.removeEventListener('click', closeClickFunction);
    })

    return (
        <div className={style.shopPage}>
            <section className={style.pageHeader}>
                <div>
                    <Link to={'/home'}>Home</Link>
                    <img src={arrow} alt={'arrow'}/>
                    <p>Shop</p>
                </div>
                <h1>Shop Page</h1>
                <p>Let’s design the place you always imagined.</p>
            </section>
            <section className={style.filterSortBlock}>
                <div className={`${style.filterAndNameDisplay3} ${columns.countDesktop !== 3 && style.filterAndNameHide}`}>
                    <FilterTitle columns={columns}/>
                    {columns.countDesktop === 3 &&
                        <div className={style.categoryNameDesktop3}>
                            <p>All rooms</p>
                        </div>}
                </div>
                <FilterTypes columns={columns}
                             category={requestObject.category}
                             price={requestObject.price}/>
                <Sorting columns={columns}
                         sorting={requestObject.sorting}/>
            </section>
            <div className={style.categoryName}>
                <p>All rooms</p>
            </div>
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                {columns.countDesktop === 3 &&
                    <FilterTypesDesktop category={requestObject.category}
                                        price={requestObject.price}/>}
                <ProductsGallery requestObject={requestObject} setRequestObject={setRequestObject}/>
            </section>
        </div>
    );
};

export default ShopPage;
