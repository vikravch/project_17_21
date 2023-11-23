import React from 'react';
import style from "./filterTypes.module.css";
import {categoriesArray, priceArray} from "../../../domain/model/filterConst";
import {useDispatch} from "react-redux";
import {chooseSort, openCloseMenuHandler} from "../../redux/shopPageSlice";
import {Columns} from "../../../domain/model/product";

interface Props {
    columns: Columns;
}
const FilterTypes = ({columns}: Props) => {

    const dispatch = useDispatch();

    return (
        <div className={style.typesBlock}
             style={columns.countDesktop === 3 ? {display: 'none'} : {}} id={'types'}>

            <div className={style.filterCategories}>

                <p>Categories</p>
                <input type={'hidden'} name={'filterCateg'} id={'filterCat'}/>
                <div className={style.filterCatHead} id={'filterCatHead'} onClick={(event) => dispatch(openCloseMenuHandler(event))}>All
                    rooms
                </div>
                <ul className={style.filterCatList} id={'filterCatList'}>
                    {categoriesArray.map(item => {
                        return <li className={style.filterCatItem} onClick={event => dispatch(chooseSort(event))}
                                   key={item}>{item}</li>
                    })}
                </ul>
            </div>


            <div className={style.filterPrice}>

                <p>Price</p>
                <input type={'hidden'} name={'filterPrice'} id={'filterPr'}/>
                <div className={style.filterPriceHead} id={'filterPriceHead'}
                     onClick={(event) => dispatch(openCloseMenuHandler(event))}>
                    All prices
                </div>
                <ul className={style.filterPriceList} id={'filterPrList'}>
                    <li onClick={event => dispatch(chooseSort(event))}>All prices</li>
                    {priceArray.map(item => {
                        return <li className={style.filterPriceItem} onClick={event => dispatch(chooseSort(event))}
                                   key={item.min}>${item.min} - {item.max}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FilterTypes;