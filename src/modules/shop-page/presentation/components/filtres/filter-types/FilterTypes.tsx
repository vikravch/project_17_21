import React from 'react';
import style from "./filterTypes.module.css";
import {categoriesArray, priceArray} from "../utils/filterConst";
import {Columns} from "../../../redux/types";
import {chooseSortOrFiltration, openCloseMenuHandler} from "../../../pages/utils/const";

interface Props {
    columns: Columns;
    category: string,
    price: string
}
const FilterTypes = ({columns, category, price}: Props) => {

    return (
            <div className={`${style.typesBlock} ${columns.countDesktop === 3 ? style.close : ''}`}
                 id={'types'}>
                <div className={style.filterCategories}>
                    <p>Categories</p>
                    <input type={'hidden'} name={'filterCateg'} id={'filterCat'} value={category}/>
                    <div className={`${style.filterCatHead} listenerHead`} id={'filterCatHead'}
                         onClick={openCloseMenuHandler}>
                        {category}
                    </div>
                    <ul className={`${style.filterCatList} listener`} id={'filterCatList'}>
                        {categoriesArray.map(item => {
                            return <li onClick={chooseSortOrFiltration}
                                       key={item}>{item}</li>
                        })}
                    </ul>
                </div>

                <div className={style.filterPrice}>
                    <p>Price</p>
                    <input type={'hidden'} name={'filterPrice'} id={'filterPr'} value={price}/>
                    <div className={`${style.filterPriceHead} listenerHead`} id={'filterPriceHead'}
                         onClick={openCloseMenuHandler}>
                        {price}
                    </div>
                    <ul className={`${style.filterPriceList} listener`} id={'filterPrList'}>
                        <li onClick={chooseSortOrFiltration}>All prices</li>
                        {priceArray.map(item => {
                            return <li onClick={chooseSortOrFiltration}
                                       key={item.min}>${item.max !== null ? item.min + '.00 - ' + item.max : item.min + '.00+'}</li>
                        })}
                    </ul>
                </div>
            </div>
    );
};

export default FilterTypes;