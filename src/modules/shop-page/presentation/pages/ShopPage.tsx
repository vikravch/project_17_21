import React, {useEffect, useRef, useState} from 'react';
import {RequestProducts} from "../redux/types";
import constStyle from "./utils/const.module.css";
import {Listener} from "../int";
import SearchPage from "./SearchPage";
import StorePage from "./StorePage";
import {useAppSelector} from "../../../../general/redux/hooks";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../general/redux/store";
import {useLocation} from "react-router-dom";
import {
    getAllCategoriesAsyncAction,
    getAllPricesAsyncAction,
    getAllSortingAsyncAction,
    getProductsAsyncAction
} from "../redux/asyncActions";
import useUpdateEffect from "../../../../general/utils/hooks/useUpdateEffect";



const ShopPage = () => {

    const [isFiltersExists, setIsFiltersExists] = useState(false);
    const {categories, sort, prices} = useAppSelector(state => state.shopPage)
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();

    const listenerObject = useRef<Listener>({
        listenerHead: [],
        listener: []
    });
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

    useEffect(() => {
        document.addEventListener('click', closeClickFunction);
        return () => document.removeEventListener('click', closeClickFunction);
    }, []);

    const closeClickFunction = (event: MouseEvent) => {

        listenerObject.current.listener.forEach((item, index) => {
            if (item !== null && event.target !== item && event.target !== listenerObject.current.listenerHead[index]) {
                item?.classList.remove(constStyle.open);
            }
        })

    }

    const openCloseMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.target as Element;
        const nextSibling = eventTarget.nextElementSibling as Element;
        nextSibling.classList.toggle(constStyle.open);
    }

    useEffect(() => {

    }, [])

    const whichSpace = () => {
        return window.location.pathname === "/shop"
            ? <StorePage listenerObject={listenerObject}
                         requestObject={requestObject}
                         setRequestObject={setRequestObject}
                         openCloseMenuHandler={openCloseMenuHandler}/>
            : <SearchPage listenerObject={listenerObject}
                          requestObject={requestObject}
                          setRequestObject={setRequestObject}
                          openCloseMenuHandler={openCloseMenuHandler}/>;
    }

    return (
        <div>
            {whichSpace()}
        </div>
    );
};

export default ShopPage;