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
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AppDispatch} from "../../../../general/redux/store";
import constStyle from "./utils/const.module.css";
import {
    getAllCategoriesAsyncAction,
    getAllPricesAsyncAction,
    getAllSortingAsyncAction,
    getProductsAsyncAction
} from "../redux/asyncActions";
import arrow from '../../../../images/shop_page/breadCrumbs.svg';
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
    const navigate = useNavigate();
    const [requestObject, setRequestObject] = useState<RequestProducts>({
        filtering: {
            category: null,
            price: null,
            sorting: null,
        },
        page: 1
    })

    useEffect(() => {
        Promise.all([
            categories!.length === 0 && dispatch(getAllCategoriesAsyncAction()),
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
        setRequestObject(updatedRequestObject);
        dispatch(getProductsAsyncAction(updatedRequestObject));
    }, [location, isFiltersExists]);

    useEffect(() => {
        if (requestObject.page !== 1) {
            dispatch(getProductsAsyncAction(requestObject));
        }
    }, [requestObject.page]);

    const closeClickFunction = (event: MouseEvent) => {

        const listener = document.querySelectorAll('.listener');
        const listenerHead = document.querySelectorAll('.listenerHead');

        listener.forEach((item, index) => {
            if (event.target !== item && event.target !== listenerHead[index]) {
                item.classList.remove(constStyle.open);
            }
        })

    }

    const setCategoryParams = (event: React.MouseEvent<HTMLElement>) => {
        const searchParams = new URLSearchParams(location.search);
        const eventTarget = event.target as HTMLElement;
        const choice = eventTarget.dataset.categoryId as string;

        if (categories && +choice === categories[0].id) {
            searchParams.delete('category');
        } else {
            searchParams.set(
                'category',
                categories?.find(obj => String(obj.id) === choice)?.title
                    .replaceAll(' ', '').toLowerCase() as string
            );
        }
        navigate(`?${searchParams.toString()}`);
    }

    const setPriceParams = (event: { target: any; }) => {
        const searchParams = new URLSearchParams(location.search);
        const eventTarget = event.target as HTMLElement;
        const choice = eventTarget.dataset.priceId as string;

        if (prices && +choice === prices[0].id) {
            searchParams.delete('price');
        } else {
            searchParams.set('price',
                prices?.find(obj => String(obj.id) === choice)?.title.replace(/[$+ ]|\.00/g, '').toLowerCase() as string
            );
        }
        navigate(`?${searchParams.toString()}`);
    }

    const openCloseMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.target as Element;
        const nextSibling = eventTarget.nextElementSibling as Element;
        nextSibling.classList.toggle(constStyle.open);
    }

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
                             price={requestObject.filtering.price}
                             setCategoryParams={setCategoryParams}
                             setPriceParams={setPriceParams}
                             openCloseMenuHandler={openCloseMenuHandler}/>
                <Sorting columns={columns}
                         sorting={requestObject.filtering.sorting}
                         openCloseMenuHandler={openCloseMenuHandler}/>
            </section>
            <div className={style.categoryName}>
                <p>All rooms</p>
            </div>
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                {columns.countDesktop === 3 &&
                    <FilterTypesDesktop category={requestObject.filtering.category}
                                        price={requestObject.filtering.price}
                                        setCategoryParams={setCategoryParams}
                                        setPriceParams={setPriceParams}/>}
                <ProductsGallery requestObject={requestObject} setRequestObject={setRequestObject}/>
            </section>
        </div>
    );
};

export default ShopPage;