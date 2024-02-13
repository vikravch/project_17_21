import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {RequestProducts} from "../../redux/types";
import {AppDispatch} from "../../../../../general/redux/store";
import {getProductsAsyncAction} from "../../redux/asyncActions";
import {AsyncThunkAction} from "@reduxjs/toolkit";
import useUpdateEffect from "../../../../../general/utils/hooks/useUpdateEffect";
import {cleanProducts} from "../../redux/shopPageSlice";

interface Props<T extends RequestProducts> {
    initialRequestObject: T;
    apiActions: (() => AsyncThunkAction<any, any, any>)[];
    updateRequestObject: (currentState: T, searchParams: URLSearchParams) => T;
}

function useShopWrapperLogic<T extends RequestProducts>({
                                                            initialRequestObject,
                                                            apiActions,
                                                            updateRequestObject
                                                        }: Props<T>) {
    const dispatch = useDispatch<AppDispatch>();
    const [isFiltersExists, setIsFiltersExists] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [requestObject, setRequestObject] = useState(initialRequestObject);

    useEffect(() => {
        Promise.all(apiActions.map(action => dispatch(action()))).then(() => setIsFiltersExists(true));
    }, []);

    useUpdateEffect(() => {
        const updatedRequestObject = updateRequestObject(requestObject, searchParams);
        setRequestObject(updatedRequestObject);
        dispatch(cleanProducts(null));
        dispatch(getProductsAsyncAction(updatedRequestObject as RequestProducts));
    }, [location, isFiltersExists]);

    useUpdateEffect(() => {
        if (requestObject.page !== 1) {
            dispatch(getProductsAsyncAction(requestObject as RequestProducts));
        }
    }, [requestObject])

    return {requestObject, setRequestObject, searchParams, location};
}

export {useShopWrapperLogic};