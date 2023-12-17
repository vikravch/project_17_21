import React from 'react';
import style from "./filterTypes.module.css";
import {Columns, ShopPageState} from "../../../redux/types";
import {openCloseMenuHandler} from "../../../pages/utils/const";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../../general/redux/types";
import {useLocation} from "react-router-dom";

interface Props {
    columns: Columns;
    category: number | null,
    price: number | null
}
const FilterTypes = ({columns, category, price}: Props) => {

    const {categories, prices, error} = useSelector<AppStore, ShopPageState>(state => state.shopPage);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const setCategoryParams = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.target as HTMLElement;
        const choice = eventTarget.dataset.categoryId as string;

        if (categories && +choice === categories[0].id) {
            searchParams.delete('category');
        } else {
            searchParams.set(
                'category',
                categories?.find(obj => String(obj.id) === choice)?.title
                    .replaceAll(' ', '').toLowerCase() as string
            );
        }
        window.location.search = searchParams.toString();
    }

    const setPriceParams = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.target as HTMLElement;
        const choice = eventTarget.dataset.priceId as string;

        if (prices && +choice === prices[0].id) {
            searchParams.delete('price');
        } else {
            searchParams.set('price',
                prices?.find(obj => String(obj.id) === choice)?.title.replace(/[$+ ]|\.00/g, '').toLowerCase() as string
            );
        }
        window.location.search = searchParams.toString();
    }

    return (
            <div className={`${style.typesBlock} ${columns.countDesktop === 3 ? style.close : ''}`}
            id={'types'}>
                {categories && categories.length !== 0 ?
                <div className={style.filterCategories}>
                    <p>Categories</p>
                    <input type={'hidden'} name={'filter'} value={category === null ? categories[0].id : category}/>
                    <div className={`${style.filterCatHead} listenerHead`}
                         onClick={openCloseMenuHandler}>
                        {category === null ? categories[0].title : categories?.find(obj => obj.id === category)?.title}
                    </div>
                    <ul className={`${style.filterCatList} listener`}>
                        {categories.map(item => {
                            return <li className={`${(category === item.id || (category === null && item.id === 0)) && style.checked}`}
                                       onClick={setCategoryParams}
                                       data-category-id={item.id}
                                       key={'key-' + item.id}>
                                        {item.title}
                                    </li>
                        })}
                    </ul>
                </div>
                    : <div>{error}</div>}

                { prices && prices.length !== 0 ?
                <div className={style.filterPrice}>
                    <p>Price</p>
                    <input type={'hidden'} name={'filter'} value={price === null ? prices[0].id : price}/>
                    <div className={`${style.filterPriceHead} listenerHead`}
                         onClick={openCloseMenuHandler}>
                        {price === null ? prices[0].title : prices?.find(obj => obj.id === price)?.title}
                    </div>
                    <ul className={`${style.filterPriceList} listener`}>
                        {prices.map(item => {
                            return <li className={`${(price === item.id || (price === null && item.id === 0)) && style.checked}`}
                                       onClick={setPriceParams}
                                       data-price-id={item.id}
                                       key={'key-' + item.id}>
                                        {item.title}
                                    </li>
                        })}
                    </ul>
                </div> :
                    <div>{error}</div>}
            </div>
    );
};

export default FilterTypes;