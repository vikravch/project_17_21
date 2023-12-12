import React from 'react';
import style from "./filterTypes.module.css";
import {categoriesArray, priceArray} from "../utils/filterConst";
import {Columns} from "../../../redux/types";
import {chooseSortOrFiltration, openCloseMenuHandler} from "../../../pages/utils/const";

interface Props {
    columns: Columns;
    category: string | null,
    price: string | null
}
const FilterTypes = ({columns, category, price}: Props) => {

    return (
            <div className={`${style.typesBlock} ${columns.countDesktop === 3 ? style.close : ''}`}
                 id={'types'}>
                <div className={style.filterCategories}>
                    <p>Categories</p>
                    <input type={'hidden'} name={'filterCateg'} id={'filterCat'} value={category === null ? categoriesArray[0].title : category}/>
                    <div className={`${style.filterCatHead} listenerHead`} id={'filterCatHead'}
                         onClick={openCloseMenuHandler}>
                        {category === null ? categoriesArray[0].title : category}
                    </div>
                    <ul className={`${style.filterCatList} listener`} id={'filterCatList'}>
                        {categoriesArray.map(item => {
                            return <li className={`${category === item.title && style.checked}`}
                                       onClick={(event) => chooseSortOrFiltration(event)}
                                       key={item.id}>{item.title}</li>
                        })}
                    </ul>
                </div>

                <div className={style.filterPrice}>
                    <p>Price</p>
                    <input type={'hidden'} name={'filterPrice'} id={'filterPr'} value={price === null ? priceArray[0].id : price}/>
                    <div className={`${style.filterPriceHead} listenerHead`} id={'filterPriceHead'}
                         onClick={openCloseMenuHandler}>
                        {price === null ? priceArray[0].id : price}
                    </div>
                    <ul className={`${style.filterPriceList} listener`} id={'filterPrList'}>
                        {priceArray.map(item => {
                            return <li
                                // className={`${price === item.title && style.checked}`}
                                       onClick={chooseSortOrFiltration}
                                       key={item.id}>{(item.min === null && 'All prices') || '$' + item.min + (item.max === null ? '+' : '-' + item.max)}</li>
                        })}
                    </ul>
                </div>
            </div>
    );
};

export default FilterTypes;