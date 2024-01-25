import React, {useEffect, useState} from 'react';
import style from './shopPage.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import FilterTitle from "../components/filtres/filter-title/FilterTitle";
import FilterTypes from "../components/filtres/filter-types/FilterTypes";
import Sorting from "../components/sorting/Sorting";
import FilterTypesDesktop from "../components/filtres/filter-types-desktop/FilterTypesDesktop";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import {ChildrenProps, Columns, RequestShopProducts} from "../redux/types";
import {useAppSelector} from "../../../../general/redux/hooks";
import useUpdateEffect from "../../../../general/utils/hooks/useUpdateEffect";
import {
    getAllCategoriesAsyncAction,
    getAllPricesAsyncAction,
    getAllSortingAsyncAction,
    getProductsAsyncAction
} from "../redux/asyncActions";
import {AppDispatch} from "../../../../general/redux/store";
import ProductsGallery from "../components/products-gallery/ProductsGallery";

const ShopPage: React.FC<ChildrenProps> = ({listenerObject,openCloseMenuHandler}) => {

    const [isFiltersExists, setIsFiltersExists] = useState(false);
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const {categories, sort, prices} = useAppSelector(state => state.shopPage)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const searchParams = new URLSearchParams(location.search);

    const [requestObject, setRequestObject] = useState<RequestShopProducts>({
        filtering: {
            category: null,
            price: null,
            sorting: null,
        },
        page: 1
    })

    useEffect(() => {
        if (requestObject.page !== 1) {
            dispatch(getProductsAsyncAction(requestObject));
        }
    }, [requestObject.page]);

    useEffect(() => {
        Promise.all([
            categories!.length === 0 && dispatch(getAllCategoriesAsyncAction()),
            prices!.length === 0 && dispatch(getAllPricesAsyncAction()),
            sort!.length === 0 && dispatch(getAllSortingAsyncAction())
        ]).then(() => setIsFiltersExists(true));
    }, []);

    useUpdateEffect(() => {
        let updatedRequestObject: RequestShopProducts = {...requestObject};
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

    const setCategoryParams = (event: React.MouseEvent<HTMLElement>) => {
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

    return (
        <>
            <section className={style.filterSortBlock}>
                <div
                    className={`${style.filterAndNameDisplay3} ${columns.countDesktop !== 3 && style.filterAndNameHide}`}>
                    <FilterTitle columns={columns}/>
                    {columns.countDesktop === 3 &&
                        <div className={style.categoryNameDesktop3}>
                            <p>All rooms</p>
                        </div>}
                </div>
                <FilterTypes
                    listenerObject={listenerObject!}
                    columns={columns}
                    category={requestObject!.filtering.category}
                    price={requestObject!.filtering.price}
                    setCategoryParams={setCategoryParams}
                    setPriceParams={setPriceParams}
                    openCloseMenuHandler={openCloseMenuHandler!}/>
                <Sorting
                    listenerObject={listenerObject!}
                    columns={columns}
                    sorting={requestObject!.filtering.sorting}
                    openCloseMenuHandler={openCloseMenuHandler!}/>
            </section>
            {
                categories && categories.length !== 0 ?
                    <div className={style.categoryName}>
                        <p>{requestObject!.filtering.category === null ? categories[0].title : categories?.find(obj => obj.id === requestObject!.filtering.category)?.title}</p>
                    </div> :
                    <></>
            }
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                {columns.countDesktop === 3 &&
                    <FilterTypesDesktop category={requestObject!.filtering.category}
                                        price={requestObject!.filtering.price}
                                        setCategoryParams={setCategoryParams}
                                        setPriceParams={setPriceParams}/>}
                <ProductsGallery setRequestObject={setRequestObject}/>
            </section>
        </>
    )
        ;
};

export default ShopPage;