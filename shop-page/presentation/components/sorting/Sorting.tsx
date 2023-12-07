import React from 'react';
import {sort} from "../filtres/utils/filterConst";
import ViewSelector from "../view-selector/ViewSelector";
import style from './sorting.module.css';
import {Columns} from "../../redux/types";

interface Props {
    columns: Columns;
    openCloseMenuHandler: (event: React.MouseEvent<HTMLElement>) => void;
    chooseSortOrFiltration: (event: React.MouseEvent<HTMLElement>) => void;
}

const Sorting = ({columns, openCloseMenuHandler, chooseSortOrFiltration}: Props) => {
    return (
        <div className={`${style.sortBlock} ${columns.countDesktop === 3 && style.sortBlockDisplay3}`}>
            <div className={style.sortSelect}>
                <input type={'hidden'} name={'sort'} value={'Default'}/>
                <div className={`${style.sortHead} ${columns.countDesktop === 3 && style.sortHeaDisplay3} listenerHead`}
                     onClick={openCloseMenuHandler}>Sort by</div>
                <ul className={`${style.sortList} listener`} id={'sortingList'}>
                    <li>Sort by</li>
                    {sort.map(item => {
                        return <li className={style.sortItem} key={item}
                                   onClick={chooseSortOrFiltration}>{item}</li>
                    })}
                </ul>
            </div>
            <ViewSelector/>
        </div>
    );
};

export default Sorting;