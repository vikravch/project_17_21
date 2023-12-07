import React from 'react';
import style from './shopPage.module.css';
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import FilterTypes from "../components/filtres/filter-types/FilterTypes";
import FilterTypesDesktop from "../components/filtres/filter-types-desktop/FilterTypesDesktop";
import {Columns} from "../redux/types";
import FilterTitle from "../components/filtres/filter-title/FilterTitle";
import Sorting from "../components/sorting/Sorting";

const ShopPage = () => {
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );

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
        const eventTarget: Element = event.target as Element;
        const parentElement = eventTarget.parentElement as HTMLElement;
        const choice = eventTarget.textContent;
        const listId = eventTarget.parentElement as HTMLElement;
        const listHead = listId.previousElementSibling as HTMLElement;
        const input = listHead.previousElementSibling as HTMLInputElement;
        input.value = choice as string;

        listId.childNodes.forEach((item: ChildNode) => {
            if (item.textContent === listHead.textContent) {
                let element = item as HTMLElement;
                element.classList.remove(style.chosen);
            }
        })
        listHead.textContent = choice;
        eventTarget.classList.add(style.chosen);
        parentElement.classList.toggle(style.open);

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
                             chooseSortOrFiltration={chooseSortOrFiltration}/>
                <Sorting columns={columns}
                         openCloseMenuHandler={openCloseMenuHandler}
                         chooseSortOrFiltration={chooseSortOrFiltration}/>
            </section>
            <div className={style.categoryName}>
                <p>All rooms</p>
            </div>
            <section className={columns.countDesktop === 3 ? style.display3filterTypes : ''}>
                {columns.countDesktop === 3 &&
                    <FilterTypesDesktop/>}
                <ProductsGallery/>
            </section>
        </div>
    );
};

export default ShopPage;
