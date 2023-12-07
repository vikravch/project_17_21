import React from 'react';
import filterIcon from "../../../../../../icons/shop_page/filter.svg";
import style from './filterTitle.module.css';
import {Columns} from "../../../redux/types";

const FilterTitle = ({columns}: {columns: Columns}) => {

    const openCloseFilterHandler = () => {
        const types = document.getElementById('types') as HTMLDivElement;
        types.classList.toggle(style.openFilter);
    }

    return (
        <>
            <div className={columns.countDesktop === 3 ? style.showFilterDesktop3 : style.hideFilterDesktop3}>
                <img alt={'filter'} src={filterIcon}/>
                <p>Filter</p>
            </div>
            <div className={style.filterBlock}
                 onClick={openCloseFilterHandler}>
                <img alt={'filter'} src={filterIcon}/>
                <p>Filter</p>
            </div>
        </>
    );
};

export default FilterTitle;