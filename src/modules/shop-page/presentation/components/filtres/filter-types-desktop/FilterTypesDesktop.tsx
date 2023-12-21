import React from 'react';
import style from './filterTypesDesktop.module.css'
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../../general/redux/types";
import {ShopPageState} from "../../../redux/types";

interface Props {
    category: number | null,
    price: number | null,
    setCategoryParams: (event: React.MouseEvent<HTMLElement>) => void,
    setPriceParams: (event: { target: any; }) => void
}

const FilterTypesDesktop = ({category, price, setCategoryParams, setPriceParams}: Props) => {

    const {categories, prices, error} = useSelector<AppStore, ShopPageState>(state => state.shopPage);

    return (
        <div className={style.block}>
            {categories ?
            <div className={style.categories}>
                <p>Categories</p>
                <ul>
                {categories.map(item =>
                    <li className={`${((item.id === category) || (category === null && item.id === 0)) && style.checked}`}
                        key={'key-' + item.title}
                        data-category-id={item.id}
                        onClick={setCategoryParams}>
                        {item.title}
                    </li>
                )}
                </ul>
            </div>
                : <div>{error}</div>}

            { prices && prices.length !== 0 ?
            <div className={style.price}>
                <p>Price</p>
                {prices.map(item =>
                    <label key={'label-' + item.id}>
                        <input type={'radio'} value={item.id} name={'price'}
                               key={'input-' + item.id}
                               defaultChecked={item.id === price || (price === null && item.id === 0)}
                               data-price-id={item.id}
                                onChange={setPriceParams}
                        />
                        <p key={'p-' + item.id}>{item.title}</p>
                        <div key={'checkbox-' + item.id} className={style.checkboxCheckmark}></div>
                    </label>
                )}
            </div> :
                <div>{error}</div>}
        </div>
    );
};

export default FilterTypesDesktop;