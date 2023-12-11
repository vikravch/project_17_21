import React from 'react';
import style from './filterTypesDesktop.module.css'
import {categoriesArray, priceArray} from "../utils/filterConst";

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
                    <li className={`${item === category && style.checked}`} key={item}>{item}</li>
                )}
                </ul>
            </div>
            <div className={style.price}>
                <p>Price</p>
                {priceArray.map(item =>
                    <label key={'label-' + item.title}>
                        <input type={'radio'} value={item.min} id={item.title + '-price'} name={'price'}
                               key={'input-' + item.title} defaultChecked={price === item.title} />
                        <p key={'p-' + item.title}>{item.max !== null && '$'}{item.title + (item.title !== priceArray[priceArray.length - 1].title ? '' : '+')}</p>
                        <div key={'checkbox-' + item.title} className={style.checkboxCheckmark}></div>
                    </label>
                )}
            </div>
        </div>
    );
};

export default FilterTypesDesktop;