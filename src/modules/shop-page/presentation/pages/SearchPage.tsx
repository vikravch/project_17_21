import React, {useEffect, useState} from 'react';
import style from "./shopPage.module.css";
import Sorting from "../components/sorting/Sorting";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import {ChildrenProps, Columns, RequestSearchProducts} from "../redux/types";
import {getAllSortingAsyncAction, getProductsAsyncAction} from "../redux/asyncActions";
import {AppDispatch} from "../../../../general/redux/store";
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import useUpdateEffect from "../../../../general/utils/hooks/useUpdateEffect";
import {useAppSelector} from "../../../../general/redux/hooks";
import {useLocation} from "react-router-dom";

const SearchPage: React.FC<ChildrenProps> = ({listenerObject, openCloseMenuHandler}) => {
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    const dispatch = useDispatch<AppDispatch>();
    const [isFiltersExists, setIsFiltersExists] = useState(false);
    const {sort} = useAppSelector(state => state.shopPage)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [requestObject, setRequestObject] = useState<RequestSearchProducts>({
        filtering: {
            sorting: null,
            search: null
        },
        page: 1
    })

    useEffect(() => {
        Promise.all([
            sort!.length === 0 && dispatch(getAllSortingAsyncAction())
        ]).then(() => setIsFiltersExists(true));
    }, []);

    useUpdateEffect(() => {
        const updatedRequestObject: RequestSearchProducts = {
            ...requestObject,
            filtering: {
                sorting: null,
                search: searchParams.get('search') || null
            },
            page: 1
        };

        const searchSortItem = sort?.find(item => item.title.toLowerCase().replace(' ', '') === searchParams.get('search'));
        updatedRequestObject.filtering.sorting = searchSortItem?.id || null;

        setRequestObject(updatedRequestObject);
        dispatch(getProductsAsyncAction(updatedRequestObject));
    }, [location, isFiltersExists]);

    return (
        <>
            <section className={style.filterSortBlock}>
                <h2>
                    Your search: <span>{requestObject.filtering.search}</span>
                </h2>
                <Sorting
                    listenerObject={listenerObject!}
                    columns={columns}
                    sorting={requestObject!.filtering.sorting}
                    openCloseMenuHandler={openCloseMenuHandler!}/>
            </section>
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                <ProductsGallery setRequestObject={setRequestObject}/>
            </section>
        </>
    );
};

export default SearchPage;