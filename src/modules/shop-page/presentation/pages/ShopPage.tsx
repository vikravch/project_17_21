import React, {useEffect, useState} from 'react';
import style from './shopPage.module.css';
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import FilterTypes from "../components/filtres/filter-types/FilterTypes";
import FilterTypesDesktop from "../components/filtres/filter-types-desktop/FilterTypesDesktop";
import {Columns, RequestProducts} from "../redux/types";
import FilterTitle from "../components/filtres/filter-title/FilterTitle";
import Sorting from "../components/sorting/Sorting";
import {Link, useLocation} from "react-router-dom";
import {AppDispatch} from "../../../../general/redux/store";
import {
    getAllCategoriesAsyncAction,
    getAllPricesAsyncAction,
    getAllSortingAsyncAction,
    getProductsAsyncAction
} from "../redux/asyncActions";
import arrow from '../../../../images/shop_page/breadCrumbs.svg';
import {closeClickFunction} from "./utils/const";
import {useAppSelector} from "../../../../general/redux/hooks";
import useUpdateEffect from "../../../../general/utils/hooks/useUpdateEffect";


const ShopPage = () => {
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const [isFiltersExists, setIsFiltersExists] = useState(false);
    const {categories, sort, prices} = useAppSelector(state => state.shopPage)
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const [requestObject, setRequestObject] = useState<RequestProducts>({
        filtering: {
            category: null,
            price: null,
            sorting: null,
        },
        page: 1
    });

    useEffect(() => {
        Promise.all([
            dispatch(getAllCategoriesAsyncAction()),
            dispatch(getAllPricesAsyncAction()),
            dispatch(getAllSortingAsyncAction())
        ]).then(() => setIsFiltersExists(true));
    }, []);

    useEffect(() => {
        document.addEventListener('click', closeClickFunction);
        return () => document.removeEventListener('click', closeClickFunction);
    }, []);

    useUpdateEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        let updatedRequestObject: RequestProducts = {...requestObject};
        for (let key in requestObject.filtering) {
            if (searchParams.has(key)) {
                const value = searchParams.get(key);
                const item = key === 'category' ?
                    categories?.find(item => item.title.toLowerCase().replace(' ', '') === value) :
                    key === 'price' ?
                        prices?.find(item => item.title.replace(/\$|\.00/g, '') === value) :
                        sort?.find(item => item.title.toLowerCase().replace(' ', '') === value);
                updatedRequestObject.filtering[key as keyof typeof requestObject.filtering] = item?.id ?? null;
            } else {
                updatedRequestObject.filtering[key as keyof typeof requestObject.filtering] = null;
            }
        }
        console.log(updatedRequestObject)
        setRequestObject(updatedRequestObject);
        dispatch(getProductsAsyncAction(updatedRequestObject));
    }, [location, isFiltersExists]);

    useEffect(() => {
        if (requestObject.page !== 1) {
            console.log(requestObject);
            dispatch(getProductsAsyncAction(requestObject));
        }
    }, [requestObject.page]);

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
                <div
                    className={`${style.filterAndNameDisplay3} ${columns.countDesktop !== 3 && style.filterAndNameHide}`}>
                    <FilterTitle columns={columns}/>
                    {columns.countDesktop === 3 &&
                        <div className={style.categoryNameDesktop3}>
                            <p>All rooms</p>
                        </div>}
                </div>
                <FilterTypes columns={columns}
                             category={requestObject.filtering.category}
                             price={requestObject.filtering.price}/>
                <Sorting columns={columns}
                         sorting={requestObject.filtering.sorting}/>
            </section>
            <div className={style.categoryName}>
                <p>All rooms</p>
            </div>
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                {columns.countDesktop === 3 &&
                    <FilterTypesDesktop category={requestObject.filtering.category}
                                        price={requestObject.filtering.price}/>}
                <ProductsGallery requestObject={requestObject} setRequestObject={setRequestObject}/>
            </section>
        </div>
    );
};

export default ShopPage;