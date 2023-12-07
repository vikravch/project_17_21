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
import {useLocation} from "react-router-dom";
import {AppDispatch} from "../../../../general/redux/store";
import RequestProducts from "../../domain/model/requestProducts";
import {getProductsAsyncAction} from "../redux/asyncActions";

const ShopPage = () => {
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );
    //hooks
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const [requestObject, setRequestObject]= useState<RequestProducts>({
        category: null,
        price: null,
        sorting: null,
        page: 1
    });
    const searchParams = new URLSearchParams(location.search);

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

    document.addEventListener('click', event => {
        const listener = document.querySelectorAll('.listener');
        const listenerHead = document.querySelectorAll('.listenerHead');

        listener.forEach((item, index) => {
            if (!event.composedPath().includes(item) && !event.composedPath().includes(listenerHead[index]) ) {
                item.classList.remove(style.open);
            }
        })
    })

    const openCloseMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.target as Element;
        const nextSibling = eventTarget.nextElementSibling as Element;
        nextSibling.classList.toggle(style.open);
    }

    const chooseSortOrFiltration = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.target as HTMLElement;
        const choice = eventTarget.textContent as string;
        const listId = eventTarget.parentElement as HTMLDivElement;
        const listHead = listId.previousElementSibling as HTMLDivElement;
        const input = listHead.previousElementSibling as HTMLInputElement;
        input.value = choice;

        listId.childNodes.forEach((item: ChildNode) => {
            if (item.textContent === listHead.textContent) {
                let element = item as HTMLElement;
                element.classList.remove(style.chosen);
            }
        })

        // listHead.textContent = choice === 'Default' ? 'Sort by' : choice;
        // filterAndSortingObject[input.name  as keyof FilerAndSorting] = choice;

        eventTarget.classList.add(style.chosen);
        listId.classList.toggle(style.open);

    }

    return (
        <div className={style.shopPage}>
            <section className={style.pageHeader}>
                {/*<BreadCrumbs>*/}
                <p style={{fontSize: '14px', color: 'red'}}>Bread crumbs</p>
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
                             openCloseMenuHandler={openCloseMenuHandler}
                             chooseSortOrFiltration={chooseSortOrFiltration}
                             // rooms={filterAndSortingObject.filterCateg}
                             // price={filterAndSortingObject.filterPrice}
                />
                <Sorting columns={columns}
                         openCloseMenuHandler={openCloseMenuHandler}
                         chooseSortOrFiltration={chooseSortOrFiltration}
                         // sorting={filterAndSortingObject.sort}
                />
            </section>
            <div className={style.categoryName}>
                <p>All rooms</p>
            </div>
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                {columns.countDesktop === 3 &&
                    <FilterTypesDesktop/>}
                <ProductsGallery requestObject={requestObject} setRequestObject={setRequestObject}/>
            </section>
        </div>
    );
};

export default ShopPage;
