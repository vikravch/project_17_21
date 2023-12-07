import React from 'react';
import {sort} from "../filtres/utils/filterConst";
import ViewSelector from "../view-selector/ViewSelector";
import style from './sorting.module.css';
import {Columns} from "../../redux/types";

interface Props {
    columns: Columns;
    openCloseMenuHandler: (event: any) => void;
    chooseSortOrFiltration: (event: any) => void;
}

const Sorting = ({columns, openCloseMenuHandler, chooseSortOrFiltration}: Props) => {
    return (
        <div className={`${style.sortBlock} ${columns.countDesktop === 3 && style.sortBlockDisplay3}`}>
            <div className={style.sortSelect}>
                <input type={'hidden'} name={'sort'}/>
                <div className={`${style.sortHead} ${columns.countDesktop === 3 && style.sortHeaDisplay3} listenerHead`}
                     onClick={openCloseMenuHandler}>Sort by</div>
                <ul className={`${style.sortList} listener`}>
                    <li>Sort by</li>
                    {sort.map(item => {
                        return <li className={style.sortItem} onClick={chooseSortOrFiltration} key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <ViewSelector/>
        </div>
    );
};

export default Sorting;