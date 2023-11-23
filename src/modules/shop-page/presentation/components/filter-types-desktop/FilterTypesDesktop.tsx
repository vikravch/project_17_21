import React from 'react';
import style from './filterTypesDesktop.module.css'
import {categoriesArray, priceArray} from "../../../domain/model/filterConst";

const FilterTypesDesktop = () => {
    return (
        <div className={style.block}>
            <div className={style.categories}>
                <p>Categories</p>
                <ul>
                    {categoriesArray.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>

            </div>
            <div className={style.price}>
                <p>Price</p>
                <ul>
                    {priceArray.map(item => {
                        return <li key={item.min}>${item.min} - {item.max}</li>
                    })}
                </ul>

            </div>
        </div>
    );
};

export default FilterTypesDesktop;