import React from 'react';
import style from "./filterTypes.module.css";
import {categoriesArray, priceArray} from "../../../domain/model/filterConst";
import {Columns} from "../../redux/types";

interface Props {
    columns: Columns;
    openCloseMenuHandler: (event: any) => void;
    chooseSort: (event: any) => void;

}
const FilterTypes = ({columns, openCloseMenuHandler, chooseSort}: Props) => {

    return (
            <div className={`${style.typesBlock} ${columns.countDesktop === 3 ? style.close : ''}`}
                 id={'types'}>
                <div className={style.filterCategories}>
                    <p>Categories</p>
                    <input type={'hidden'} name={'filterCateg'} id={'filterCat'}/>
                    <div className={`${style.filterCatHead} listenerHead`} id={'filterCatHead'}
                         onClick={openCloseMenuHandler}>
                        All rooms
                    </div>
                    <ul className={`${style.filterCatList} listener`} id={'filterCatList'}>
                        {categoriesArray.map(item => {
                            return <li className={style.filterCatItem} onClick={chooseSort}
                                       key={item}>{item}</li>
                        })}
                    </ul>
                </div>

                <div className={style.filterPrice}>
                    <p>Price</p>
                    <input type={'hidden'} name={'filterPrice'} id={'filterPr'}/>
                    <div className={`${style.filterPriceHead} listenerHead`} id={'filterPriceHead'}
                         onClick={openCloseMenuHandler}>
                        All prices
                    </div>
                    <ul className={`${style.filterPriceList} listener`} id={'filterPrList'}>
                        <li onClick={chooseSort}>All prices</li>
                        {priceArray.map(item => {
                            return <li className={style.filterPriceItem} onClick={chooseSort}
                                       key={item.min}>${item.min} - {item.max}</li>
                        })}
                    </ul>
                </div>
            </div>
    );
};

export default FilterTypes;