import React from 'react';
import style from "./shopPage.module.css";
import Sorting from "../components/sorting/Sorting";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import {ChildrenProps, Columns, RequestSearchProducts} from "../redux/types";
import {getAllSortingAsyncAction} from "../redux/asyncActions";
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useShopWrapperLogic} from "./utils/useShopWrapperLogic";

const SearchPage: React.FC<ChildrenProps> = ({ listenerObject, openCloseMenuHandler }) => {
    const columns = useSelector<AppStore, Columns>(state => state.galleriesStyle);
    const { requestObject , setRequestObject } = useShopWrapperLogic<RequestSearchProducts>({
        initialRequestObject: {
            filtering: {
                sorting: null,
                search: null,
            },
            page: 1,
        },
        apiActions: [getAllSortingAsyncAction],
        updateRequestObject: (currentState, searchParams) => ({
            ...currentState,
            filtering: {
                sorting: null,
                search: searchParams.get('search') || null,
            },
            page: 1,
        }),
    });
    return (
        <>
            <section className={style.filterSortBlock}>
                <h2>
                    Your search: <span className={style.searchRequest}>{requestObject.filtering.search}</span>
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