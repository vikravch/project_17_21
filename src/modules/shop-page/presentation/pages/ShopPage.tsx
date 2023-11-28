import React, {useEffect} from 'react';
import style from './shopPage.module.css';
import {sort} from "../../domain/model/filterConst";
import ViewSelector from "../components/view-selector/ViewSelector";
import ProductsGallery from "../components/products-gallery/ProductsGallery";
import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import FilterTypes from "../components/filter-types/FilterTypes";
import FilterTypesDesktop from "../components/filter-types-desktop/FilterTypesDesktop";
import {Columns} from "../redux/types";
import {getAllProductsAsyncAction} from "../redux/asyncActions";
import FilterTitle from "../components/filter-title/FilterTitle";

const ShopPage = () => {

    const dispatch = useDispatch();
    const columns = useSelector<AppStore, Columns>(
        state => state.galleriesStyle
    );

    useEffect(()=>{
        // @ts-ignore
        dispatch(getAllProductsAsyncAction());
    },[])

    document.addEventListener('click', event => {
        // const listSort = document.getElementById('listSort');
        // const sortHead = document.getElementById('sortHead');
        const listener = document.querySelectorAll('.listener');
        const listenerHead = document.querySelectorAll('.listenerHead');

        console.log(listener);
        listener.forEach((item, index) => {
            // @ts-ignore
            if (!event.composedPath().includes(item) && !event.composedPath().includes(listenerHead[index]) ) {
                console.log('yes')
                item.classList.remove(style.open);
            }
        })
        // @ts-ignore
        // const withinBoundaries = event.composedPath().includes(listSort);
        // // @ts-ignore
        // // const withinBoundaries2 = event.composedPath().includes(sortHead);
        // if (!withinBoundaries && !withinBoundaries2) {
        //     // @ts-ignore
        //     listSort.classList.remove(style.open);
        // }
    })

    const openCloseMenuHandler = (event: any) => {
        event.target.nextElementSibling.classList.toggle(style.open);
    }

    const chooseSort = (event: any) => {
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
                <FilterTitle columns={columns}/>
                <FilterTypes columns={columns}
                             openCloseMenuHandler={openCloseMenuHandler}
                             chooseSort={chooseSort}/>
                <div className={style.sortBlock}>
                    <div className={style.sortSelect}>
                        <input type={'hidden'} name={'sort'} id={'sortBy'}/>
                        <div className={`${style.sortHead} listenerHead`} id={'sortHead'} onClick={openCloseMenuHandler}>Sort by</div>
                        <ul className={`${style.sortList} listener`} id={'listSort'}>
                            <li>Sort by</li>
                            {sort.map(item => {
                                return <li className={style.sortItem} onClick={chooseSort} key={item}>{item}</li>
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