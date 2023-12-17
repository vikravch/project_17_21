import React from 'react';
import ViewSelector from "../view-selector/ViewSelector";
import style from './sorting.module.css';
import {Columns, ShopPageState} from "../../redux/types";
import {openCloseMenuHandler} from "../../pages/utils/const";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../general/redux/types";
import {useLocation} from "react-router-dom";

interface Props {
    columns: Columns;
    sorting: number | null;
}

const Sorting = ({columns, sorting}: Props) => {

    const {sort, error} = useSelector<AppStore, ShopPageState>(state => state.shopPage)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const setSortParams = (event: React.MouseEvent<HTMLElement>) => {
        const eventTarget = event.target as HTMLElement;
        const choice = eventTarget.dataset.sortId as string;

        if (sort && +choice === sort[0].id) {
            searchParams.delete('sorting');
        } else {
            searchParams.set(
                'sorting',
                sort?.find(obj => String(obj.id) === choice)?.title
                    .replaceAll(' ', '').toLowerCase() as string
            );
        }
        //испытал ахуй
        window.location.search = searchParams.toString();

        //2жды
        window.location.search = searchParams.toString();
    }

    return (
        <div className={`${style.sortBlock} ${columns.countDesktop === 3 && style.sortBlockDisplay3}`}>
            { sort && sort.length !== 0 ?
                <div className={style.sortSelect}>
                    <input type={'hidden'} name={'sort'} value={sorting === null ? sort[0].id : sorting}/>
                    <div className={`${style.sortHead}
                        ${columns.countDesktop === 3 && style.sortHeaDisplay3} listenerHead`}
                         onClick={openCloseMenuHandler}>
                        {(sorting === null || sorting === 0) ? 'Sort by' : sort?.find(obj => obj.id === sorting)?.title}
                    </div>
                    <ul className={`${style.sortList} listener`}>
                        {sort.map(item => {
                            return  <li className={`${style.sortItem}
                                       ${(sorting === item.id || (sorting === null && item.id === 0)) && style.chosen}`}
                                       key={'key-' + item.id}
                                        data-sort-id={item.id}
                                       onClick={setSortParams}>
                                       {item.title}
                                    </li>
                        })}
                    </ul>
                </div> :
                <div>{error}</div>}
                <ViewSelector/>
        </div>
    );
};

export default Sorting;