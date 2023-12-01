import React, {useEffect} from 'react';
import style from './shopPage.module.css';
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import FilterTypes from "../components/filter-types/FilterTypes";
import FilterTypesDesktop from "../components/filter-types-desktop/FilterTypesDesktop";
import {Columns} from "../redux/types";
import {getAllProductsAsyncAction} from "../redux/asyncActions";
import FilterTitle from "../components/filter-title/FilterTitle";
import Sorting from "../components/sorting/Sorting";
import {AppDispatch} from "../../../../general/redux/store";

const ShopPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );

    useEffect(()=>{
        dispatch(getAllProductsAsyncAction());
    },[])

    document.addEventListener('click', event => {
        const listener = document.querySelectorAll('.listener');
        const listenerHead = document.querySelectorAll('.listenerHead');

        listener.forEach((item, index) => {
            // @ts-ignore
            if (!event.composedPath().includes(item) && !event.composedPath().includes(listenerHead[index]) ) {
                item.classList.remove(style.open);
            }
        })
    })

    const openCloseMenuHandler = (event: any) => {
        event.target.nextElementSibling.classList.toggle(style.open);
    }

    const chooseSortOrFiltration = (event: any) => {
        const choice: string = event.target.textContent;
        const listId = event.target.parentElement;
        const listHead = listId.previousElementSibling;
        const input: HTMLInputElement = listHead.previousElementSibling;
        input.value = choice;

        // @ts-ignore
        listId.childNodes.forEach(item => {
            if (item.textContent === listHead.textContent) {
                // @ts-ignore
                item.classList.remove(style.chosen);
            }
        })
        listHead.textContent = choice;
        event.target.classList.add(style.chosen);
        event.target.parentElement.classList.toggle(style.open);

    }

    return (
        <div className={style.shopPage}>
            <div className={style.pageHeader}>
                {/*<BreadCrumbs>*/}
                <p style={{fontSize: '14px', color: 'red'}}>Bread crumbs</p>
                <h1>Shop Page</h1>
                <p>Let’s design the place you always imagined.</p>
            </div>
            <div className={style.filterSortBlock}>
                <div className={`${style.filterAndNameDisplay3} ${columns.countDesktop !== 3 && style.filterAndNameHide}`}>
                    <FilterTitle columns={columns}/>
                    {columns.countDesktop === 3 &&
                        <div className={style.categoryNameDesktop3}>
                            <p>All rooms</p>
                        </div>}
                </div>
                <FilterTypes columns={columns}
                             openCloseMenuHandler={openCloseMenuHandler}
                             chooseSortOrFiltration={chooseSortOrFiltration}/>
                <Sorting columns={columns}
                         openCloseMenuHandler={openCloseMenuHandler}
                         chooseSortOrFiltration={chooseSortOrFiltration}/>
            </div>
            <div className={style.categoryName}>
                <p>All rooms</p>
            </div>
            <div className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                {columns.countDesktop === 3 &&
                    <FilterTypesDesktop/>}
                <ProductsGallery/>
            </div>
        </div>
    );
};

export default ShopPage;
