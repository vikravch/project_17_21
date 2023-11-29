import React from 'react';
import {sort} from "../../../domain/model/filterConst";
import ViewSelector from "../view-selector/ViewSelector";
import style from './sorting.module.css';

interface Props {
    openCloseMenuHandler: (event: any) => void;
    chooseSortOrFiltration: (event: any) => void;

}

const Sorting = ({openCloseMenuHandler, chooseSortOrFiltration}: Props) => {
    return (
        <div className={style.sortBlock}>
            <div className={style.sortSelect}>
                <input type={'hidden'} name={'sort'}/>
                <div className={`${style.sortHead} listenerHead`} onClick={openCloseMenuHandler}>Sort by</div>
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