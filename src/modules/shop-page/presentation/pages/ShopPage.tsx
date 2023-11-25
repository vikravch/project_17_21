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
import {chooseSort, openCloseMenuHandler} from "../../utils/const/shopPageConst";

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
                <FilterTypes columns={columns}/>
                <div className={style.sortBlock}>
                    <div className={style.sortSelect}>
                        <input type={'hidden'} name={'sort'} id={'sortBy'}/>
                        <div className={style.sortHead} id={'sortHead'} onClick={openCloseMenuHandler}>Sort by</div>
                        <ul className={style.sortList} id={'listSort'}>
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