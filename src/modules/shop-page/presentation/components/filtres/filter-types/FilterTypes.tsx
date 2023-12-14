import React, {useEffect} from 'react';
import style from "./filterTypes.module.css";
import {Columns, ShopPageState} from "../../../redux/types";
import {chooseSortOrFiltration, openCloseMenuHandler} from "../../../pages/utils/const";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../../general/redux/types";

interface Props {
    columns: Columns;
    category: number | null,
    price: number | null
}
const FilterTypes = ({columns, category, price}: Props) => {

    const {categories, prices, error} = useSelector<AppStore, ShopPageState>(state => state.shopPage);

    useEffect(() => {
        const filter = document.getElementsByName('filter') as NodeListOf<HTMLInputElement>;
        const li = document.getElementsByClassName('filterLi') as any;

        filter.forEach(item => {
            li.forEach((list: { textContent: string; classList: { add: (arg0: string) => void; }; }) => {
                if (item.value === list.textContent) {
                    list.classList.add(style.checked);
                }
            })
        })
    }, [category, price])

    return (
            <div className={`${style.typesBlock} ${columns.countDesktop === 3 ? style.close : ''}`}
                 id={'types'}>
                {categories && categories.length !== 0 ?
                <div className={style.filterCategories}>
                    <p>Categories</p>
                    <input type={'hidden'} name={'filter'} id={'filterCategory'}
                           value={category === null ? categories[0].title : category}/>
                    <div className={`${style.filterCatHead} listenerHead`} onClick={openCloseMenuHandler}>
                        {category === null ? categories[0].title : category}
                    </div>
                    <ul className={`${style.filterCatList} listener`}>
                        {categories.map(item => {
                            return <li className={`${category === item.id && style.checked} filterLi`}
                                       onClick={(event) => chooseSortOrFiltration(event)}
                                       key={item.id}>{item.title}</li>
                        })}
                    </ul>
                </div>
                    : <div>{error}</div>}

                { prices && prices.length !== 0 ?
                <div className={style.filterPrice}>
                    <p>Price</p>
                    <input type={'hidden'} name={'filter'} id={'filterPrice'} value={price === null ? prices[0].id : price}/>
                    <div className={`${style.filterPriceHead} listenerHead`} id={'filterPriceHead'}
                         onClick={openCloseMenuHandler}>
                        {price === null ? 'All prices' : price}
                    </div>
                    <ul className={`${style.filterPriceList} listener`} id={'filterPrList'}>
                        {prices.map(item => {
                            return <li
                                className={`${price === item.id && style.checked} filterLi`}
                                       onClick={chooseSortOrFiltration}
                                       key={item.id}>
                                {item.title}
                                {/*{(item.min === null && 'All prices') || '$' + item.min + (item.max === null ? '+' : '-' + item.max)}*/}
                            </li>
                        })}
                    </ul>
                </div> :
                    <div>{error}</div>}
            </div>
    );
};

export default FilterTypes;