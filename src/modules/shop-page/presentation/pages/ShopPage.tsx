import React from 'react';
import style from './shopPage.module.css';
import filterIcon from '../../../../icons/shop_page/filter.svg';
import {sort} from "../../domain/model/filterConst";
import ViewSelector from "../components/view-selector/ViewSelector";
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import {ShopPageState} from "../redux/types";
import FilterTypes from "../components/filter-types/FilterTypes";
import {chooseSort, openCloseFilterHandler, openCloseMenuHandler} from '../redux/shopPageSlice';
import FilterTypesDesktop from "../components/filter-types-desktop/FilterTypesDesktop";

const ShopPage = () => {

    const dispatch = useDispatch();
    const {columns} = useSelector<AppStore, ShopPageState>(
        state => state.shopPage
    );

    document.addEventListener('click', event => {

        const listSort = document.getElementById('listSort');
        const sortHead = document.getElementById('sortHead');
        // @ts-ignore
        const withinBoundaries = event.composedPath().includes(listSort);
        // @ts-ignore
        const withinBoundaries2 = event.composedPath().includes(sortHead);
        if (!withinBoundaries && !withinBoundaries2) {
            // @ts-ignore
            listSort.classList.remove(style.open);
        }
    })

    // const openCloseMenuHandler = (event: any) => {
    //     event.target.nextElementSibling.classList.toggle(style.open);
    // }

    // const chooseSort = (event: any) => {
    //     const choice: string = event.target.textContent;
    //     // const listSort = document.getElementById('listSort');
    //     const listId = event.target.parentElement;
    //     // const sortBy = event.target.parentElement.previousElementSibling;
    //     const listHead = listId.previousElementSibling;
    //     // @ts-ignore
    //     // const sortByInput: HTMLInputElement = document.getElementById('sortBy');
    //     const input: HTMLInputElement = listHead.previousElementSibling;
    //     input.value = choice;
    //
    //     // @ts-ignore
    //     listId.childNodes.forEach(item => {
    //         if (item.textContent === listHead.textContent) {
    //             // @ts-ignore
    //             item.classList.remove(style.chosen);
    //         }
    //     })
    //     listHead.textContent = choice;
    //     event.target.classList.add(style.chosen);
    //     event.target.parentElement.classList.toggle(style.open);
    //
    // }

    // const openCloseFilterHandler = () => {
    //     const types = document.getElementById('types');
    //     // @ts-ignore
    //     types.classList.toggle(style.open);
    // }

    return (
        <div className={style.shopPage}>
            <div className={style.pageHeader}>
                {/*<BreadCrumbs>*/}
                <p style={{fontSize: '14px', color: 'red'}}>Bread crumbs</p>
                <h1>Shop Page</h1>
                <p>Let’s design the place you always imagined.</p>
            </div>
            <div className={style.filterSortBlock}>
                <div className={style.filterBlock} style={columns.countDesktop === 3 ? {display: 'flex'} : {}}
                     onClick={() => {
                         if (columns.countDesktop !== 3) {
                             dispatch(openCloseFilterHandler(null))
                         }
                     }}>
                        <img alt={'filter'} src={filterIcon}/>
                        <p>Filter</p>
                </div>
                <FilterTypes columns={columns}/>
                <div className={style.sortBlock}>

                    <div className={style.sortSelect}>
                            <input type={'hidden'} name={'sort'} id={'sortBy'}/>
                            <div className={style.sortHead} id={'sortHead'} onClick={(event) => dispatch(openCloseMenuHandler(event))}>Sort by</div>
                            <ul className={style.sortList} id={'listSort'}>
                                <li>Sort by</li>
                                {sort.map(item => {
                                    return <li className={style.sortItem} onClick={event => dispatch(chooseSort(event))} key={item}>{item}</li>
                                })}
                            </ul>
                    </div>
                    <ViewSelector/>
                </div>
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