import React from 'react';
import style from './filterTypesDesktop.module.css'
import {categoriesArray, priceArray} from "../utils/filterConst";
import {Columns} from "../../../redux/types";

interface Props {
    category: string,
    price: string
}

const FilterTypesDesktop = ({category, price}: Props) => {

    return (
        <div className={style.block}>
            <div className={style.categories}>
                <p>Categories</p>
                <ul>
                {categoriesArray.map(item =>
                    <li key={item}>{item}</li>
                )}
                </ul>
            </div>
            <div className={style.price}>
                <p>Price</p>

                <label key={'label-all-price'}>
                    <input type={'radio'} id={'all-price'} name={'price'} key={'input-all-price'}
                           defaultChecked={true}/>
                    <p key={'p-all-price'}>All price</p>
                    <div key={'checkbox-all-price'} className={style.checkboxCheckmark}></div>
                </label>

                {priceArray.map(item =>
                    <label key={'label-' + item.min}>
                        <input type={'radio'} value={item.min} id={item.min + '-price'} name={'price'}
                               key={'input-' + item.min}/>
                        <p key={'p-' + item.min}>${item.max !== null ? item.min + '.00 - ' + item.max : item.min + '.00+'}</p>
                        <div key={'checkbox-' + item.min} className={style.checkboxCheckmark}></div>
                    </label>
                )}
            </div>
        </div>
    );
};

export default FilterTypesDesktop;