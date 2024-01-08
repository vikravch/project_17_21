import React from 'react';
import blogStyle from "../../../page/Blog.module.css";
import {selectFilter} from "../../redux/galleriesFilterStyleSlice";
import ViewSelector from "../../../../shop-page/presentation/components/view-selector/ViewSelector";
import {useDispatch, useSelector} from "react-redux";
import Sort from "./Sort";

const View = () => {

    const dispatch = useDispatch();
    const filter = useSelector((store: any) => store.blogFilter.ourStyle);


    return (
        <div className={blogStyle.blocSelectorMain}>
            <div className={blogStyle.filterBlog}>
                <select defaultValue={'all'} onChange={(event)=> event.target.value === 'all'?dispatch(selectFilter("all")): dispatch(selectFilter("featured"))}>
                    <option value={'all'}>All blog</option>
                    <option value={'featured'}>Featured</option>
                </select>
            </div>
            <div className={blogStyle.blocSelectorMainSort}><div className={blogStyle.blocSelector}><p onClick={() => dispatch(selectFilter("all"))} className={filter === "all"? blogStyle.activeBlock:''}>All blog</p><p className={filter === "featured"? blogStyle.activeBlock:''} onClick={() => dispatch(selectFilter("featured"))}>Featured</p></div>
                <div className={blogStyle.blocSelector}><Sort/><div className={blogStyle.viewStyle}><ViewSelector/></div></div></div>
        </div>
    );
};

export default View;