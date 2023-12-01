import React from 'react';
import filterIcon from "../../../../../icons/shop_page/filter.svg";
import style from './filterTitle.module.css';
import {Columns} from "../../redux/types";

interface Props {
    columns: Columns;
}

const FilterTitle = ({columns}: Props) => {

    const openCloseFilterHandler = () => {
        const types = document.getElementById('types');
        // @ts-ignore
        types.classList.toggle(style.openFilter);
    }

    return (
        <>
            <div className={columns.countDesktop === 3 ? style.showFilterDesktop3 : style.hideFilterDesktop3}>
                <img alt={'filter'} src={filterIcon}/>
                <p>Filter</p>
            </div>
            <div className={`${style.filterBlock} ${style.filterBlockOrigin}`}
                 onClick={openCloseFilterHandler}>
                <img alt={'filter'} src={filterIcon}/>
                <p>Filter</p>
            </div>
        </>
    );
};

export default FilterTitle;