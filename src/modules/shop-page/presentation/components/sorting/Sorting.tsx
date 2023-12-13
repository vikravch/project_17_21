import React from 'react';
import {sort} from "../filtres/utils/filterConst";
import ViewSelector from "../view-selector/ViewSelector";
import style from './sorting.module.css';
import {Columns} from "../../redux/types";
import {chooseSortOrFiltration, openCloseMenuHandler} from "../../pages/utils/const";

interface Props {
    columns: Columns;
    sorting: string | null;
}

const Sorting = ({columns, sorting}: Props) => {
    return (
        <div className={`${style.sortBlock} ${columns.countDesktop === 3 && style.sortBlockDisplay3}`}>
                <div className={style.sortSelect}>
                    <input type={'hidden'} name={'sort'} value={sorting === null ? sort[0].id : sorting}/>
                    <div className={`${style.sortHead}
                        ${columns.countDesktop === 3 && style.sortHeaDisplay3} listenerHead`}
                         onClick={openCloseMenuHandler}>
                        {(sorting === null && 'Sort by') || (sorting === "Default" ? "Sort by" : sorting)}
                    </div>
                    <ul className={`${style.sortList} listener`} id={'sortingList'}>
                        {sort.map(item => {
                            return <li className={`${style.sortItem} ${(sorting === item.title) && style.chosen}`}
                                       key={item.id}
                                       onClick={chooseSortOrFiltration}>{item.title}</li>
                        })}
                    </ul>
                </div>
                <ViewSelector/>
        </div>
    );
};

export default Sorting;