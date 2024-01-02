import React, {MutableRefObject} from 'react';
import ViewSelector from "../view-selector/ViewSelector";
import style from './sorting.module.css';
import {Columns, ShopPageState} from "../../redux/types";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../../general/redux/types";
import {useLocation, useNavigate} from "react-router-dom";
import {Listener} from "../../int";

interface Props {
    listenerObject: MutableRefObject<Listener>,
    columns: Columns;
    sorting: number | null,
    openCloseMenuHandler: (event: React.MouseEvent<HTMLElement>) => void
}

const Sorting = ({listenerObject, columns, sorting, openCloseMenuHandler}: Props) => {

    const {sort, error} = useSelector<AppStore, ShopPageState>(state => state.shopPage)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const navigate = useNavigate();

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
        navigate(`?${searchParams.toString()}`);
    }

    return (
        <div className={`${style.sortBlock} ${columns.countDesktop === 3 && style.sortBlockDisplay3}`}>
            { sort && sort.length !== 0 ?
                <div className={style.sortSelect}>
                    <input type={'hidden'} name={'sort'} value={sorting === null ? sort[0].id : sorting}/>
                    <div className={`${style.sortHead}
                        ${columns.countDesktop === 3 && style.sortHeadDisplay3}`}
                         ref={(element) => element !== null ? listenerObject.current.listenerHead[2] = element : listenerObject.current.listenerHead[2] = null}
                         onClick={openCloseMenuHandler}>
                        {(sorting === null || sorting === 0) ? 'Sort by' : sort?.find(obj => obj.id === sorting)?.title}
                    </div>
                    <ul className={`${style.sortList}`}
                        ref={(element) => element !== null ? listenerObject.current.listener[2] = element : listenerObject.current.listener[2] = null}>
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