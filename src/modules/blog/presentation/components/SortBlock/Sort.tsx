import React from 'react';
import {AppDispatch} from "../../../../../general/redux/store";
import {useDispatch} from "react-redux";
import {sortType} from "../../redux/articleSortSlice";
import sortStyle from "./sort.module.css";



const Sort = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div><span>Sort by</span>
            <select className={sortStyle.selectdiv} defaultValue={'none'} onChange={(event)=>dispatch(sortType(event.target.value))}>
                <option value={'none'} disabled></option>
                <option value={'new'}>By date (New firsts)</option>
                <option value={'old'}>By date (Old firsts)</option>
                <option value={'author'}>By author</option>
            </select></div>
    );
};

export default Sort;