import React from 'react';
import style from './filterTypesDesktop.module.css'
import {priceArray} from "../utils/filterConst";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../../general/redux/types";
import {ShopPageState} from "../../../redux/types";

interface Props {
    category: string | null,
    price: string | null
}

const FilterTypesDesktop = ({category, price}: Props) => {

    const {categories, error} = useSelector<AppStore, ShopPageState>(state => state.shopPage);

    return (
        <div className={style.block}>
            {categories ?
            <div className={style.categories}>
                <p>Categories</p>
                <ul>
                {categories.map(item =>
                    <li className={`${((item.title === category) || (category === null && item.id === 0))  && style.checked}`} key={item.title}>{item.title}</li>
                )}
                </ul>
            </div>
                : <div>{error}</div>}
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