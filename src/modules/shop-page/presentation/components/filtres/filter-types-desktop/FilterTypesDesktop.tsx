import React from 'react';
import style from './filterTypesDesktop.module.css'
import {categoriesArray, priceArray} from "../utils/filterConst";

interface Props {
    category: string | null,
    price: string | null
}

const FilterTypesDesktop = ({category, price}: Props) => {

    return (
        <div className={style.block}>
            <div className={style.categories}>
                <p>Categories</p>
                <ul>
                {categoriesArray.map(item =>
                    <li className={`${((item.title === category) || (category === null && item.id === 0))  && style.checked}`} key={item.title}>{item.title}</li>
                )}
                </ul>
            </div>
            <div className={style.price}>
                <p>Price</p>
                {priceArray.map(item =>
                    <label key={'label-' + item.id}>
                        <input type={'radio'} value={item.id} id={item.id + '-price'} name={'price'}
                               key={'input-' + item.id} defaultChecked={price === "All prices"} />
                        <p key={'p-' + item.id}>{(item.min === null && 'All prices') || '$' + item.min + (item.max === null ? '+' : '-' + item.max)}</p>
                        <div key={'checkbox-' + item.id} className={style.checkboxCheckmark}></div>
                    </label>
                )}
            </div>
        </div>
    );
};

export default FilterTypesDesktop;